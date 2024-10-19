var btnLogin = document.getElementById("authenticate-button")
var errDiv = document.getElementById("error")

const fetchJWT = async() => {
    let username = document.getElementById("email-field").value
    let password = document.getElementById("password-field").value

    return await fetch("https://zone01normandie.org/api/auth/signin", {
        method: "POST",
        headers: {
            Authorization: "Basic " + btoa(username + ':' + password),
        }
    })
    .then(response=>response.json())
}

const fetchGraphQL = async(JWT, query, vars) => {
    return await fetch("https://zone01normandie.org/api/graphql-engine/v1/graphql", {
        method: "POST",
        headers: {
            Authorization: "Bearer " + JWT
        },
        body: JSON.stringify({
            query: query, 
            variables: vars
        })
    })
    .then(response=> {
        if (response.ok !== true) {
            throw "error query graphQL"
        }
        return response.json()}
    )
    .then(json=>json.data)
}

btnLogin.onclick = async() => {
    try {
        let respJSON = await fetchJWT()
        if (respJSON.error) {
            throw respJSON.error
        }
        const JWT = respJSON
        localStorage.setItem("jwt", JWT)
        getDataGraphQL(JWT)

    } catch (error) {
        errDiv.textContent = error
    }
}

const getDataGraphQL = async(JWT) => {
    try {
        const DATA_USER = await fetchGraphQL(JWT, queriesGraphQL.USER_DATA)
        const USER_ID = DATA_USER.user[0].id

        const SKILLS_USER = await fetchGraphQL(JWT, queriesGraphQL.SKILLS, {userId: USER_ID})
        const LEVEL_XP_USER = await fetchGraphQL(JWT, queriesGraphQL.LEVEL_XP, {userId: USER_ID, rootEventId: ROOT_EVENT_ID})
        const PROJECT_WORKING = await fetchGraphQL(JWT, queriesGraphQL.PROJECT_WORKING, {userId: USER_ID, eventId: EVENT_ID})
        new profilUser(DATA_USER, SKILLS_USER, LEVEL_XP_USER, PROJECT_WORKING)

    } catch(error) {
        errDiv.textContent = error
    }
}

if (localStorage.getItem("jwt")) {
    getDataGraphQL(localStorage.getItem("jwt"))
}