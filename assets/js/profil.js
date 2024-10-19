class profilUser {
    undefinedSkill = 0;
    ignoreGoToProfil = false;

    technicalSkills = ["prog", "back-end", "front-end", "algo", "tcp", "stats", "game", "sys-admin", "ai"];
    technologies = ["go", "js", "html", "sql", "css", "unix", "docker", "c", "php", "laravel", "python", "django", "ruby", "c-pp", "graphql", "ruby", "rails", "electron", "git"];

    technicalSkillsUser = [];
    technologiesUser = [];

    constructor(data, skills, progression, workingProject) {
        this.defineFieldsData(data.user[0])
        this.defineFieldsSkills(skills.user.transactions)
        this.defineFieldsProgression(progression.level[0].amount, progression.xp.aggregate.sum.amount)
        this.defineWorkingProject(workingProject.group[0].path)
        document.head.innerHTML = PROFIL_HEAD_P1 + PROFIL_HEAD_P2
        document.body.innerHTML = PROFIL_BODY
        this.updateSections()
        this.listenDisconnect()
    }


    defineFieldsData(data) {
        this.id = data.id
        this.username = data.login
        this.firstname = data.firstName
        this.lastname = data.lastName
        this.auditRatio = data.auditRatio
        this.xpAuditDone = data.totalUp
        this.xpAuditReceived = data.totalDown
    }   

    defineFieldsSkills(skills) {
        skills.sort((skill1, skill2) =>  skill2.amount - skill1.amount)

        skills.forEach(skill=>{
            skill.type = skill.type.replace("skill_", "")
            this[skill.type] = skill.amount

            if (this.technicalSkills.includes(skill.type) && this.technicalSkillsUser.length < 8) {
                this.technicalSkillsUser.push(skill.type)
            } else if (this.technologies.includes(skill.type) && this.technologiesUser.length < 7) {
                this.technologiesUser.push(skill.type)
            }
        })

        while (this.technicalSkillsUser.length < 8) {
            this.technicalSkillsUser.push("undefinedSkill");
        }

        while (this.technologiesUser.length < 7) {
            this.technologiesUser.push("undefinedSkill");
        }
    }   

    defineFieldsProgression(level, xp) {
        this.level = level
        this.xp = xp
    }

    defineWorkingProject(workingProject) {
        this.workingProject = workingProject.substring(workingProject.lastIndexOf("/") + 1)
    }

    handlerGoToProfil() {
        this.ignoreGoToProfil = true
        document.getElementById("btn-profile").addEventListener("click", () => this.updateSections())
        document.getElementById("link-profile").addEventListener("click", () => this.updateSections())
    }
    

    updateSections() {
        if (!this.ignoreGoToProfil) {
            this.handlerGoToProfil()
        } else {
            let mainSection = document.getElementById("main-section")
            mainSection.innerHTML = PROFIL_MAIN
        }
        this.graphsBtnListener()

        let userLevel = document.getElementById("user-level")
        userLevel.textContent = this.level

        let userXP = document.getElementById("user-xp")
        userXP.innerHTML = `${this.xp} <span class="textMinimal-01">XP</span>`

        let h1 = document.querySelector("h1")
        h1.textContent = `Welcome, ${this.firstname} ${this.lastname}!`

        let userWorkingProject = document.getElementById("user-working-project")
        userWorkingProject.textContent = this.workingProject

        let userGit = document.getElementById("user-git")
        userGit.href += this.username
    }

    graphsBtnListener() {
        let containerSections = document.getElementById("container-sections")
        let btnGotoGraphs = document.getElementById("btn-goto-graphs")

        btnGotoGraphs.onclick = ()=> {
            containerSections.innerHTML = PROFIL_GRAPHS
            let auditRatio = document.getElementById("audit-ratio")
            auditRatio.textContent = this.auditRatio.toFixed(1)

            let xpAuditDone = document.getElementById("xp-audit-done")
            xpAuditDone.textContent = `${this.xpAuditDone} XP`

            let xpAuditRecevied = document.getElementById("xp-audit-received")
            xpAuditRecevied.textContent = `${this.xpAuditReceived} XP`

            let graphTechnicalSkills = document.getElementById("path-technical-skills")
            let graphTechnologies = document.getElementById("path-technologies")
            this.updateRadarCharts(graphTechnicalSkills, graphTechnologies)

            let lineAuditDone = document.getElementById("line-audit-done")
            let lineAuditReceived = document.getElementById("line-audit-received")
            this.updateBarCharts(lineAuditDone, lineAuditReceived)
        }
    }

    updateRadarCharts(pathTechnicals, pathTechnologies) {
        pathTechnicals.setAttribute("d", this.drawRadar(200, 360 / this.technicalSkillsUser.length, this.technicalSkillsUser, "technical-skill-text"))
        pathTechnologies.setAttribute("d", this.drawRadar(200, 360 / this.technologiesUser.length, this.technologiesUser, "technology-text"))
    }

    drawRadar(x, angle, skills, label) {
        let textsLabel = document.getElementsByClassName(label)
        const center = {x: 200, y: 200}

        let newDrawRadar = `M ${x} ${200 - this[skills[0]] * 2}L `
        textsLabel[0].textContent = [skills[0]]

        for (let ind = 1; ind < skills.length; ind++) {
            let newDrawCoords = this.rotatePoint(200, 200 - this[skills[ind]] * 2, center.x, center.y, angle*ind)
            newDrawRadar += `${newDrawCoords.x} ${newDrawCoords.y}L `

            if (skills[ind] === "undefinedSkill") {
                textsLabel[ind].textContent = "soon..."
            } else {
                textsLabel[ind].textContent = [skills[ind]]
            }
        }
        return newDrawRadar
    }

    rotatePoint(x, y, cx, cy, angle) {
        const radians = (Math.PI / 180) * angle;
        const cos = Math.cos(radians);
        const sin = Math.sin(radians);
      
        const newX = cos * (x - cx) - sin * (y - cy) + cx;
        const newY = sin * (x - cx) + cos * (y - cy) + cy;
        return {x: newX, y: newY};
    }

    updateBarCharts(lineUp, lineDown) {
        if (this.xpAuditDone > this.xpAuditReceived) {
            lineUp.setAttribute("x2", "100%")
            lineDown.setAttribute("x2", `${100 / this.auditRatio}%`)
        } else {
            lineDown.setAttribute("x2", "100%")
            lineUp.setAttribute("x2", `${100 * this.auditRatio}%`)
        }
    }

    listenDisconnect() {
        document.getElementById("logOut").onclick = () => {localStorage.clear(); location.reload()}
    }

}