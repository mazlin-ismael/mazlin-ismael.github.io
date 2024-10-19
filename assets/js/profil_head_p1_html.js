const PROFIL_HEAD_P1 = `
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="theme-color" content="#000000">
    <link crossorigin="anonymous" rel="preload" as="script" href="profil_fichiers/index.js">
    <link crossorigin="anonymous" rel="preload" as="font" href="https://zone01normandie.org/assets/fonts/IBMPlexSans-light-latin.woff2"><link crossorigin="anonymous" rel="preload" as="font" href="https://zone01normandie.org/assets/fonts/IBMPlexMono-regular-latin.woff2"><link crossorigin="anonymous" rel="preload" as="font" href="https://zone01normandie.org/assets/fonts/IBMPlexMono-light-latin.woff2"><link rel="preload" as="image" href="assets/img/logo.png">
    
        <link crossorigin="anonymous" href="data:image/x-icon;base64,AAABAAEAEBAAAAEAIACQAAAAFgAAAIlQTkcNChoKAAAADUlIRFIAAAAQAAAAEAgGAAAAH/P/YQAAAFdJREFUeJxjYBgS4MNuhv+UaD5LtAEgheiKkcWwyePVjCR+Fq86PJrroHJ1ONXjcxY+/8P1ETAAxfkkuQKX83G6Gl0Ql/OJjglCUUoQ4PM/0QaQrZmuAAC5uJIBPxyiUwAAAABJRU5ErkJggg==" rel="icon" type="image/x-icon">
        
    <link rel="stylesheet" type="text/css" href="assets/css/global.css">
    <style type="text/css">
      html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block}audio:not([controls]){display:none;height:0}progress{vertical-align:baseline}[hidden],template{display:none}a{background-color:transparent;-webkit-text-decoration-skip:objects}a:active,a:hover{outline-width:0}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:inherit;font-weight:bolder}dfn{font-style:italic}h1{font-size:2em;margin:.67em 0}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}svg:not(:root){overflow:hidden}code,kbd,pre,samp{font:1em monospace,monospace}figure{margin:1em 40px}hr{box-sizing:content-box;height:0;overflow:visible}button,input,select,textarea{font-style:normal;font-variant:normal;font-weight:400;font-family:inherit;margin:0}optgroup{font-weight:700}button,input{overflow:visible}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-input-placeholder{color:inherit;opacity:.54}::-webkit-file-upload-button{-webkit-appearance:button;font-style:normal;font-variant:normal;font-weight:400;font-family:inherit}
      html {
  background-color: #1a191c;
  color: white;
}

#container-audit-ratio {
  margin-top: 50px;
}

#nav-placeholder {
  background: linear-gradient(
    to bottom,
    hsl(0, 0%, 5%) 0%,
    rgba(0, 0, 0, 0.35) 59%,
    transparent 100%
  );
  height: 100px;
  width: 100%;
}
.spinner-container {
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  animation: show-up 1s normal ease-in-out;
  margin-top: 200px;
}
.spinner-wrap {
  flex-direction: column;
  text-align: center;
}
.spinner {
  width: 1px;
  height: 1px;
  background-color: white;
  border-radius: 50%;
  box-shadow: 0 0 50px 50px white;
  animation: load 1s infinite ease-in-out;
  margin: auto;
}
.spinner-text {
  margin-top: 100px;
}
@keyframes show-up {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes load {
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(0.65);
    opacity: 0;
  }
}

    </style>
    <title>Intra</title>
    <script>
      window.NODE_ENV = 'production';
      window.VERSION = {"buildDate":"2024-10-03T11:00:52.000Z","releaseDate":"2024-10-03T10:24:44.000Z","hash":"24dd85476","releaseInfo":"(HEAD, ->, latest,, tag:, v24.20.3-2024.10.03,, origin/production)"};
    </script>
  <style type="text/css" id="01-flags">/* 01 design generated classes */
/* colors */
:root {
--white0: #FFFFFF;
--white5: #F7F7F7;
--white10: #EDEDED;
--white15: #E3E3E3;
--black75: #333036;
--black80: #272529;
--black85: #222024;
--black90: #1A191C;
--grey10: #E8E1F0;
--grey15: #D9D9D9;
--grey25: #BDBDBD;
--grey30: #B2ACB8;
--grey50: #807F7F;
--grey60: #6B6A6A;
--grey65: #595959;
--grey80: #333333;
--grey90: #1A1A1A;
--red25: #EA8A98;
--red35: #E66A7D;
--red45: #E63E61;
--red60: #C90054;
--teal45: #5AC2A9;
--teal60: #00D4A1;
--teal65: #00AB81;
--teal75: #007864;
--purple10: #D7C2FF;
--purple15: #CAADFF;
--purple20: #B795FF;
--purple30: #9969FF;
--purple40: #7538FF;
--purple45: #601AFF;
--blue50: #00CBF5;
--blue60: #00A3C7;
--blue75: #00748A;
--orange25: #FFA482;
--orange40: #E6714C;
--orange55: #BA4020;
--yellow55: #F0BB00;
--yellow65: #BD9300;
--yellow75: #8A6400;
--green55: #00ED4F;
--green65: #00AD39;
--green75: #007A22;
--pink20: #F699FF;
--pink35: #E657FF;
--pink60: #AD00C9;
--white: var(--white0);
--black: var(--grey90);
--redFill: var(--red45);
--redFillAlt: var(--red35);
--tealFill: var(--teal65);
--tealFillAlt: var(--teal45);
--purpleFill: var(--purple30);
--purpleFillAlt: var(--purple20);
--blueFill: var(--blue60);
--orangeFill: var(--orange40);
--yellowFill: var(--yellow65);
--greenFill: var(--green65);
--pinkFill: var(--pink35);
--greyFill: var(--grey50);

/* measures */
  --px1: 5px;
  --px2: 10px;
  --px3: 15px;
  --px4: 20px;
  --px5: 25px;
  --px6: 30px;
  --px7: 35px;
  --px8: 40px;
  --px9: 50px;
  --px10: 60px;
  --px11: 75px;
  --px12: 100px;
  --px13: 125px;
  --px14: 150px;
  --px15: 175px;
  --px16: 200px;
  --px17: 225px;
  --px18: 250px;
  --px19: 275px;
  --px20: 300px;
  --rem1: 0.5rem;
  --rem2: 0.75rem;
  --rem3: 1rem;
  --rem4: 2rem;
  --rem5: 4rem;
  --rem6: 8rem;
  --rem7: 16rem;
}

.dark-theme, .light-theme .alt-theme {
  --neutral: var(--grey10);
  --neutralAlt: var(--white);
  --neutralFill: var(--grey15);
  --neutralFillAlt: var(--white);
  --neutralOnFill: var(--grey90);
  --red: var(--red35);
  --redAlt: var(--red25);
  --teal: var(--teal60);
  --purple: var(--purple15);
  --purpleAlt: var(--purple10);
  --blue: var(--blue50);
  --orange: var(--orange25);
  --yellow: var(--yellow55);
  --green: var(--green55);
  --pink: var(--pink20);
  --grey: var(--grey25);
  --greyHighlighted: var(--grey10);
  --greyHighlightedAlt: var(--white);
  --bgLevel1: var(--black90);
  --bgLevel2: var(--black85);
  --bgLevel3: var(--black80);
  --bgLevel4: var(--black75);
  --textNeutral: var(--white);
  --textMinimal: var(--grey25);
  --detailNeutral: var(--white);
  --detailMinimal: var(--grey25);
}

.light-theme, .dark-theme .alt-theme {
  --neutral: var(--grey90);
  --neutralAlt: var(--grey60);
  --neutralFill: var(--grey80);
  --neutralFillAlt: var(--grey65);
  --neutralOnFill: var(--white);
  --red: var(--red60);
  --redAlt: var(--red35);
  --teal: var(--teal75);
  --purple: var(--purple40);
  --purpleAlt: var(--purple45);
  --blue: var(--blue75);
  --orange: var(--orange55);
  --yellow: var(--yellow75);
  --green: var(--green75);
  --pink: var(--pink60);
  --grey: var(--grey60);
  --greyHighlighted: var(--grey65);
  --greyHighlightedAlt: var(--grey50);
  --bgLevel1: var(--white5);
  --bgLevel2: var(--white10);
  --bgLevel3: var(--white15);
  --textNeutral: var(--grey90);
  --textMinimal: var(--grey80);
}

.neutralOnFill-01 { color: var(--neutralOnFill); }
.black-01 { color: var(--black); }
.white-01 { color: var(--white); }
.greyHighlighted-01 { color: var(--greyHighlighted); }
.neutral-01 { color: var(--neutral); }
.red-01 { color: var(--red); }
.teal-01 { color: var(--teal); }
.purple-01 { color: var(--purple); }
.blue-01 { color: var(--blue); }
.orange-01 { color: var(--orange); }
.yellow-01 { color: var(--yellow); }
.green-01 { color: var(--green); }
.pink-01 { color: var(--pink); }
.grey-01 { color: var(--grey); }
.textNeutral-01 { color: var(--textNeutral); }
.textMinimal-01 { color: var(--textMinimal); }
.detailNeutral-01 { color: var(--detailNeutral); }
.detailMinimal-01 { color: var(--detailMinimal); }
.bgBlack-01 { fill: var--(black); background-color: var(--black); }
.bgWhite-01 { fill: var--(white); background-color: var(--white); }
.bgGreyHighlighted-01 { fill: var--(greyHighlighted); background-color: var(--greyHighlighted); }
.bgNeutral-01 { fill: var--(neutralFill); background-color: var(--neutralFill); }
.bgLevel1-01 { fill: var--(bgLevel1); background-color: var(--bgLevel1); }
.bgLevel2-01 { fill: var--(bgLevel2); background-color: var(--bgLevel2); }
.bgLevel3-01 { fill: var--(bgLevel3); background-color: var(--bgLevel3); }
.bgLevel4-01 { fill: var--(bgLevel4); background-color: var(--bgLevel4); }
.bgRed-01 { fill: var--(redFill); background-color: var(--redFill); }
.bgTeal-01 { fill: var--(tealFill); background-color: var(--tealFill); }
.bgPurple-01 { fill: var--(purpleFill); background-color: var(--purpleFill); }
.bgBlue-01 { fill: var--(blueFill); background-color: var(--blueFill); }
.bgOrange-01 { fill: var--(orangeFill); background-color: var(--orangeFill); }
.bgYellow-01 { fill: var--(yellowFill); background-color: var(--yellowFill); }
.bgGreen-01 { fill: var--(greenFill); background-color: var(--greenFill); }
.bgPink-01 { fill: var--(pinkFill); background-color: var(--pinkFill); }
.bgGrey-01 { fill: var--(greyFill); background-color: var(--greyFill); }
.fixed-01 { position: fixed; }
.relative-01 { position: relative; }
.absolute-01 { position: absolute; }
.l0-01 { left: 0; }
.r0-01 { right: 0; }
.t0-01 { top: 0; }
.b0-01 { bottom: 0; }
.hidden-01 { display: none; }
.block-01 { display: block; }
.inlineBlock-01 { display: inline-block; }
.inlineFlex-01 { display: inline-flex; }
.flex-01 { display: flex; }
.flex0-01 { flex: 0; }
.flex1-01 { flex: 1; }
.flex2-01 { flex: 2; }
.flex3-01 { flex: 3; }
.flex4-01 { flex: 4; }
.flex5-01 { flex: 5; }
.flex6-01 { flex: 6; }
.flex7-01 { flex: 7; }
.flex8-01 { flex: 8; }
.flex9-01 { flex: 9; }
.flex10-01 { flex: 10; }
.justifyStart-01 { display: flex; justify-content: flex-start; }
.justifyCenter-01 { display: flex; justify-content: center; }
.justifyEnd-01 { display: flex; justify-content: flex-end; }
.justifyBetween-01 { display: flex; justify-content: space-between; }
.justifyAround-01 { display: flex; justify-content: space-around; }
.justifyBaseline-01 { display: flex; justify-content: baseline; }
.justifyEvenly-01 { display: flex; justify-content: space-evenly; }
.justifyStretch-01 { display: flex; justify-content: stretch; }
.alignStart-01 { display: flex; align-items: flex-start; }
.alignCenter-01 { display: flex; align-items: center; }
.alignEnd-01 { display: flex; align-items: flex-end; }
.alignBetween-01 { display: flex; align-items: space-between; }
.alignAround-01 { display: flex; align-items: space-around; }
.alignBaseline-01 { display: flex; align-items: baseline; }
.alignStretch-01 { display: flex; align-items: stretch; }
.flexGrow0-01 { flex-grow: 0; }
.flexGrow1-01 { flex-grow: 1; }
.flexGrow2-01 { flex-grow: 2; }
.flexGrow3-01 { flex-grow: 3; }
.flexGrow4-01 { flex-grow: 4; }
.flexGrow5-01 { flex-grow: 5; }
.flexShrink0-01 { flex-shrink: 0; }
.flexShrink1-01 { flex-shrink: 1; }
.flexShrink2-01 { flex-shrink: 2; }
.flexShrink3-01 { flex-shrink: 3; }
.flexShrink4-01 { flex-shrink: 4; }
.flexShrink5-01 { flex-shrink: 5; }
.order1-01 { order: 1; }
.order2-01 { order: 2; }
.order3-01 { order: 3; }
.order4-01 { order: 4; }
.order5-01 { order: 5; }
.order6-01 { order: 6; }
.order7-01 { order: 7; }
.order8-01 { order: 8; }
.order9-01 { order: 9; }
.order10-01 { order: 10; }
.zi0-01 { z-index: 0; }
.zi1-01 { z-index: 1; }
.zi2-01 { z-index: 2; }
.zi3-01 { z-index: 3; }
.zi4-01 { z-index: 4; }
.zi5-01 { z-index: 5; }
.zi6-01 { z-index: 6; }
.zi7-01 { z-index: 7; }
.zi8-01 { z-index: 8; }
.zi9-01 { z-index: 9; }
.zi10-01 { z-index: 10; }
.zi11-01 { z-index: 11; }
.zi12-01 { z-index: 12; }
.zi13-01 { z-index: 13; }
.zi14-01 { z-index: 14; }
.zi15-01 { z-index: 15; }
.zi16-01 { z-index: 16; }
.zi17-01 { z-index: 17; }
.zi18-01 { z-index: 18; }
.zi19-01 { z-index: 19; }
.zi20-01 { z-index: 20; }
.zi21-01 { z-index: 21; }
.zi22-01 { z-index: 22; }
.zi23-01 { z-index: 23; }
.zi24-01 { z-index: 24; }
.zi25-01 { z-index: 25; }
.zi26-01 { z-index: 26; }
.zi27-01 { z-index: 27; }
.zi28-01 { z-index: 28; }
.zi29-01 { z-index: 29; }
.zi30-01 { z-index: 30; }
.zi31-01 { z-index: 31; }
.zi32-01 { z-index: 32; }
.zi33-01 { z-index: 33; }
.zi34-01 { z-index: 34; }
.zi35-01 { z-index: 35; }
.zi36-01 { z-index: 36; }
.zi37-01 { z-index: 37; }
.zi38-01 { z-index: 38; }
.zi39-01 { z-index: 39; }
.zi40-01 { z-index: 40; }
.zi41-01 { z-index: 41; }
.zi42-01 { z-index: 42; }
.zi43-01 { z-index: 43; }
.zi44-01 { z-index: 44; }
.zi45-01 { z-index: 45; }
.zi46-01 { z-index: 46; }
.zi47-01 { z-index: 47; }
.zi48-01 { z-index: 48; }
.zi49-01 { z-index: 49; }
.zi50-01 { z-index: 50; }
.fs1-01 { font-size: 4rem; }
.fs2-01 { font-size: 2.5rem; }
.fs3-01 { font-size: 1.5rem; }
.fs4-01 { font-size: 1.25rem; }
.fs5-01 { font-size: 1rem; }
.fs6-01 { font-size: 0.9rem; }
.fs7-01 { font-size: 0.75rem; }
.textLeft-01 { text-align: left; }
.textCenter-01 { text-align: center; }
.textRight-01 { text-align: right; }
.textEnd-01 { text-align: end; }
.lh1-01 { line-height: 1; }
.lh2-01 { line-height: 1.25; }
.lh3-01 { line-height: 1.5; }
.lh4-01 { line-height: 1.75; }
.lh5-01 { line-height: 2; }
.lh6-01 { line-height: 2.25; }
.lh1px-01 { line-height: var(--px1); }
.lh2px-01 { line-height: var(--px2); }
.lh3px-01 { line-height: var(--px3); }
.lh4px-01 { line-height: var(--px4); }
.lh5px-01 { line-height: var(--px5); }
.lh6px-01 { line-height: var(--px6); }
.lh7px-01 { line-height: var(--px7); }
.lh8px-01 { line-height: var(--px8); }
.lh9px-01 { line-height: var(--px9); }
.lh10px-01 { line-height: var(--px10); }
.lh11px-01 { line-height: var(--px11); }
.lh12px-01 { line-height: var(--px12); }
.lh13px-01 { line-height: var(--px13); }
.lh14px-01 { line-height: var(--px14); }
.lh15px-01 { line-height: var(--px15); }
.lh16px-01 { line-height: var(--px16); }
.lh17px-01 { line-height: var(--px17); }
.lh18px-01 { line-height: var(--px18); }
.lh19px-01 { line-height: var(--px19); }
.lh20px-01 { line-height: var(--px20); }
.ls1-01 { letter-spacing: 0.03em; }
.ls2-01 { letter-spacing: 0.02em; }
.ls3-01 { letter-spacing: 0.015em; }
.uppercase-01 { text-transform: uppercase; }
.lowercase-01 { text-transform: lowercase; }
.capitalize-01 { text-transform: capitalize; }
.gridRow0-01 { grid-row: 0; }
.gridRow1-01 { grid-row: 1; }
.gridRow2-01 { grid-row: 2; }
.gridRow3-01 { grid-row: 3; }
.gridRow4-01 { grid-row: 4; }
.gridRow5-01 { grid-row: 5; }
.gridRow6-01 { grid-row: 6; }
.gridRow7-01 { grid-row: 7; }
.gridRow8-01 { grid-row: 8; }
.gridRow9-01 { grid-row: 9; }
.gridRow10-01 { grid-row: 10; }
.gridRow11-01 { grid-row: 11; }
.gridRow12-01 { grid-row: 12; }
.gridRow0to0-01 { grid-row: 0 / 0; }
.gridRow0to1-01 { grid-row: 0 / 1; }
.gridRow0to2-01 { grid-row: 0 / 2; }
.gridRow0to3-01 { grid-row: 0 / 3; }
.gridRow0to4-01 { grid-row: 0 / 4; }
.gridRow0to5-01 { grid-row: 0 / 5; }
.gridRow0to6-01 { grid-row: 0 / 6; }
.gridRow0to7-01 { grid-row: 0 / 7; }
.gridRow0to8-01 { grid-row: 0 / 8; }
.gridRow0to9-01 { grid-row: 0 / 9; }
.gridRow0to10-01 { grid-row: 0 / 10; }
.gridRow0to11-01 { grid-row: 0 / 11; }
.gridRow0to12-01 { grid-row: 0 / 12; }
.gridRow1to0-01 { grid-row: 1 / 0; }
.gridRow1to1-01 { grid-row: 1 / 1; }
.gridRow1to2-01 { grid-row: 1 / 2; }
.gridRow1to3-01 { grid-row: 1 / 3; }
.gridRow1to4-01 { grid-row: 1 / 4; }
.gridRow1to5-01 { grid-row: 1 / 5; }
.gridRow1to6-01 { grid-row: 1 / 6; }
.gridRow1to7-01 { grid-row: 1 / 7; }
.gridRow1to8-01 { grid-row: 1 / 8; }
.gridRow1to9-01 { grid-row: 1 / 9; }
.gridRow1to10-01 { grid-row: 1 / 10; }
.gridRow1to11-01 { grid-row: 1 / 11; }
.gridRow1to12-01 { grid-row: 1 / 12; }
.gridRow2to0-01 { grid-row: 2 / 0; }
.gridRow2to1-01 { grid-row: 2 / 1; }
.gridRow2to2-01 { grid-row: 2 / 2; }
.gridRow2to3-01 { grid-row: 2 / 3; }
.gridRow2to4-01 { grid-row: 2 / 4; }
.gridRow2to5-01 { grid-row: 2 / 5; }
.gridRow2to6-01 { grid-row: 2 / 6; }
.gridRow2to7-01 { grid-row: 2 / 7; }
.gridRow2to8-01 { grid-row: 2 / 8; }
.gridRow2to9-01 { grid-row: 2 / 9; }
.gridRow2to10-01 { grid-row: 2 / 10; }
.gridRow2to11-01 { grid-row: 2 / 11; }
.gridRow2to12-01 { grid-row: 2 / 12; }
.gridRow3to0-01 { grid-row: 3 / 0; }
.gridRow3to1-01 { grid-row: 3 / 1; }
.gridRow3to2-01 { grid-row: 3 / 2; }
.gridRow3to3-01 { grid-row: 3 / 3; }
.gridRow3to4-01 { grid-row: 3 / 4; }
.gridRow3to5-01 { grid-row: 3 / 5; }
.gridRow3to6-01 { grid-row: 3 / 6; }
.gridRow3to7-01 { grid-row: 3 / 7; }
.gridRow3to8-01 { grid-row: 3 / 8; }
.gridRow3to9-01 { grid-row: 3 / 9; }
.gridRow3to10-01 { grid-row: 3 / 10; }
.gridRow3to11-01 { grid-row: 3 / 11; }
.gridRow3to12-01 { grid-row: 3 / 12; }
.gridRow4to0-01 { grid-row: 4 / 0; }
.gridRow4to1-01 { grid-row: 4 / 1; }
.gridRow4to2-01 { grid-row: 4 / 2; }
.gridRow4to3-01 { grid-row: 4 / 3; }
.gridRow4to4-01 { grid-row: 4 / 4; }
.gridRow4to5-01 { grid-row: 4 / 5; }
.gridRow4to6-01 { grid-row: 4 / 6; }
.gridRow4to7-01 { grid-row: 4 / 7; }
.gridRow4to8-01 { grid-row: 4 / 8; }
.gridRow4to9-01 { grid-row: 4 / 9; }
.gridRow4to10-01 { grid-row: 4 / 10; }
.gridRow4to11-01 { grid-row: 4 / 11; }
.gridRow4to12-01 { grid-row: 4 / 12; }
.gridRow5to0-01 { grid-row: 5 / 0; }
.gridRow5to1-01 { grid-row: 5 / 1; }
.gridRow5to2-01 { grid-row: 5 / 2; }
.gridRow5to3-01 { grid-row: 5 / 3; }
.gridRow5to4-01 { grid-row: 5 / 4; }
.gridRow5to5-01 { grid-row: 5 / 5; }
.gridRow5to6-01 { grid-row: 5 / 6; }
.gridRow5to7-01 { grid-row: 5 / 7; }
.gridRow5to8-01 { grid-row: 5 / 8; }
.gridRow5to9-01 { grid-row: 5 / 9; }
.gridRow5to10-01 { grid-row: 5 / 10; }
.gridRow5to11-01 { grid-row: 5 / 11; }
.gridRow5to12-01 { grid-row: 5 / 12; }
.gridRow6to0-01 { grid-row: 6 / 0; }
.gridRow6to1-01 { grid-row: 6 / 1; }
.gridRow6to2-01 { grid-row: 6 / 2; }
.gridRow6to3-01 { grid-row: 6 / 3; }
.gridRow6to4-01 { grid-row: 6 / 4; }
.gridRow6to5-01 { grid-row: 6 / 5; }
.gridRow6to6-01 { grid-row: 6 / 6; }
.gridRow6to7-01 { grid-row: 6 / 7; }
.gridRow6to8-01 { grid-row: 6 / 8; }
.gridRow6to9-01 { grid-row: 6 / 9; }
.gridRow6to10-01 { grid-row: 6 / 10; }
.gridRow6to11-01 { grid-row: 6 / 11; }
.gridRow6to12-01 { grid-row: 6 / 12; }
.gridRow7to0-01 { grid-row: 7 / 0; }
.gridRow7to1-01 { grid-row: 7 / 1; }
.gridRow7to2-01 { grid-row: 7 / 2; }
.gridRow7to3-01 { grid-row: 7 / 3; }
.gridRow7to4-01 { grid-row: 7 / 4; }
.gridRow7to5-01 { grid-row: 7 / 5; }
.gridRow7to6-01 { grid-row: 7 / 6; }
.gridRow7to7-01 { grid-row: 7 / 7; }
.gridRow7to8-01 { grid-row: 7 / 8; }
.gridRow7to9-01 { grid-row: 7 / 9; }
.gridRow7to10-01 { grid-row: 7 / 10; }
.gridRow7to11-01 { grid-row: 7 / 11; }
.gridRow7to12-01 { grid-row: 7 / 12; }
.gridRow8to0-01 { grid-row: 8 / 0; }
.gridRow8to1-01 { grid-row: 8 / 1; }
.gridRow8to2-01 { grid-row: 8 / 2; }
.gridRow8to3-01 { grid-row: 8 / 3; }
.gridRow8to4-01 { grid-row: 8 / 4; }
.gridRow8to5-01 { grid-row: 8 / 5; }
.gridRow8to6-01 { grid-row: 8 / 6; }
.gridRow8to7-01 { grid-row: 8 / 7; }
.gridRow8to8-01 { grid-row: 8 / 8; }
.gridRow8to9-01 { grid-row: 8 / 9; }
.gridRow8to10-01 { grid-row: 8 / 10; }
.gridRow8to11-01 { grid-row: 8 / 11; }
.gridRow8to12-01 { grid-row: 8 / 12; }
.gridRow9to0-01 { grid-row: 9 / 0; }
.gridRow9to1-01 { grid-row: 9 / 1; }
.gridRow9to2-01 { grid-row: 9 / 2; }
.gridRow9to3-01 { grid-row: 9 / 3; }
.gridRow9to4-01 { grid-row: 9 / 4; }
.gridRow9to5-01 { grid-row: 9 / 5; }
.gridRow9to6-01 { grid-row: 9 / 6; }
.gridRow9to7-01 { grid-row: 9 / 7; }
.gridRow9to8-01 { grid-row: 9 / 8; }
.gridRow9to9-01 { grid-row: 9 / 9; }
.gridRow9to10-01 { grid-row: 9 / 10; }
.gridRow9to11-01 { grid-row: 9 / 11; }
.gridRow9to12-01 { grid-row: 9 / 12; }
.gridRow10to0-01 { grid-row: 10 / 0; }
.gridRow10to1-01 { grid-row: 10 / 1; }
.gridRow10to2-01 { grid-row: 10 / 2; }
.gridRow10to3-01 { grid-row: 10 / 3; }
.gridRow10to4-01 { grid-row: 10 / 4; }
.gridRow10to5-01 { grid-row: 10 / 5; }
.gridRow10to6-01 { grid-row: 10 / 6; }
.gridRow10to7-01 { grid-row: 10 / 7; }
.gridRow10to8-01 { grid-row: 10 / 8; }
.gridRow10to9-01 { grid-row: 10 / 9; }
.gridRow10to10-01 { grid-row: 10 / 10; }
.gridRow10to11-01 { grid-row: 10 / 11; }
.gridRow10to12-01 { grid-row: 10 / 12; }
.gridRow11to0-01 { grid-row: 11 / 0; }
.gridRow11to1-01 { grid-row: 11 / 1; }
.gridRow11to2-01 { grid-row: 11 / 2; }
.gridRow11to3-01 { grid-row: 11 / 3; }
.gridRow11to4-01 { grid-row: 11 / 4; }
.gridRow11to5-01 { grid-row: 11 / 5; }
.gridRow11to6-01 { grid-row: 11 / 6; }
.gridRow11to7-01 { grid-row: 11 / 7; }
.gridRow11to8-01 { grid-row: 11 / 8; }
.gridRow11to9-01 { grid-row: 11 / 9; }
.gridRow11to10-01 { grid-row: 11 / 10; }
.gridRow11to11-01 { grid-row: 11 / 11; }
.gridRow11to12-01 { grid-row: 11 / 12; }
.gridRow12to0-01 { grid-row: 12 / 0; }
.gridRow12to1-01 { grid-row: 12 / 1; }
.gridRow12to2-01 { grid-row: 12 / 2; }
.gridRow12to3-01 { grid-row: 12 / 3; }
.gridRow12to4-01 { grid-row: 12 / 4; }
.gridRow12to5-01 { grid-row: 12 / 5; }
.gridRow12to6-01 { grid-row: 12 / 6; }
.gridRow12to7-01 { grid-row: 12 / 7; }
.gridRow12to8-01 { grid-row: 12 / 8; }
.gridRow12to9-01 { grid-row: 12 / 9; }
.gridRow12to10-01 { grid-row: 12 / 10; }
.gridRow12to11-01 { grid-row: 12 / 11; }
.gridRow12to12-01 { grid-row: 12 / 12; }
.gridRowSpan0-01 { grid-row: auto / span 0; }
.gridRowSpan1-01 { grid-row: auto / span 1; }
.gridRowSpan2-01 { grid-row: auto / span 2; }
.gridRowSpan3-01 { grid-row: auto / span 3; }
.gridRowSpan4-01 { grid-row: auto / span 4; }
.gridRowSpan5-01 { grid-row: auto / span 5; }
.gridRowSpan6-01 { grid-row: auto / span 6; }
.gridRowSpan7-01 { grid-row: auto / span 7; }
.gridRowSpan8-01 { grid-row: auto / span 8; }
.gridRowSpan9-01 { grid-row: auto / span 9; }
.gridRowSpan10-01 { grid-row: auto / span 10; }
.gridColumn0-01 { grid-column: 0; }
.gridColumn1-01 { grid-column: 1; }
.gridColumn2-01 { grid-column: 2; }
.gridColumn3-01 { grid-column: 3; }
.gridColumn4-01 { grid-column: 4; }
.gridColumn5-01 { grid-column: 5; }
.gridColumn6-01 { grid-column: 6; }
.gridColumn7-01 { grid-column: 7; }
.gridColumn8-01 { grid-column: 8; }
.gridColumn9-01 { grid-column: 9; }
.gridColumn10-01 { grid-column: 10; }
.gridColumn11-01 { grid-column: 11; }
.gridColumn12-01 { grid-column: 12; }
.gridColumn0to0-01 { grid-column: 0 / 0; }
.gridColumn0to1-01 { grid-column: 0 / 1; }
.gridColumn0to2-01 { grid-column: 0 / 2; }
.gridColumn0to3-01 { grid-column: 0 / 3; }
.gridColumn0to4-01 { grid-column: 0 / 4; }
.gridColumn0to5-01 { grid-column: 0 / 5; }
.gridColumn0to6-01 { grid-column: 0 / 6; }
.gridColumn0to7-01 { grid-column: 0 / 7; }
.gridColumn0to8-01 { grid-column: 0 / 8; }
.gridColumn0to9-01 { grid-column: 0 / 9; }
.gridColumn0to10-01 { grid-column: 0 / 10; }
.gridColumn0to11-01 { grid-column: 0 / 11; }
.gridColumn0to12-01 { grid-column: 0 / 12; }
.gridColumn1to0-01 { grid-column: 1 / 0; }
.gridColumn1to1-01 { grid-column: 1 / 1; }
.gridColumn1to2-01 { grid-column: 1 / 2; }
.gridColumn1to3-01 { grid-column: 1 / 3; }
.gridColumn1to4-01 { grid-column: 1 / 4; }
.gridColumn1to5-01 { grid-column: 1 / 5; }
.gridColumn1to6-01 { grid-column: 1 / 6; }
.gridColumn1to7-01 { grid-column: 1 / 7; }
.gridColumn1to8-01 { grid-column: 1 / 8; }
.gridColumn1to9-01 { grid-column: 1 / 9; }
.gridColumn1to10-01 { grid-column: 1 / 10; }
.gridColumn1to11-01 { grid-column: 1 / 11; }
.gridColumn1to12-01 { grid-column: 1 / 12; }
.gridColumn2to0-01 { grid-column: 2 / 0; }
.gridColumn2to1-01 { grid-column: 2 / 1; }
.gridColumn2to2-01 { grid-column: 2 / 2; }
.gridColumn2to3-01 { grid-column: 2 / 3; }
.gridColumn2to4-01 { grid-column: 2 / 4; }
.gridColumn2to5-01 { grid-column: 2 / 5; }
.gridColumn2to6-01 { grid-column: 2 / 6; }
.gridColumn2to7-01 { grid-column: 2 / 7; }
.gridColumn2to8-01 { grid-column: 2 / 8; }
.gridColumn2to9-01 { grid-column: 2 / 9; }
.gridColumn2to10-01 { grid-column: 2 / 10; }
.gridColumn2to11-01 { grid-column: 2 / 11; }
.gridColumn2to12-01 { grid-column: 2 / 12; }
.gridColumn3to0-01 { grid-column: 3 / 0; }
.gridColumn3to1-01 { grid-column: 3 / 1; }
.gridColumn3to2-01 { grid-column: 3 / 2; }
.gridColumn3to3-01 { grid-column: 3 / 3; }
.gridColumn3to4-01 { grid-column: 3 / 4; }
.gridColumn3to5-01 { grid-column: 3 / 5; }
.gridColumn3to6-01 { grid-column: 3 / 6; }
.gridColumn3to7-01 { grid-column: 3 / 7; }
.gridColumn3to8-01 { grid-column: 3 / 8; }
.gridColumn3to9-01 { grid-column: 3 / 9; }
.gridColumn3to10-01 { grid-column: 3 / 10; }
.gridColumn3to11-01 { grid-column: 3 / 11; }
.gridColumn3to12-01 { grid-column: 3 / 12; }
.gridColumn4to0-01 { grid-column: 4 / 0; }
.gridColumn4to1-01 { grid-column: 4 / 1; }
.gridColumn4to2-01 { grid-column: 4 / 2; }
.gridColumn4to3-01 { grid-column: 4 / 3; }
.gridColumn4to4-01 { grid-column: 4 / 4; }
.gridColumn4to5-01 { grid-column: 4 / 5; }
.gridColumn4to6-01 { grid-column: 4 / 6; }
.gridColumn4to7-01 { grid-column: 4 / 7; }
.gridColumn4to8-01 { grid-column: 4 / 8; }
.gridColumn4to9-01 { grid-column: 4 / 9; }
.gridColumn4to10-01 { grid-column: 4 / 10; }
.gridColumn4to11-01 { grid-column: 4 / 11; }
.gridColumn4to12-01 { grid-column: 4 / 12; }
.gridColumn5to0-01 { grid-column: 5 / 0; }
.gridColumn5to1-01 { grid-column: 5 / 1; }
.gridColumn5to2-01 { grid-column: 5 / 2; }
.gridColumn5to3-01 { grid-column: 5 / 3; }
.gridColumn5to4-01 { grid-column: 5 / 4; }
.gridColumn5to5-01 { grid-column: 5 / 5; }
.gridColumn5to6-01 { grid-column: 5 / 6; }
.gridColumn5to7-01 { grid-column: 5 / 7; }
.gridColumn5to8-01 { grid-column: 5 / 8; }
.gridColumn5to9-01 { grid-column: 5 / 9; }
.gridColumn5to10-01 { grid-column: 5 / 10; }
.gridColumn5to11-01 { grid-column: 5 / 11; }
.gridColumn5to12-01 { grid-column: 5 / 12; }
.gridColumn6to0-01 { grid-column: 6 / 0; }
.gridColumn6to1-01 { grid-column: 6 / 1; }
.gridColumn6to2-01 { grid-column: 6 / 2; }
.gridColumn6to3-01 { grid-column: 6 / 3; }
.gridColumn6to4-01 { grid-column: 6 / 4; }
.gridColumn6to5-01 { grid-column: 6 / 5; }
.gridColumn6to6-01 { grid-column: 6 / 6; }
.gridColumn6to7-01 { grid-column: 6 / 7; }
.gridColumn6to8-01 { grid-column: 6 / 8; }
.gridColumn6to9-01 { grid-column: 6 / 9; }
.gridColumn6to10-01 { grid-column: 6 / 10; }
.gridColumn6to11-01 { grid-column: 6 / 11; }
.gridColumn6to12-01 { grid-column: 6 / 12; }
.gridColumn7to0-01 { grid-column: 7 / 0; }
.gridColumn7to1-01 { grid-column: 7 / 1; }
.gridColumn7to2-01 { grid-column: 7 / 2; }
.gridColumn7to3-01 { grid-column: 7 / 3; }
.gridColumn7to4-01 { grid-column: 7 / 4; }
.gridColumn7to5-01 { grid-column: 7 / 5; }
.gridColumn7to6-01 { grid-column: 7 / 6; }
.gridColumn7to7-01 { grid-column: 7 / 7; }
.gridColumn7to8-01 { grid-column: 7 / 8; }
.gridColumn7to9-01 { grid-column: 7 / 9; }
.gridColumn7to10-01 { grid-column: 7 / 10; }
.gridColumn7to11-01 { grid-column: 7 / 11; }
.gridColumn7to12-01 { grid-column: 7 / 12; }
.gridColumn8to0-01 { grid-column: 8 / 0; }
.gridColumn8to1-01 { grid-column: 8 / 1; }
.gridColumn8to2-01 { grid-column: 8 / 2; }
.gridColumn8to3-01 { grid-column: 8 / 3; }
.gridColumn8to4-01 { grid-column: 8 / 4; }
.gridColumn8to5-01 { grid-column: 8 / 5; }
.gridColumn8to6-01 { grid-column: 8 / 6; }
.gridColumn8to7-01 { grid-column: 8 / 7; }
.gridColumn8to8-01 { grid-column: 8 / 8; }
.gridColumn8to9-01 { grid-column: 8 / 9; }
.gridColumn8to10-01 { grid-column: 8 / 10; }
.gridColumn8to11-01 { grid-column: 8 / 11; }
.gridColumn8to12-01 { grid-column: 8 / 12; }
.gridColumn9to0-01 { grid-column: 9 / 0; }
.gridColumn9to1-01 { grid-column: 9 / 1; }
.gridColumn9to2-01 { grid-column: 9 / 2; }
.gridColumn9to3-01 { grid-column: 9 / 3; }
.gridColumn9to4-01 { grid-column: 9 / 4; }
.gridColumn9to5-01 { grid-column: 9 / 5; }
.gridColumn9to6-01 { grid-column: 9 / 6; }
.gridColumn9to7-01 { grid-column: 9 / 7; }
.gridColumn9to8-01 { grid-column: 9 / 8; }
.gridColumn9to9-01 { grid-column: 9 / 9; }
.gridColumn9to10-01 { grid-column: 9 / 10; }
.gridColumn9to11-01 { grid-column: 9 / 11; }
.gridColumn9to12-01 { grid-column: 9 / 12; }
.gridColumn10to0-01 { grid-column: 10 / 0; }
.gridColumn10to1-01 { grid-column: 10 / 1; }
.gridColumn10to2-01 { grid-column: 10 / 2; }
.gridColumn10to3-01 { grid-column: 10 / 3; }
.gridColumn10to4-01 { grid-column: 10 / 4; }
.gridColumn10to5-01 { grid-column: 10 / 5; }
.gridColumn10to6-01 { grid-column: 10 / 6; }
.gridColumn10to7-01 { grid-column: 10 / 7; }
.gridColumn10to8-01 { grid-column: 10 / 8; }
.gridColumn10to9-01 { grid-column: 10 / 9; }
.gridColumn10to10-01 { grid-column: 10 / 10; }
.gridColumn10to11-01 { grid-column: 10 / 11; }
.gridColumn10to12-01 { grid-column: 10 / 12; }
.gridColumn11to0-01 { grid-column: 11 / 0; }
.gridColumn11to1-01 { grid-column: 11 / 1; }
.gridColumn11to2-01 { grid-column: 11 / 2; }
.gridColumn11to3-01 { grid-column: 11 / 3; }
.gridColumn11to4-01 { grid-column: 11 / 4; }
.gridColumn11to5-01 { grid-column: 11 / 5; }
.gridColumn11to6-01 { grid-column: 11 / 6; }
.gridColumn11to7-01 { grid-column: 11 / 7; }
.gridColumn11to8-01 { grid-column: 11 / 8; }
.gridColumn11to9-01 { grid-column: 11 / 9; }
.gridColumn11to10-01 { grid-column: 11 / 10; }
.gridColumn11to11-01 { grid-column: 11 / 11; }
.gridColumn11to12-01 { grid-column: 11 / 12; }
.gridColumn12to0-01 { grid-column: 12 / 0; }
.gridColumn12to1-01 { grid-column: 12 / 1; }
.gridColumn12to2-01 { grid-column: 12 / 2; }
.gridColumn12to3-01 { grid-column: 12 / 3; }
.gridColumn12to4-01 { grid-column: 12 / 4; }
.gridColumn12to5-01 { grid-column: 12 / 5; }
.gridColumn12to6-01 { grid-column: 12 / 6; }
.gridColumn12to7-01 { grid-column: 12 / 7; }
.gridColumn12to8-01 { grid-column: 12 / 8; }
.gridColumn12to9-01 { grid-column: 12 / 9; }
.gridColumn12to10-01 { grid-column: 12 / 10; }
.gridColumn12to11-01 { grid-column: 12 / 11; }
.gridColumn12to12-01 { grid-column: 12 / 12; }
.gridColumnSpan0-01 { grid-column: auto / span 0; }
.gridColumnSpan1-01 { grid-column: auto / span 1; }
.gridColumnSpan2-01 { grid-column: auto / span 2; }
.gridColumnSpan3-01 { grid-column: auto / span 3; }
.gridColumnSpan4-01 { grid-column: auto / span 4; }
.gridColumnSpan5-01 { grid-column: auto / span 5; }
.gridColumnSpan6-01 { grid-column: auto / span 6; }
.gridColumnSpan7-01 { grid-column: auto / span 7; }
.gridColumnSpan8-01 { grid-column: auto / span 8; }
.gridColumnSpan9-01 { grid-column: auto / span 9; }
.gridColumnSpan10-01 { grid-column: auto / span 10; }
.w1-01 { width: var(--rem1); }
.w2-01 { width: var(--rem2); }
.w3-01 { width: var(--rem3); }
.w4-01 { width: var(--rem4); }
.w5-01 { width: var(--rem5); }
.w6-01 { width: var(--rem6); }
.w7-01 { width: var(--rem7); }
.w1px-01 { width: var(--px1); }
.w2px-01 { width: var(--px2); }
.w3px-01 { width: var(--px3); }
.w4px-01 { width: var(--px4); }
.w5px-01 { width: var(--px5); }
.w6px-01 { width: var(--px6); }
.w7px-01 { width: var(--px7); }
.w8px-01 { width: var(--px8); }
.w9px-01 { width: var(--px9); }
.w10px-01 { width: var(--px10); }
.w11px-01 { width: var(--px11); }
.w12px-01 { width: var(--px12); }
.w13px-01 { width: var(--px13); }
.w14px-01 { width: var(--px14); }
.w15px-01 { width: var(--px15); }
.w16px-01 { width: var(--px16); }
.w17px-01 { width: var(--px17); }
.w18px-01 { width: var(--px18); }
.w19px-01 { width: var(--px19); }
.w20px-01 { width: var(--px20); }
.w1p-01 { width: 1%; }
.w2p-01 { width: 2%; }
.w3p-01 { width: 3%; }
.w4p-01 { width: 4%; }
.w5p-01 { width: 5%; }
.w6p-01 { width: 6%; }
.w7p-01 { width: 7%; }
.w8p-01 { width: 8%; }
.w9p-01 { width: 9%; }
.w10p-01 { width: 10%; }
.w11p-01 { width: 11%; }
.w12p-01 { width: 12%; }
.w13p-01 { width: 13%; }
.w14p-01 { width: 14%; }
.w15p-01 { width: 15%; }
.w16p-01 { width: 16%; }
.w17p-01 { width: 17%; }
.w18p-01 { width: 18%; }
.w19p-01 { width: 19%; }
.w20p-01 { width: 20%; }
.w21p-01 { width: 21%; }
.w22p-01 { width: 22%; }
.w23p-01 { width: 23%; }
.w24p-01 { width: 24%; }
.w25p-01 { width: 25%; }
.w26p-01 { width: 26%; }
.w27p-01 { width: 27%; }
.w28p-01 { width: 28%; }
.w29p-01 { width: 29%; }
.w30p-01 { width: 30%; }
.w31p-01 { width: 31%; }
.w32p-01 { width: 32%; }
.w33p-01 { width: 33%; }
.w34p-01 { width: 34%; }
.w35p-01 { width: 35%; }
.w36p-01 { width: 36%; }
.w37p-01 { width: 37%; }
.w38p-01 { width: 38%; }
.w39p-01 { width: 39%; }
.w40p-01 { width: 40%; }
.w41p-01 { width: 41%; }
.w42p-01 { width: 42%; }
.w43p-01 { width: 43%; }
.w44p-01 { width: 44%; }
.w45p-01 { width: 45%; }
.w46p-01 { width: 46%; }
.w47p-01 { width: 47%; }
.w48p-01 { width: 48%; }
.w49p-01 { width: 49%; }
.w50p-01 { width: 50%; }
.w51p-01 { width: 51%; }
.w52p-01 { width: 52%; }
.w53p-01 { width: 53%; }
.w54p-01 { width: 54%; }
.w55p-01 { width: 55%; }
.w56p-01 { width: 56%; }
.w57p-01 { width: 57%; }
.w58p-01 { width: 58%; }
.w59p-01 { width: 59%; }
.w60p-01 { width: 60%; }
.w61p-01 { width: 61%; }
.w62p-01 { width: 62%; }
.w63p-01 { width: 63%; }
.w64p-01 { width: 64%; }
.w65p-01 { width: 65%; }
.w66p-01 { width: 66%; }
.w67p-01 { width: 67%; }
.w68p-01 { width: 68%; }
.w69p-01 { width: 69%; }
.w70p-01 { width: 70%; }
.w71p-01 { width: 71%; }
.w72p-01 { width: 72%; }
.w73p-01 { width: 73%; }
.w74p-01 { width: 74%; }
.w75p-01 { width: 75%; }
.w76p-01 { width: 76%; }
.w77p-01 { width: 77%; }
.w78p-01 { width: 78%; }
.w79p-01 { width: 79%; }
.w80p-01 { width: 80%; }
.w81p-01 { width: 81%; }
.w82p-01 { width: 82%; }
.w83p-01 { width: 83%; }
.w84p-01 { width: 84%; }
.w85p-01 { width: 85%; }
.w86p-01 { width: 86%; }
.w87p-01 { width: 87%; }
.w88p-01 { width: 88%; }
.w89p-01 { width: 89%; }
.w90p-01 { width: 90%; }
.w91p-01 { width: 91%; }
.w92p-01 { width: 92%; }
.w93p-01 { width: 93%; }
.w94p-01 { width: 94%; }
.w95p-01 { width: 95%; }
.w96p-01 { width: 96%; }
.w97p-01 { width: 97%; }
.w98p-01 { width: 98%; }
.w99p-01 { width: 99%; }
.w100p-01 { width: 100%; }
.minW1-01 { min-width: var(--rem1); }
.minW2-01 { min-width: var(--rem2); }
.minW3-01 { min-width: var(--rem3); }
.minW4-01 { min-width: var(--rem4); }
.minW5-01 { min-width: var(--rem5); }
.minW6-01 { min-width: var(--rem6); }
.minW7-01 { min-width: var(--rem7); }
.minW1px-01 { min-width: var(--px1); }
.minW2px-01 { min-width: var(--px2); }
.minW3px-01 { min-width: var(--px3); }
.minW4px-01 { min-width: var(--px4); }
.minW5px-01 { min-width: var(--px5); }
.minW6px-01 { min-width: var(--px6); }
.minW7px-01 { min-width: var(--px7); }
.minW8px-01 { min-width: var(--px8); }
.minW9px-01 { min-width: var(--px9); }
.minW10px-01 { min-width: var(--px10); }
.minW11px-01 { min-width: var(--px11); }
.minW12px-01 { min-width: var(--px12); }
.minW13px-01 { min-width: var(--px13); }
.minW14px-01 { min-width: var(--px14); }
.minW15px-01 { min-width: var(--px15); }
.minW16px-01 { min-width: var(--px16); }
.minW17px-01 { min-width: var(--px17); }
.minW18px-01 { min-width: var(--px18); }
.minW19px-01 { min-width: var(--px19); }
.minW20px-01 { min-width: var(--px20); }
.minW5p-01 { min-width: 5%; }
.minW10p-01 { min-width: 10%; }
.minW15p-01 { min-width: 15%; }
.minW20p-01 { min-width: 20%; }
.minW25p-01 { min-width: 25%; }
.minW30p-01 { min-width: 30%; }
.minW35p-01 { min-width: 35%; }
.minW40p-01 { min-width: 40%; }
.minW45p-01 { min-width: 45%; }
.minW50p-01 { min-width: 50%; }
.minW55p-01 { min-width: 55%; }
.minW60p-01 { min-width: 60%; }
.minW65p-01 { min-width: 65%; }
.minW70p-01 { min-width: 70%; }
.minW75p-01 { min-width: 75%; }
.minW80p-01 { min-width: 80%; }
.minW85p-01 { min-width: 85%; }
.minW90p-01 { min-width: 90%; }
.minW95p-01 { min-width: 95%; }
.minW100p-01 { min-width: 100%; }
.maxW1-01 { max-width: var(--rem1); }
.maxW2-01 { max-width: var(--rem2); }
.maxW3-01 { max-width: var(--rem3); }
.maxW4-01 { max-width: var(--rem4); }
.maxW5-01 { max-width: var(--rem5); }
.maxW6-01 { max-width: var(--rem6); }
.maxW7-01 { max-width: var(--rem7); }
.maxW1px-01 { max-width: var(--px1); }
.maxW2px-01 { max-width: var(--px2); }
.maxW3px-01 { max-width: var(--px3); }
.maxW4px-01 { max-width: var(--px4); }
.maxW5px-01 { max-width: var(--px5); }
.maxW6px-01 { max-width: var(--px6); }
.maxW7px-01 { max-width: var(--px7); }
.maxW8px-01 { max-width: var(--px8); }
.maxW9px-01 { max-width: var(--px9); }
.maxW10px-01 { max-width: var(--px10); }
.maxW11px-01 { max-width: var(--px11); }
.maxW12px-01 { max-width: var(--px12); }
.maxW13px-01 { max-width: var(--px13); }
.maxW14px-01 { max-width: var(--px14); }
.maxW15px-01 { max-width: var(--px15); }
.maxW16px-01 { max-width: var(--px16); }
.maxW17px-01 { max-width: var(--px17); }
.maxW18px-01 { max-width: var(--px18); }
.maxW19px-01 { max-width: var(--px19); }
.maxW20px-01 { max-width: var(--px20); }
.maxW5p-01 { max-width: 5%; }
.maxW10p-01 { max-width: 10%; }
.maxW15p-01 { max-width: 15%; }
.maxW20p-01 { max-width: 20%; }
.maxW25p-01 { max-width: 25%; }
.maxW30p-01 { max-width: 30%; }
.maxW35p-01 { max-width: 35%; }
.maxW40p-01 { max-width: 40%; }
.maxW45p-01 { max-width: 45%; }
.maxW50p-01 { max-width: 50%; }
.maxW55p-01 { max-width: 55%; }
.maxW60p-01 { max-width: 60%; }
.maxW65p-01 { max-width: 65%; }
.maxW70p-01 { max-width: 70%; }
.maxW75p-01 { max-width: 75%; }
.maxW80p-01 { max-width: 80%; }
.maxW85p-01 { max-width: 85%; }
.maxW90p-01 { max-width: 90%; }
.maxW95p-01 { max-width: 95%; }
.maxW100p-01 { max-width: 100%; }
.h1-01 { height: var(--rem1); }
.h2-01 { height: var(--rem2); }
.h3-01 { height: var(--rem3); }
.h4-01 { height: var(--rem4); }
.h5-01 { height: var(--rem5); }
.h6-01 { height: var(--rem6); }
.h7-01 { height: var(--rem7); }
.h1px-01 { height: var(--px1); }
.h2px-01 { height: var(--px2); }
.h3px-01 { height: var(--px3); }
.h4px-01 { height: var(--px4); }
.h5px-01 { height: var(--px5); }
.h6px-01 { height: var(--px6); }
.h7px-01 { height: var(--px7); }
.h8px-01 { height: var(--px8); }
.h9px-01 { height: var(--px9); }
.h10px-01 { height: var(--px10); }
.h11px-01 { height: var(--px11); }
.h12px-01 { height: var(--px12); }
.h13px-01 { height: var(--px13); }
.h14px-01 { height: var(--px14); }
.h15px-01 { height: var(--px15); }
.h16px-01 { height: var(--px16); }
.h17px-01 { height: var(--px17); }
.h18px-01 { height: var(--px18); }
.h19px-01 { height: var(--px19); }
.h20px-01 { height: var(--px20); }
.h5p-01 { height: 5%; }
.h10p-01 { height: 10%; }
.h15p-01 { height: 15%; }
.h20p-01 { height: 20%; }
.h25p-01 { height: 25%; }
.h30p-01 { height: 30%; }
.h35p-01 { height: 35%; }
.h40p-01 { height: 40%; }
.h45p-01 { height: 45%; }
.h50p-01 { height: 50%; }
.h55p-01 { height: 55%; }
.h60p-01 { height: 60%; }
.h65p-01 { height: 65%; }
.h70p-01 { height: 70%; }
.h75p-01 { height: 75%; }
.h80p-01 { height: 80%; }
.h85p-01 { height: 85%; }
.h90p-01 { height: 90%; }
.h95p-01 { height: 95%; }
.h100p-01 { height: 100%; }
.minH1-01 { min-height: var(--rem1); }
.minH2-01 { min-height: var(--rem2); }
.minH3-01 { min-height: var(--rem3); }
.minH4-01 { min-height: var(--rem4); }
.minH5-01 { min-height: var(--rem5); }
.minH6-01 { min-height: var(--rem6); }
.minH7-01 { min-height: var(--rem7); }
.minH1px-01 { min-height: var(--px1); }
.minH2px-01 { min-height: var(--px2); }
.minH3px-01 { min-height: var(--px3); }
.minH4px-01 { min-height: var(--px4); }
.minH5px-01 { min-height: var(--px5); }
.minH6px-01 { min-height: var(--px6); }
.minH7px-01 { min-height: var(--px7); }
.minH8px-01 { min-height: var(--px8); }
.minH9px-01 { min-height: var(--px9); }
.minH10px-01 { min-height: var(--px10); }
.minH11px-01 { min-height: var(--px11); }
.minH12px-01 { min-height: var(--px12); }
.minH13px-01 { min-height: var(--px13); }
.minH14px-01 { min-height: var(--px14); }
.minH15px-01 { min-height: var(--px15); }
.minH16px-01 { min-height: var(--px16); }
.minH17px-01 { min-height: var(--px17); }
.minH18px-01 { min-height: var(--px18); }
.minH19px-01 { min-height: var(--px19); }
.minH20px-01 { min-height: var(--px20); }
.minH5p-01 { min-height: 5%; }
.minH10p-01 { min-height: 10%; }
.minH15p-01 { min-height: 15%; }
.minH20p-01 { min-height: 20%; }
.minH25p-01 { min-height: 25%; }
.minH30p-01 { min-height: 30%; }
.minH35p-01 { min-height: 35%; }
.minH40p-01 { min-height: 40%; }
.minH45p-01 { min-height: 45%; }
.minH50p-01 { min-height: 50%; }
.minH55p-01 { min-height: 55%; }
.minH60p-01 { min-height: 60%; }
.minH65p-01 { min-height: 65%; }
.minH70p-01 { min-height: 70%; }
.minH75p-01 { min-height: 75%; }
.minH80p-01 { min-height: 80%; }
.minH85p-01 { min-height: 85%; }
.minH90p-01 { min-height: 90%; }
.minH95p-01 { min-height: 95%; }
.minH100p-01 { min-height: 100%; }
.maxH1-01 { max-height: var(--rem1); }
.maxH2-01 { max-height: var(--rem2); }
.maxH3-01 { max-height: var(--rem3); }
.maxH4-01 { max-height: var(--rem4); }
.maxH5-01 { max-height: var(--rem5); }
.maxH6-01 { max-height: var(--rem6); }
.maxH7-01 { max-height: var(--rem7); }
.maxH1px-01 { max-height: var(--px1); }
.maxH2px-01 { max-height: var(--px2); }
.maxH3px-01 { max-height: var(--px3); }
.maxH4px-01 { max-height: var(--px4); }
.maxH5px-01 { max-height: var(--px5); }
.maxH6px-01 { max-height: var(--px6); }
.maxH7px-01 { max-height: var(--px7); }
.maxH8px-01 { max-height: var(--px8); }
.maxH9px-01 { max-height: var(--px9); }
.maxH10px-01 { max-height: var(--px10); }
.maxH11px-01 { max-height: var(--px11); }
.maxH12px-01 { max-height: var(--px12); }
.maxH13px-01 { max-height: var(--px13); }
.maxH14px-01 { max-height: var(--px14); }
.maxH15px-01 { max-height: var(--px15); }
.maxH16px-01 { max-height: var(--px16); }
.maxH17px-01 { max-height: var(--px17); }
.maxH18px-01 { max-height: var(--px18); }
.maxH19px-01 { max-height: var(--px19); }
.maxH20px-01 { max-height: var(--px20); }
.maxH5p-01 { max-height: 5%; }
.maxH10p-01 { max-height: 10%; }
.maxH15p-01 { max-height: 15%; }
.maxH20p-01 { max-height: 20%; }
.maxH25p-01 { max-height: 25%; }
.maxH30p-01 { max-height: 30%; }
.maxH35p-01 { max-height: 35%; }
.maxH40p-01 { max-height: 40%; }
.maxH45p-01 { max-height: 45%; }
.maxH50p-01 { max-height: 50%; }
.maxH55p-01 { max-height: 55%; }
.maxH60p-01 { max-height: 60%; }
.maxH65p-01 { max-height: 65%; }
.maxH70p-01 { max-height: 70%; }
.maxH75p-01 { max-height: 75%; }
.maxH80p-01 { max-height: 80%; }
.maxH85p-01 { max-height: 85%; }
.maxH90p-01 { max-height: 90%; }
.maxH95p-01 { max-height: 95%; }
.maxH100p-01 { max-height: 100%; }
.maxH5vh-01 { max-height: 5vh; }
.maxH10vh-01 { max-height: 10vh; }
.maxH15vh-01 { max-height: 15vh; }
.maxH20vh-01 { max-height: 20vh; }
.maxH25vh-01 { max-height: 25vh; }
.maxH30vh-01 { max-height: 30vh; }
.maxH35vh-01 { max-height: 35vh; }
.maxH40vh-01 { max-height: 40vh; }
.maxH45vh-01 { max-height: 45vh; }
.maxH50vh-01 { max-height: 50vh; }
.maxH55vh-01 { max-height: 55vh; }
.maxH60vh-01 { max-height: 60vh; }
.maxH65vh-01 { max-height: 65vh; }
.maxH70vh-01 { max-height: 70vh; }
.maxH75vh-01 { max-height: 75vh; }
.maxH80vh-01 { max-height: 80vh; }
.maxH85vh-01 { max-height: 85vh; }
.maxH90vh-01 { max-height: 90vh; }
.maxH95vh-01 { max-height: 95vh; }
.maxH100vh-01 { max-height: 100vh; }
.resizeA-01 { resize: both; }
.resizeV-01 { resize: vertical; }
.resizeH-01 { resize: horizontal; }
.resizeNone-01 { resize: none; }
.resizeB-01 { resize: block; }
.resizeI-01 { resize: inline; }
.pa1-01 { padding: var(--px1); }
.pa2-01 { padding: var(--px2); }
.pa3-01 { padding: var(--px3); }
.pa4-01 { padding: var(--px4); }
.pa5-01 { padding: var(--px5); }
.pa6-01 { padding: var(--px6); }
.pa7-01 { padding: var(--px7); }
.pa8-01 { padding: var(--px8); }
.pa9-01 { padding: var(--px9); }
.pa10-01 { padding: var(--px10); }
.pa11-01 { padding: var(--px11); }
.pa12-01 { padding: var(--px12); }
.pa13-01 { padding: var(--px13); }
.pa14-01 { padding: var(--px14); }
.pa15-01 { padding: var(--px15); }
.pa16-01 { padding: var(--px16); }
.pa17-01 { padding: var(--px17); }
.pa18-01 { padding: var(--px18); }
.pa19-01 { padding: var(--px19); }
.pa20-01 { padding: var(--px20); }
.pa5p-01 { padding: 5%; }
.pa10p-01 { padding: 10%; }
.pa15p-01 { padding: 15%; }
.pa20p-01 { padding: 20%; }
.pa25p-01 { padding: 25%; }
.pa30p-01 { padding: 30%; }
.pa35p-01 { padding: 35%; }
.pa40p-01 { padding: 40%; }
.pa45p-01 { padding: 45%; }
.pa50p-01 { padding: 50%; }
.pa55p-01 { padding: 55%; }
.pa60p-01 { padding: 60%; }
.pa65p-01 { padding: 65%; }
.pa70p-01 { padding: 70%; }
.pa75p-01 { padding: 75%; }
.pa80p-01 { padding: 80%; }
.pa85p-01 { padding: 85%; }
.pa90p-01 { padding: 90%; }
.pa95p-01 { padding: 95%; }
.pa100p-01 { padding: 100%; }
.pv1-01 { padding-top: var(--px1); padding-bottom: var(--px1); }
.pv2-01 { padding-top: var(--px2); padding-bottom: var(--px2); }
.pv3-01 { padding-top: var(--px3); padding-bottom: var(--px3); }
.pv4-01 { padding-top: var(--px4); padding-bottom: var(--px4); }
.pv5-01 { padding-top: var(--px5); padding-bottom: var(--px5); }
.pv6-01 { padding-top: var(--px6); padding-bottom: var(--px6); }
.pv7-01 { padding-top: var(--px7); padding-bottom: var(--px7); }
.pv8-01 { padding-top: var(--px8); padding-bottom: var(--px8); }
.pv9-01 { padding-top: var(--px9); padding-bottom: var(--px9); }
.pv10-01 { padding-top: var(--px10); padding-bottom: var(--px10); }
.pv11-01 { padding-top: var(--px11); padding-bottom: var(--px11); }
.pv12-01 { padding-top: var(--px12); padding-bottom: var(--px12); }
.pv13-01 { padding-top: var(--px13); padding-bottom: var(--px13); }
.pv14-01 { padding-top: var(--px14); padding-bottom: var(--px14); }
.pv15-01 { padding-top: var(--px15); padding-bottom: var(--px15); }
.pv16-01 { padding-top: var(--px16); padding-bottom: var(--px16); }
.pv17-01 { padding-top: var(--px17); padding-bottom: var(--px17); }
.pv18-01 { padding-top: var(--px18); padding-bottom: var(--px18); }
.pv19-01 { padding-top: var(--px19); padding-bottom: var(--px19); }
.pv20-01 { padding-top: var(--px20); padding-bottom: var(--px20); }
.pv5p-01 { padding-top: 5%; padding-bottom: 5%; }
.pv10p-01 { padding-top: 10%; padding-bottom: 10%; }
.pv15p-01 { padding-top: 15%; padding-bottom: 15%; }
.pv20p-01 { padding-top: 20%; padding-bottom: 20%; }
.pv25p-01 { padding-top: 25%; padding-bottom: 25%; }
.pv30p-01 { padding-top: 30%; padding-bottom: 30%; }
.pv35p-01 { padding-top: 35%; padding-bottom: 35%; }
.pv40p-01 { padding-top: 40%; padding-bottom: 40%; }
.pv45p-01 { padding-top: 45%; padding-bottom: 45%; }
.pv50p-01 { padding-top: 50%; padding-bottom: 50%; }
.pv55p-01 { padding-top: 55%; padding-bottom: 55%; }
.pv60p-01 { padding-top: 60%; padding-bottom: 60%; }
.pv65p-01 { padding-top: 65%; padding-bottom: 65%; }
.pv70p-01 { padding-top: 70%; padding-bottom: 70%; }
.pv75p-01 { padding-top: 75%; padding-bottom: 75%; }
.pv80p-01 { padding-top: 80%; padding-bottom: 80%; }
.pv85p-01 { padding-top: 85%; padding-bottom: 85%; }
.pv90p-01 { padding-top: 90%; padding-bottom: 90%; }
.pv95p-01 { padding-top: 95%; padding-bottom: 95%; }
.pv100p-01 { padding-top: 100%; padding-bottom: 100%; }
.ph1-01 { padding-left: var(--px1); padding-right: var(--px1); }
.ph2-01 { padding-left: var(--px2); padding-right: var(--px2); }
.ph3-01 { padding-left: var(--px3); padding-right: var(--px3); }
.ph4-01 { padding-left: var(--px4); padding-right: var(--px4); }
.ph5-01 { padding-left: var(--px5); padding-right: var(--px5); }
.ph6-01 { padding-left: var(--px6); padding-right: var(--px6); }
.ph7-01 { padding-left: var(--px7); padding-right: var(--px7); }
.ph8-01 { padding-left: var(--px8); padding-right: var(--px8); }
.ph9-01 { padding-left: var(--px9); padding-right: var(--px9); }
.ph10-01 { padding-left: var(--px10); padding-right: var(--px10); }
.ph11-01 { padding-left: var(--px11); padding-right: var(--px11); }
.ph12-01 { padding-left: var(--px12); padding-right: var(--px12); }
.ph13-01 { padding-left: var(--px13); padding-right: var(--px13); }
.ph14-01 { padding-left: var(--px14); padding-right: var(--px14); }
.ph15-01 { padding-left: var(--px15); padding-right: var(--px15); }
.ph16-01 { padding-left: var(--px16); padding-right: var(--px16); }
.ph17-01 { padding-left: var(--px17); padding-right: var(--px17); }
.ph18-01 { padding-left: var(--px18); padding-right: var(--px18); }
.ph19-01 { padding-left: var(--px19); padding-right: var(--px19); }
.ph20-01 { padding-left: var(--px20); padding-right: var(--px20); }
.ph5p-01 { padding-left: 5%; padding-right: 5%; }
.ph10p-01 { padding-left: 10%; padding-right: 10%; }
.ph15p-01 { padding-left: 15%; padding-right: 15%; }
.ph20p-01 { padding-left: 20%; padding-right: 20%; }
.ph25p-01 { padding-left: 25%; padding-right: 25%; }
.ph30p-01 { padding-left: 30%; padding-right: 30%; }
.ph35p-01 { padding-left: 35%; padding-right: 35%; }
.ph40p-01 { padding-left: 40%; padding-right: 40%; }
.ph45p-01 { padding-left: 45%; padding-right: 45%; }
.ph50p-01 { padding-left: 50%; padding-right: 50%; }
.ph55p-01 { padding-left: 55%; padding-right: 55%; }
.ph60p-01 { padding-left: 60%; padding-right: 60%; }
.ph65p-01 { padding-left: 65%; padding-right: 65%; }
.ph70p-01 { padding-left: 70%; padding-right: 70%; }
.ph75p-01 { padding-left: 75%; padding-right: 75%; }
.ph80p-01 { padding-left: 80%; padding-right: 80%; }
.ph85p-01 { padding-left: 85%; padding-right: 85%; }
.ph90p-01 { padding-left: 90%; padding-right: 90%; }
.ph95p-01 { padding-left: 95%; padding-right: 95%; }
.ph100p-01 { padding-left: 100%; padding-right: 100%; }
.pt1-01 { padding-top: var(--px1); }
.pt2-01 { padding-top: var(--px2); }
.pt3-01 { padding-top: var(--px3); }
.pt4-01 { padding-top: var(--px4); }
.pt5-01 { padding-top: var(--px5); }
.pt6-01 { padding-top: var(--px6); }
.pt7-01 { padding-top: var(--px7); }
.pt8-01 { padding-top: var(--px8); }
.pt9-01 { padding-top: var(--px9); }
.pt10-01 { padding-top: var(--px10); }
.pt11-01 { padding-top: var(--px11); }
.pt12-01 { padding-top: var(--px12); }
.pt13-01 { padding-top: var(--px13); }
.pt14-01 { padding-top: var(--px14); }
.pt15-01 { padding-top: var(--px15); }
.pt16-01 { padding-top: var(--px16); }
.pt17-01 { padding-top: var(--px17); }
.pt18-01 { padding-top: var(--px18); }
.pt19-01 { padding-top: var(--px19); }
.pt20-01 { padding-top: var(--px20); }
.pt5p-01 { padding-top: 5%; }
.pt10p-01 { padding-top: 10%; }
.pt15p-01 { padding-top: 15%; }
.pt20p-01 { padding-top: 20%; }
.pt25p-01 { padding-top: 25%; }
.pt30p-01 { padding-top: 30%; }
.pt35p-01 { padding-top: 35%; }
.pt40p-01 { padding-top: 40%; }
.pt45p-01 { padding-top: 45%; }
.pt50p-01 { padding-top: 50%; }
.pt55p-01 { padding-top: 55%; }
.pt60p-01 { padding-top: 60%; }
.pt65p-01 { padding-top: 65%; }
.pt70p-01 { padding-top: 70%; }
.pt75p-01 { padding-top: 75%; }
.pt80p-01 { padding-top: 80%; }
.pt85p-01 { padding-top: 85%; }
.pt90p-01 { padding-top: 90%; }
.pt95p-01 { padding-top: 95%; }
.pt100p-01 { padding-top: 100%; }
.pr1-01 { padding-right: var(--px1); }
.pr2-01 { padding-right: var(--px2); }
.pr3-01 { padding-right: var(--px3); }
.pr4-01 { padding-right: var(--px4); }
.pr5-01 { padding-right: var(--px5); }
.pr6-01 { padding-right: var(--px6); }
.pr7-01 { padding-right: var(--px7); }
.pr8-01 { padding-right: var(--px8); }
.pr9-01 { padding-right: var(--px9); }
.pr10-01 { padding-right: var(--px10); }
.pr11-01 { padding-right: var(--px11); }
.pr12-01 { padding-right: var(--px12); }
.pr13-01 { padding-right: var(--px13); }
.pr14-01 { padding-right: var(--px14); }
.pr15-01 { padding-right: var(--px15); }
.pr16-01 { padding-right: var(--px16); }
.pr17-01 { padding-right: var(--px17); }
.pr18-01 { padding-right: var(--px18); }
.pr19-01 { padding-right: var(--px19); }
.pr20-01 { padding-right: var(--px20); }
.pr5p-01 { padding-right: 5%; }
.pr10p-01 { padding-right: 10%; }
.pr15p-01 { padding-right: 15%; }
.pr20p-01 { padding-right: 20%; }
.pr25p-01 { padding-right: 25%; }
.pr30p-01 { padding-right: 30%; }
.pr35p-01 { padding-right: 35%; }
.pr40p-01 { padding-right: 40%; }
.pr45p-01 { padding-right: 45%; }
.pr50p-01 { padding-right: 50%; }
.pr55p-01 { padding-right: 55%; }
.pr60p-01 { padding-right: 60%; }
.pr65p-01 { padding-right: 65%; }
.pr70p-01 { padding-right: 70%; }
.pr75p-01 { padding-right: 75%; }
.pr80p-01 { padding-right: 80%; }
.pr85p-01 { padding-right: 85%; }
.pr90p-01 { padding-right: 90%; }
.pr95p-01 { padding-right: 95%; }
.pr100p-01 { padding-right: 100%; }
.pb1-01 { padding-bottom: var(--px1); }
.pb2-01 { padding-bottom: var(--px2); }
.pb3-01 { padding-bottom: var(--px3); }
.pb4-01 { padding-bottom: var(--px4); }
.pb5-01 { padding-bottom: var(--px5); }
.pb6-01 { padding-bottom: var(--px6); }
.pb7-01 { padding-bottom: var(--px7); }
.pb8-01 { padding-bottom: var(--px8); }
.pb9-01 { padding-bottom: var(--px9); }
.pb10-01 { padding-bottom: var(--px10); }
.pb11-01 { padding-bottom: var(--px11); }
.pb12-01 { padding-bottom: var(--px12); }
.pb13-01 { padding-bottom: var(--px13); }
.pb14-01 { padding-bottom: var(--px14); }
.pb15-01 { padding-bottom: var(--px15); }
.pb16-01 { padding-bottom: var(--px16); }
.pb17-01 { padding-bottom: var(--px17); }
.pb18-01 { padding-bottom: var(--px18); }
.pb19-01 { padding-bottom: var(--px19); }
.pb20-01 { padding-bottom: var(--px20); }
.pb5p-01 { padding-bottom: 5%; }
.pb10p-01 { padding-bottom: 10%; }
.pb15p-01 { padding-bottom: 15%; }
.pb20p-01 { padding-bottom: 20%; }
.pb25p-01 { padding-bottom: 25%; }
.pb30p-01 { padding-bottom: 30%; }
.pb35p-01 { padding-bottom: 35%; }
.pb40p-01 { padding-bottom: 40%; }
.pb45p-01 { padding-bottom: 45%; }
.pb50p-01 { padding-bottom: 50%; }
.pb55p-01 { padding-bottom: 55%; }
.pb60p-01 { padding-bottom: 60%; }
.pb65p-01 { padding-bottom: 65%; }
.pb70p-01 { padding-bottom: 70%; }
.pb75p-01 { padding-bottom: 75%; }
.pb80p-01 { padding-bottom: 80%; }
.pb85p-01 { padding-bottom: 85%; }
.pb90p-01 { padding-bottom: 90%; }
.pb95p-01 { padding-bottom: 95%; }
.pb100p-01 { padding-bottom: 100%; }
.pl1-01 { padding-left: var(--px1); }
.pl2-01 { padding-left: var(--px2); }
.pl3-01 { padding-left: var(--px3); }
.pl4-01 { padding-left: var(--px4); }
.pl5-01 { padding-left: var(--px5); }
.pl6-01 { padding-left: var(--px6); }
.pl7-01 { padding-left: var(--px7); }
.pl8-01 { padding-left: var(--px8); }
.pl9-01 { padding-left: var(--px9); }
.pl10-01 { padding-left: var(--px10); }
.pl11-01 { padding-left: var(--px11); }
.pl12-01 { padding-left: var(--px12); }
.pl13-01 { padding-left: var(--px13); }
.pl14-01 { padding-left: var(--px14); }
.pl15-01 { padding-left: var(--px15); }
.pl16-01 { padding-left: var(--px16); }
.pl17-01 { padding-left: var(--px17); }
.pl18-01 { padding-left: var(--px18); }
.pl19-01 { padding-left: var(--px19); }
.pl20-01 { padding-left: var(--px20); }
.pl5p-01 { padding-left: 5%; }
.pl10p-01 { padding-left: 10%; }
.pl15p-01 { padding-left: 15%; }
.pl20p-01 { padding-left: 20%; }
.pl25p-01 { padding-left: 25%; }
.pl30p-01 { padding-left: 30%; }
.pl35p-01 { padding-left: 35%; }
.pl40p-01 { padding-left: 40%; }
.pl45p-01 { padding-left: 45%; }
.pl50p-01 { padding-left: 50%; }
.pl55p-01 { padding-left: 55%; }
.pl60p-01 { padding-left: 60%; }
.pl65p-01 { padding-left: 65%; }
.pl70p-01 { padding-left: 70%; }
.pl75p-01 { padding-left: 75%; }
.pl80p-01 { padding-left: 80%; }
.pl85p-01 { padding-left: 85%; }
.pl90p-01 { padding-left: 90%; }
.pl95p-01 { padding-left: 95%; }
.pl100p-01 { padding-left: 100%; }
.ma1-01 { margin: var(--px1); }
.ma2-01 { margin: var(--px2); }
.ma3-01 { margin: var(--px3); }
.ma4-01 { margin: var(--px4); }
.ma5-01 { margin: var(--px5); }
.ma6-01 { margin: var(--px6); }
.ma7-01 { margin: var(--px7); }
.ma8-01 { margin: var(--px8); }
.ma9-01 { margin: var(--px9); }
.ma10-01 { margin: var(--px10); }
.ma11-01 { margin: var(--px11); }
.ma12-01 { margin: var(--px12); }
.ma13-01 { margin: var(--px13); }
.ma14-01 { margin: var(--px14); }
.ma15-01 { margin: var(--px15); }
.ma16-01 { margin: var(--px16); }
.ma17-01 { margin: var(--px17); }
.ma18-01 { margin: var(--px18); }
.ma19-01 { margin: var(--px19); }
.ma20-01 { margin: var(--px20); }
.ma5p-01 { margin: 5%; }
.ma10p-01 { margin: 10%; }
.ma15p-01 { margin: 15%; }
.ma20p-01 { margin: 20%; }
.ma25p-01 { margin: 25%; }
.ma30p-01 { margin: 30%; }
.ma35p-01 { margin: 35%; }
.ma40p-01 { margin: 40%; }
.ma45p-01 { margin: 45%; }
.ma50p-01 { margin: 50%; }
.ma55p-01 { margin: 55%; }
.ma60p-01 { margin: 60%; }
.ma65p-01 { margin: 65%; }
.ma70p-01 { margin: 70%; }
.ma75p-01 { margin: 75%; }
.ma80p-01 { margin: 80%; }
.ma85p-01 { margin: 85%; }
.ma90p-01 { margin: 90%; }
.ma95p-01 { margin: 95%; }
.ma100p-01 { margin: 100%; }
.mv1-01 { margin-top: var(--px1); margin-bottom: var(--px1); }
.mv2-01 { margin-top: var(--px2); margin-bottom: var(--px2); }
.mv3-01 { margin-top: var(--px3); margin-bottom: var(--px3); }
.mv4-01 { margin-top: var(--px4); margin-bottom: var(--px4); }
.mv5-01 { margin-top: var(--px5); margin-bottom: var(--px5); }
.mv6-01 { margin-top: var(--px6); margin-bottom: var(--px6); }
.mv7-01 { margin-top: var(--px7); margin-bottom: var(--px7); }
.mv8-01 { margin-top: var(--px8); margin-bottom: var(--px8); }
.mv9-01 { margin-top: var(--px9); margin-bottom: var(--px9); }
.mv10-01 { margin-top: var(--px10); margin-bottom: var(--px10); }
.mv11-01 { margin-top: var(--px11); margin-bottom: var(--px11); }
.mv12-01 { margin-top: var(--px12); margin-bottom: var(--px12); }
.mv13-01 { margin-top: var(--px13); margin-bottom: var(--px13); }
.mv14-01 { margin-top: var(--px14); margin-bottom: var(--px14); }
.mv15-01 { margin-top: var(--px15); margin-bottom: var(--px15); }
.mv16-01 { margin-top: var(--px16); margin-bottom: var(--px16); }
.mv17-01 { margin-top: var(--px17); margin-bottom: var(--px17); }
.mv18-01 { margin-top: var(--px18); margin-bottom: var(--px18); }
.mv19-01 { margin-top: var(--px19); margin-bottom: var(--px19); }
.mv20-01 { margin-top: var(--px20); margin-bottom: var(--px20); }
.mv5p-01 { margin-top: 5%; margin-bottom: 5%; }
.mv10p-01 { margin-top: 10%; margin-bottom: 10%; }
.mv15p-01 { margin-top: 15%; margin-bottom: 15%; }
.mv20p-01 { margin-top: 20%; margin-bottom: 20%; }
.mv25p-01 { margin-top: 25%; margin-bottom: 25%; }
.mv30p-01 { margin-top: 30%; margin-bottom: 30%; }
.mv35p-01 { margin-top: 35%; margin-bottom: 35%; }
.mv40p-01 { margin-top: 40%; margin-bottom: 40%; }
.mv45p-01 { margin-top: 45%; margin-bottom: 45%; }
.mv50p-01 { margin-top: 50%; margin-bottom: 50%; }
.mv55p-01 { margin-top: 55%; margin-bottom: 55%; }
.mv60p-01 { margin-top: 60%; margin-bottom: 60%; }
.mv65p-01 { margin-top: 65%; margin-bottom: 65%; }
.mv70p-01 { margin-top: 70%; margin-bottom: 70%; }
.mv75p-01 { margin-top: 75%; margin-bottom: 75%; }
.mv80p-01 { margin-top: 80%; margin-bottom: 80%; }
.mv85p-01 { margin-top: 85%; margin-bottom: 85%; }
.mv90p-01 { margin-top: 90%; margin-bottom: 90%; }
.mv95p-01 { margin-top: 95%; margin-bottom: 95%; }
.mv100p-01 { margin-top: 100%; margin-bottom: 100%; }
.mh1-01 { margin-left: var(--px1); margin-right: var(--px1); }
.mh2-01 { margin-left: var(--px2); margin-right: var(--px2); }
.mh3-01 { margin-left: var(--px3); margin-right: var(--px3); }
.mh4-01 { margin-left: var(--px4); margin-right: var(--px4); }
.mh5-01 { margin-left: var(--px5); margin-right: var(--px5); }
.mh6-01 { margin-left: var(--px6); margin-right: var(--px6); }
.mh7-01 { margin-left: var(--px7); margin-right: var(--px7); }
.mh8-01 { margin-left: var(--px8); margin-right: var(--px8); }
.mh9-01 { margin-left: var(--px9); margin-right: var(--px9); }
.mh10-01 { margin-left: var(--px10); margin-right: var(--px10); }
.mh11-01 { margin-left: var(--px11); margin-right: var(--px11); }
.mh12-01 { margin-left: var(--px12); margin-right: var(--px12); }
.mh13-01 { margin-left: var(--px13); margin-right: var(--px13); }
.mh14-01 { margin-left: var(--px14); margin-right: var(--px14); }
.mh15-01 { margin-left: var(--px15); margin-right: var(--px15); }
.mh16-01 { margin-left: var(--px16); margin-right: var(--px16); }
.mh17-01 { margin-left: var(--px17); margin-right: var(--px17); }
.mh18-01 { margin-left: var(--px18); margin-right: var(--px18); }
.mh19-01 { margin-left: var(--px19); margin-right: var(--px19); }
.mh20-01 { margin-left: var(--px20); margin-right: var(--px20); }
.mh5p-01 { margin-left: 5%; margin-right: 5%; }
.mh10p-01 { margin-left: 10%; margin-right: 10%; }
.mh15p-01 { margin-left: 15%; margin-right: 15%; }
.mh20p-01 { margin-left: 20%; margin-right: 20%; }
.mh25p-01 { margin-left: 25%; margin-right: 25%; }
.mh30p-01 { margin-left: 30%; margin-right: 30%; }
.mh35p-01 { margin-left: 35%; margin-right: 35%; }
.mh40p-01 { margin-left: 40%; margin-right: 40%; }
.mh45p-01 { margin-left: 45%; margin-right: 45%; }
.mh50p-01 { margin-left: 50%; margin-right: 50%; }
.mh55p-01 { margin-left: 55%; margin-right: 55%; }
.mh60p-01 { margin-left: 60%; margin-right: 60%; }
.mh65p-01 { margin-left: 65%; margin-right: 65%; }
.mh70p-01 { margin-left: 70%; margin-right: 70%; }
.mh75p-01 { margin-left: 75%; margin-right: 75%; }
.mh80p-01 { margin-left: 80%; margin-right: 80%; }
.mh85p-01 { margin-left: 85%; margin-right: 85%; }
.mh90p-01 { margin-left: 90%; margin-right: 90%; }
.mh95p-01 { margin-left: 95%; margin-right: 95%; }
.mh100p-01 { margin-left: 100%; margin-right: 100%; }
.mt1-01 { margin-top: var(--px1); }
.mt2-01 { margin-top: var(--px2); }
.mt3-01 { margin-top: var(--px3); }
.mt4-01 { margin-top: var(--px4); }
.mt5-01 { margin-top: var(--px5); }
.mt6-01 { margin-top: var(--px6); }
.mt7-01 { margin-top: var(--px7); }
.mt8-01 { margin-top: var(--px8); }
.mt9-01 { margin-top: var(--px9); }
.mt10-01 { margin-top: var(--px10); }
.mt11-01 { margin-top: var(--px11); }
.mt12-01 { margin-top: var(--px12); }
.mt13-01 { margin-top: var(--px13); }
.mt14-01 { margin-top: var(--px14); }
.mt15-01 { margin-top: var(--px15); }
.mt16-01 { margin-top: var(--px16); }
.mt17-01 { margin-top: var(--px17); }
.mt18-01 { margin-top: var(--px18); }
.mt19-01 { margin-top: var(--px19); }
.mt20-01 { margin-top: var(--px20); }
.mt5p-01 { margin-top: 5%; }
.mt10p-01 { margin-top: 10%; }
.mt15p-01 { margin-top: 15%; }
.mt20p-01 { margin-top: 20%; }
.mt25p-01 { margin-top: 25%; }
.mt30p-01 { margin-top: 30%; }
.mt35p-01 { margin-top: 35%; }
.mt40p-01 { margin-top: 40%; }
.mt45p-01 { margin-top: 45%; }
.mt50p-01 { margin-top: 50%; }
.mt55p-01 { margin-top: 55%; }
.mt60p-01 { margin-top: 60%; }
.mt65p-01 { margin-top: 65%; }
.mt70p-01 { margin-top: 70%; }
.mt75p-01 { margin-top: 75%; }
.mt80p-01 { margin-top: 80%; }
.mt85p-01 { margin-top: 85%; }
.mt90p-01 { margin-top: 90%; }
.mt95p-01 { margin-top: 95%; }
.mt100p-01 { margin-top: 100%; }
.mr1-01 { margin-right: var(--px1); }
.mr2-01 { margin-right: var(--px2); }
.mr3-01 { margin-right: var(--px3); }
.mr4-01 { margin-right: var(--px4); }
.mr5-01 { margin-right: var(--px5); }
.mr6-01 { margin-right: var(--px6); }
.mr7-01 { margin-right: var(--px7); }
.mr8-01 { margin-right: var(--px8); }
.mr9-01 { margin-right: var(--px9); }
.mr10-01 { margin-right: var(--px10); }
.mr11-01 { margin-right: var(--px11); }
.mr12-01 { margin-right: var(--px12); }
.mr13-01 { margin-right: var(--px13); }
.mr14-01 { margin-right: var(--px14); }
.mr15-01 { margin-right: var(--px15); }
.mr16-01 { margin-right: var(--px16); }
.mr17-01 { margin-right: var(--px17); }
.mr18-01 { margin-right: var(--px18); }
.mr19-01 { margin-right: var(--px19); }
.mr20-01 { margin-right: var(--px20); }
.mr5p-01 { margin-right: 5%; }
.mr10p-01 { margin-right: 10%; }
.mr15p-01 { margin-right: 15%; }
.mr20p-01 { margin-right: 20%; }
.mr25p-01 { margin-right: 25%; }
.mr30p-01 { margin-right: 30%; }
.mr35p-01 { margin-right: 35%; }
.mr40p-01 { margin-right: 40%; }
.mr45p-01 { margin-right: 45%; }
.mr50p-01 { margin-right: 50%; }
.mr55p-01 { margin-right: 55%; }
.mr60p-01 { margin-right: 60%; }
.mr65p-01 { margin-right: 65%; }
.mr70p-01 { margin-right: 70%; }
.mr75p-01 { margin-right: 75%; }
.mr80p-01 { margin-right: 80%; }
.mr85p-01 { margin-right: 85%; }
.mr90p-01 { margin-right: 90%; }
.mr95p-01 { margin-right: 95%; }
.mr100p-01 { margin-right: 100%; }
.mb1-01 { margin-bottom: var(--px1); }
.mb2-01 { margin-bottom: var(--px2); }
.mb3-01 { margin-bottom: var(--px3); }
.mb4-01 { margin-bottom: var(--px4); }
.mb5-01 { margin-bottom: var(--px5); }
.mb6-01 { margin-bottom: var(--px6); }
.mb7-01 { margin-bottom: var(--px7); }
.mb8-01 { margin-bottom: var(--px8); }
.mb9-01 { margin-bottom: var(--px9); }
.mb10-01 { margin-bottom: var(--px10); }
.mb11-01 { margin-bottom: var(--px11); }
.mb12-01 { margin-bottom: var(--px12); }
.mb13-01 { margin-bottom: var(--px13); }
.mb14-01 { margin-bottom: var(--px14); }
.mb15-01 { margin-bottom: var(--px15); }
.mb16-01 { margin-bottom: var(--px16); }
.mb17-01 { margin-bottom: var(--px17); }
.mb18-01 { margin-bottom: var(--px18); }
.mb19-01 { margin-bottom: var(--px19); }
.mb20-01 { margin-bottom: var(--px20); }
.mb5p-01 { margin-bottom: 5%; }
.mb10p-01 { margin-bottom: 10%; }
.mb15p-01 { margin-bottom: 15%; }
.mb20p-01 { margin-bottom: 20%; }
.mb25p-01 { margin-bottom: 25%; }
.mb30p-01 { margin-bottom: 30%; }
.mb35p-01 { margin-bottom: 35%; }
.mb40p-01 { margin-bottom: 40%; }
.mb45p-01 { margin-bottom: 45%; }
.mb50p-01 { margin-bottom: 50%; }
.mb55p-01 { margin-bottom: 55%; }
.mb60p-01 { margin-bottom: 60%; }
.mb65p-01 { margin-bottom: 65%; }
.mb70p-01 { margin-bottom: 70%; }
.mb75p-01 { margin-bottom: 75%; }
.mb80p-01 { margin-bottom: 80%; }
.mb85p-01 { margin-bottom: 85%; }
.mb90p-01 { margin-bottom: 90%; }
.mb95p-01 { margin-bottom: 95%; }
.mb100p-01 { margin-bottom: 100%; }
.ml1-01 { margin-left: var(--px1); }
.ml2-01 { margin-left: var(--px2); }
.ml3-01 { margin-left: var(--px3); }
.ml4-01 { margin-left: var(--px4); }
.ml5-01 { margin-left: var(--px5); }
.ml6-01 { margin-left: var(--px6); }
.ml7-01 { margin-left: var(--px7); }
.ml8-01 { margin-left: var(--px8); }
.ml9-01 { margin-left: var(--px9); }
.ml10-01 { margin-left: var(--px10); }
.ml11-01 { margin-left: var(--px11); }
.ml12-01 { margin-left: var(--px12); }
.ml13-01 { margin-left: var(--px13); }
.ml14-01 { margin-left: var(--px14); }
.ml15-01 { margin-left: var(--px15); }
.ml16-01 { margin-left: var(--px16); }
.ml17-01 { margin-left: var(--px17); }
.ml18-01 { margin-left: var(--px18); }
.ml19-01 { margin-left: var(--px19); }
.ml20-01 { margin-left: var(--px20); }
.ml5p-01 { margin-left: 5%; }
.ml10p-01 { margin-left: 10%; }
.ml15p-01 { margin-left: 15%; }
.ml20p-01 { margin-left: 20%; }
.ml25p-01 { margin-left: 25%; }
.ml30p-01 { margin-left: 30%; }
.ml35p-01 { margin-left: 35%; }
.ml40p-01 { margin-left: 40%; }
.ml45p-01 { margin-left: 45%; }
.ml50p-01 { margin-left: 50%; }
.ml55p-01 { margin-left: 55%; }
.ml60p-01 { margin-left: 60%; }
.ml65p-01 { margin-left: 65%; }
.ml70p-01 { margin-left: 70%; }
.ml75p-01 { margin-left: 75%; }
.ml80p-01 { margin-left: 80%; }
.ml85p-01 { margin-left: 85%; }
.ml90p-01 { margin-left: 90%; }
.ml95p-01 { margin-left: 95%; }
.ml100p-01 { margin-left: 100%; }
.ba0-01 { border: none; }
.bt0-01 { border-top: none; }
.br0-01 { border-right: none; }
.bb0-01 { border-bottom: none; }
.bl0-01 { border-left: none; }
.ba-01 { border: solid 1px rgba(255, 255, 255, 0.15); }
.bt-01 { border-top: solid 1px rgba(255, 255, 255, 0.15); }
.br-01 { border-right: solid 1px rgba(255, 255, 255, 0.15); }
.bb-01 { border-bottom: solid 1px rgba(255, 255, 255, 0.15); }
.bl-01 { border-left: solid 1px rgba(255, 255, 255, 0.15); }
.bv-01 { border-top: solid 1px rgba(255, 255, 255, 0.15); border-bottom: solid 1px rgba(255, 255, 255, 0.15); }
.bh-01 { border-left: solid 1px rgba(255, 255, 255, 0.15); border-right: solid 1px rgba(255, 255, 255, 0.15); }
.borderNeutralOnFill-01 { border-color: var(--neutralOnFill); }
.borderBlack-01 { border-color: var(--black); }
.borderWhite-01 { border-color: var(--white); }
.borderGreyHighlighted-01 { border-color: var(--greyHighlighted); }
.borderNeutral-01 { border-color: var(--neutral); }
.borderRed-01 { border-color: var(--red); }
.borderTeal-01 { border-color: var(--teal); }
.borderPurple-01 { border-color: var(--purple); }
.borderBlue-01 { border-color: var(--blue); }
.borderOrange-01 { border-color: var(--orange); }
.borderYellow-01 { border-color: var(--yellow); }
.borderGreen-01 { border-color: var(--green); }
.borderPink-01 { border-color: var(--pink); }
.borderGrey-01 { border-color: var(--grey); }
.borderTextNeutral-01 { border-color: var(--textNeutral); }
.borderTextMinimal-01 { border-color: var(--textMinimal); }
.borderDetailNeutral-01 { border-color: var(--detailNeutral); }
.borderDetailMinimal-01 { border-color: var(--detailMinimal); }
.br1-01 { border-radius: 2px; }
.br2-01 { border-radius: 5px; }
.br3-01 { border-radius: 10px; }
.br4-01 { border-radius: 15px; }
.br5-01 { border-radius: 20px; }
.strokeNeutralOnFill-01 { stroke: var(--neutralOnFill); }
.strokeBlack-01 { stroke: var(--black); }
.strokeWhite-01 { stroke: var(--white); }
.strokeGreyHighlighted-01 { stroke: var(--greyHighlighted); }
.strokeNeutral-01 { stroke: var(--neutral); }
.strokeRed-01 { stroke: var(--red); }
.strokeTeal-01 { stroke: var(--teal); }
.strokePurple-01 { stroke: var(--purple); }
.strokeBlue-01 { stroke: var(--blue); }
.strokeOrange-01 { stroke: var(--orange); }
.strokeYellow-01 { stroke: var(--yellow); }
.strokeGreen-01 { stroke: var(--green); }
.strokePink-01 { stroke: var(--pink); }
.strokeGrey-01 { stroke: var(--grey); }
.strokeTextNeutral-01 { stroke: var(--textNeutral); }
.strokeTextMinimal-01 { stroke: var(--textMinimal); }
.strokeDetailNeutral-01 { stroke: var(--detailNeutral); }
.strokeDetailMinimal-01 { stroke: var(--detailMinimal); }
.o0-01 { opacity: 0.00; }
.o5-01 { opacity: 0.05; }
.o10-01 { opacity: 0.10; }
.o15-01 { opacity: 0.15; }
.o20-01 { opacity: 0.20; }
.o25-01 { opacity: 0.25; }
.o30-01 { opacity: 0.30; }
.o35-01 { opacity: 0.35; }
.o40-01 { opacity: 0.40; }
.o45-01 { opacity: 0.45; }
.o50-01 { opacity: 0.50; }
.o55-01 { opacity: 0.55; }
.o60-01 { opacity: 0.60; }
.o65-01 { opacity: 0.65; }
.o70-01 { opacity: 0.70; }
.o75-01 { opacity: 0.75; }
.o80-01 { opacity: 0.80; }
.o85-01 { opacity: 0.85; }
.o90-01 { opacity: 0.90; }
.o95-01 { opacity: 0.95; }
.o100-01 { opacity: 1.00; }
.aShadow-01 { box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.25); }
.tShadow-01 { box-shadow: 0px -15px 25px rgba(0, 0, 0, 0.25); }
.rShadow-01 { box-shadow: 15px 0px 25px rgba(0, 0, 0, 0.25); }
.bShadow-01 { box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.25); }
.lShadow-01 { box-shadow: -15px 0px 25px rgba(0, 0, 0, 0.25); }
.rtShadow-01 { box-shadow: 15px -15px 25px rgba(0, 0, 0, 0.25); }
.rbShadow-01 { box-shadow: 15px 15px 25px rgba(0, 0, 0, 0.25); }
.lbShadow-01 { box-shadow: -15px 15px 25px rgba(0, 0, 0, 0.25); }
.ltShadow-01 { box-shadow: -15px -15px 25px rgba(0, 0, 0, 0.25); }
.rotate0-01 { transform: rotate(0deg); }
.rotate5-01 { transform: rotate(5deg); }
.rotate10-01 { transform: rotate(10deg); }
.rotate15-01 { transform: rotate(15deg); }
.rotate20-01 { transform: rotate(20deg); }
.rotate25-01 { transform: rotate(25deg); }
.rotate30-01 { transform: rotate(30deg); }
.rotate35-01 { transform: rotate(35deg); }
.rotate40-01 { transform: rotate(40deg); }
.rotate45-01 { transform: rotate(45deg); }
.rotate50-01 { transform: rotate(50deg); }
.rotate55-01 { transform: rotate(55deg); }
.rotate60-01 { transform: rotate(60deg); }
.rotate65-01 { transform: rotate(65deg); }
.rotate70-01 { transform: rotate(70deg); }
.rotate75-01 { transform: rotate(75deg); }
.rotate80-01 { transform: rotate(80deg); }
.rotate85-01 { transform: rotate(85deg); }
.rotate90-01 { transform: rotate(90deg); }
.rotate95-01 { transform: rotate(95deg); }
.rotate100-01 { transform: rotate(100deg); }
.rotate105-01 { transform: rotate(105deg); }
.rotate110-01 { transform: rotate(110deg); }
.rotate115-01 { transform: rotate(115deg); }
.rotate120-01 { transform: rotate(120deg); }
.rotate125-01 { transform: rotate(125deg); }
.rotate130-01 { transform: rotate(130deg); }
.rotate135-01 { transform: rotate(135deg); }
.rotate140-01 { transform: rotate(140deg); }
.rotate145-01 { transform: rotate(145deg); }
.rotate150-01 { transform: rotate(150deg); }
.rotate155-01 { transform: rotate(155deg); }
.rotate160-01 { transform: rotate(160deg); }
.rotate165-01 { transform: rotate(165deg); }
.rotate170-01 { transform: rotate(170deg); }
.rotate175-01 { transform: rotate(175deg); }
.rotate180-01 { transform: rotate(180deg); }
.rotate185-01 { transform: rotate(185deg); }
.rotate190-01 { transform: rotate(190deg); }
.rotate195-01 { transform: rotate(195deg); }
.rotate200-01 { transform: rotate(200deg); }
.rotate205-01 { transform: rotate(205deg); }
.rotate210-01 { transform: rotate(210deg); }
.rotate215-01 { transform: rotate(215deg); }
.rotate220-01 { transform: rotate(220deg); }
.rotate225-01 { transform: rotate(225deg); }
.rotate230-01 { transform: rotate(230deg); }
.rotate235-01 { transform: rotate(235deg); }
.rotate240-01 { transform: rotate(240deg); }
.rotate245-01 { transform: rotate(245deg); }
.rotate250-01 { transform: rotate(250deg); }
.rotate255-01 { transform: rotate(255deg); }
.rotate260-01 { transform: rotate(260deg); }
.rotate265-01 { transform: rotate(265deg); }
.rotate270-01 { transform: rotate(270deg); }
.rotate275-01 { transform: rotate(275deg); }
.rotate280-01 { transform: rotate(280deg); }
.rotate285-01 { transform: rotate(285deg); }
.rotate290-01 { transform: rotate(290deg); }
.rotate295-01 { transform: rotate(295deg); }
.rotate300-01 { transform: rotate(300deg); }
.rotate305-01 { transform: rotate(305deg); }
.rotate310-01 { transform: rotate(310deg); }
.rotate315-01 { transform: rotate(315deg); }
.rotate320-01 { transform: rotate(320deg); }
.rotate325-01 { transform: rotate(325deg); }
.rotate330-01 { transform: rotate(330deg); }
.rotate335-01 { transform: rotate(335deg); }
.rotate340-01 { transform: rotate(340deg); }
.rotate345-01 { transform: rotate(345deg); }
.rotate350-01 { transform: rotate(350deg); }
.rotate355-01 { transform: rotate(355deg); }
.rotate360-01 { transform: rotate(360deg); }
.rotate365-01 { transform: rotate(365deg); }
.rotateN0-01 { transform: rotate(-0deg); }
.rotateN5-01 { transform: rotate(-5deg); }
.rotateN10-01 { transform: rotate(-10deg); }
.rotateN15-01 { transform: rotate(-15deg); }
.rotateN20-01 { transform: rotate(-20deg); }
.rotateN25-01 { transform: rotate(-25deg); }
.rotateN30-01 { transform: rotate(-30deg); }
.rotateN35-01 { transform: rotate(-35deg); }
.rotateN40-01 { transform: rotate(-40deg); }
.rotateN45-01 { transform: rotate(-45deg); }
.rotateN50-01 { transform: rotate(-50deg); }
.rotateN55-01 { transform: rotate(-55deg); }
.rotateN60-01 { transform: rotate(-60deg); }
.rotateN65-01 { transform: rotate(-65deg); }
.rotateN70-01 { transform: rotate(-70deg); }
.rotateN75-01 { transform: rotate(-75deg); }
.rotateN80-01 { transform: rotate(-80deg); }
.rotateN85-01 { transform: rotate(-85deg); }
.rotateN90-01 { transform: rotate(-90deg); }
.rotateN95-01 { transform: rotate(-95deg); }
.rotateN100-01 { transform: rotate(-100deg); }
.rotateN105-01 { transform: rotate(-105deg); }
.rotateN110-01 { transform: rotate(-110deg); }
.rotateN115-01 { transform: rotate(-115deg); }
.rotateN120-01 { transform: rotate(-120deg); }
.rotateN125-01 { transform: rotate(-125deg); }
.rotateN130-01 { transform: rotate(-130deg); }
.rotateN135-01 { transform: rotate(-135deg); }
.rotateN140-01 { transform: rotate(-140deg); }
.rotateN145-01 { transform: rotate(-145deg); }
.rotateN150-01 { transform: rotate(-150deg); }
.rotateN155-01 { transform: rotate(-155deg); }
.rotateN160-01 { transform: rotate(-160deg); }
.rotateN165-01 { transform: rotate(-165deg); }
.rotateN170-01 { transform: rotate(-170deg); }
.rotateN175-01 { transform: rotate(-175deg); }
.rotateN180-01 { transform: rotate(-180deg); }
.rotateN185-01 { transform: rotate(-185deg); }
.rotateN190-01 { transform: rotate(-190deg); }
.rotateN195-01 { transform: rotate(-195deg); }
.rotateN200-01 { transform: rotate(-200deg); }
.rotateN205-01 { transform: rotate(-205deg); }
.rotateN210-01 { transform: rotate(-210deg); }
.rotateN215-01 { transform: rotate(-215deg); }
.rotateN220-01 { transform: rotate(-220deg); }
.rotateN225-01 { transform: rotate(-225deg); }
.rotateN230-01 { transform: rotate(-230deg); }
.rotateN235-01 { transform: rotate(-235deg); }
.rotateN240-01 { transform: rotate(-240deg); }
.rotateN245-01 { transform: rotate(-245deg); }
.rotateN250-01 { transform: rotate(-250deg); }
.rotateN255-01 { transform: rotate(-255deg); }
.rotateN260-01 { transform: rotate(-260deg); }
.rotateN265-01 { transform: rotate(-265deg); }
.rotateN270-01 { transform: rotate(-270deg); }
.rotateN275-01 { transform: rotate(-275deg); }
.rotateN280-01 { transform: rotate(-280deg); }
.rotateN285-01 { transform: rotate(-285deg); }
.rotateN290-01 { transform: rotate(-290deg); }
.rotateN295-01 { transform: rotate(-295deg); }
.rotateN300-01 { transform: rotate(-300deg); }
.rotateN305-01 { transform: rotate(-305deg); }
.rotateN310-01 { transform: rotate(-310deg); }
.rotateN315-01 { transform: rotate(-315deg); }
.rotateN320-01 { transform: rotate(-320deg); }
.rotateN325-01 { transform: rotate(-325deg); }
.rotateN330-01 { transform: rotate(-330deg); }
.rotateN335-01 { transform: rotate(-335deg); }
.rotateN340-01 { transform: rotate(-340deg); }
.rotateN345-01 { transform: rotate(-345deg); }
.rotateN350-01 { transform: rotate(-350deg); }
.rotateN355-01 { transform: rotate(-355deg); }
.rotateN360-01 { transform: rotate(-360deg); }
.rotateN365-01 { transform: rotate(-365deg); }
.focusBlack-01:focus { color: var(--black); }
.focusWhite-01:focus { color: var(--white); }
.focusGreyHighlighted-01:focus { color: var(--greyHighlightedAlt); }
.focusNeutral-01:focus { color: var(--neutralAlt); }
.focusRed-01:focus { color: var(--redAlt); }
.focusPurple-01:focus { color: var(--purpleAlt); }
.focusDetailNeutral-01:focus { color: var(--detailNeutral); }
.focusDetailMinimal-01:focus { color: var(--detailMinimal); }
.focusBgBlack-01:focus { background-color: var(--black); fill: var(--black); }
.focusBgWhite-01:focus { background-color: var(--white); fill: var(--white); }
.focusBgGreyHighlighted-01:focus { background-color: var(--greyHighlightedAlt); fill: var(--greyHighlightedAlt); }
.focusBgNeutral-01:focus { background-color: var(--neutralFillAlt); fill: var(--neutralFillAlt); }
.focusBgLevel1-01:focus { background-color: var(--bgLevel1); fill: var(--bgLevel1); }
.focusBgLevel2-01:focus { background-color: var(--bgLevel2); fill: var(--bgLevel2); }
.focusBgLevel3-01:focus { background-color: var(--bgLevel3); fill: var(--bgLevel3); }
.focusBgLevel4-01:focus { background-color: var(--bgLevel4); fill: var(--bgLevel4); }
.focusBgRed-01:focus { background-color: var(--redFillAlt); fill: var(--redFillAlt); }
.focusBgTeal-01:focus { background-color: var(--tealFillAlt); fill: var(--tealFillAlt); }
.focusBgPurple-01:focus { background-color: var(--purpleFillAlt); fill: var(--purpleFillAlt); }
.focusStrokeBlack-01:focus * { stroke: var(--black); }
.focusStrokeWhite-01:focus * { stroke: var(--white); }
.focusStrokeGreyHighlighted-01:focus * { stroke: var(--greyHighlightedAlt); }
.focusStrokeNeutral-01:focus * { stroke: var(--neutralAlt); }
.focusStrokeRed-01:focus * { stroke: var(--redAlt); }
.focusStrokePurple-01:focus * { stroke: var(--purpleAlt); }
.focusStrokeDetailNeutral-01:focus * { stroke: var(--detailNeutral); }
.focusStrokeDetailMinimal-01:focus * { stroke: var(--detailMinimal); }
.focusBorderBlack-01:focus { border-color: var(--black); }
.focusBorderWhite-01:focus { border-color: var(--white); }
.focusBorderGreyHighlighted-01:focus { border-color: var(--greyHighlightedAlt); }
.focusBorderNeutral-01:focus { border-color: var(--neutralAlt); }
.focusBorderRed-01:focus { border-color: var(--redAlt); }
.focusBorderPurple-01:focus { border-color: var(--purpleAlt); }
.focusBorderDetailNeutral-01:focus { border-color: var(--detailNeutral); }
.focusBorderDetailMinimal-01:focus { border-color: var(--detailMinimal); }
.hoverLight-01:hover { font-weight: 300; }
.hoverRegular-01:hover { font-weight: 400; }
.hoverMedium-01:hover { font-weight: 500; }
.hoverBold-01:hover { font-weight: 700; }
.hoverBlack-01:hover { color: var(--black); }
.hoverWhite-01:hover { color: var(--white); }
.hoverGreyHighlighted-01:hover { color: var(--greyHighlightedAlt); }
.hoverNeutral-01:hover { color: var(--neutralAlt); }
.hoverRed-01:hover { color: var(--redAlt); }
.hoverPurple-01:hover { color: var(--purpleAlt); }
.hoverDetailNeutral-01:hover { color: var(--detailNeutral); }
.hoverDetailMinimal-01:hover { color: var(--detailMinimal); }
.hoverBgBlack-01:hover { background-color: var(--black); fill: var(--black); }
.hoverBgWhite-01:hover { background-color: var(--white); fill: var(--white); }
.hoverBgGreyHighlighted-01:hover { background-color: var(--greyHighlightedAlt); fill: var(--greyHighlightedAlt); }
.hoverBgNeutral-01:hover { background-color: var(--neutralFillAlt); fill: var(--neutralFillAlt); }
.hoverBgLevel1-01:hover { background-color: var(--bgLevel1); fill: var(--bgLevel1); }
.hoverBgLevel2-01:hover { background-color: var(--bgLevel2); fill: var(--bgLevel2); }
.hoverBgLevel3-01:hover { background-color: var(--bgLevel3); fill: var(--bgLevel3); }
.hoverBgLevel4-01:hover { background-color: var(--bgLevel4); fill: var(--bgLevel4); }
.hoverBgRed-01:hover { background-color: var(--redFillAlt); fill: var(--redFillAlt); }
.hoverBgTeal-01:hover { background-color: var(--tealFillAlt); fill: var(--tealFillAlt); }
.hoverBgPurple-01:hover { background-color: var(--purpleFillAlt); fill: var(--purpleFillAlt); }
.hoverStrokeBlack-01:hover * { stroke: var(--black); }
.hoverStrokeWhite-01:hover * { stroke: var(--white); }
.hoverStrokeGreyHighlighted-01:hover * { stroke: var(--greyHighlightedAlt); }
.hoverStrokeNeutral-01:hover * { stroke: var(--neutralAlt); }
.hoverStrokeRed-01:hover * { stroke: var(--redAlt); }
.hoverStrokePurple-01:hover * { stroke: var(--purpleAlt); }
.hoverStrokeDetailNeutral-01:hover * { stroke: var(--detailNeutral); }
.hoverStrokeDetailMinimal-01:hover * { stroke: var(--detailMinimal); }
.hoverBorderBlack-01:hover { border-color: var(--black); }
.hoverBorderWhite-01:hover { border-color: var(--white); }
.hoverBorderGreyHighlighted-01:hover { border-color: var(--greyHighlightedAlt); }
.hoverBorderNeutral-01:hover { border-color: var(--neutralAlt); }
.hoverBorderRed-01:hover { border-color: var(--redAlt); }
.hoverBorderPurple-01:hover { border-color: var(--purpleAlt); }
.hoverBorderDetailNeutral-01:hover { border-color: var(--detailNeutral); }
.hoverBorderDetailMinimal-01:hover { border-color: var(--detailMinimal); }
.light-01 { font-weight: 300; }
.regular-01 { font-weight: 400; }
.medium-01 { font-weight: 500; }
.bold-01 { font-weight: 700; }
.bgNone-01 { fill: transparent; background-color: transparent; }
.transparent-01 { color: transparent; }
.vHidden-01 { visibility: hidden; }
.flexWrap-01 { display: flex; flex-wrap: wrap; }
.flexNoWrap-01 { display: flex; flex-wrap: nowrap; }
.flexRow-01 { display: flex; flex-direction: row; }
.flexColumn-01 { display: flex; flex-direction: column; }
.noShrink-01 { flex-shrink: 0; }
.gridRowAuto-01 { grid-row: auto; }
.gridColumnAuto-01 { grid-column: auto; }
.selfStart-01 { align-self: flex-start; }
.selfCenter-01 { align-self: center; }
.selfEnd-01 { align-self: flex-end; }
.selfStretch-01 { align-self: stretch; }
.visible-01 { overflow: visible; }
.visibleX-01 { overflow-x: visible; }
.visibleY-01 { overflow-y: visible; }
.scroll-01 { overflow: auto; }
.scrollX-01 { overflow-x: auto; }
.scrollY-01 { overflow-y: auto; }
.scrollAlways-01 { overflow: scroll; }
.scrollXAlways-01 { overflow-x: scroll; }
.scrollYAlways-01 { overflow-y: scroll; }
.noOverflow-01 { overflow: hidden; }
.fMono-01 { font-family: 'IBM Plex Mono', monospace; }
.fSans-01 { font-family: 'IBM Plex Sans', sans-serif; }
.fs48px-01 { font-size: 48px; }
.fs60px-01 { font-size: 60px; }
.italic-01 { font-style: italic; }
.lhDouble-01 { line-height:1.5em; }
.ellipsis-01 { text-overflow: ellipsis; white-space: nowrap; overflow: hidden; }
.lineClamp1-01 { display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical; overflow: hidden; }
.pre-01 { white-space: pre; }
.preLine-01 { white-space: pre-line; }
.preWrap-01 { white-space: pre-wrap; }
.noWrap-01 { white-space: nowrap; }
.breakAll-01 { word-break: break-all; }
.breakWord-01 { word-break: break-word; }
.noDecoration-01 { text-decoration: none; }
.hyphens-01 { hyphens: auto; }
.hyphensMan-01 { hyphens: manual; }
.wAuto-01 { width: auto; }
.wFitContent-01 { width: fit-content; }
.w100vw-01 { width: 100vw; }
.minW100vw-01 { min-width: 100vw; }
.maxW100vw-01 { max-width: 100vw; }
.wThird-01 { width: calc(100% / 3); }
.minWThird-01 { min-width: calc(100% / 3); }
.maxWThird-01 { max-width: calc(100% / 3); }
.wHalf-01 { width: 48%; }
.minWHalf-01 { min-width: 48%; }
.maxWHalf-01 { max-width: 48%; }
.hAuto-01 { height: auto; }
.h0-01 { height: 0; }
.h100vh-01 { height: 100vh; }
.h50vh-01 { height: 50vh; }
.hFitContent-01 { height: fit-content; }
.minH100vh-01 { min-height: 100vh; }
.hThird-01 { height: calc(100% / 3); }
.minHThird-01 { min-height: calc(100% / 3); }
.maxHThird-01 { max-height: calc(100% / 3); }
.hHalf-01 { height: 48%; }
.minHHalf-01 { min-height: 48%; }
.maxHHalf-01 { max-height: 48%; }
.maAuto-01 { margin: auto; }
.ma0-01 { margin: 0; }
.mvAuto-01 { margin-top: auto; margin-bottom: auto; }
.mv0-01 { margin-top: 0; margin-bottom: 0; }
.mhAuto-01 { margin-left: auto; margin-right: auto; }
.mh0-01 { margin-left: 0; margin-right: 0; }
.mtAuto-01 { margin-top: auto; }
.mt0-01 { margin-top: 0; }
.mrAuto-01 { margin-right: auto; }
.mr0-01 { margin-right: 0; }
.mbAuto-01 { margin-bottom: auto; }
.mb0-01 { margin-bottom: 0; }
.mlAuto-01 { margin-left: auto; }
.ml0-01 { margin-left: 0; }
.pa0-01 { padding: 0; }
.pv0-01 { padding-top: 0; padding-bottom: 0; }
.ph0-01 { padding-left: 0; padding-right: 0; }
.pt0-01 { padding-top: 0; }
.pr0-01 { padding-right: 0; }
.pb0-01 { padding-bottom: 0; }
.pl0-01 { padding-left: 0; }
.paMin-01 { padding: 2px; }
.ptMin-01 { padding-top: 2px; }
.prMin-01 { padding-right: 2px; }
.pbMin-01 { padding-bottom: 2px; }
.plMin-01 { padding-left: 2px; }
.pvMin-01 { padding-top: 2px; padding-bottom: 2px; }
.phMin-01 { padding-left: 2px; padding-right: 2px; }
.br50p-01 { border-radius: 50%; }
.baWhite-01 { border: solid 1px white; }
.baTransparent-01 { border: solid 1px transparent; }
.baBlack-01 { border: solid 1px rgba(0, 0, 0, 0.1); }
.btBlack-01 { border-top: solid 1px rgba(0, 0, 0, 0.1); }
.btWhite-01 { border-top: solid 1px white; }
.brBlack-01 { border-right: solid 1px rgba(0, 0, 0, 0.1); }
.bbTransparent-01 { border-bottom: solid 1px transparent; }
.bbBlack-01 { border-bottom: solid 1px rgba(0, 0, 0, 0.1); }
.bbWhite-01 { border-bottom: solid 1px white; }
.bbPurple-01 { border-bottom: solid 1px var(--purple); }
.bbPurple2-01 { border-bottom: solid 2px var(--purple); }
.blBlack-01 { border-left: solid 1px rgba(0, 0, 0, 0.1); }
.ol0-01 { outline: none; }
.noShadow-01 { box-shadow: none; }
.shadowInset-01 { box-shadow: inset 0 15px 20px rgba(0, 0, 0, 0.25); }
.aShadowInset-01 { box-shadow: inset 0 0px 15px rgba(0, 0, 0, 0.5); }
.rShadowInset-01 { box-shadow: inset 10px 0px 15px rgba(0, 0, 0, 0.25); }
.lShadowInset-01 { box-shadow: inset 10px 0px -15px rgba(0, 0, 0, 0.25); }
.tShadowInset-01 { box-shadow: inset 10px 15px 0px rgba(0, 0, 0, 0.25); }
.bShadowInset-01 { box-shadow: inset 10px -15px 0px rgba(0, 0, 0, 0.25); }
.bhShadow-01 { box-shadow: 25px 25px 25px rgba(0, 0, 0, 0.25), -25px 25px 25px rgba(0, 0, 0, 0.25); }
.shadowLight-01 { box-shadow: 0 0 50px var(--white); }
.pointer-01 { cursor: pointer; }
.cursor-01 { cursor: default; }
.move-01 { cursor: move; }
.animate-01 { transition: all 0.2s ease-in-out; }
.animateColor-01 { transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out; }
.animateOpacity-01 { transition: opacity 0.2s ease-in-out; }
.inactive-01 { cursor: default; opacity: 0.3;; }
.noEvent-01 { pointer-events: none; }
.eventAuto-01 { pointer-events: auto; }
.noSelect-01 { user-select: none; }
.bgWhiteRadialGradient-01 { background: radial-gradient(
    rgba(255, 255, 255, 1),
    rgba(255, 255, 255, 0.5) 20%,
    rgba(255, 255, 255, 0.25) 40%,
    rgba(255, 255, 255, 0) 70%
  );
  margin-left: -5px; }
.t10p-01 { top: 10%; }
.t15p-01 { top: 15%; }
.l10p-01 { left: 10%; }
.l25p-01 { left: 25%; }
.hoverO0-01:hover { opacity: 0; }
.hoverO100-01:hover { opacity: 1; }
.hoverU-01:hover { border-bottom: solid 1px var(--white); }
.hoverShadow-01:hover { box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.25); }
.hoverChildPurple-01:hover * { color: var(--purpleAlt); fill: var(--purpleAlt); }
.hoverTransparentBorder-01:hover { border-color: transparent; }
.noScrollbar-01::-webkit-scrollbar { display: none; }
.outlineWhite-01:focus { box-shadow: 0 0 15px 1px var(--white); background: var(--white); color: var(--grey90); }
.firstLetterCap-01::first-letter { text-transform: uppercase; }
/* extra large screens */
@media (min-width: 1700px) {
  .neutralOnFill_xl-01 { color: var(--neutralOnFill); }
  .black_xl-01 { color: var(--black); }
  .white_xl-01 { color: var(--white); }
  .greyHighlighted_xl-01 { color: var(--greyHighlighted); }
  .neutral_xl-01 { color: var(--neutral); }
  .red_xl-01 { color: var(--red); }
  .teal_xl-01 { color: var(--teal); }
  .purple_xl-01 { color: var(--purple); }
  .blue_xl-01 { color: var(--blue); }
  .orange_xl-01 { color: var(--orange); }
  .yellow_xl-01 { color: var(--yellow); }
  .green_xl-01 { color: var(--green); }
  .pink_xl-01 { color: var(--pink); }
  .grey_xl-01 { color: var(--grey); }
  .textNeutral_xl-01 { color: var(--textNeutral); }
  .textMinimal_xl-01 { color: var(--textMinimal); }
  .detailNeutral_xl-01 { color: var(--detailNeutral); }
  .detailMinimal_xl-01 { color: var(--detailMinimal); }
  .bgBlack_xl-01 { fill: var--(black); background-color: var(--black); }
  .bgWhite_xl-01 { fill: var--(white); background-color: var(--white); }
  .bgGreyHighlighted_xl-01 { fill: var--(greyHighlighted); background-color: var(--greyHighlighted); }
  .bgNeutral_xl-01 { fill: var--(neutralFill); background-color: var(--neutralFill); }
  .bgLevel1_xl-01 { fill: var--(bgLevel1); background-color: var(--bgLevel1); }
  .bgLevel2_xl-01 { fill: var--(bgLevel2); background-color: var(--bgLevel2); }
  .bgLevel3_xl-01 { fill: var--(bgLevel3); background-color: var(--bgLevel3); }
  .bgLevel4_xl-01 { fill: var--(bgLevel4); background-color: var(--bgLevel4); }
  .bgRed_xl-01 { fill: var--(redFill); background-color: var(--redFill); }
  .bgTeal_xl-01 { fill: var--(tealFill); background-color: var(--tealFill); }
  .bgPurple_xl-01 { fill: var--(purpleFill); background-color: var(--purpleFill); }
  .bgBlue_xl-01 { fill: var--(blueFill); background-color: var(--blueFill); }
  .bgOrange_xl-01 { fill: var--(orangeFill); background-color: var(--orangeFill); }
  .bgYellow_xl-01 { fill: var--(yellowFill); background-color: var(--yellowFill); }
  .bgGreen_xl-01 { fill: var--(greenFill); background-color: var(--greenFill); }
  .bgPink_xl-01 { fill: var--(pinkFill); background-color: var(--pinkFill); }
  .bgGrey_xl-01 { fill: var--(greyFill); background-color: var(--greyFill); }
  .fixed_xl-01 { position: fixed; }
  .relative_xl-01 { position: relative; }
  .absolute_xl-01 { position: absolute; }
  .l0_xl-01 { left: 0; }
  .r0_xl-01 { right: 0; }
  .t0_xl-01 { top: 0; }
  .b0_xl-01 { bottom: 0; }
  .hidden_xl-01 { display: none; }
  .block_xl-01 { display: block; }
  .inlineBlock_xl-01 { display: inline-block; }
  .inlineFlex_xl-01 { display: inline-flex; }
  .flex_xl-01 { display: flex; }
  .flex0_xl-01 { flex: 0; }
  .flex1_xl-01 { flex: 1; }
  .flex2_xl-01 { flex: 2; }
  .flex3_xl-01 { flex: 3; }
  .flex4_xl-01 { flex: 4; }
  .flex5_xl-01 { flex: 5; }
  .flex6_xl-01 { flex: 6; }
  .flex7_xl-01 { flex: 7; }
  .flex8_xl-01 { flex: 8; }
  .flex9_xl-01 { flex: 9; }
  .flex10_xl-01 { flex: 10; }
  .justifyStart_xl-01 { display: flex; justify-content: flex-start; }
  .justifyCenter_xl-01 { display: flex; justify-content: center; }
  .justifyEnd_xl-01 { display: flex; justify-content: flex-end; }
  .justifyBetween_xl-01 { display: flex; justify-content: space-between; }
  .justifyAround_xl-01 { display: flex; justify-content: space-around; }
  .justifyBaseline_xl-01 { display: flex; justify-content: baseline; }
  .justifyEvenly_xl-01 { display: flex; justify-content: space-evenly; }
  .justifyStretch_xl-01 { display: flex; justify-content: stretch; }
  .alignStart_xl-01 { display: flex; align-items: flex-start; }
  .alignCenter_xl-01 { display: flex; align-items: center; }
  .alignEnd_xl-01 { display: flex; align-items: flex-end; }
  .alignBetween_xl-01 { display: flex; align-items: space-between; }
  .alignAround_xl-01 { display: flex; align-items: space-around; }
  .alignBaseline_xl-01 { display: flex; align-items: baseline; }
  .alignStretch_xl-01 { display: flex; align-items: stretch; }
  .flexGrow0_xl-01 { flex-grow: 0; }
  .flexGrow1_xl-01 { flex-grow: 1; }
  .flexGrow2_xl-01 { flex-grow: 2; }
  .flexGrow3_xl-01 { flex-grow: 3; }
  .flexGrow4_xl-01 { flex-grow: 4; }
  .flexGrow5_xl-01 { flex-grow: 5; }
  .flexShrink0_xl-01 { flex-shrink: 0; }
  .flexShrink1_xl-01 { flex-shrink: 1; }
  .flexShrink2_xl-01 { flex-shrink: 2; }
  .flexShrink3_xl-01 { flex-shrink: 3; }
  .flexShrink4_xl-01 { flex-shrink: 4; }
  .flexShrink5_xl-01 { flex-shrink: 5; }
  .order1_xl-01 { order: 1; }
  .order2_xl-01 { order: 2; }
  .order3_xl-01 { order: 3; }
  .order4_xl-01 { order: 4; }
  .order5_xl-01 { order: 5; }
  .order6_xl-01 { order: 6; }
  .order7_xl-01 { order: 7; }
  .order8_xl-01 { order: 8; }
  .order9_xl-01 { order: 9; }
  .order10_xl-01 { order: 10; }
  .zi0_xl-01 { z-index: 0; }
  .zi1_xl-01 { z-index: 1; }
  .zi2_xl-01 { z-index: 2; }
  .zi3_xl-01 { z-index: 3; }
  .zi4_xl-01 { z-index: 4; }
  .zi5_xl-01 { z-index: 5; }
  .zi6_xl-01 { z-index: 6; }
  .zi7_xl-01 { z-index: 7; }
  .zi8_xl-01 { z-index: 8; }
  .zi9_xl-01 { z-index: 9; }
  .zi10_xl-01 { z-index: 10; }
  .zi11_xl-01 { z-index: 11; }
  .zi12_xl-01 { z-index: 12; }
  .zi13_xl-01 { z-index: 13; }
  .zi14_xl-01 { z-index: 14; }
  .zi15_xl-01 { z-index: 15; }
  .zi16_xl-01 { z-index: 16; }
  .zi17_xl-01 { z-index: 17; }
  .zi18_xl-01 { z-index: 18; }
  .zi19_xl-01 { z-index: 19; }
  .zi20_xl-01 { z-index: 20; }
  .zi21_xl-01 { z-index: 21; }
  .zi22_xl-01 { z-index: 22; }
  .zi23_xl-01 { z-index: 23; }
  .zi24_xl-01 { z-index: 24; }
  .zi25_xl-01 { z-index: 25; }
  .zi26_xl-01 { z-index: 26; }
  .zi27_xl-01 { z-index: 27; }
  .zi28_xl-01 { z-index: 28; }
  .zi29_xl-01 { z-index: 29; }
  .zi30_xl-01 { z-index: 30; }
  .zi31_xl-01 { z-index: 31; }
  .zi32_xl-01 { z-index: 32; }
  .zi33_xl-01 { z-index: 33; }
  .zi34_xl-01 { z-index: 34; }
  .zi35_xl-01 { z-index: 35; }
  .zi36_xl-01 { z-index: 36; }
  .zi37_xl-01 { z-index: 37; }
  .zi38_xl-01 { z-index: 38; }
  .zi39_xl-01 { z-index: 39; }
  .zi40_xl-01 { z-index: 40; }
  .zi41_xl-01 { z-index: 41; }
  .zi42_xl-01 { z-index: 42; }
  .zi43_xl-01 { z-index: 43; }
  .zi44_xl-01 { z-index: 44; }
  .zi45_xl-01 { z-index: 45; }
  .zi46_xl-01 { z-index: 46; }
  .zi47_xl-01 { z-index: 47; }
  .zi48_xl-01 { z-index: 48; }
  .zi49_xl-01 { z-index: 49; }
  .zi50_xl-01 { z-index: 50; }
  .fs1_xl-01 { font-size: 4rem; }
  .fs2_xl-01 { font-size: 2.5rem; }
  .fs3_xl-01 { font-size: 1.5rem; }
  .fs4_xl-01 { font-size: 1.25rem; }
  .fs5_xl-01 { font-size: 1rem; }
  .fs6_xl-01 { font-size: 0.9rem; }
  .fs7_xl-01 { font-size: 0.75rem; }
  .textLeft_xl-01 { text-align: left; }
  .textCenter_xl-01 { text-align: center; }
  .textRight_xl-01 { text-align: right; }
  .textEnd_xl-01 { text-align: end; }
  .lh1_xl-01 { line-height: 1; }
  .lh2_xl-01 { line-height: 1.25; }
  .lh3_xl-01 { line-height: 1.5; }
  .lh4_xl-01 { line-height: 1.75; }
  .lh5_xl-01 { line-height: 2; }
  .lh6_xl-01 { line-height: 2.25; }
  .lh1px_xl-01 { line-height: var(--px1); }
  .lh2px_xl-01 { line-height: var(--px2); }
  .lh3px_xl-01 { line-height: var(--px3); }
  .lh4px_xl-01 { line-height: var(--px4); }
  .lh5px_xl-01 { line-height: var(--px5); }
  .lh6px_xl-01 { line-height: var(--px6); }
  .lh7px_xl-01 { line-height: var(--px7); }
  .lh8px_xl-01 { line-height: var(--px8); }
  .lh9px_xl-01 { line-height: var(--px9); }
  .lh10px_xl-01 { line-height: var(--px10); }
  .lh11px_xl-01 { line-height: var(--px11); }
  .lh12px_xl-01 { line-height: var(--px12); }
  .lh13px_xl-01 { line-height: var(--px13); }
  .lh14px_xl-01 { line-height: var(--px14); }
  .lh15px_xl-01 { line-height: var(--px15); }
  .lh16px_xl-01 { line-height: var(--px16); }
  .lh17px_xl-01 { line-height: var(--px17); }
  .lh18px_xl-01 { line-height: var(--px18); }
  .lh19px_xl-01 { line-height: var(--px19); }
  .lh20px_xl-01 { line-height: var(--px20); }
  .ls1_xl-01 { letter-spacing: 0.03em; }
  .ls2_xl-01 { letter-spacing: 0.02em; }
  .ls3_xl-01 { letter-spacing: 0.015em; }
  .uppercase_xl-01 { text-transform: uppercase; }
  .lowercase_xl-01 { text-transform: lowercase; }
  .capitalize_xl-01 { text-transform: capitalize; }
  .gridRow0_xl-01 { grid-row: 0; }
  .gridRow1_xl-01 { grid-row: 1; }
  .gridRow2_xl-01 { grid-row: 2; }
  .gridRow3_xl-01 { grid-row: 3; }
  .gridRow4_xl-01 { grid-row: 4; }
  .gridRow5_xl-01 { grid-row: 5; }
  .gridRow6_xl-01 { grid-row: 6; }
  .gridRow7_xl-01 { grid-row: 7; }
  .gridRow8_xl-01 { grid-row: 8; }
  .gridRow9_xl-01 { grid-row: 9; }
  .gridRow10_xl-01 { grid-row: 10; }
  .gridRow11_xl-01 { grid-row: 11; }
  .gridRow12_xl-01 { grid-row: 12; }
  .gridRow0to0_xl-01 { grid-row: 0 / 0; }
  .gridRow0to1_xl-01 { grid-row: 0 / 1; }
  .gridRow0to2_xl-01 { grid-row: 0 / 2; }
  .gridRow0to3_xl-01 { grid-row: 0 / 3; }
  .gridRow0to4_xl-01 { grid-row: 0 / 4; }
  .gridRow0to5_xl-01 { grid-row: 0 / 5; }
  .gridRow0to6_xl-01 { grid-row: 0 / 6; }
  .gridRow0to7_xl-01 { grid-row: 0 / 7; }
  .gridRow0to8_xl-01 { grid-row: 0 / 8; }
  .gridRow0to9_xl-01 { grid-row: 0 / 9; }
  .gridRow0to10_xl-01 { grid-row: 0 / 10; }
  .gridRow0to11_xl-01 { grid-row: 0 / 11; }
  .gridRow0to12_xl-01 { grid-row: 0 / 12; }
  .gridRow1to0_xl-01 { grid-row: 1 / 0; }
  .gridRow1to1_xl-01 { grid-row: 1 / 1; }
  .gridRow1to2_xl-01 { grid-row: 1 / 2; }
  .gridRow1to3_xl-01 { grid-row: 1 / 3; }
  .gridRow1to4_xl-01 { grid-row: 1 / 4; }
  .gridRow1to5_xl-01 { grid-row: 1 / 5; }
  .gridRow1to6_xl-01 { grid-row: 1 / 6; }
  .gridRow1to7_xl-01 { grid-row: 1 / 7; }
  .gridRow1to8_xl-01 { grid-row: 1 / 8; }
  .gridRow1to9_xl-01 { grid-row: 1 / 9; }
  .gridRow1to10_xl-01 { grid-row: 1 / 10; }
  .gridRow1to11_xl-01 { grid-row: 1 / 11; }
  .gridRow1to12_xl-01 { grid-row: 1 / 12; }
  .gridRow2to0_xl-01 { grid-row: 2 / 0; }
  .gridRow2to1_xl-01 { grid-row: 2 / 1; }
  .gridRow2to2_xl-01 { grid-row: 2 / 2; }
  .gridRow2to3_xl-01 { grid-row: 2 / 3; }
  .gridRow2to4_xl-01 { grid-row: 2 / 4; }
  .gridRow2to5_xl-01 { grid-row: 2 / 5; }
  .gridRow2to6_xl-01 { grid-row: 2 / 6; }
  .gridRow2to7_xl-01 { grid-row: 2 / 7; }
  .gridRow2to8_xl-01 { grid-row: 2 / 8; }
  .gridRow2to9_xl-01 { grid-row: 2 / 9; }
  .gridRow2to10_xl-01 { grid-row: 2 / 10; }
  .gridRow2to11_xl-01 { grid-row: 2 / 11; }
  .gridRow2to12_xl-01 { grid-row: 2 / 12; }
  .gridRow3to0_xl-01 { grid-row: 3 / 0; }
  .gridRow3to1_xl-01 { grid-row: 3 / 1; }
  .gridRow3to2_xl-01 { grid-row: 3 / 2; }
  .gridRow3to3_xl-01 { grid-row: 3 / 3; }
  .gridRow3to4_xl-01 { grid-row: 3 / 4; }
  .gridRow3to5_xl-01 { grid-row: 3 / 5; }
  .gridRow3to6_xl-01 { grid-row: 3 / 6; }
  .gridRow3to7_xl-01 { grid-row: 3 / 7; }
  .gridRow3to8_xl-01 { grid-row: 3 / 8; }
  .gridRow3to9_xl-01 { grid-row: 3 / 9; }
  .gridRow3to10_xl-01 { grid-row: 3 / 10; }
  .gridRow3to11_xl-01 { grid-row: 3 / 11; }
  .gridRow3to12_xl-01 { grid-row: 3 / 12; }
  .gridRow4to0_xl-01 { grid-row: 4 / 0; }
  .gridRow4to1_xl-01 { grid-row: 4 / 1; }
  .gridRow4to2_xl-01 { grid-row: 4 / 2; }
  .gridRow4to3_xl-01 { grid-row: 4 / 3; }
  .gridRow4to4_xl-01 { grid-row: 4 / 4; }
  .gridRow4to5_xl-01 { grid-row: 4 / 5; }
  .gridRow4to6_xl-01 { grid-row: 4 / 6; }
  .gridRow4to7_xl-01 { grid-row: 4 / 7; }
  .gridRow4to8_xl-01 { grid-row: 4 / 8; }
  .gridRow4to9_xl-01 { grid-row: 4 / 9; }
  .gridRow4to10_xl-01 { grid-row: 4 / 10; }
  .gridRow4to11_xl-01 { grid-row: 4 / 11; }
  .gridRow4to12_xl-01 { grid-row: 4 / 12; }
  .gridRow5to0_xl-01 { grid-row: 5 / 0; }
  .gridRow5to1_xl-01 { grid-row: 5 / 1; }
  .gridRow5to2_xl-01 { grid-row: 5 / 2; }
  .gridRow5to3_xl-01 { grid-row: 5 / 3; }
  .gridRow5to4_xl-01 { grid-row: 5 / 4; }
  .gridRow5to5_xl-01 { grid-row: 5 / 5; }
  .gridRow5to6_xl-01 { grid-row: 5 / 6; }
  .gridRow5to7_xl-01 { grid-row: 5 / 7; }
  .gridRow5to8_xl-01 { grid-row: 5 / 8; }
  .gridRow5to9_xl-01 { grid-row: 5 / 9; }
  .gridRow5to10_xl-01 { grid-row: 5 / 10; }
  .gridRow5to11_xl-01 { grid-row: 5 / 11; }
  .gridRow5to12_xl-01 { grid-row: 5 / 12; }
  .gridRow6to0_xl-01 { grid-row: 6 / 0; }
  .gridRow6to1_xl-01 { grid-row: 6 / 1; }
  .gridRow6to2_xl-01 { grid-row: 6 / 2; }
  .gridRow6to3_xl-01 { grid-row: 6 / 3; }
  .gridRow6to4_xl-01 { grid-row: 6 / 4; }
  .gridRow6to5_xl-01 { grid-row: 6 / 5; }
  .gridRow6to6_xl-01 { grid-row: 6 / 6; }
  .gridRow6to7_xl-01 { grid-row: 6 / 7; }
  .gridRow6to8_xl-01 { grid-row: 6 / 8; }
  .gridRow6to9_xl-01 { grid-row: 6 / 9; }
  .gridRow6to10_xl-01 { grid-row: 6 / 10; }
  .gridRow6to11_xl-01 { grid-row: 6 / 11; }
  .gridRow6to12_xl-01 { grid-row: 6 / 12; }
  .gridRow7to0_xl-01 { grid-row: 7 / 0; }
  .gridRow7to1_xl-01 { grid-row: 7 / 1; }
  .gridRow7to2_xl-01 { grid-row: 7 / 2; }
  .gridRow7to3_xl-01 { grid-row: 7 / 3; }
  .gridRow7to4_xl-01 { grid-row: 7 / 4; }
  .gridRow7to5_xl-01 { grid-row: 7 / 5; }
  .gridRow7to6_xl-01 { grid-row: 7 / 6; }
  .gridRow7to7_xl-01 { grid-row: 7 / 7; }
  .gridRow7to8_xl-01 { grid-row: 7 / 8; }
  .gridRow7to9_xl-01 { grid-row: 7 / 9; }
  .gridRow7to10_xl-01 { grid-row: 7 / 10; }
  .gridRow7to11_xl-01 { grid-row: 7 / 11; }
  .gridRow7to12_xl-01 { grid-row: 7 / 12; }
  .gridRow8to0_xl-01 { grid-row: 8 / 0; }
  .gridRow8to1_xl-01 { grid-row: 8 / 1; }
  .gridRow8to2_xl-01 { grid-row: 8 / 2; }
  .gridRow8to3_xl-01 { grid-row: 8 / 3; }
  .gridRow8to4_xl-01 { grid-row: 8 / 4; }
  .gridRow8to5_xl-01 { grid-row: 8 / 5; }
  .gridRow8to6_xl-01 { grid-row: 8 / 6; }
  .gridRow8to7_xl-01 { grid-row: 8 / 7; }
  .gridRow8to8_xl-01 { grid-row: 8 / 8; }
  .gridRow8to9_xl-01 { grid-row: 8 / 9; }
  .gridRow8to10_xl-01 { grid-row: 8 / 10; }
  .gridRow8to11_xl-01 { grid-row: 8 / 11; }
  .gridRow8to12_xl-01 { grid-row: 8 / 12; }
  .gridRow9to0_xl-01 { grid-row: 9 / 0; }
  .gridRow9to1_xl-01 { grid-row: 9 / 1; }
  .gridRow9to2_xl-01 { grid-row: 9 / 2; }
  .gridRow9to3_xl-01 { grid-row: 9 / 3; }
  .gridRow9to4_xl-01 { grid-row: 9 / 4; }
  .gridRow9to5_xl-01 { grid-row: 9 / 5; }
  .gridRow9to6_xl-01 { grid-row: 9 / 6; }
  .gridRow9to7_xl-01 { grid-row: 9 / 7; }
  .gridRow9to8_xl-01 { grid-row: 9 / 8; }
  .gridRow9to9_xl-01 { grid-row: 9 / 9; }
  .gridRow9to10_xl-01 { grid-row: 9 / 10; }
  .gridRow9to11_xl-01 { grid-row: 9 / 11; }
  .gridRow9to12_xl-01 { grid-row: 9 / 12; }
  .gridRow10to0_xl-01 { grid-row: 10 / 0; }
  .gridRow10to1_xl-01 { grid-row: 10 / 1; }
  .gridRow10to2_xl-01 { grid-row: 10 / 2; }
  .gridRow10to3_xl-01 { grid-row: 10 / 3; }
  .gridRow10to4_xl-01 { grid-row: 10 / 4; }
  .gridRow10to5_xl-01 { grid-row: 10 / 5; }
  .gridRow10to6_xl-01 { grid-row: 10 / 6; }
  .gridRow10to7_xl-01 { grid-row: 10 / 7; }
  .gridRow10to8_xl-01 { grid-row: 10 / 8; }
  .gridRow10to9_xl-01 { grid-row: 10 / 9; }
  .gridRow10to10_xl-01 { grid-row: 10 / 10; }
  .gridRow10to11_xl-01 { grid-row: 10 / 11; }
  .gridRow10to12_xl-01 { grid-row: 10 / 12; }
  .gridRow11to0_xl-01 { grid-row: 11 / 0; }
  .gridRow11to1_xl-01 { grid-row: 11 / 1; }
  .gridRow11to2_xl-01 { grid-row: 11 / 2; }
  .gridRow11to3_xl-01 { grid-row: 11 / 3; }
  .gridRow11to4_xl-01 { grid-row: 11 / 4; }
  .gridRow11to5_xl-01 { grid-row: 11 / 5; }
  .gridRow11to6_xl-01 { grid-row: 11 / 6; }
  .gridRow11to7_xl-01 { grid-row: 11 / 7; }
  .gridRow11to8_xl-01 { grid-row: 11 / 8; }
  .gridRow11to9_xl-01 { grid-row: 11 / 9; }
  .gridRow11to10_xl-01 { grid-row: 11 / 10; }
  .gridRow11to11_xl-01 { grid-row: 11 / 11; }
  .gridRow11to12_xl-01 { grid-row: 11 / 12; }
  .gridRow12to0_xl-01 { grid-row: 12 / 0; }
  .gridRow12to1_xl-01 { grid-row: 12 / 1; }
  .gridRow12to2_xl-01 { grid-row: 12 / 2; }
  .gridRow12to3_xl-01 { grid-row: 12 / 3; }
  .gridRow12to4_xl-01 { grid-row: 12 / 4; }
  .gridRow12to5_xl-01 { grid-row: 12 / 5; }
  .gridRow12to6_xl-01 { grid-row: 12 / 6; }
  .gridRow12to7_xl-01 { grid-row: 12 / 7; }
  .gridRow12to8_xl-01 { grid-row: 12 / 8; }
  .gridRow12to9_xl-01 { grid-row: 12 / 9; }
  .gridRow12to10_xl-01 { grid-row: 12 / 10; }
  .gridRow12to11_xl-01 { grid-row: 12 / 11; }
  .gridRow12to12_xl-01 { grid-row: 12 / 12; }
  .gridRowSpan0_xl-01 { grid-row: auto / span 0; }
  .gridRowSpan1_xl-01 { grid-row: auto / span 1; }
  .gridRowSpan2_xl-01 { grid-row: auto / span 2; }
  .gridRowSpan3_xl-01 { grid-row: auto / span 3; }
  .gridRowSpan4_xl-01 { grid-row: auto / span 4; }
  .gridRowSpan5_xl-01 { grid-row: auto / span 5; }
  .gridRowSpan6_xl-01 { grid-row: auto / span 6; }
  .gridRowSpan7_xl-01 { grid-row: auto / span 7; }
  .gridRowSpan8_xl-01 { grid-row: auto / span 8; }
  .gridRowSpan9_xl-01 { grid-row: auto / span 9; }
  .gridRowSpan10_xl-01 { grid-row: auto / span 10; }
  .gridColumn0_xl-01 { grid-column: 0; }
  .gridColumn1_xl-01 { grid-column: 1; }
  .gridColumn2_xl-01 { grid-column: 2; }
  .gridColumn3_xl-01 { grid-column: 3; }
  .gridColumn4_xl-01 { grid-column: 4; }
  .gridColumn5_xl-01 { grid-column: 5; }
  .gridColumn6_xl-01 { grid-column: 6; }
  .gridColumn7_xl-01 { grid-column: 7; }
  .gridColumn8_xl-01 { grid-column: 8; }
  .gridColumn9_xl-01 { grid-column: 9; }
  .gridColumn10_xl-01 { grid-column: 10; }
  .gridColumn11_xl-01 { grid-column: 11; }
  .gridColumn12_xl-01 { grid-column: 12; }
  .gridColumn0to0_xl-01 { grid-column: 0 / 0; }
  .gridColumn0to1_xl-01 { grid-column: 0 / 1; }
  .gridColumn0to2_xl-01 { grid-column: 0 / 2; }
  .gridColumn0to3_xl-01 { grid-column: 0 / 3; }
  .gridColumn0to4_xl-01 { grid-column: 0 / 4; }
  .gridColumn0to5_xl-01 { grid-column: 0 / 5; }
  .gridColumn0to6_xl-01 { grid-column: 0 / 6; }
  .gridColumn0to7_xl-01 { grid-column: 0 / 7; }
  .gridColumn0to8_xl-01 { grid-column: 0 / 8; }
  .gridColumn0to9_xl-01 { grid-column: 0 / 9; }
  .gridColumn0to10_xl-01 { grid-column: 0 / 10; }
  .gridColumn0to11_xl-01 { grid-column: 0 / 11; }
  .gridColumn0to12_xl-01 { grid-column: 0 / 12; }
  .gridColumn1to0_xl-01 { grid-column: 1 / 0; }
  .gridColumn1to1_xl-01 { grid-column: 1 / 1; }
  .gridColumn1to2_xl-01 { grid-column: 1 / 2; }
  .gridColumn1to3_xl-01 { grid-column: 1 / 3; }
  .gridColumn1to4_xl-01 { grid-column: 1 / 4; }
  .gridColumn1to5_xl-01 { grid-column: 1 / 5; }
  .gridColumn1to6_xl-01 { grid-column: 1 / 6; }
  .gridColumn1to7_xl-01 { grid-column: 1 / 7; }
  .gridColumn1to8_xl-01 { grid-column: 1 / 8; }
  .gridColumn1to9_xl-01 { grid-column: 1 / 9; }
  .gridColumn1to10_xl-01 { grid-column: 1 / 10; }
  .gridColumn1to11_xl-01 { grid-column: 1 / 11; }
  .gridColumn1to12_xl-01 { grid-column: 1 / 12; }
  .gridColumn2to0_xl-01 { grid-column: 2 / 0; }
  .gridColumn2to1_xl-01 { grid-column: 2 / 1; }
  .gridColumn2to2_xl-01 { grid-column: 2 / 2; }
  .gridColumn2to3_xl-01 { grid-column: 2 / 3; }
  .gridColumn2to4_xl-01 { grid-column: 2 / 4; }
  .gridColumn2to5_xl-01 { grid-column: 2 / 5; }
  .gridColumn2to6_xl-01 { grid-column: 2 / 6; }
  .gridColumn2to7_xl-01 { grid-column: 2 / 7; }
  .gridColumn2to8_xl-01 { grid-column: 2 / 8; }
  .gridColumn2to9_xl-01 { grid-column: 2 / 9; }
  .gridColumn2to10_xl-01 { grid-column: 2 / 10; }
  .gridColumn2to11_xl-01 { grid-column: 2 / 11; }
  .gridColumn2to12_xl-01 { grid-column: 2 / 12; }
  .gridColumn3to0_xl-01 { grid-column: 3 / 0; }
  .gridColumn3to1_xl-01 { grid-column: 3 / 1; }
  .gridColumn3to2_xl-01 { grid-column: 3 / 2; }
  .gridColumn3to3_xl-01 { grid-column: 3 / 3; }
  .gridColumn3to4_xl-01 { grid-column: 3 / 4; }
  .gridColumn3to5_xl-01 { grid-column: 3 / 5; }
  .gridColumn3to6_xl-01 { grid-column: 3 / 6; }
  .gridColumn3to7_xl-01 { grid-column: 3 / 7; }
  .gridColumn3to8_xl-01 { grid-column: 3 / 8; }
  .gridColumn3to9_xl-01 { grid-column: 3 / 9; }
  .gridColumn3to10_xl-01 { grid-column: 3 / 10; }
  .gridColumn3to11_xl-01 { grid-column: 3 / 11; }
  .gridColumn3to12_xl-01 { grid-column: 3 / 12; }
  .gridColumn4to0_xl-01 { grid-column: 4 / 0; }
  .gridColumn4to1_xl-01 { grid-column: 4 / 1; }
  .gridColumn4to2_xl-01 { grid-column: 4 / 2; }
  .gridColumn4to3_xl-01 { grid-column: 4 / 3; }
  .gridColumn4to4_xl-01 { grid-column: 4 / 4; }
  .gridColumn4to5_xl-01 { grid-column: 4 / 5; }
  .gridColumn4to6_xl-01 { grid-column: 4 / 6; }
  .gridColumn4to7_xl-01 { grid-column: 4 / 7; }
  .gridColumn4to8_xl-01 { grid-column: 4 / 8; }
  .gridColumn4to9_xl-01 { grid-column: 4 / 9; }
  .gridColumn4to10_xl-01 { grid-column: 4 / 10; }
  .gridColumn4to11_xl-01 { grid-column: 4 / 11; }
  .gridColumn4to12_xl-01 { grid-column: 4 / 12; }
  .gridColumn5to0_xl-01 { grid-column: 5 / 0; }
  .gridColumn5to1_xl-01 { grid-column: 5 / 1; }
  .gridColumn5to2_xl-01 { grid-column: 5 / 2; }
  .gridColumn5to3_xl-01 { grid-column: 5 / 3; }
  .gridColumn5to4_xl-01 { grid-column: 5 / 4; }
  .gridColumn5to5_xl-01 { grid-column: 5 / 5; }
  .gridColumn5to6_xl-01 { grid-column: 5 / 6; }
  .gridColumn5to7_xl-01 { grid-column: 5 / 7; }
  .gridColumn5to8_xl-01 { grid-column: 5 / 8; }
  .gridColumn5to9_xl-01 { grid-column: 5 / 9; }
  .gridColumn5to10_xl-01 { grid-column: 5 / 10; }
  .gridColumn5to11_xl-01 { grid-column: 5 / 11; }
  .gridColumn5to12_xl-01 { grid-column: 5 / 12; }
  .gridColumn6to0_xl-01 { grid-column: 6 / 0; }
  .gridColumn6to1_xl-01 { grid-column: 6 / 1; }
  .gridColumn6to2_xl-01 { grid-column: 6 / 2; }
  .gridColumn6to3_xl-01 { grid-column: 6 / 3; }
  .gridColumn6to4_xl-01 { grid-column: 6 / 4; }
  .gridColumn6to5_xl-01 { grid-column: 6 / 5; }
  .gridColumn6to6_xl-01 { grid-column: 6 / 6; }
  .gridColumn6to7_xl-01 { grid-column: 6 / 7; }
  .gridColumn6to8_xl-01 { grid-column: 6 / 8; }
  .gridColumn6to9_xl-01 { grid-column: 6 / 9; }
  .gridColumn6to10_xl-01 { grid-column: 6 / 10; }
  .gridColumn6to11_xl-01 { grid-column: 6 / 11; }
  .gridColumn6to12_xl-01 { grid-column: 6 / 12; }
  .gridColumn7to0_xl-01 { grid-column: 7 / 0; }
  .gridColumn7to1_xl-01 { grid-column: 7 / 1; }
  .gridColumn7to2_xl-01 { grid-column: 7 / 2; }
  .gridColumn7to3_xl-01 { grid-column: 7 / 3; }
  .gridColumn7to4_xl-01 { grid-column: 7 / 4; }
  .gridColumn7to5_xl-01 { grid-column: 7 / 5; }
  .gridColumn7to6_xl-01 { grid-column: 7 / 6; }
  .gridColumn7to7_xl-01 { grid-column: 7 / 7; }
  .gridColumn7to8_xl-01 { grid-column: 7 / 8; }
  .gridColumn7to9_xl-01 { grid-column: 7 / 9; }
  .gridColumn7to10_xl-01 { grid-column: 7 / 10; }
  .gridColumn7to11_xl-01 { grid-column: 7 / 11; }
  .gridColumn7to12_xl-01 { grid-column: 7 / 12; }
  .gridColumn8to0_xl-01 { grid-column: 8 / 0; }
  .gridColumn8to1_xl-01 { grid-column: 8 / 1; }
  .gridColumn8to2_xl-01 { grid-column: 8 / 2; }
  .gridColumn8to3_xl-01 { grid-column: 8 / 3; }
  .gridColumn8to4_xl-01 { grid-column: 8 / 4; }
  .gridColumn8to5_xl-01 { grid-column: 8 / 5; }
  .gridColumn8to6_xl-01 { grid-column: 8 / 6; }
  .gridColumn8to7_xl-01 { grid-column: 8 / 7; }
  .gridColumn8to8_xl-01 { grid-column: 8 / 8; }
  .gridColumn8to9_xl-01 { grid-column: 8 / 9; }
  .gridColumn8to10_xl-01 { grid-column: 8 / 10; }
  .gridColumn8to11_xl-01 { grid-column: 8 / 11; }
  .gridColumn8to12_xl-01 { grid-column: 8 / 12; }
  .gridColumn9to0_xl-01 { grid-column: 9 / 0; }
  .gridColumn9to1_xl-01 { grid-column: 9 / 1; }
  .gridColumn9to2_xl-01 { grid-column: 9 / 2; }
  .gridColumn9to3_xl-01 { grid-column: 9 / 3; }
  .gridColumn9to4_xl-01 { grid-column: 9 / 4; }
  .gridColumn9to5_xl-01 { grid-column: 9 / 5; }
  .gridColumn9to6_xl-01 { grid-column: 9 / 6; }
  .gridColumn9to7_xl-01 { grid-column: 9 / 7; }
  .gridColumn9to8_xl-01 { grid-column: 9 / 8; }
  .gridColumn9to9_xl-01 { grid-column: 9 / 9; }
  .gridColumn9to10_xl-01 { grid-column: 9 / 10; }
  .gridColumn9to11_xl-01 { grid-column: 9 / 11; }
  .gridColumn9to12_xl-01 { grid-column: 9 / 12; }
  .gridColumn10to0_xl-01 { grid-column: 10 / 0; }
  .gridColumn10to1_xl-01 { grid-column: 10 / 1; }
  .gridColumn10to2_xl-01 { grid-column: 10 / 2; }
  .gridColumn10to3_xl-01 { grid-column: 10 / 3; }
  .gridColumn10to4_xl-01 { grid-column: 10 / 4; }
  .gridColumn10to5_xl-01 { grid-column: 10 / 5; }
  .gridColumn10to6_xl-01 { grid-column: 10 / 6; }
  .gridColumn10to7_xl-01 { grid-column: 10 / 7; }
  .gridColumn10to8_xl-01 { grid-column: 10 / 8; }
  .gridColumn10to9_xl-01 { grid-column: 10 / 9; }
  .gridColumn10to10_xl-01 { grid-column: 10 / 10; }
  .gridColumn10to11_xl-01 { grid-column: 10 / 11; }
  .gridColumn10to12_xl-01 { grid-column: 10 / 12; }
  .gridColumn11to0_xl-01 { grid-column: 11 / 0; }
  .gridColumn11to1_xl-01 { grid-column: 11 / 1; }
  .gridColumn11to2_xl-01 { grid-column: 11 / 2; }
  .gridColumn11to3_xl-01 { grid-column: 11 / 3; }
  .gridColumn11to4_xl-01 { grid-column: 11 / 4; }
  .gridColumn11to5_xl-01 { grid-column: 11 / 5; }
  .gridColumn11to6_xl-01 { grid-column: 11 / 6; }
  .gridColumn11to7_xl-01 { grid-column: 11 / 7; }
  .gridColumn11to8_xl-01 { grid-column: 11 / 8; }
  .gridColumn11to9_xl-01 { grid-column: 11 / 9; }
  .gridColumn11to10_xl-01 { grid-column: 11 / 10; }
  .gridColumn11to11_xl-01 { grid-column: 11 / 11; }
  .gridColumn11to12_xl-01 { grid-column: 11 / 12; }
  .gridColumn12to0_xl-01 { grid-column: 12 / 0; }
  .gridColumn12to1_xl-01 { grid-column: 12 / 1; }
  .gridColumn12to2_xl-01 { grid-column: 12 / 2; }
  .gridColumn12to3_xl-01 { grid-column: 12 / 3; }
  .gridColumn12to4_xl-01 { grid-column: 12 / 4; }
  .gridColumn12to5_xl-01 { grid-column: 12 / 5; }
  .gridColumn12to6_xl-01 { grid-column: 12 / 6; }
  .gridColumn12to7_xl-01 { grid-column: 12 / 7; }
  .gridColumn12to8_xl-01 { grid-column: 12 / 8; }
  .gridColumn12to9_xl-01 { grid-column: 12 / 9; }
  .gridColumn12to10_xl-01 { grid-column: 12 / 10; }
  .gridColumn12to11_xl-01 { grid-column: 12 / 11; }
  .gridColumn12to12_xl-01 { grid-column: 12 / 12; }
  .gridColumnSpan0_xl-01 { grid-column: auto / span 0; }
  .gridColumnSpan1_xl-01 { grid-column: auto / span 1; }
  .gridColumnSpan2_xl-01 { grid-column: auto / span 2; }
  .gridColumnSpan3_xl-01 { grid-column: auto / span 3; }
  .gridColumnSpan4_xl-01 { grid-column: auto / span 4; }
  .gridColumnSpan5_xl-01 { grid-column: auto / span 5; }
  .gridColumnSpan6_xl-01 { grid-column: auto / span 6; }
  .gridColumnSpan7_xl-01 { grid-column: auto / span 7; }
  .gridColumnSpan8_xl-01 { grid-column: auto / span 8; }
  .gridColumnSpan9_xl-01 { grid-column: auto / span 9; }
  .gridColumnSpan10_xl-01 { grid-column: auto / span 10; }
  .w1_xl-01 { width: var(--rem1); }
  .w2_xl-01 { width: var(--rem2); }
  .w3_xl-01 { width: var(--rem3); }
  .w4_xl-01 { width: var(--rem4); }
  .w5_xl-01 { width: var(--rem5); }
  .w6_xl-01 { width: var(--rem6); }
  .w7_xl-01 { width: var(--rem7); }
  .w1px_xl-01 { width: var(--px1); }
  .w2px_xl-01 { width: var(--px2); }
  .w3px_xl-01 { width: var(--px3); }
  .w4px_xl-01 { width: var(--px4); }
  .w5px_xl-01 { width: var(--px5); }
  .w6px_xl-01 { width: var(--px6); }
  .w7px_xl-01 { width: var(--px7); }
  .w8px_xl-01 { width: var(--px8); }
  .w9px_xl-01 { width: var(--px9); }
  .w10px_xl-01 { width: var(--px10); }
  .w11px_xl-01 { width: var(--px11); }
  .w12px_xl-01 { width: var(--px12); }
  .w13px_xl-01 { width: var(--px13); }
  .w14px_xl-01 { width: var(--px14); }
  .w15px_xl-01 { width: var(--px15); }
  .w16px_xl-01 { width: var(--px16); }
  .w17px_xl-01 { width: var(--px17); }
  .w18px_xl-01 { width: var(--px18); }
  .w19px_xl-01 { width: var(--px19); }
  .w20px_xl-01 { width: var(--px20); }
  .w1p_xl-01 { width: 1%; }
  .w2p_xl-01 { width: 2%; }
  .w3p_xl-01 { width: 3%; }
  .w4p_xl-01 { width: 4%; }
  .w5p_xl-01 { width: 5%; }
  .w6p_xl-01 { width: 6%; }
  .w7p_xl-01 { width: 7%; }
  .w8p_xl-01 { width: 8%; }
  .w9p_xl-01 { width: 9%; }
  .w10p_xl-01 { width: 10%; }
  .w11p_xl-01 { width: 11%; }
  .w12p_xl-01 { width: 12%; }
  .w13p_xl-01 { width: 13%; }
  .w14p_xl-01 { width: 14%; }
  .w15p_xl-01 { width: 15%; }
  .w16p_xl-01 { width: 16%; }
  .w17p_xl-01 { width: 17%; }
  .w18p_xl-01 { width: 18%; }
  .w19p_xl-01 { width: 19%; }
  .w20p_xl-01 { width: 20%; }
  .w21p_xl-01 { width: 21%; }
  .w22p_xl-01 { width: 22%; }
  .w23p_xl-01 { width: 23%; }
  .w24p_xl-01 { width: 24%; }
  .w25p_xl-01 { width: 25%; }
  .w26p_xl-01 { width: 26%; }
  .w27p_xl-01 { width: 27%; }
  .w28p_xl-01 { width: 28%; }
  .w29p_xl-01 { width: 29%; }
  .w30p_xl-01 { width: 30%; }
  .w31p_xl-01 { width: 31%; }
  .w32p_xl-01 { width: 32%; }
  .w33p_xl-01 { width: 33%; }
  .w34p_xl-01 { width: 34%; }
  .w35p_xl-01 { width: 35%; }
  .w36p_xl-01 { width: 36%; }
  .w37p_xl-01 { width: 37%; }
  .w38p_xl-01 { width: 38%; }
  .w39p_xl-01 { width: 39%; }
  .w40p_xl-01 { width: 40%; }
  .w41p_xl-01 { width: 41%; }
  .w42p_xl-01 { width: 42%; }
  .w43p_xl-01 { width: 43%; }
  .w44p_xl-01 { width: 44%; }
  .w45p_xl-01 { width: 45%; }
  .w46p_xl-01 { width: 46%; }
  .w47p_xl-01 { width: 47%; }
  .w48p_xl-01 { width: 48%; }
  .w49p_xl-01 { width: 49%; }
  .w50p_xl-01 { width: 50%; }
  .w51p_xl-01 { width: 51%; }
  .w52p_xl-01 { width: 52%; }
  .w53p_xl-01 { width: 53%; }
  .w54p_xl-01 { width: 54%; }
  .w55p_xl-01 { width: 55%; }
  .w56p_xl-01 { width: 56%; }
  .w57p_xl-01 { width: 57%; }
  .w58p_xl-01 { width: 58%; }
  .w59p_xl-01 { width: 59%; }
  .w60p_xl-01 { width: 60%; }
  .w61p_xl-01 { width: 61%; }
  .w62p_xl-01 { width: 62%; }
  .w63p_xl-01 { width: 63%; }
  .w64p_xl-01 { width: 64%; }
  .w65p_xl-01 { width: 65%; }
  .w66p_xl-01 { width: 66%; }
  .w67p_xl-01 { width: 67%; }
  .w68p_xl-01 { width: 68%; }
  .w69p_xl-01 { width: 69%; }
  .w70p_xl-01 { width: 70%; }
  .w71p_xl-01 { width: 71%; }
  .w72p_xl-01 { width: 72%; }
  .w73p_xl-01 { width: 73%; }
  .w74p_xl-01 { width: 74%; }
  .w75p_xl-01 { width: 75%; }
  .w76p_xl-01 { width: 76%; }
  .w77p_xl-01 { width: 77%; }
  .w78p_xl-01 { width: 78%; }
  .w79p_xl-01 { width: 79%; }
  .w80p_xl-01 { width: 80%; }
  .w81p_xl-01 { width: 81%; }
  .w82p_xl-01 { width: 82%; }
  .w83p_xl-01 { width: 83%; }
  .w84p_xl-01 { width: 84%; }
  .w85p_xl-01 { width: 85%; }
  .w86p_xl-01 { width: 86%; }
  .w87p_xl-01 { width: 87%; }
  .w88p_xl-01 { width: 88%; }
  .w89p_xl-01 { width: 89%; }
  .w90p_xl-01 { width: 90%; }
  .w91p_xl-01 { width: 91%; }
  .w92p_xl-01 { width: 92%; }
  .w93p_xl-01 { width: 93%; }
  .w94p_xl-01 { width: 94%; }
  .w95p_xl-01 { width: 95%; }
  .w96p_xl-01 { width: 96%; }
  .w97p_xl-01 { width: 97%; }
  .w98p_xl-01 { width: 98%; }
  .w99p_xl-01 { width: 99%; }
  .w100p_xl-01 { width: 100%; }
  .minW1_xl-01 { min-width: var(--rem1); }
  .minW2_xl-01 { min-width: var(--rem2); }
  .minW3_xl-01 { min-width: var(--rem3); }
  .minW4_xl-01 { min-width: var(--rem4); }
  .minW5_xl-01 { min-width: var(--rem5); }
  .minW6_xl-01 { min-width: var(--rem6); }
  .minW7_xl-01 { min-width: var(--rem7); }
  .minW1px_xl-01 { min-width: var(--px1); }
  .minW2px_xl-01 { min-width: var(--px2); }
  .minW3px_xl-01 { min-width: var(--px3); }
  .minW4px_xl-01 { min-width: var(--px4); }
  .minW5px_xl-01 { min-width: var(--px5); }
  .minW6px_xl-01 { min-width: var(--px6); }
  .minW7px_xl-01 { min-width: var(--px7); }
  .minW8px_xl-01 { min-width: var(--px8); }
  .minW9px_xl-01 { min-width: var(--px9); }
  .minW10px_xl-01 { min-width: var(--px10); }
  .minW11px_xl-01 { min-width: var(--px11); }
  .minW12px_xl-01 { min-width: var(--px12); }
  .minW13px_xl-01 { min-width: var(--px13); }
  .minW14px_xl-01 { min-width: var(--px14); }
  .minW15px_xl-01 { min-width: var(--px15); }
  .minW16px_xl-01 { min-width: var(--px16); }
  .minW17px_xl-01 { min-width: var(--px17); }
  .minW18px_xl-01 { min-width: var(--px18); }
  .minW19px_xl-01 { min-width: var(--px19); }
  .minW20px_xl-01 { min-width: var(--px20); }
  .minW5p_xl-01 { min-width: 5%; }
  .minW10p_xl-01 { min-width: 10%; }
  .minW15p_xl-01 { min-width: 15%; }
  .minW20p_xl-01 { min-width: 20%; }
  .minW25p_xl-01 { min-width: 25%; }
  .minW30p_xl-01 { min-width: 30%; }
  .minW35p_xl-01 { min-width: 35%; }
  .minW40p_xl-01 { min-width: 40%; }
  .minW45p_xl-01 { min-width: 45%; }
  .minW50p_xl-01 { min-width: 50%; }
  .minW55p_xl-01 { min-width: 55%; }
  .minW60p_xl-01 { min-width: 60%; }
  .minW65p_xl-01 { min-width: 65%; }
  .minW70p_xl-01 { min-width: 70%; }
  .minW75p_xl-01 { min-width: 75%; }
  .minW80p_xl-01 { min-width: 80%; }
  .minW85p_xl-01 { min-width: 85%; }
  .minW90p_xl-01 { min-width: 90%; }
  .minW95p_xl-01 { min-width: 95%; }
  .minW100p_xl-01 { min-width: 100%; }
  .maxW1_xl-01 { max-width: var(--rem1); }
  .maxW2_xl-01 { max-width: var(--rem2); }
  .maxW3_xl-01 { max-width: var(--rem3); }
  .maxW4_xl-01 { max-width: var(--rem4); }
  .maxW5_xl-01 { max-width: var(--rem5); }
  .maxW6_xl-01 { max-width: var(--rem6); }
  .maxW7_xl-01 { max-width: var(--rem7); }
  .maxW1px_xl-01 { max-width: var(--px1); }
  .maxW2px_xl-01 { max-width: var(--px2); }
  .maxW3px_xl-01 { max-width: var(--px3); }
  .maxW4px_xl-01 { max-width: var(--px4); }
  .maxW5px_xl-01 { max-width: var(--px5); }
  .maxW6px_xl-01 { max-width: var(--px6); }
  .maxW7px_xl-01 { max-width: var(--px7); }
  .maxW8px_xl-01 { max-width: var(--px8); }
  .maxW9px_xl-01 { max-width: var(--px9); }
  .maxW10px_xl-01 { max-width: var(--px10); }
  .maxW11px_xl-01 { max-width: var(--px11); }
  .maxW12px_xl-01 { max-width: var(--px12); }
  .maxW13px_xl-01 { max-width: var(--px13); }
  .maxW14px_xl-01 { max-width: var(--px14); }
  .maxW15px_xl-01 { max-width: var(--px15); }
  .maxW16px_xl-01 { max-width: var(--px16); }
  .maxW17px_xl-01 { max-width: var(--px17); }
  .maxW18px_xl-01 { max-width: var(--px18); }
  .maxW19px_xl-01 { max-width: var(--px19); }
  .maxW20px_xl-01 { max-width: var(--px20); }
  .maxW5p_xl-01 { max-width: 5%; }
  .maxW10p_xl-01 { max-width: 10%; }
  .maxW15p_xl-01 { max-width: 15%; }
  .maxW20p_xl-01 { max-width: 20%; }
  .maxW25p_xl-01 { max-width: 25%; }
  .maxW30p_xl-01 { max-width: 30%; }
  .maxW35p_xl-01 { max-width: 35%; }
  .maxW40p_xl-01 { max-width: 40%; }
  .maxW45p_xl-01 { max-width: 45%; }
  .maxW50p_xl-01 { max-width: 50%; }
  .maxW55p_xl-01 { max-width: 55%; }
  .maxW60p_xl-01 { max-width: 60%; }
  .maxW65p_xl-01 { max-width: 65%; }
  .maxW70p_xl-01 { max-width: 70%; }
  .maxW75p_xl-01 { max-width: 75%; }
  .maxW80p_xl-01 { max-width: 80%; }
  .maxW85p_xl-01 { max-width: 85%; }
  .maxW90p_xl-01 { max-width: 90%; }
  .maxW95p_xl-01 { max-width: 95%; }
  .maxW100p_xl-01 { max-width: 100%; }
  .h1_xl-01 { height: var(--rem1); }
  .h2_xl-01 { height: var(--rem2); }
  .h3_xl-01 { height: var(--rem3); }
  .h4_xl-01 { height: var(--rem4); }
  .h5_xl-01 { height: var(--rem5); }
  .h6_xl-01 { height: var(--rem6); }
  .h7_xl-01 { height: var(--rem7); }
  .h1px_xl-01 { height: var(--px1); }
  .h2px_xl-01 { height: var(--px2); }
  .h3px_xl-01 { height: var(--px3); }
  .h4px_xl-01 { height: var(--px4); }
  .h5px_xl-01 { height: var(--px5); }
  .h6px_xl-01 { height: var(--px6); }
  .h7px_xl-01 { height: var(--px7); }
  .h8px_xl-01 { height: var(--px8); }
  .h9px_xl-01 { height: var(--px9); }
  .h10px_xl-01 { height: var(--px10); }
  .h11px_xl-01 { height: var(--px11); }
  .h12px_xl-01 { height: var(--px12); }
  .h13px_xl-01 { height: var(--px13); }
  .h14px_xl-01 { height: var(--px14); }
  .h15px_xl-01 { height: var(--px15); }
  .h16px_xl-01 { height: var(--px16); }
  .h17px_xl-01 { height: var(--px17); }
  .h18px_xl-01 { height: var(--px18); }
  .h19px_xl-01 { height: var(--px19); }
  .h20px_xl-01 { height: var(--px20); }
  .h5p_xl-01 { height: 5%; }
  .h10p_xl-01 { height: 10%; }
  .h15p_xl-01 { height: 15%; }
  .h20p_xl-01 { height: 20%; }
  .h25p_xl-01 { height: 25%; }
  .h30p_xl-01 { height: 30%; }
  .h35p_xl-01 { height: 35%; }
  .h40p_xl-01 { height: 40%; }
  .h45p_xl-01 { height: 45%; }
  .h50p_xl-01 { height: 50%; }
  .h55p_xl-01 { height: 55%; }
  .h60p_xl-01 { height: 60%; }
  .h65p_xl-01 { height: 65%; }
  .h70p_xl-01 { height: 70%; }
  .h75p_xl-01 { height: 75%; }
  .h80p_xl-01 { height: 80%; }
  .h85p_xl-01 { height: 85%; }
  .h90p_xl-01 { height: 90%; }
  .h95p_xl-01 { height: 95%; }
  .h100p_xl-01 { height: 100%; }
  .minH1_xl-01 { min-height: var(--rem1); }
  .minH2_xl-01 { min-height: var(--rem2); }
  .minH3_xl-01 { min-height: var(--rem3); }
  .minH4_xl-01 { min-height: var(--rem4); }
  .minH5_xl-01 { min-height: var(--rem5); }
  .minH6_xl-01 { min-height: var(--rem6); }
  .minH7_xl-01 { min-height: var(--rem7); }
  .minH1px_xl-01 { min-height: var(--px1); }
  .minH2px_xl-01 { min-height: var(--px2); }
  .minH3px_xl-01 { min-height: var(--px3); }
  .minH4px_xl-01 { min-height: var(--px4); }
  .minH5px_xl-01 { min-height: var(--px5); }
  .minH6px_xl-01 { min-height: var(--px6); }
  .minH7px_xl-01 { min-height: var(--px7); }
  .minH8px_xl-01 { min-height: var(--px8); }
  .minH9px_xl-01 { min-height: var(--px9); }
  .minH10px_xl-01 { min-height: var(--px10); }
  .minH11px_xl-01 { min-height: var(--px11); }
  .minH12px_xl-01 { min-height: var(--px12); }
  .minH13px_xl-01 { min-height: var(--px13); }
  .minH14px_xl-01 { min-height: var(--px14); }
  .minH15px_xl-01 { min-height: var(--px15); }
  .minH16px_xl-01 { min-height: var(--px16); }
  .minH17px_xl-01 { min-height: var(--px17); }
  .minH18px_xl-01 { min-height: var(--px18); }
  .minH19px_xl-01 { min-height: var(--px19); }
  .minH20px_xl-01 { min-height: var(--px20); }
  .minH5p_xl-01 { min-height: 5%; }
  .minH10p_xl-01 { min-height: 10%; }
  .minH15p_xl-01 { min-height: 15%; }
  .minH20p_xl-01 { min-height: 20%; }
  .minH25p_xl-01 { min-height: 25%; }
  .minH30p_xl-01 { min-height: 30%; }
  .minH35p_xl-01 { min-height: 35%; }
  .minH40p_xl-01 { min-height: 40%; }
  .minH45p_xl-01 { min-height: 45%; }
  .minH50p_xl-01 { min-height: 50%; }
  .minH55p_xl-01 { min-height: 55%; }
  .minH60p_xl-01 { min-height: 60%; }
  .minH65p_xl-01 { min-height: 65%; }
  .minH70p_xl-01 { min-height: 70%; }
  .minH75p_xl-01 { min-height: 75%; }
  .minH80p_xl-01 { min-height: 80%; }
  .minH85p_xl-01 { min-height: 85%; }
  .minH90p_xl-01 { min-height: 90%; }
  .minH95p_xl-01 { min-height: 95%; }
  .minH100p_xl-01 { min-height: 100%; }
  .maxH1_xl-01 { max-height: var(--rem1); }
  .maxH2_xl-01 { max-height: var(--rem2); }
  .maxH3_xl-01 { max-height: var(--rem3); }
  .maxH4_xl-01 { max-height: var(--rem4); }
  .maxH5_xl-01 { max-height: var(--rem5); }
  .maxH6_xl-01 { max-height: var(--rem6); }
  .maxH7_xl-01 { max-height: var(--rem7); }
  .maxH1px_xl-01 { max-height: var(--px1); }
  .maxH2px_xl-01 { max-height: var(--px2); }
  .maxH3px_xl-01 { max-height: var(--px3); }
  .maxH4px_xl-01 { max-height: var(--px4); }
  .maxH5px_xl-01 { max-height: var(--px5); }
  .maxH6px_xl-01 { max-height: var(--px6); }
  .maxH7px_xl-01 { max-height: var(--px7); }
  .maxH8px_xl-01 { max-height: var(--px8); }
  .maxH9px_xl-01 { max-height: var(--px9); }
  .maxH10px_xl-01 { max-height: var(--px10); }
  .maxH11px_xl-01 { max-height: var(--px11); }
  .maxH12px_xl-01 { max-height: var(--px12); }
  .maxH13px_xl-01 { max-height: var(--px13); }
  .maxH14px_xl-01 { max-height: var(--px14); }
  .maxH15px_xl-01 { max-height: var(--px15); }
  .maxH16px_xl-01 { max-height: var(--px16); }
  .maxH17px_xl-01 { max-height: var(--px17); }
  .maxH18px_xl-01 { max-height: var(--px18); }
  .maxH19px_xl-01 { max-height: var(--px19); }
  .maxH20px_xl-01 { max-height: var(--px20); }
  .maxH5p_xl-01 { max-height: 5%; }
  .maxH10p_xl-01 { max-height: 10%; }
  .maxH15p_xl-01 { max-height: 15%; }
  .maxH20p_xl-01 { max-height: 20%; }
  .maxH25p_xl-01 { max-height: 25%; }
  .maxH30p_xl-01 { max-height: 30%; }
  .maxH35p_xl-01 { max-height: 35%; }
  .maxH40p_xl-01 { max-height: 40%; }
  .maxH45p_xl-01 { max-height: 45%; }
  .maxH50p_xl-01 { max-height: 50%; }
  .maxH55p_xl-01 { max-height: 55%; }
  .maxH60p_xl-01 { max-height: 60%; }
  .maxH65p_xl-01 { max-height: 65%; }
  .maxH70p_xl-01 { max-height: 70%; }
  .maxH75p_xl-01 { max-height: 75%; }
  .maxH80p_xl-01 { max-height: 80%; }
  .maxH85p_xl-01 { max-height: 85%; }
  .maxH90p_xl-01 { max-height: 90%; }
  .maxH95p_xl-01 { max-height: 95%; }
  .maxH100p_xl-01 { max-height: 100%; }
  .maxH5vh_xl-01 { max-height: 5vh; }
  .maxH10vh_xl-01 { max-height: 10vh; }
  .maxH15vh_xl-01 { max-height: 15vh; }
  .maxH20vh_xl-01 { max-height: 20vh; }
  .maxH25vh_xl-01 { max-height: 25vh; }
  .maxH30vh_xl-01 { max-height: 30vh; }
  .maxH35vh_xl-01 { max-height: 35vh; }
  .maxH40vh_xl-01 { max-height: 40vh; }
  .maxH45vh_xl-01 { max-height: 45vh; }
  .maxH50vh_xl-01 { max-height: 50vh; }
  .maxH55vh_xl-01 { max-height: 55vh; }
  .maxH60vh_xl-01 { max-height: 60vh; }
  .maxH65vh_xl-01 { max-height: 65vh; }
  .maxH70vh_xl-01 { max-height: 70vh; }
  .maxH75vh_xl-01 { max-height: 75vh; }
  .maxH80vh_xl-01 { max-height: 80vh; }
  .maxH85vh_xl-01 { max-height: 85vh; }
  .maxH90vh_xl-01 { max-height: 90vh; }
  .maxH95vh_xl-01 { max-height: 95vh; }
  .maxH100vh_xl-01 { max-height: 100vh; }
  .resizeA_xl-01 { resize: both; }
  .resizeV_xl-01 { resize: vertical; }
  .resizeH_xl-01 { resize: horizontal; }
  .resizeNone_xl-01 { resize: none; }
  .resizeB_xl-01 { resize: block; }
  .resizeI_xl-01 { resize: inline; }
  .pa1_xl-01 { padding: var(--px1); }
  .pa2_xl-01 { padding: var(--px2); }
  .pa3_xl-01 { padding: var(--px3); }
  .pa4_xl-01 { padding: var(--px4); }
  .pa5_xl-01 { padding: var(--px5); }
  .pa6_xl-01 { padding: var(--px6); }
  .pa7_xl-01 { padding: var(--px7); }
  .pa8_xl-01 { padding: var(--px8); }
  .pa9_xl-01 { padding: var(--px9); }
  .pa10_xl-01 { padding: var(--px10); }
  .pa11_xl-01 { padding: var(--px11); }
  .pa12_xl-01 { padding: var(--px12); }
  .pa13_xl-01 { padding: var(--px13); }
  .pa14_xl-01 { padding: var(--px14); }
  .pa15_xl-01 { padding: var(--px15); }
  .pa16_xl-01 { padding: var(--px16); }
  .pa17_xl-01 { padding: var(--px17); }
  .pa18_xl-01 { padding: var(--px18); }
  .pa19_xl-01 { padding: var(--px19); }
  .pa20_xl-01 { padding: var(--px20); }
  .pa5p_xl-01 { padding: 5%; }
  .pa10p_xl-01 { padding: 10%; }
  .pa15p_xl-01 { padding: 15%; }
  .pa20p_xl-01 { padding: 20%; }
  .pa25p_xl-01 { padding: 25%; }
  .pa30p_xl-01 { padding: 30%; }
  .pa35p_xl-01 { padding: 35%; }
  .pa40p_xl-01 { padding: 40%; }
  .pa45p_xl-01 { padding: 45%; }
  .pa50p_xl-01 { padding: 50%; }
  .pa55p_xl-01 { padding: 55%; }
  .pa60p_xl-01 { padding: 60%; }
  .pa65p_xl-01 { padding: 65%; }
  .pa70p_xl-01 { padding: 70%; }
  .pa75p_xl-01 { padding: 75%; }
  .pa80p_xl-01 { padding: 80%; }
  .pa85p_xl-01 { padding: 85%; }
  .pa90p_xl-01 { padding: 90%; }
  .pa95p_xl-01 { padding: 95%; }
  .pa100p_xl-01 { padding: 100%; }
  .pv1_xl-01 { padding-top: var(--px1); padding-bottom: var(--px1); }
  .pv2_xl-01 { padding-top: var(--px2); padding-bottom: var(--px2); }
  .pv3_xl-01 { padding-top: var(--px3); padding-bottom: var(--px3); }
  .pv4_xl-01 { padding-top: var(--px4); padding-bottom: var(--px4); }
  .pv5_xl-01 { padding-top: var(--px5); padding-bottom: var(--px5); }
  .pv6_xl-01 { padding-top: var(--px6); padding-bottom: var(--px6); }
  .pv7_xl-01 { padding-top: var(--px7); padding-bottom: var(--px7); }
  .pv8_xl-01 { padding-top: var(--px8); padding-bottom: var(--px8); }
  .pv9_xl-01 { padding-top: var(--px9); padding-bottom: var(--px9); }
  .pv10_xl-01 { padding-top: var(--px10); padding-bottom: var(--px10); }
  .pv11_xl-01 { padding-top: var(--px11); padding-bottom: var(--px11); }
  .pv12_xl-01 { padding-top: var(--px12); padding-bottom: var(--px12); }
  .pv13_xl-01 { padding-top: var(--px13); padding-bottom: var(--px13); }
  .pv14_xl-01 { padding-top: var(--px14); padding-bottom: var(--px14); }
  .pv15_xl-01 { padding-top: var(--px15); padding-bottom: var(--px15); }
  .pv16_xl-01 { padding-top: var(--px16); padding-bottom: var(--px16); }
  .pv17_xl-01 { padding-top: var(--px17); padding-bottom: var(--px17); }
  .pv18_xl-01 { padding-top: var(--px18); padding-bottom: var(--px18); }
  .pv19_xl-01 { padding-top: var(--px19); padding-bottom: var(--px19); }
  .pv20_xl-01 { padding-top: var(--px20); padding-bottom: var(--px20); }
  .pv5p_xl-01 { padding-top: 5%; padding-bottom: 5%; }
  .pv10p_xl-01 { padding-top: 10%; padding-bottom: 10%; }
  .pv15p_xl-01 { padding-top: 15%; padding-bottom: 15%; }
  .pv20p_xl-01 { padding-top: 20%; padding-bottom: 20%; }
  .pv25p_xl-01 { padding-top: 25%; padding-bottom: 25%; }
  .pv30p_xl-01 { padding-top: 30%; padding-bottom: 30%; }
  .pv35p_xl-01 { padding-top: 35%; padding-bottom: 35%; }
  .pv40p_xl-01 { padding-top: 40%; padding-bottom: 40%; }
  .pv45p_xl-01 { padding-top: 45%; padding-bottom: 45%; }
  .pv50p_xl-01 { padding-top: 50%; padding-bottom: 50%; }
  .pv55p_xl-01 { padding-top: 55%; padding-bottom: 55%; }
  .pv60p_xl-01 { padding-top: 60%; padding-bottom: 60%; }
  .pv65p_xl-01 { padding-top: 65%; padding-bottom: 65%; }
  .pv70p_xl-01 { padding-top: 70%; padding-bottom: 70%; }
  .pv75p_xl-01 { padding-top: 75%; padding-bottom: 75%; }
  .pv80p_xl-01 { padding-top: 80%; padding-bottom: 80%; }
  .pv85p_xl-01 { padding-top: 85%; padding-bottom: 85%; }
  .pv90p_xl-01 { padding-top: 90%; padding-bottom: 90%; }
  .pv95p_xl-01 { padding-top: 95%; padding-bottom: 95%; }
  .pv100p_xl-01 { padding-top: 100%; padding-bottom: 100%; }
  .ph1_xl-01 { padding-left: var(--px1); padding-right: var(--px1); }
  .ph2_xl-01 { padding-left: var(--px2); padding-right: var(--px2); }
  .ph3_xl-01 { padding-left: var(--px3); padding-right: var(--px3); }
  .ph4_xl-01 { padding-left: var(--px4); padding-right: var(--px4); }
  .ph5_xl-01 { padding-left: var(--px5); padding-right: var(--px5); }
  .ph6_xl-01 { padding-left: var(--px6); padding-right: var(--px6); }
  .ph7_xl-01 { padding-left: var(--px7); padding-right: var(--px7); }
  .ph8_xl-01 { padding-left: var(--px8); padding-right: var(--px8); }
  .ph9_xl-01 { padding-left: var(--px9); padding-right: var(--px9); }
  .ph10_xl-01 { padding-left: var(--px10); padding-right: var(--px10); }
  .ph11_xl-01 { padding-left: var(--px11); padding-right: var(--px11); }
  .ph12_xl-01 { padding-left: var(--px12); padding-right: var(--px12); }
  .ph13_xl-01 { padding-left: var(--px13); padding-right: var(--px13); }
  .ph14_xl-01 { padding-left: var(--px14); padding-right: var(--px14); }
  .ph15_xl-01 { padding-left: var(--px15); padding-right: var(--px15); }
  .ph16_xl-01 { padding-left: var(--px16); padding-right: var(--px16); }
  .ph17_xl-01 { padding-left: var(--px17); padding-right: var(--px17); }
  .ph18_xl-01 { padding-left: var(--px18); padding-right: var(--px18); }
  .ph19_xl-01 { padding-left: var(--px19); padding-right: var(--px19); }
  .ph20_xl-01 { padding-left: var(--px20); padding-right: var(--px20); }
  .ph5p_xl-01 { padding-left: 5%; padding-right: 5%; }
  .ph10p_xl-01 { padding-left: 10%; padding-right: 10%; }
  .ph15p_xl-01 { padding-left: 15%; padding-right: 15%; }
  .ph20p_xl-01 { padding-left: 20%; padding-right: 20%; }
  .ph25p_xl-01 { padding-left: 25%; padding-right: 25%; }
  .ph30p_xl-01 { padding-left: 30%; padding-right: 30%; }
  .ph35p_xl-01 { padding-left: 35%; padding-right: 35%; }
  .ph40p_xl-01 { padding-left: 40%; padding-right: 40%; }
  .ph45p_xl-01 { padding-left: 45%; padding-right: 45%; }
  .ph50p_xl-01 { padding-left: 50%; padding-right: 50%; }
  .ph55p_xl-01 { padding-left: 55%; padding-right: 55%; }
  .ph60p_xl-01 { padding-left: 60%; padding-right: 60%; }
  .ph65p_xl-01 { padding-left: 65%; padding-right: 65%; }
  .ph70p_xl-01 { padding-left: 70%; padding-right: 70%; }
  .ph75p_xl-01 { padding-left: 75%; padding-right: 75%; }
  .ph80p_xl-01 { padding-left: 80%; padding-right: 80%; }
  .ph85p_xl-01 { padding-left: 85%; padding-right: 85%; }
  .ph90p_xl-01 { padding-left: 90%; padding-right: 90%; }
  .ph95p_xl-01 { padding-left: 95%; padding-right: 95%; }
  .ph100p_xl-01 { padding-left: 100%; padding-right: 100%; }
  .pt1_xl-01 { padding-top: var(--px1); }
  .pt2_xl-01 { padding-top: var(--px2); }
  .pt3_xl-01 { padding-top: var(--px3); }
  .pt4_xl-01 { padding-top: var(--px4); }
  .pt5_xl-01 { padding-top: var(--px5); }
  .pt6_xl-01 { padding-top: var(--px6); }
  .pt7_xl-01 { padding-top: var(--px7); }
  .pt8_xl-01 { padding-top: var(--px8); }
  .pt9_xl-01 { padding-top: var(--px9); }
  .pt10_xl-01 { padding-top: var(--px10); }
  .pt11_xl-01 { padding-top: var(--px11); }
  .pt12_xl-01 { padding-top: var(--px12); }
  .pt13_xl-01 { padding-top: var(--px13); }
  .pt14_xl-01 { padding-top: var(--px14); }
  .pt15_xl-01 { padding-top: var(--px15); }
  .pt16_xl-01 { padding-top: var(--px16); }
  .pt17_xl-01 { padding-top: var(--px17); }
  .pt18_xl-01 { padding-top: var(--px18); }
  .pt19_xl-01 { padding-top: var(--px19); }
  .pt20_xl-01 { padding-top: var(--px20); }
  .pt5p_xl-01 { padding-top: 5%; }
  .pt10p_xl-01 { padding-top: 10%; }
  .pt15p_xl-01 { padding-top: 15%; }
  .pt20p_xl-01 { padding-top: 20%; }
  .pt25p_xl-01 { padding-top: 25%; }
  .pt30p_xl-01 { padding-top: 30%; }
  .pt35p_xl-01 { padding-top: 35%; }
  .pt40p_xl-01 { padding-top: 40%; }
  .pt45p_xl-01 { padding-top: 45%; }
  .pt50p_xl-01 { padding-top: 50%; }
  .pt55p_xl-01 { padding-top: 55%; }
  .pt60p_xl-01 { padding-top: 60%; }
  .pt65p_xl-01 { padding-top: 65%; }
  .pt70p_xl-01 { padding-top: 70%; }
  .pt75p_xl-01 { padding-top: 75%; }
  .pt80p_xl-01 { padding-top: 80%; }
  .pt85p_xl-01 { padding-top: 85%; }
  .pt90p_xl-01 { padding-top: 90%; }
  .pt95p_xl-01 { padding-top: 95%; }
  .pt100p_xl-01 { padding-top: 100%; }
  .pr1_xl-01 { padding-right: var(--px1); }
  .pr2_xl-01 { padding-right: var(--px2); }
  .pr3_xl-01 { padding-right: var(--px3); }
  .pr4_xl-01 { padding-right: var(--px4); }
  .pr5_xl-01 { padding-right: var(--px5); }
  .pr6_xl-01 { padding-right: var(--px6); }
  .pr7_xl-01 { padding-right: var(--px7); }
  .pr8_xl-01 { padding-right: var(--px8); }
  .pr9_xl-01 { padding-right: var(--px9); }
  .pr10_xl-01 { padding-right: var(--px10); }
  .pr11_xl-01 { padding-right: var(--px11); }
  .pr12_xl-01 { padding-right: var(--px12); }
  .pr13_xl-01 { padding-right: var(--px13); }
  .pr14_xl-01 { padding-right: var(--px14); }
  .pr15_xl-01 { padding-right: var(--px15); }
  .pr16_xl-01 { padding-right: var(--px16); }
  .pr17_xl-01 { padding-right: var(--px17); }
  .pr18_xl-01 { padding-right: var(--px18); }
  .pr19_xl-01 { padding-right: var(--px19); }
  .pr20_xl-01 { padding-right: var(--px20); }
  .pr5p_xl-01 { padding-right: 5%; }
  .pr10p_xl-01 { padding-right: 10%; }
  .pr15p_xl-01 { padding-right: 15%; }
  .pr20p_xl-01 { padding-right: 20%; }
  .pr25p_xl-01 { padding-right: 25%; }
  .pr30p_xl-01 { padding-right: 30%; }
  .pr35p_xl-01 { padding-right: 35%; }
  .pr40p_xl-01 { padding-right: 40%; }
  .pr45p_xl-01 { padding-right: 45%; }
  .pr50p_xl-01 { padding-right: 50%; }
  .pr55p_xl-01 { padding-right: 55%; }
  .pr60p_xl-01 { padding-right: 60%; }
  .pr65p_xl-01 { padding-right: 65%; }
  .pr70p_xl-01 { padding-right: 70%; }
  .pr75p_xl-01 { padding-right: 75%; }
  .pr80p_xl-01 { padding-right: 80%; }
  .pr85p_xl-01 { padding-right: 85%; }
  .pr90p_xl-01 { padding-right: 90%; }
  .pr95p_xl-01 { padding-right: 95%; }
  .pr100p_xl-01 { padding-right: 100%; }
  .pb1_xl-01 { padding-bottom: var(--px1); }
  .pb2_xl-01 { padding-bottom: var(--px2); }
  .pb3_xl-01 { padding-bottom: var(--px3); }
  .pb4_xl-01 { padding-bottom: var(--px4); }
  .pb5_xl-01 { padding-bottom: var(--px5); }
  .pb6_xl-01 { padding-bottom: var(--px6); }
  .pb7_xl-01 { padding-bottom: var(--px7); }
  .pb8_xl-01 { padding-bottom: var(--px8); }
  .pb9_xl-01 { padding-bottom: var(--px9); }
  .pb10_xl-01 { padding-bottom: var(--px10); }
  .pb11_xl-01 { padding-bottom: var(--px11); }
  .pb12_xl-01 { padding-bottom: var(--px12); }
  .pb13_xl-01 { padding-bottom: var(--px13); }
  .pb14_xl-01 { padding-bottom: var(--px14); }
  .pb15_xl-01 { padding-bottom: var(--px15); }
  .pb16_xl-01 { padding-bottom: var(--px16); }
  .pb17_xl-01 { padding-bottom: var(--px17); }
  .pb18_xl-01 { padding-bottom: var(--px18); }
  .pb19_xl-01 { padding-bottom: var(--px19); }
  .pb20_xl-01 { padding-bottom: var(--px20); }
  .pb5p_xl-01 { padding-bottom: 5%; }
  .pb10p_xl-01 { padding-bottom: 10%; }
  .pb15p_xl-01 { padding-bottom: 15%; }
  .pb20p_xl-01 { padding-bottom: 20%; }
  .pb25p_xl-01 { padding-bottom: 25%; }
  .pb30p_xl-01 { padding-bottom: 30%; }
  .pb35p_xl-01 { padding-bottom: 35%; }
  .pb40p_xl-01 { padding-bottom: 40%; }
  .pb45p_xl-01 { padding-bottom: 45%; }
  .pb50p_xl-01 { padding-bottom: 50%; }
  .pb55p_xl-01 { padding-bottom: 55%; }
  .pb60p_xl-01 { padding-bottom: 60%; }
  .pb65p_xl-01 { padding-bottom: 65%; }
  .pb70p_xl-01 { padding-bottom: 70%; }
  .pb75p_xl-01 { padding-bottom: 75%; }
  .pb80p_xl-01 { padding-bottom: 80%; }
  .pb85p_xl-01 { padding-bottom: 85%; }
  .pb90p_xl-01 { padding-bottom: 90%; }
  .pb95p_xl-01 { padding-bottom: 95%; }
  .pb100p_xl-01 { padding-bottom: 100%; }
  .pl1_xl-01 { padding-left: var(--px1); }
  .pl2_xl-01 { padding-left: var(--px2); }
  .pl3_xl-01 { padding-left: var(--px3); }
  .pl4_xl-01 { padding-left: var(--px4); }
  .pl5_xl-01 { padding-left: var(--px5); }
  .pl6_xl-01 { padding-left: var(--px6); }
  .pl7_xl-01 { padding-left: var(--px7); }
  .pl8_xl-01 { padding-left: var(--px8); }
  .pl9_xl-01 { padding-left: var(--px9); }
  .pl10_xl-01 { padding-left: var(--px10); }
  .pl11_xl-01 { padding-left: var(--px11); }
  .pl12_xl-01 { padding-left: var(--px12); }
  .pl13_xl-01 { padding-left: var(--px13); }
  .pl14_xl-01 { padding-left: var(--px14); }
  .pl15_xl-01 { padding-left: var(--px15); }
  .pl16_xl-01 { padding-left: var(--px16); }
  .pl17_xl-01 { padding-left: var(--px17); }
  .pl18_xl-01 { padding-left: var(--px18); }
  .pl19_xl-01 { padding-left: var(--px19); }
  .pl20_xl-01 { padding-left: var(--px20); }
  .pl5p_xl-01 { padding-left: 5%; }
  .pl10p_xl-01 { padding-left: 10%; }
  .pl15p_xl-01 { padding-left: 15%; }
  .pl20p_xl-01 { padding-left: 20%; }
  .pl25p_xl-01 { padding-left: 25%; }
  .pl30p_xl-01 { padding-left: 30%; }
  .pl35p_xl-01 { padding-left: 35%; }
  .pl40p_xl-01 { padding-left: 40%; }
  .pl45p_xl-01 { padding-left: 45%; }
  .pl50p_xl-01 { padding-left: 50%; }
  .pl55p_xl-01 { padding-left: 55%; }
  .pl60p_xl-01 { padding-left: 60%; }
  .pl65p_xl-01 { padding-left: 65%; }
  .pl70p_xl-01 { padding-left: 70%; }
  .pl75p_xl-01 { padding-left: 75%; }
  .pl80p_xl-01 { padding-left: 80%; }
  .pl85p_xl-01 { padding-left: 85%; }
  .pl90p_xl-01 { padding-left: 90%; }
  .pl95p_xl-01 { padding-left: 95%; }
  .pl100p_xl-01 { padding-left: 100%; }
  .ma1_xl-01 { margin: var(--px1); }
  .ma2_xl-01 { margin: var(--px2); }
  .ma3_xl-01 { margin: var(--px3); }
  .ma4_xl-01 { margin: var(--px4); }
  .ma5_xl-01 { margin: var(--px5); }
  .ma6_xl-01 { margin: var(--px6); }
  .ma7_xl-01 { margin: var(--px7); }
  .ma8_xl-01 { margin: var(--px8); }
  .ma9_xl-01 { margin: var(--px9); }
  .ma10_xl-01 { margin: var(--px10); }
  .ma11_xl-01 { margin: var(--px11); }
  .ma12_xl-01 { margin: var(--px12); }
  .ma13_xl-01 { margin: var(--px13); }
  .ma14_xl-01 { margin: var(--px14); }
  .ma15_xl-01 { margin: var(--px15); }
  .ma16_xl-01 { margin: var(--px16); }
  .ma17_xl-01 { margin: var(--px17); }
  .ma18_xl-01 { margin: var(--px18); }
  .ma19_xl-01 { margin: var(--px19); }
  .ma20_xl-01 { margin: var(--px20); }
  .ma5p_xl-01 { margin: 5%; }
  .ma10p_xl-01 { margin: 10%; }
  .ma15p_xl-01 { margin: 15%; }
  .ma20p_xl-01 { margin: 20%; }
  .ma25p_xl-01 { margin: 25%; }
  .ma30p_xl-01 { margin: 30%; }
  .ma35p_xl-01 { margin: 35%; }
  .ma40p_xl-01 { margin: 40%; }
  .ma45p_xl-01 { margin: 45%; }
  .ma50p_xl-01 { margin: 50%; }
  .ma55p_xl-01 { margin: 55%; }
  .ma60p_xl-01 { margin: 60%; }
  .ma65p_xl-01 { margin: 65%; }
  .ma70p_xl-01 { margin: 70%; }
  .ma75p_xl-01 { margin: 75%; }
  .ma80p_xl-01 { margin: 80%; }
  .ma85p_xl-01 { margin: 85%; }
  .ma90p_xl-01 { margin: 90%; }
  .ma95p_xl-01 { margin: 95%; }
  .ma100p_xl-01 { margin: 100%; }
  .mv1_xl-01 { margin-top: var(--px1); margin-bottom: var(--px1); }
  .mv2_xl-01 { margin-top: var(--px2); margin-bottom: var(--px2); }
  .mv3_xl-01 { margin-top: var(--px3); margin-bottom: var(--px3); }
  .mv4_xl-01 { margin-top: var(--px4); margin-bottom: var(--px4); }
  .mv5_xl-01 { margin-top: var(--px5); margin-bottom: var(--px5); }
  .mv6_xl-01 { margin-top: var(--px6); margin-bottom: var(--px6); }
  .mv7_xl-01 { margin-top: var(--px7); margin-bottom: var(--px7); }
  .mv8_xl-01 { margin-top: var(--px8); margin-bottom: var(--px8); }
  .mv9_xl-01 { margin-top: var(--px9); margin-bottom: var(--px9); }
  .mv10_xl-01 { margin-top: var(--px10); margin-bottom: var(--px10); }
  .mv11_xl-01 { margin-top: var(--px11); margin-bottom: var(--px11); }
  .mv12_xl-01 { margin-top: var(--px12); margin-bottom: var(--px12); }
  .mv13_xl-01 { margin-top: var(--px13); margin-bottom: var(--px13); }
  .mv14_xl-01 { margin-top: var(--px14); margin-bottom: var(--px14); }
  .mv15_xl-01 { margin-top: var(--px15); margin-bottom: var(--px15); }
  .mv16_xl-01 { margin-top: var(--px16); margin-bottom: var(--px16); }
  .mv17_xl-01 { margin-top: var(--px17); margin-bottom: var(--px17); }
  .mv18_xl-01 { margin-top: var(--px18); margin-bottom: var(--px18); }
  .mv19_xl-01 { margin-top: var(--px19); margin-bottom: var(--px19); }
  .mv20_xl-01 { margin-top: var(--px20); margin-bottom: var(--px20); }
  .mv5p_xl-01 { margin-top: 5%; margin-bottom: 5%; }
  .mv10p_xl-01 { margin-top: 10%; margin-bottom: 10%; }
  .mv15p_xl-01 { margin-top: 15%; margin-bottom: 15%; }
  .mv20p_xl-01 { margin-top: 20%; margin-bottom: 20%; }
  .mv25p_xl-01 { margin-top: 25%; margin-bottom: 25%; }
  .mv30p_xl-01 { margin-top: 30%; margin-bottom: 30%; }
  .mv35p_xl-01 { margin-top: 35%; margin-bottom: 35%; }
  .mv40p_xl-01 { margin-top: 40%; margin-bottom: 40%; }
  .mv45p_xl-01 { margin-top: 45%; margin-bottom: 45%; }
  .mv50p_xl-01 { margin-top: 50%; margin-bottom: 50%; }
  .mv55p_xl-01 { margin-top: 55%; margin-bottom: 55%; }
  .mv60p_xl-01 { margin-top: 60%; margin-bottom: 60%; }
  .mv65p_xl-01 { margin-top: 65%; margin-bottom: 65%; }
  .mv70p_xl-01 { margin-top: 70%; margin-bottom: 70%; }
  .mv75p_xl-01 { margin-top: 75%; margin-bottom: 75%; }
  .mv80p_xl-01 { margin-top: 80%; margin-bottom: 80%; }
  .mv85p_xl-01 { margin-top: 85%; margin-bottom: 85%; }
  .mv90p_xl-01 { margin-top: 90%; margin-bottom: 90%; }
  .mv95p_xl-01 { margin-top: 95%; margin-bottom: 95%; }
  .mv100p_xl-01 { margin-top: 100%; margin-bottom: 100%; }
  .mh1_xl-01 { margin-left: var(--px1); margin-right: var(--px1); }
  .mh2_xl-01 { margin-left: var(--px2); margin-right: var(--px2); }
  .mh3_xl-01 { margin-left: var(--px3); margin-right: var(--px3); }
  .mh4_xl-01 { margin-left: var(--px4); margin-right: var(--px4); }
  .mh5_xl-01 { margin-left: var(--px5); margin-right: var(--px5); }
  .mh6_xl-01 { margin-left: var(--px6); margin-right: var(--px6); }
  .mh7_xl-01 { margin-left: var(--px7); margin-right: var(--px7); }
  .mh8_xl-01 { margin-left: var(--px8); margin-right: var(--px8); }
  .mh9_xl-01 { margin-left: var(--px9); margin-right: var(--px9); }
  .mh10_xl-01 { margin-left: var(--px10); margin-right: var(--px10); }
  .mh11_xl-01 { margin-left: var(--px11); margin-right: var(--px11); }
  .mh12_xl-01 { margin-left: var(--px12); margin-right: var(--px12); }
  .mh13_xl-01 { margin-left: var(--px13); margin-right: var(--px13); }
  .mh14_xl-01 { margin-left: var(--px14); margin-right: var(--px14); }
  .mh15_xl-01 { margin-left: var(--px15); margin-right: var(--px15); }
  .mh16_xl-01 { margin-left: var(--px16); margin-right: var(--px16); }
  .mh17_xl-01 { margin-left: var(--px17); margin-right: var(--px17); }
  .mh18_xl-01 { margin-left: var(--px18); margin-right: var(--px18); }
  .mh19_xl-01 { margin-left: var(--px19); margin-right: var(--px19); }
  .mh20_xl-01 { margin-left: var(--px20); margin-right: var(--px20); }
  .mh5p_xl-01 { margin-left: 5%; margin-right: 5%; }
  .mh10p_xl-01 { margin-left: 10%; margin-right: 10%; }
  .mh15p_xl-01 { margin-left: 15%; margin-right: 15%; }
  .mh20p_xl-01 { margin-left: 20%; margin-right: 20%; }
  .mh25p_xl-01 { margin-left: 25%; margin-right: 25%; }
  .mh30p_xl-01 { margin-left: 30%; margin-right: 30%; }
  .mh35p_xl-01 { margin-left: 35%; margin-right: 35%; }
  .mh40p_xl-01 { margin-left: 40%; margin-right: 40%; }
  .mh45p_xl-01 { margin-left: 45%; margin-right: 45%; }
  .mh50p_xl-01 { margin-left: 50%; margin-right: 50%; }
  .mh55p_xl-01 { margin-left: 55%; margin-right: 55%; }
  .mh60p_xl-01 { margin-left: 60%; margin-right: 60%; }
  .mh65p_xl-01 { margin-left: 65%; margin-right: 65%; }
  .mh70p_xl-01 { margin-left: 70%; margin-right: 70%; }
  .mh75p_xl-01 { margin-left: 75%; margin-right: 75%; }
  .mh80p_xl-01 { margin-left: 80%; margin-right: 80%; }
  .mh85p_xl-01 { margin-left: 85%; margin-right: 85%; }
  .mh90p_xl-01 { margin-left: 90%; margin-right: 90%; }
  .mh95p_xl-01 { margin-left: 95%; margin-right: 95%; }
  .mh100p_xl-01 { margin-left: 100%; margin-right: 100%; }
  .mt1_xl-01 { margin-top: var(--px1); }
  .mt2_xl-01 { margin-top: var(--px2); }
  .mt3_xl-01 { margin-top: var(--px3); }
  .mt4_xl-01 { margin-top: var(--px4); }
  .mt5_xl-01 { margin-top: var(--px5); }
  .mt6_xl-01 { margin-top: var(--px6); }
  .mt7_xl-01 { margin-top: var(--px7); }
  .mt8_xl-01 { margin-top: var(--px8); }
  .mt9_xl-01 { margin-top: var(--px9); }
  .mt10_xl-01 { margin-top: var(--px10); }
  .mt11_xl-01 { margin-top: var(--px11); }
  .mt12_xl-01 { margin-top: var(--px12); }
  .mt13_xl-01 { margin-top: var(--px13); }
  .mt14_xl-01 { margin-top: var(--px14); }
  .mt15_xl-01 { margin-top: var(--px15); }
  .mt16_xl-01 { margin-top: var(--px16); }
  .mt17_xl-01 { margin-top: var(--px17); }
  .mt18_xl-01 { margin-top: var(--px18); }
  .mt19_xl-01 { margin-top: var(--px19); }
  .mt20_xl-01 { margin-top: var(--px20); }
  .mt5p_xl-01 { margin-top: 5%; }
  .mt10p_xl-01 { margin-top: 10%; }
  .mt15p_xl-01 { margin-top: 15%; }
  .mt20p_xl-01 { margin-top: 20%; }
  .mt25p_xl-01 { margin-top: 25%; }
  .mt30p_xl-01 { margin-top: 30%; }
  .mt35p_xl-01 { margin-top: 35%; }
  .mt40p_xl-01 { margin-top: 40%; }
  .mt45p_xl-01 { margin-top: 45%; }
  .mt50p_xl-01 { margin-top: 50%; }
  .mt55p_xl-01 { margin-top: 55%; }
  .mt60p_xl-01 { margin-top: 60%; }
  .mt65p_xl-01 { margin-top: 65%; }
  .mt70p_xl-01 { margin-top: 70%; }
  .mt75p_xl-01 { margin-top: 75%; }
  .mt80p_xl-01 { margin-top: 80%; }
  .mt85p_xl-01 { margin-top: 85%; }
  .mt90p_xl-01 { margin-top: 90%; }
  .mt95p_xl-01 { margin-top: 95%; }
  .mt100p_xl-01 { margin-top: 100%; }
  .mr1_xl-01 { margin-right: var(--px1); }
  .mr2_xl-01 { margin-right: var(--px2); }
  .mr3_xl-01 { margin-right: var(--px3); }
  .mr4_xl-01 { margin-right: var(--px4); }
  .mr5_xl-01 { margin-right: var(--px5); }
  .mr6_xl-01 { margin-right: var(--px6); }
  .mr7_xl-01 { margin-right: var(--px7); }
  .mr8_xl-01 { margin-right: var(--px8); }
  .mr9_xl-01 { margin-right: var(--px9); }
  .mr10_xl-01 { margin-right: var(--px10); }
  .mr11_xl-01 { margin-right: var(--px11); }
  .mr12_xl-01 { margin-right: var(--px12); }
  .mr13_xl-01 { margin-right: var(--px13); }
  .mr14_xl-01 { margin-right: var(--px14); }
  .mr15_xl-01 { margin-right: var(--px15); }
  .mr16_xl-01 { margin-right: var(--px16); }
  .mr17_xl-01 { margin-right: var(--px17); }
  .mr18_xl-01 { margin-right: var(--px18); }
  .mr19_xl-01 { margin-right: var(--px19); }
  .mr20_xl-01 { margin-right: var(--px20); }
  .mr5p_xl-01 { margin-right: 5%; }
  .mr10p_xl-01 { margin-right: 10%; }
  .mr15p_xl-01 { margin-right: 15%; }
  .mr20p_xl-01 { margin-right: 20%; }
  .mr25p_xl-01 { margin-right: 25%; }
  .mr30p_xl-01 { margin-right: 30%; }
  .mr35p_xl-01 { margin-right: 35%; }
  .mr40p_xl-01 { margin-right: 40%; }
  .mr45p_xl-01 { margin-right: 45%; }
  .mr50p_xl-01 { margin-right: 50%; }
  .mr55p_xl-01 { margin-right: 55%; }
  .mr60p_xl-01 { margin-right: 60%; }
  .mr65p_xl-01 { margin-right: 65%; }
  .mr70p_xl-01 { margin-right: 70%; }
  .mr75p_xl-01 { margin-right: 75%; }
  .mr80p_xl-01 { margin-right: 80%; }
  .mr85p_xl-01 { margin-right: 85%; }
  .mr90p_xl-01 { margin-right: 90%; }
  .mr95p_xl-01 { margin-right: 95%; }
  .mr100p_xl-01 { margin-right: 100%; }
  .mb1_xl-01 { margin-bottom: var(--px1); }
  .mb2_xl-01 { margin-bottom: var(--px2); }
  .mb3_xl-01 { margin-bottom: var(--px3); }
  .mb4_xl-01 { margin-bottom: var(--px4); }
  .mb5_xl-01 { margin-bottom: var(--px5); }
  .mb6_xl-01 { margin-bottom: var(--px6); }
  .mb7_xl-01 { margin-bottom: var(--px7); }
  .mb8_xl-01 { margin-bottom: var(--px8); }
  .mb9_xl-01 { margin-bottom: var(--px9); }
  .mb10_xl-01 { margin-bottom: var(--px10); }
  .mb11_xl-01 { margin-bottom: var(--px11); }
  .mb12_xl-01 { margin-bottom: var(--px12); }
  .mb13_xl-01 { margin-bottom: var(--px13); }
  .mb14_xl-01 { margin-bottom: var(--px14); }
  .mb15_xl-01 { margin-bottom: var(--px15); }
  .mb16_xl-01 { margin-bottom: var(--px16); }
  .mb17_xl-01 { margin-bottom: var(--px17); }
  .mb18_xl-01 { margin-bottom: var(--px18); }
  .mb19_xl-01 { margin-bottom: var(--px19); }
  .mb20_xl-01 { margin-bottom: var(--px20); }
  .mb5p_xl-01 { margin-bottom: 5%; }
  .mb10p_xl-01 { margin-bottom: 10%; }
  .mb15p_xl-01 { margin-bottom: 15%; }
  .mb20p_xl-01 { margin-bottom: 20%; }
  .mb25p_xl-01 { margin-bottom: 25%; }
  .mb30p_xl-01 { margin-bottom: 30%; }
  .mb35p_xl-01 { margin-bottom: 35%; }
  .mb40p_xl-01 { margin-bottom: 40%; }
  .mb45p_xl-01 { margin-bottom: 45%; }
  .mb50p_xl-01 { margin-bottom: 50%; }
  .mb55p_xl-01 { margin-bottom: 55%; }
  .mb60p_xl-01 { margin-bottom: 60%; }
  .mb65p_xl-01 { margin-bottom: 65%; }
  .mb70p_xl-01 { margin-bottom: 70%; }
  .mb75p_xl-01 { margin-bottom: 75%; }
  .mb80p_xl-01 { margin-bottom: 80%; }
  .mb85p_xl-01 { margin-bottom: 85%; }
  .mb90p_xl-01 { margin-bottom: 90%; }
  .mb95p_xl-01 { margin-bottom: 95%; }
  .mb100p_xl-01 { margin-bottom: 100%; }
  .ml1_xl-01 { margin-left: var(--px1); }
  .ml2_xl-01 { margin-left: var(--px2); }
  .ml3_xl-01 { margin-left: var(--px3); }
  .ml4_xl-01 { margin-left: var(--px4); }
  .ml5_xl-01 { margin-left: var(--px5); }
  .ml6_xl-01 { margin-left: var(--px6); }
  .ml7_xl-01 { margin-left: var(--px7); }
  .ml8_xl-01 { margin-left: var(--px8); }
  .ml9_xl-01 { margin-left: var(--px9); }
  .ml10_xl-01 { margin-left: var(--px10); }
  .ml11_xl-01 { margin-left: var(--px11); }
  .ml12_xl-01 { margin-left: var(--px12); }
  .ml13_xl-01 { margin-left: var(--px13); }
  .ml14_xl-01 { margin-left: var(--px14); }
  .ml15_xl-01 { margin-left: var(--px15); }
  .ml16_xl-01 { margin-left: var(--px16); }
  .ml17_xl-01 { margin-left: var(--px17); }
  .ml18_xl-01 { margin-left: var(--px18); }
  .ml19_xl-01 { margin-left: var(--px19); }
  .ml20_xl-01 { margin-left: var(--px20); }
  .ml5p_xl-01 { margin-left: 5%; }
  .ml10p_xl-01 { margin-left: 10%; }
  .ml15p_xl-01 { margin-left: 15%; }
  .ml20p_xl-01 { margin-left: 20%; }
  .ml25p_xl-01 { margin-left: 25%; }
  .ml30p_xl-01 { margin-left: 30%; }
  .ml35p_xl-01 { margin-left: 35%; }
  .ml40p_xl-01 { margin-left: 40%; }
  .ml45p_xl-01 { margin-left: 45%; }
  .ml50p_xl-01 { margin-left: 50%; }
  .ml55p_xl-01 { margin-left: 55%; }
  .ml60p_xl-01 { margin-left: 60%; }
  .ml65p_xl-01 { margin-left: 65%; }
  .ml70p_xl-01 { margin-left: 70%; }
  .ml75p_xl-01 { margin-left: 75%; }
  .ml80p_xl-01 { margin-left: 80%; }
  .ml85p_xl-01 { margin-left: 85%; }
  .ml90p_xl-01 { margin-left: 90%; }
  .ml95p_xl-01 { margin-left: 95%; }
  .ml100p_xl-01 { margin-left: 100%; }
  .ba0_xl-01 { border: none; }
  .bt0_xl-01 { border-top: none; }
  .br0_xl-01 { border-right: none; }
  .bb0_xl-01 { border-bottom: none; }
  .bl0_xl-01 { border-left: none; }
  .ba_xl-01 { border: solid 1px rgba(255, 255, 255, 0.15); }
  .bt_xl-01 { border-top: solid 1px rgba(255, 255, 255, 0.15); }
  .br_xl-01 { border-right: solid 1px rgba(255, 255, 255, 0.15); }
  .bb_xl-01 { border-bottom: solid 1px rgba(255, 255, 255, 0.15); }
  .bl_xl-01 { border-left: solid 1px rgba(255, 255, 255, 0.15); }
  .bv_xl-01 { border-top: solid 1px rgba(255, 255, 255, 0.15); border-bottom: solid 1px rgba(255, 255, 255, 0.15); }
  .bh_xl-01 { border-left: solid 1px rgba(255, 255, 255, 0.15); border-right: solid 1px rgba(255, 255, 255, 0.15); }
  .borderNeutralOnFill_xl-01 { border-color: var(--neutralOnFill); }
  .borderBlack_xl-01 { border-color: var(--black); }
  .borderWhite_xl-01 { border-color: var(--white); }
  .borderGreyHighlighted_xl-01 { border-color: var(--greyHighlighted); }
  .borderNeutral_xl-01 { border-color: var(--neutral); }
  .borderRed_xl-01 { border-color: var(--red); }
  .borderTeal_xl-01 { border-color: var(--teal); }
  .borderPurple_xl-01 { border-color: var(--purple); }
  .borderBlue_xl-01 { border-color: var(--blue); }
  .borderOrange_xl-01 { border-color: var(--orange); }
  .borderYellow_xl-01 { border-color: var(--yellow); }
  .borderGreen_xl-01 { border-color: var(--green); }
  .borderPink_xl-01 { border-color: var(--pink); }
  .borderGrey_xl-01 { border-color: var(--grey); }
  .borderTextNeutral_xl-01 { border-color: var(--textNeutral); }
  .borderTextMinimal_xl-01 { border-color: var(--textMinimal); }
  .borderDetailNeutral_xl-01 { border-color: var(--detailNeutral); }
  .borderDetailMinimal_xl-01 { border-color: var(--detailMinimal); }
  .br1_xl-01 { border-radius: 2px; }
  .br2_xl-01 { border-radius: 5px; }
  .br3_xl-01 { border-radius: 10px; }
  .br4_xl-01 { border-radius: 15px; }
  .br5_xl-01 { border-radius: 20px; }
  .strokeNeutralOnFill_xl-01 { stroke: var(--neutralOnFill); }
  .strokeBlack_xl-01 { stroke: var(--black); }
  .strokeWhite_xl-01 { stroke: var(--white); }
  .strokeGreyHighlighted_xl-01 { stroke: var(--greyHighlighted); }
  .strokeNeutral_xl-01 { stroke: var(--neutral); }
  .strokeRed_xl-01 { stroke: var(--red); }
  .strokeTeal_xl-01 { stroke: var(--teal); }
  .strokePurple_xl-01 { stroke: var(--purple); }
  .strokeBlue_xl-01 { stroke: var(--blue); }
  .strokeOrange_xl-01 { stroke: var(--orange); }
  .strokeYellow_xl-01 { stroke: var(--yellow); }
  .strokeGreen_xl-01 { stroke: var(--green); }
  .strokePink_xl-01 { stroke: var(--pink); }
  .strokeGrey_xl-01 { stroke: var(--grey); }
  .strokeTextNeutral_xl-01 { stroke: var(--textNeutral); }
  .strokeTextMinimal_xl-01 { stroke: var(--textMinimal); }
  .strokeDetailNeutral_xl-01 { stroke: var(--detailNeutral); }
  .strokeDetailMinimal_xl-01 { stroke: var(--detailMinimal); }
  .o0_xl-01 { opacity: 0.00; }
  .o5_xl-01 { opacity: 0.05; }
  .o10_xl-01 { opacity: 0.10; }
  .o15_xl-01 { opacity: 0.15; }
  .o20_xl-01 { opacity: 0.20; }
  .o25_xl-01 { opacity: 0.25; }
  .o30_xl-01 { opacity: 0.30; }
  .o35_xl-01 { opacity: 0.35; }
  .o40_xl-01 { opacity: 0.40; }
  .o45_xl-01 { opacity: 0.45; }
  .o50_xl-01 { opacity: 0.50; }
  .o55_xl-01 { opacity: 0.55; }
  .o60_xl-01 { opacity: 0.60; }
  .o65_xl-01 { opacity: 0.65; }
  .o70_xl-01 { opacity: 0.70; }
  .o75_xl-01 { opacity: 0.75; }
  .o80_xl-01 { opacity: 0.80; }
  .o85_xl-01 { opacity: 0.85; }
  .o90_xl-01 { opacity: 0.90; }
  .o95_xl-01 { opacity: 0.95; }
  .o100_xl-01 { opacity: 1.00; }
  .aShadow_xl-01 { box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.25); }
  .tShadow_xl-01 { box-shadow: 0px -15px 25px rgba(0, 0, 0, 0.25); }
  .rShadow_xl-01 { box-shadow: 15px 0px 25px rgba(0, 0, 0, 0.25); }
  .bShadow_xl-01 { box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.25); }
  .lShadow_xl-01 { box-shadow: -15px 0px 25px rgba(0, 0, 0, 0.25); }
  .rtShadow_xl-01 { box-shadow: 15px -15px 25px rgba(0, 0, 0, 0.25); }
  .rbShadow_xl-01 { box-shadow: 15px 15px 25px rgba(0, 0, 0, 0.25); }
  .lbShadow_xl-01 { box-shadow: -15px 15px 25px rgba(0, 0, 0, 0.25); }
  .ltShadow_xl-01 { box-shadow: -15px -15px 25px rgba(0, 0, 0, 0.25); }
  .rotate0_xl-01 { transform: rotate(0deg); }
  .rotate5_xl-01 { transform: rotate(5deg); }
  .rotate10_xl-01 { transform: rotate(10deg); }
  .rotate15_xl-01 { transform: rotate(15deg); }
  .rotate20_xl-01 { transform: rotate(20deg); }
  .rotate25_xl-01 { transform: rotate(25deg); }
  .rotate30_xl-01 { transform: rotate(30deg); }
  .rotate35_xl-01 { transform: rotate(35deg); }
  .rotate40_xl-01 { transform: rotate(40deg); }
  .rotate45_xl-01 { transform: rotate(45deg); }
  .rotate50_xl-01 { transform: rotate(50deg); }
  .rotate55_xl-01 { transform: rotate(55deg); }
  .rotate60_xl-01 { transform: rotate(60deg); }
  .rotate65_xl-01 { transform: rotate(65deg); }
  .rotate70_xl-01 { transform: rotate(70deg); }
  .rotate75_xl-01 { transform: rotate(75deg); }
  .rotate80_xl-01 { transform: rotate(80deg); }
  .rotate85_xl-01 { transform: rotate(85deg); }
  .rotate90_xl-01 { transform: rotate(90deg); }
  .rotate95_xl-01 { transform: rotate(95deg); }
  .rotate100_xl-01 { transform: rotate(100deg); }
  .rotate105_xl-01 { transform: rotate(105deg); }
  .rotate110_xl-01 { transform: rotate(110deg); }
  .rotate115_xl-01 { transform: rotate(115deg); }
  .rotate120_xl-01 { transform: rotate(120deg); }
  .rotate125_xl-01 { transform: rotate(125deg); }
  .rotate130_xl-01 { transform: rotate(130deg); }
  .rotate135_xl-01 { transform: rotate(135deg); }
  .rotate140_xl-01 { transform: rotate(140deg); }
  .rotate145_xl-01 { transform: rotate(145deg); }
  .rotate150_xl-01 { transform: rotate(150deg); }
  .rotate155_xl-01 { transform: rotate(155deg); }
  .rotate160_xl-01 { transform: rotate(160deg); }
  .rotate165_xl-01 { transform: rotate(165deg); }
  .rotate170_xl-01 { transform: rotate(170deg); }
  .rotate175_xl-01 { transform: rotate(175deg); }
  .rotate180_xl-01 { transform: rotate(180deg); }
  .rotate185_xl-01 { transform: rotate(185deg); }
  .rotate190_xl-01 { transform: rotate(190deg); }
  .rotate195_xl-01 { transform: rotate(195deg); }
  .rotate200_xl-01 { transform: rotate(200deg); }
  .rotate205_xl-01 { transform: rotate(205deg); }
  .rotate210_xl-01 { transform: rotate(210deg); }
  .rotate215_xl-01 { transform: rotate(215deg); }
  .rotate220_xl-01 { transform: rotate(220deg); }
  .rotate225_xl-01 { transform: rotate(225deg); }
  .rotate230_xl-01 { transform: rotate(230deg); }
  .rotate235_xl-01 { transform: rotate(235deg); }
  .rotate240_xl-01 { transform: rotate(240deg); }
  .rotate245_xl-01 { transform: rotate(245deg); }
  .rotate250_xl-01 { transform: rotate(250deg); }
  .rotate255_xl-01 { transform: rotate(255deg); }
  .rotate260_xl-01 { transform: rotate(260deg); }
  .rotate265_xl-01 { transform: rotate(265deg); }
  .rotate270_xl-01 { transform: rotate(270deg); }
  .rotate275_xl-01 { transform: rotate(275deg); }
  .rotate280_xl-01 { transform: rotate(280deg); }
  .rotate285_xl-01 { transform: rotate(285deg); }
  .rotate290_xl-01 { transform: rotate(290deg); }
  .rotate295_xl-01 { transform: rotate(295deg); }
  .rotate300_xl-01 { transform: rotate(300deg); }
  .rotate305_xl-01 { transform: rotate(305deg); }
  .rotate310_xl-01 { transform: rotate(310deg); }
  .rotate315_xl-01 { transform: rotate(315deg); }
  .rotate320_xl-01 { transform: rotate(320deg); }
  .rotate325_xl-01 { transform: rotate(325deg); }
  .rotate330_xl-01 { transform: rotate(330deg); }
  .rotate335_xl-01 { transform: rotate(335deg); }
  .rotate340_xl-01 { transform: rotate(340deg); }
  .rotate345_xl-01 { transform: rotate(345deg); }
  .rotate350_xl-01 { transform: rotate(350deg); }
  .rotate355_xl-01 { transform: rotate(355deg); }
  .rotate360_xl-01 { transform: rotate(360deg); }
  .rotate365_xl-01 { transform: rotate(365deg); }
  .rotateN0_xl-01 { transform: rotate(-0deg); }
  .rotateN5_xl-01 { transform: rotate(-5deg); }
  .rotateN10_xl-01 { transform: rotate(-10deg); }
  .rotateN15_xl-01 { transform: rotate(-15deg); }
  .rotateN20_xl-01 { transform: rotate(-20deg); }
  .rotateN25_xl-01 { transform: rotate(-25deg); }
  .rotateN30_xl-01 { transform: rotate(-30deg); }
  .rotateN35_xl-01 { transform: rotate(-35deg); }
  .rotateN40_xl-01 { transform: rotate(-40deg); }
  .rotateN45_xl-01 { transform: rotate(-45deg); }
  .rotateN50_xl-01 { transform: rotate(-50deg); }
  .rotateN55_xl-01 { transform: rotate(-55deg); }
  .rotateN60_xl-01 { transform: rotate(-60deg); }
  .rotateN65_xl-01 { transform: rotate(-65deg); }
  .rotateN70_xl-01 { transform: rotate(-70deg); }
  .rotateN75_xl-01 { transform: rotate(-75deg); }
  .rotateN80_xl-01 { transform: rotate(-80deg); }
  .rotateN85_xl-01 { transform: rotate(-85deg); }
  .rotateN90_xl-01 { transform: rotate(-90deg); }
  .rotateN95_xl-01 { transform: rotate(-95deg); }
  .rotateN100_xl-01 { transform: rotate(-100deg); }
  .rotateN105_xl-01 { transform: rotate(-105deg); }
  .rotateN110_xl-01 { transform: rotate(-110deg); }
  .rotateN115_xl-01 { transform: rotate(-115deg); }
  .rotateN120_xl-01 { transform: rotate(-120deg); }
  .rotateN125_xl-01 { transform: rotate(-125deg); }
  .rotateN130_xl-01 { transform: rotate(-130deg); }
  .rotateN135_xl-01 { transform: rotate(-135deg); }
  .rotateN140_xl-01 { transform: rotate(-140deg); }
  .rotateN145_xl-01 { transform: rotate(-145deg); }
  .rotateN150_xl-01 { transform: rotate(-150deg); }
  .rotateN155_xl-01 { transform: rotate(-155deg); }
  .rotateN160_xl-01 { transform: rotate(-160deg); }
  .rotateN165_xl-01 { transform: rotate(-165deg); }
  .rotateN170_xl-01 { transform: rotate(-170deg); }
  .rotateN175_xl-01 { transform: rotate(-175deg); }
  .rotateN180_xl-01 { transform: rotate(-180deg); }
  .rotateN185_xl-01 { transform: rotate(-185deg); }
  .rotateN190_xl-01 { transform: rotate(-190deg); }
  .rotateN195_xl-01 { transform: rotate(-195deg); }
  .rotateN200_xl-01 { transform: rotate(-200deg); }
  .rotateN205_xl-01 { transform: rotate(-205deg); }
  .rotateN210_xl-01 { transform: rotate(-210deg); }
  .rotateN215_xl-01 { transform: rotate(-215deg); }
  .rotateN220_xl-01 { transform: rotate(-220deg); }
  .rotateN225_xl-01 { transform: rotate(-225deg); }
  .rotateN230_xl-01 { transform: rotate(-230deg); }
  .rotateN235_xl-01 { transform: rotate(-235deg); }
  .rotateN240_xl-01 { transform: rotate(-240deg); }
  .rotateN245_xl-01 { transform: rotate(-245deg); }
  .rotateN250_xl-01 { transform: rotate(-250deg); }
  .rotateN255_xl-01 { transform: rotate(-255deg); }
  .rotateN260_xl-01 { transform: rotate(-260deg); }
  .rotateN265_xl-01 { transform: rotate(-265deg); }
  .rotateN270_xl-01 { transform: rotate(-270deg); }
  .rotateN275_xl-01 { transform: rotate(-275deg); }
  .rotateN280_xl-01 { transform: rotate(-280deg); }
  .rotateN285_xl-01 { transform: rotate(-285deg); }
  .rotateN290_xl-01 { transform: rotate(-290deg); }
  .rotateN295_xl-01 { transform: rotate(-295deg); }
  .rotateN300_xl-01 { transform: rotate(-300deg); }
  .rotateN305_xl-01 { transform: rotate(-305deg); }
  .rotateN310_xl-01 { transform: rotate(-310deg); }
  .rotateN315_xl-01 { transform: rotate(-315deg); }
  .rotateN320_xl-01 { transform: rotate(-320deg); }
  .rotateN325_xl-01 { transform: rotate(-325deg); }
  .rotateN330_xl-01 { transform: rotate(-330deg); }
  .rotateN335_xl-01 { transform: rotate(-335deg); }
  .rotateN340_xl-01 { transform: rotate(-340deg); }
  .rotateN345_xl-01 { transform: rotate(-345deg); }
  .rotateN350_xl-01 { transform: rotate(-350deg); }
  .rotateN355_xl-01 { transform: rotate(-355deg); }
  .rotateN360_xl-01 { transform: rotate(-360deg); }
  .rotateN365_xl-01 { transform: rotate(-365deg); }
  .focusBlack_xl-01:focus { color: var(--black); }
  .focusWhite_xl-01:focus { color: var(--white); }
  .focusGreyHighlighted_xl-01:focus { color: var(--greyHighlightedAlt); }
  .focusNeutral_xl-01:focus { color: var(--neutralAlt); }
  .focusRed_xl-01:focus { color: var(--redAlt); }
  .focusPurple_xl-01:focus { color: var(--purpleAlt); }
  .focusDetailNeutral_xl-01:focus { color: var(--detailNeutral); }
  .focusDetailMinimal_xl-01:focus { color: var(--detailMinimal); }
  .focusBgBlack_xl-01:focus { background-color: var(--black); fill: var(--black); }
  .focusBgWhite_xl-01:focus { background-color: var(--white); fill: var(--white); }
  .focusBgGreyHighlighted_xl-01:focus { background-color: var(--greyHighlightedAlt); fill: var(--greyHighlightedAlt); }
  .focusBgNeutral_xl-01:focus { background-color: var(--neutralFillAlt); fill: var(--neutralFillAlt); }
  .focusBgLevel1_xl-01:focus { background-color: var(--bgLevel1); fill: var(--bgLevel1); }
  .focusBgLevel2_xl-01:focus { background-color: var(--bgLevel2); fill: var(--bgLevel2); }
  .focusBgLevel3_xl-01:focus { background-color: var(--bgLevel3); fill: var(--bgLevel3); }
  .focusBgLevel4_xl-01:focus { background-color: var(--bgLevel4); fill: var(--bgLevel4); }
  .focusBgRed_xl-01:focus { background-color: var(--redFillAlt); fill: var(--redFillAlt); }
  .focusBgTeal_xl-01:focus { background-color: var(--tealFillAlt); fill: var(--tealFillAlt); }
  .focusBgPurple_xl-01:focus { background-color: var(--purpleFillAlt); fill: var(--purpleFillAlt); }
  .focusStrokeBlack_xl-01:focus * { stroke: var(--black); }
  .focusStrokeWhite_xl-01:focus * { stroke: var(--white); }
  .focusStrokeGreyHighlighted_xl-01:focus * { stroke: var(--greyHighlightedAlt); }
  .focusStrokeNeutral_xl-01:focus * { stroke: var(--neutralAlt); }
  .focusStrokeRed_xl-01:focus * { stroke: var(--redAlt); }
  .focusStrokePurple_xl-01:focus * { stroke: var(--purpleAlt); }
  .focusStrokeDetailNeutral_xl-01:focus * { stroke: var(--detailNeutral); }
  .focusStrokeDetailMinimal_xl-01:focus * { stroke: var(--detailMinimal); }
  .focusBorderBlack_xl-01:focus { border-color: var(--black); }
  .focusBorderWhite_xl-01:focus { border-color: var(--white); }
  .focusBorderGreyHighlighted_xl-01:focus { border-color: var(--greyHighlightedAlt); }
  .focusBorderNeutral_xl-01:focus { border-color: var(--neutralAlt); }
  .focusBorderRed_xl-01:focus { border-color: var(--redAlt); }
  .focusBorderPurple_xl-01:focus { border-color: var(--purpleAlt); }
  .focusBorderDetailNeutral_xl-01:focus { border-color: var(--detailNeutral); }
  .focusBorderDetailMinimal_xl-01:focus { border-color: var(--detailMinimal); }
  .hoverLight_xl-01:hover { font-weight: 300; }
  .hoverRegular_xl-01:hover { font-weight: 400; }
  .hoverMedium_xl-01:hover { font-weight: 500; }
  .hoverBold_xl-01:hover { font-weight: 700; }
  .hoverBlack_xl-01:hover { color: var(--black); }
  .hoverWhite_xl-01:hover { color: var(--white); }
  .hoverGreyHighlighted_xl-01:hover { color: var(--greyHighlightedAlt); }
  .hoverNeutral_xl-01:hover { color: var(--neutralAlt); }
  .hoverRed_xl-01:hover { color: var(--redAlt); }
  .hoverPurple_xl-01:hover { color: var(--purpleAlt); }
  .hoverDetailNeutral_xl-01:hover { color: var(--detailNeutral); }
  .hoverDetailMinimal_xl-01:hover { color: var(--detailMinimal); }
  .hoverBgBlack_xl-01:hover { background-color: var(--black); fill: var(--black); }
  .hoverBgWhite_xl-01:hover { background-color: var(--white); fill: var(--white); }
  .hoverBgGreyHighlighted_xl-01:hover { background-color: var(--greyHighlightedAlt); fill: var(--greyHighlightedAlt); }
  .hoverBgNeutral_xl-01:hover { background-color: var(--neutralFillAlt); fill: var(--neutralFillAlt); }
  .hoverBgLevel1_xl-01:hover { background-color: var(--bgLevel1); fill: var(--bgLevel1); }
  .hoverBgLevel2_xl-01:hover { background-color: var(--bgLevel2); fill: var(--bgLevel2); }
  .hoverBgLevel3_xl-01:hover { background-color: var(--bgLevel3); fill: var(--bgLevel3); }
  .hoverBgLevel4_xl-01:hover { background-color: var(--bgLevel4); fill: var(--bgLevel4); }
  .hoverBgRed_xl-01:hover { background-color: var(--redFillAlt); fill: var(--redFillAlt); }
  .hoverBgTeal_xl-01:hover { background-color: var(--tealFillAlt); fill: var(--tealFillAlt); }
  .hoverBgPurple_xl-01:hover { background-color: var(--purpleFillAlt); fill: var(--purpleFillAlt); }
  .hoverStrokeBlack_xl-01:hover * { stroke: var(--black); }
  .hoverStrokeWhite_xl-01:hover * { stroke: var(--white); }
  .hoverStrokeGreyHighlighted_xl-01:hover * { stroke: var(--greyHighlightedAlt); }
  .hoverStrokeNeutral_xl-01:hover * { stroke: var(--neutralAlt); }
  .hoverStrokeRed_xl-01:hover * { stroke: var(--redAlt); }
  .hoverStrokePurple_xl-01:hover * { stroke: var(--purpleAlt); }
  .hoverStrokeDetailNeutral_xl-01:hover * { stroke: var(--detailNeutral); }
  .hoverStrokeDetailMinimal_xl-01:hover * { stroke: var(--detailMinimal); }
  .hoverBorderBlack_xl-01:hover { border-color: var(--black); }
  .hoverBorderWhite_xl-01:hover { border-color: var(--white); }
  .hoverBorderGreyHighlighted_xl-01:hover { border-color: var(--greyHighlightedAlt); }
  .hoverBorderNeutral_xl-01:hover { border-color: var(--neutralAlt); }
  .hoverBorderRed_xl-01:hover { border-color: var(--redAlt); }
  .hoverBorderPurple_xl-01:hover { border-color: var(--purpleAlt); }
  .hoverBorderDetailNeutral_xl-01:hover { border-color: var(--detailNeutral); }
  .hoverBorderDetailMinimal_xl-01:hover { border-color: var(--detailMinimal); }
  .light_xl-01 { font-weight: 300; }
  .regular_xl-01 { font-weight: 400; }
  .medium_xl-01 { font-weight: 500; }
  .bold_xl-01 { font-weight: 700; }
  .bgNone_xl-01 { fill: transparent; background-color: transparent; }
  .transparent_xl-01 { color: transparent; }
  .vHidden_xl-01 { visibility: hidden; }
  .flexWrap_xl-01 { display: flex; flex-wrap: wrap; }
  .flexNoWrap_xl-01 { display: flex; flex-wrap: nowrap; }
  .flexRow_xl-01 { display: flex; flex-direction: row; }
  .flexColumn_xl-01 { display: flex; flex-direction: column; }
  .noShrink_xl-01 { flex-shrink: 0; }
  .gridRowAuto_xl-01 { grid-row: auto; }
  .gridColumnAuto_xl-01 { grid-column: auto; }
  .selfStart_xl-01 { align-self: flex-start; }
  .selfCenter_xl-01 { align-self: center; }
  .selfEnd_xl-01 { align-self: flex-end; }
  .selfStretch_xl-01 { align-self: stretch; }
  .visible_xl-01 { overflow: visible; }
  .visibleX_xl-01 { overflow-x: visible; }
  .visibleY_xl-01 { overflow-y: visible; }
  .scroll_xl-01 { overflow: auto; }
  .scrollX_xl-01 { overflow-x: auto; }
  .scrollY_xl-01 { overflow-y: auto; }
  .scrollAlways_xl-01 { overflow: scroll; }
  .scrollXAlways_xl-01 { overflow-x: scroll; }
  .scrollYAlways_xl-01 { overflow-y: scroll; }
  .noOverflow_xl-01 { overflow: hidden; }
  .fMono_xl-01 { font-family: 'IBM Plex Mono', monospace; }
  .fSans_xl-01 { font-family: 'IBM Plex Sans', sans-serif; }
  .fs48px_xl-01 { font-size: 48px; }
  .fs60px_xl-01 { font-size: 60px; }
  .italic_xl-01 { font-style: italic; }
  .lhDouble_xl-01 { line-height:1.5em; }
  .ellipsis_xl-01 { text-overflow: ellipsis; white-space: nowrap; overflow: hidden; }
  .lineClamp1_xl-01 { display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical; overflow: hidden; }
  .pre_xl-01 { white-space: pre; }
  .preLine_xl-01 { white-space: pre-line; }
  .preWrap_xl-01 { white-space: pre-wrap; }
  .noWrap_xl-01 { white-space: nowrap; }
  .breakAll_xl-01 { word-break: break-all; }
  .breakWord_xl-01 { word-break: break-word; }
  .noDecoration_xl-01 { text-decoration: none; }
  .hyphens_xl-01 { hyphens: auto; }
  .hyphensMan_xl-01 { hyphens: manual; }
  .wAuto_xl-01 { width: auto; }
  .wFitContent_xl-01 { width: fit-content; }
  .w100vw_xl-01 { width: 100vw; }
  .minW100vw_xl-01 { min-width: 100vw; }
  .maxW100vw_xl-01 { max-width: 100vw; }
  .wThird_xl-01 { width: calc(100% / 3); }
  .minWThird_xl-01 { min-width: calc(100% / 3); }
  .maxWThird_xl-01 { max-width: calc(100% / 3); }
  .wHalf_xl-01 { width: 48%; }
  .minWHalf_xl-01 { min-width: 48%; }
  .maxWHalf_xl-01 { max-width: 48%; }
  .hAuto_xl-01 { height: auto; }
  .h0_xl-01 { height: 0; }
  .h100vh_xl-01 { height: 100vh; }
  .h50vh_xl-01 { height: 50vh; }
  .hFitContent_xl-01 { height: fit-content; }
  .minH100vh_xl-01 { min-height: 100vh; }
  .hThird_xl-01 { height: calc(100% / 3); }
  .minHThird_xl-01 { min-height: calc(100% / 3); }
  .maxHThird_xl-01 { max-height: calc(100% / 3); }
  .hHalf_xl-01 { height: 48%; }
  .minHHalf_xl-01 { min-height: 48%; }
  .maxHHalf_xl-01 { max-height: 48%; }
  .maAuto_xl-01 { margin: auto; }
  .ma0_xl-01 { margin: 0; }
  .mvAuto_xl-01 { margin-top: auto; margin-bottom: auto; }
  .mv0_xl-01 { margin-top: 0; margin-bottom: 0; }
  .mhAuto_xl-01 { margin-left: auto; margin-right: auto; }
  .mh0_xl-01 { margin-left: 0; margin-right: 0; }
  .mtAuto_xl-01 { margin-top: auto; }
  .mt0_xl-01 { margin-top: 0; }
  .mrAuto_xl-01 { margin-right: auto; }
  .mr0_xl-01 { margin-right: 0; }
  .mbAuto_xl-01 { margin-bottom: auto; }
  .mb0_xl-01 { margin-bottom: 0; }
  .mlAuto_xl-01 { margin-left: auto; }
  .ml0_xl-01 { margin-left: 0; }
  .pa0_xl-01 { padding: 0; }
  .pv0_xl-01 { padding-top: 0; padding-bottom: 0; }
  .ph0_xl-01 { padding-left: 0; padding-right: 0; }
  .pt0_xl-01 { padding-top: 0; }
  .pr0_xl-01 { padding-right: 0; }
  .pb0_xl-01 { padding-bottom: 0; }
  .pl0_xl-01 { padding-left: 0; }
  .paMin_xl-01 { padding: 2px; }
  .ptMin_xl-01 { padding-top: 2px; }
  .prMin_xl-01 { padding-right: 2px; }
  .pbMin_xl-01 { padding-bottom: 2px; }
  .plMin_xl-01 { padding-left: 2px; }
  .pvMin_xl-01 { padding-top: 2px; padding-bottom: 2px; }
  .phMin_xl-01 { padding-left: 2px; padding-right: 2px; }
  .br50p_xl-01 { border-radius: 50%; }
  .baWhite_xl-01 { border: solid 1px white; }
  .baTransparent_xl-01 { border: solid 1px transparent; }
  .baBlack_xl-01 { border: solid 1px rgba(0, 0, 0, 0.1); }
  .btBlack_xl-01 { border-top: solid 1px rgba(0, 0, 0, 0.1); }
  .btWhite_xl-01 { border-top: solid 1px white; }
  .brBlack_xl-01 { border-right: solid 1px rgba(0, 0, 0, 0.1); }
  .bbTransparent_xl-01 { border-bottom: solid 1px transparent; }
  .bbBlack_xl-01 { border-bottom: solid 1px rgba(0, 0, 0, 0.1); }
  .bbWhite_xl-01 { border-bottom: solid 1px white; }
  .bbPurple_xl-01 { border-bottom: solid 1px var(--purple); }
  .bbPurple2_xl-01 { border-bottom: solid 2px var(--purple); }
  .blBlack_xl-01 { border-left: solid 1px rgba(0, 0, 0, 0.1); }
  .ol0_xl-01 { outline: none; }
  .noShadow_xl-01 { box-shadow: none; }
  .shadowInset_xl-01 { box-shadow: inset 0 15px 20px rgba(0, 0, 0, 0.25); }
  .aShadowInset_xl-01 { box-shadow: inset 0 0px 15px rgba(0, 0, 0, 0.5); }
  .rShadowInset_xl-01 { box-shadow: inset 10px 0px 15px rgba(0, 0, 0, 0.25); }
  .lShadowInset_xl-01 { box-shadow: inset 10px 0px -15px rgba(0, 0, 0, 0.25); }
  .tShadowInset_xl-01 { box-shadow: inset 10px 15px 0px rgba(0, 0, 0, 0.25); }
  .bShadowInset_xl-01 { box-shadow: inset 10px -15px 0px rgba(0, 0, 0, 0.25); }
  .bhShadow_xl-01 { box-shadow: 25px 25px 25px rgba(0, 0, 0, 0.25), -25px 25px 25px rgba(0, 0, 0, 0.25); }
  .shadowLight_xl-01 { box-shadow: 0 0 50px var(--white); }
  .pointer_xl-01 { cursor: pointer; }
  .cursor_xl-01 { cursor: default; }
  .move_xl-01 { cursor: move; }
  .animate_xl-01 { transition: all 0.2s ease-in-out; }
  .animateColor_xl-01 { transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out; }
  .animateOpacity_xl-01 { transition: opacity 0.2s ease-in-out; }
  .inactive_xl-01 { cursor: default; opacity: 0.3;; }
  .noEvent_xl-01 { pointer-events: none; }
  .eventAuto_xl-01 { pointer-events: auto; }
  .noSelect_xl-01 { user-select: none; }
  .bgWhiteRadialGradient_xl-01 { background: radial-gradient(
    rgba(255, 255, 255, 1),
    rgba(255, 255, 255, 0.5) 20%,
    rgba(255, 255, 255, 0.25) 40%,
    rgba(255, 255, 255, 0) 70%
  );
  margin-left: -5px; }
  .t10p_xl-01 { top: 10%; }
  .t15p_xl-01 { top: 15%; }
  .l10p_xl-01 { left: 10%; }
  .l25p_xl-01 { left: 25%; }
  .hoverO0_xl-01:hover { opacity: 0; }
  .hoverO100_xl-01:hover { opacity: 1; }
  .hoverU_xl-01:hover { border-bottom: solid 1px var(--white); }
  .hoverShadow_xl-01:hover { box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.25); }
  .hoverChildPurple_xl-01:hover * { color: var(--purpleAlt); fill: var(--purpleAlt); }
  .hoverTransparentBorder_xl-01:hover { border-color: transparent; }
  .noScrollbar_xl-01::-webkit-scrollbar { display: none; }
  .outlineWhite_xl-01:focus { box-shadow: 0 0 15px 1px var(--white); background: var(--white); color: var(--grey90); }
  .firstLetterCap_xl-01::first-letter { text-transform: uppercase; }
}
/* large screens */
@media (max-width: 1700px) {
  .neutralOnFill_l-01 { color: var(--neutralOnFill); }
  .black_l-01 { color: var(--black); }
  .white_l-01 { color: var(--white); }
  .greyHighlighted_l-01 { color: var(--greyHighlighted); }
  .neutral_l-01 { color: var(--neutral); }
  .red_l-01 { color: var(--red); }
  .teal_l-01 { color: var(--teal); }
  .purple_l-01 { color: var(--purple); }
  .blue_l-01 { color: var(--blue); }
  .orange_l-01 { color: var(--orange); }
  .yellow_l-01 { color: var(--yellow); }
  .green_l-01 { color: var(--green); }
  .pink_l-01 { color: var(--pink); }
  .grey_l-01 { color: var(--grey); }
  .textNeutral_l-01 { color: var(--textNeutral); }
  .textMinimal_l-01 { color: var(--textMinimal); }
  .detailNeutral_l-01 { color: var(--detailNeutral); }
  .detailMinimal_l-01 { color: var(--detailMinimal); }
  .bgBlack_l-01 { fill: var--(black); background-color: var(--black); }
  .bgWhite_l-01 { fill: var--(white); background-color: var(--white); }
  .bgGreyHighlighted_l-01 { fill: var--(greyHighlighted); background-color: var(--greyHighlighted); }
  .bgNeutral_l-01 { fill: var--(neutralFill); background-color: var(--neutralFill); }
  .bgLevel1_l-01 { fill: var--(bgLevel1); background-color: var(--bgLevel1); }
  .bgLevel2_l-01 { fill: var--(bgLevel2); background-color: var(--bgLevel2); }
  .bgLevel3_l-01 { fill: var--(bgLevel3); background-color: var(--bgLevel3); }
  .bgLevel4_l-01 { fill: var--(bgLevel4); background-color: var(--bgLevel4); }
  .bgRed_l-01 { fill: var--(redFill); background-color: var(--redFill); }
  .bgTeal_l-01 { fill: var--(tealFill); background-color: var(--tealFill); }
  .bgPurple_l-01 { fill: var--(purpleFill); background-color: var(--purpleFill); }
  .bgBlue_l-01 { fill: var--(blueFill); background-color: var(--blueFill); }
  .bgOrange_l-01 { fill: var--(orangeFill); background-color: var(--orangeFill); }
  .bgYellow_l-01 { fill: var--(yellowFill); background-color: var(--yellowFill); }
  .bgGreen_l-01 { fill: var--(greenFill); background-color: var(--greenFill); }
  .bgPink_l-01 { fill: var--(pinkFill); background-color: var(--pinkFill); }
  .bgGrey_l-01 { fill: var--(greyFill); background-color: var(--greyFill); }
  .fixed_l-01 { position: fixed; }
  .relative_l-01 { position: relative; }
  .absolute_l-01 { position: absolute; }
  .l0_l-01 { left: 0; }
  .r0_l-01 { right: 0; }
  .t0_l-01 { top: 0; }
  .b0_l-01 { bottom: 0; }
  .hidden_l-01 { display: none; }
  .block_l-01 { display: block; }
  .inlineBlock_l-01 { display: inline-block; }
  .inlineFlex_l-01 { display: inline-flex; }
  .flex_l-01 { display: flex; }
  .flex0_l-01 { flex: 0; }
  .flex1_l-01 { flex: 1; }
  .flex2_l-01 { flex: 2; }
  .flex3_l-01 { flex: 3; }
  .flex4_l-01 { flex: 4; }
  .flex5_l-01 { flex: 5; }
  .flex6_l-01 { flex: 6; }
  .flex7_l-01 { flex: 7; }
  .flex8_l-01 { flex: 8; }
  .flex9_l-01 { flex: 9; }
  .flex10_l-01 { flex: 10; }
  .justifyStart_l-01 { display: flex; justify-content: flex-start; }
  .justifyCenter_l-01 { display: flex; justify-content: center; }
  .justifyEnd_l-01 { display: flex; justify-content: flex-end; }
  .justifyBetween_l-01 { display: flex; justify-content: space-between; }
  .justifyAround_l-01 { display: flex; justify-content: space-around; }
  .justifyBaseline_l-01 { display: flex; justify-content: baseline; }
  .justifyEvenly_l-01 { display: flex; justify-content: space-evenly; }
  .justifyStretch_l-01 { display: flex; justify-content: stretch; }
  .alignStart_l-01 { display: flex; align-items: flex-start; }
  .alignCenter_l-01 { display: flex; align-items: center; }
  .alignEnd_l-01 { display: flex; align-items: flex-end; }
  .alignBetween_l-01 { display: flex; align-items: space-between; }
  .alignAround_l-01 { display: flex; align-items: space-around; }
  .alignBaseline_l-01 { display: flex; align-items: baseline; }
  .alignStretch_l-01 { display: flex; align-items: stretch; }
  .flexGrow0_l-01 { flex-grow: 0; }
  .flexGrow1_l-01 { flex-grow: 1; }
  .flexGrow2_l-01 { flex-grow: 2; }
  .flexGrow3_l-01 { flex-grow: 3; }
  .flexGrow4_l-01 { flex-grow: 4; }
  .flexGrow5_l-01 { flex-grow: 5; }
  .flexShrink0_l-01 { flex-shrink: 0; }
  .flexShrink1_l-01 { flex-shrink: 1; }
  .flexShrink2_l-01 { flex-shrink: 2; }
  .flexShrink3_l-01 { flex-shrink: 3; }
  .flexShrink4_l-01 { flex-shrink: 4; }
  .flexShrink5_l-01 { flex-shrink: 5; }
  .order1_l-01 { order: 1; }
  .order2_l-01 { order: 2; }
  .order3_l-01 { order: 3; }
  .order4_l-01 { order: 4; }
  .order5_l-01 { order: 5; }
  .order6_l-01 { order: 6; }
  .order7_l-01 { order: 7; }
  .order8_l-01 { order: 8; }
  .order9_l-01 { order: 9; }
  .order10_l-01 { order: 10; }
  .zi0_l-01 { z-index: 0; }
  .zi1_l-01 { z-index: 1; }
  .zi2_l-01 { z-index: 2; }
  .zi3_l-01 { z-index: 3; }
  .zi4_l-01 { z-index: 4; }
  .zi5_l-01 { z-index: 5; }
  .zi6_l-01 { z-index: 6; }
  .zi7_l-01 { z-index: 7; }
  .zi8_l-01 { z-index: 8; }
  .zi9_l-01 { z-index: 9; }
  .zi10_l-01 { z-index: 10; }
  .zi11_l-01 { z-index: 11; }
  .zi12_l-01 { z-index: 12; }
  .zi13_l-01 { z-index: 13; }
  .zi14_l-01 { z-index: 14; }
  .zi15_l-01 { z-index: 15; }
  .zi16_l-01 { z-index: 16; }
  .zi17_l-01 { z-index: 17; }
  .zi18_l-01 { z-index: 18; }
  .zi19_l-01 { z-index: 19; }
  .zi20_l-01 { z-index: 20; }
  .zi21_l-01 { z-index: 21; }
  .zi22_l-01 { z-index: 22; }
  .zi23_l-01 { z-index: 23; }
  .zi24_l-01 { z-index: 24; }
  .zi25_l-01 { z-index: 25; }
  .zi26_l-01 { z-index: 26; }
  .zi27_l-01 { z-index: 27; }
  .zi28_l-01 { z-index: 28; }
  .zi29_l-01 { z-index: 29; }
  .zi30_l-01 { z-index: 30; }
  .zi31_l-01 { z-index: 31; }
  .zi32_l-01 { z-index: 32; }
  .zi33_l-01 { z-index: 33; }
  .zi34_l-01 { z-index: 34; }
  .zi35_l-01 { z-index: 35; }
  .zi36_l-01 { z-index: 36; }
  .zi37_l-01 { z-index: 37; }
  .zi38_l-01 { z-index: 38; }
  .zi39_l-01 { z-index: 39; }
  .zi40_l-01 { z-index: 40; }
  .zi41_l-01 { z-index: 41; }
  .zi42_l-01 { z-index: 42; }
  .zi43_l-01 { z-index: 43; }
  .zi44_l-01 { z-index: 44; }
  .zi45_l-01 { z-index: 45; }
  .zi46_l-01 { z-index: 46; }
  .zi47_l-01 { z-index: 47; }
  .zi48_l-01 { z-index: 48; }
  .zi49_l-01 { z-index: 49; }
  .zi50_l-01 { z-index: 50; }
  .fs1_l-01 { font-size: 4rem; }
  .fs2_l-01 { font-size: 2.5rem; }
  .fs3_l-01 { font-size: 1.5rem; }
  .fs4_l-01 { font-size: 1.25rem; }
  .fs5_l-01 { font-size: 1rem; }
  .fs6_l-01 { font-size: 0.9rem; }
  .fs7_l-01 { font-size: 0.75rem; }
  .textLeft_l-01 { text-align: left; }
  .textCenter_l-01 { text-align: center; }
  .textRight_l-01 { text-align: right; }
  .textEnd_l-01 { text-align: end; }
  .lh1_l-01 { line-height: 1; }
  .lh2_l-01 { line-height: 1.25; }
  .lh3_l-01 { line-height: 1.5; }
  .lh4_l-01 { line-height: 1.75; }
  .lh5_l-01 { line-height: 2; }
  .lh6_l-01 { line-height: 2.25; }
  .lh1px_l-01 { line-height: var(--px1); }
  .lh2px_l-01 { line-height: var(--px2); }
  .lh3px_l-01 { line-height: var(--px3); }
  .lh4px_l-01 { line-height: var(--px4); }
  .lh5px_l-01 { line-height: var(--px5); }
  .lh6px_l-01 { line-height: var(--px6); }
  .lh7px_l-01 { line-height: var(--px7); }
  .lh8px_l-01 { line-height: var(--px8); }
  .lh9px_l-01 { line-height: var(--px9); }
  .lh10px_l-01 { line-height: var(--px10); }
  .lh11px_l-01 { line-height: var(--px11); }
  .lh12px_l-01 { line-height: var(--px12); }
  .lh13px_l-01 { line-height: var(--px13); }
  .lh14px_l-01 { line-height: var(--px14); }
  .lh15px_l-01 { line-height: var(--px15); }
  .lh16px_l-01 { line-height: var(--px16); }
  .lh17px_l-01 { line-height: var(--px17); }
  .lh18px_l-01 { line-height: var(--px18); }
  .lh19px_l-01 { line-height: var(--px19); }
  .lh20px_l-01 { line-height: var(--px20); }
  .ls1_l-01 { letter-spacing: 0.03em; }
  .ls2_l-01 { letter-spacing: 0.02em; }
  .ls3_l-01 { letter-spacing: 0.015em; }
  .uppercase_l-01 { text-transform: uppercase; }
  .lowercase_l-01 { text-transform: lowercase; }
  .capitalize_l-01 { text-transform: capitalize; }
  .gridRow0_l-01 { grid-row: 0; }
  .gridRow1_l-01 { grid-row: 1; }
  .gridRow2_l-01 { grid-row: 2; }
  .gridRow3_l-01 { grid-row: 3; }
  .gridRow4_l-01 { grid-row: 4; }
  .gridRow5_l-01 { grid-row: 5; }
  .gridRow6_l-01 { grid-row: 6; }
  .gridRow7_l-01 { grid-row: 7; }
  .gridRow8_l-01 { grid-row: 8; }
  .gridRow9_l-01 { grid-row: 9; }
  .gridRow10_l-01 { grid-row: 10; }
  .gridRow11_l-01 { grid-row: 11; }
  .gridRow12_l-01 { grid-row: 12; }
  .gridRow0to0_l-01 { grid-row: 0 / 0; }
  .gridRow0to1_l-01 { grid-row: 0 / 1; }
  .gridRow0to2_l-01 { grid-row: 0 / 2; }
  .gridRow0to3_l-01 { grid-row: 0 / 3; }
  .gridRow0to4_l-01 { grid-row: 0 / 4; }
  .gridRow0to5_l-01 { grid-row: 0 / 5; }
  .gridRow0to6_l-01 { grid-row: 0 / 6; }
  .gridRow0to7_l-01 { grid-row: 0 / 7; }
  .gridRow0to8_l-01 { grid-row: 0 / 8; }
  .gridRow0to9_l-01 { grid-row: 0 / 9; }
  .gridRow0to10_l-01 { grid-row: 0 / 10; }
  .gridRow0to11_l-01 { grid-row: 0 / 11; }
  .gridRow0to12_l-01 { grid-row: 0 / 12; }
  .gridRow1to0_l-01 { grid-row: 1 / 0; }
  .gridRow1to1_l-01 { grid-row: 1 / 1; }
  .gridRow1to2_l-01 { grid-row: 1 / 2; }
  .gridRow1to3_l-01 { grid-row: 1 / 3; }
  .gridRow1to4_l-01 { grid-row: 1 / 4; }
  .gridRow1to5_l-01 { grid-row: 1 / 5; }
  .gridRow1to6_l-01 { grid-row: 1 / 6; }
  .gridRow1to7_l-01 { grid-row: 1 / 7; }
  .gridRow1to8_l-01 { grid-row: 1 / 8; }
  .gridRow1to9_l-01 { grid-row: 1 / 9; }
  .gridRow1to10_l-01 { grid-row: 1 / 10; }
  .gridRow1to11_l-01 { grid-row: 1 / 11; }
  .gridRow1to12_l-01 { grid-row: 1 / 12; }
  .gridRow2to0_l-01 { grid-row: 2 / 0; }
  .gridRow2to1_l-01 { grid-row: 2 / 1; }
  .gridRow2to2_l-01 { grid-row: 2 / 2; }
  .gridRow2to3_l-01 { grid-row: 2 / 3; }
  .gridRow2to4_l-01 { grid-row: 2 / 4; }
  .gridRow2to5_l-01 { grid-row: 2 / 5; }
  .gridRow2to6_l-01 { grid-row: 2 / 6; }
  .gridRow2to7_l-01 { grid-row: 2 / 7; }
  .gridRow2to8_l-01 { grid-row: 2 / 8; }
  .gridRow2to9_l-01 { grid-row: 2 / 9; }
  .gridRow2to10_l-01 { grid-row: 2 / 10; }
  .gridRow2to11_l-01 { grid-row: 2 / 11; }
  .gridRow2to12_l-01 { grid-row: 2 / 12; }
  .gridRow3to0_l-01 { grid-row: 3 / 0; }
  .gridRow3to1_l-01 { grid-row: 3 / 1; }
  .gridRow3to2_l-01 { grid-row: 3 / 2; }
  .gridRow3to3_l-01 { grid-row: 3 / 3; }
  .gridRow3to4_l-01 { grid-row: 3 / 4; }
  .gridRow3to5_l-01 { grid-row: 3 / 5; }
  .gridRow3to6_l-01 { grid-row: 3 / 6; }
  .gridRow3to7_l-01 { grid-row: 3 / 7; }
  .gridRow3to8_l-01 { grid-row: 3 / 8; }
  .gridRow3to9_l-01 { grid-row: 3 / 9; }
  .gridRow3to10_l-01 { grid-row: 3 / 10; }
  .gridRow3to11_l-01 { grid-row: 3 / 11; }
  .gridRow3to12_l-01 { grid-row: 3 / 12; }
  .gridRow4to0_l-01 { grid-row: 4 / 0; }
  .gridRow4to1_l-01 { grid-row: 4 / 1; }
  .gridRow4to2_l-01 { grid-row: 4 / 2; }
  .gridRow4to3_l-01 { grid-row: 4 / 3; }
  .gridRow4to4_l-01 { grid-row: 4 / 4; }
  .gridRow4to5_l-01 { grid-row: 4 / 5; }
  .gridRow4to6_l-01 { grid-row: 4 / 6; }
  .gridRow4to7_l-01 { grid-row: 4 / 7; }
  .gridRow4to8_l-01 { grid-row: 4 / 8; }
  .gridRow4to9_l-01 { grid-row: 4 / 9; }
  .gridRow4to10_l-01 { grid-row: 4 / 10; }
  .gridRow4to11_l-01 { grid-row: 4 / 11; }
  .gridRow4to12_l-01 { grid-row: 4 / 12; }
  .gridRow5to0_l-01 { grid-row: 5 / 0; }
  .gridRow5to1_l-01 { grid-row: 5 / 1; }
  .gridRow5to2_l-01 { grid-row: 5 / 2; }
  .gridRow5to3_l-01 { grid-row: 5 / 3; }
  .gridRow5to4_l-01 { grid-row: 5 / 4; }
  .gridRow5to5_l-01 { grid-row: 5 / 5; }
  .gridRow5to6_l-01 { grid-row: 5 / 6; }
  .gridRow5to7_l-01 { grid-row: 5 / 7; }
  .gridRow5to8_l-01 { grid-row: 5 / 8; }
  .gridRow5to9_l-01 { grid-row: 5 / 9; }
  .gridRow5to10_l-01 { grid-row: 5 / 10; }
  .gridRow5to11_l-01 { grid-row: 5 / 11; }
  .gridRow5to12_l-01 { grid-row: 5 / 12; }
  .gridRow6to0_l-01 { grid-row: 6 / 0; }
  .gridRow6to1_l-01 { grid-row: 6 / 1; }
  .gridRow6to2_l-01 { grid-row: 6 / 2; }
  .gridRow6to3_l-01 { grid-row: 6 / 3; }
  .gridRow6to4_l-01 { grid-row: 6 / 4; }
  .gridRow6to5_l-01 { grid-row: 6 / 5; }
  .gridRow6to6_l-01 { grid-row: 6 / 6; }
  .gridRow6to7_l-01 { grid-row: 6 / 7; }
  .gridRow6to8_l-01 { grid-row: 6 / 8; }
  .gridRow6to9_l-01 { grid-row: 6 / 9; }
  .gridRow6to10_l-01 { grid-row: 6 / 10; }
  .gridRow6to11_l-01 { grid-row: 6 / 11; }
  .gridRow6to12_l-01 { grid-row: 6 / 12; }
  .gridRow7to0_l-01 { grid-row: 7 / 0; }
  .gridRow7to1_l-01 { grid-row: 7 / 1; }
  .gridRow7to2_l-01 { grid-row: 7 / 2; }
  .gridRow7to3_l-01 { grid-row: 7 / 3; }
  .gridRow7to4_l-01 { grid-row: 7 / 4; }
  .gridRow7to5_l-01 { grid-row: 7 / 5; }
  .gridRow7to6_l-01 { grid-row: 7 / 6; }
  .gridRow7to7_l-01 { grid-row: 7 / 7; }
  .gridRow7to8_l-01 { grid-row: 7 / 8; }
  .gridRow7to9_l-01 { grid-row: 7 / 9; }
  .gridRow7to10_l-01 { grid-row: 7 / 10; }
  .gridRow7to11_l-01 { grid-row: 7 / 11; }
  .gridRow7to12_l-01 { grid-row: 7 / 12; }
  .gridRow8to0_l-01 { grid-row: 8 / 0; }
  .gridRow8to1_l-01 { grid-row: 8 / 1; }
  .gridRow8to2_l-01 { grid-row: 8 / 2; }
  .gridRow8to3_l-01 { grid-row: 8 / 3; }
  .gridRow8to4_l-01 { grid-row: 8 / 4; }
  .gridRow8to5_l-01 { grid-row: 8 / 5; }
  .gridRow8to6_l-01 { grid-row: 8 / 6; }
  .gridRow8to7_l-01 { grid-row: 8 / 7; }
  .gridRow8to8_l-01 { grid-row: 8 / 8; }
  .gridRow8to9_l-01 { grid-row: 8 / 9; }
  .gridRow8to10_l-01 { grid-row: 8 / 10; }
  .gridRow8to11_l-01 { grid-row: 8 / 11; }
  .gridRow8to12_l-01 { grid-row: 8 / 12; }
  .gridRow9to0_l-01 { grid-row: 9 / 0; }
  .gridRow9to1_l-01 { grid-row: 9 / 1; }
  .gridRow9to2_l-01 { grid-row: 9 / 2; }
  .gridRow9to3_l-01 { grid-row: 9 / 3; }
  .gridRow9to4_l-01 { grid-row: 9 / 4; }
  .gridRow9to5_l-01 { grid-row: 9 / 5; }
  .gridRow9to6_l-01 { grid-row: 9 / 6; }
  .gridRow9to7_l-01 { grid-row: 9 / 7; }
  .gridRow9to8_l-01 { grid-row: 9 / 8; }
  .gridRow9to9_l-01 { grid-row: 9 / 9; }
  .gridRow9to10_l-01 { grid-row: 9 / 10; }
  .gridRow9to11_l-01 { grid-row: 9 / 11; }
  .gridRow9to12_l-01 { grid-row: 9 / 12; }
  .gridRow10to0_l-01 { grid-row: 10 / 0; }
  .gridRow10to1_l-01 { grid-row: 10 / 1; }
  .gridRow10to2_l-01 { grid-row: 10 / 2; }
  .gridRow10to3_l-01 { grid-row: 10 / 3; }
  .gridRow10to4_l-01 { grid-row: 10 / 4; }
  .gridRow10to5_l-01 { grid-row: 10 / 5; }
  .gridRow10to6_l-01 { grid-row: 10 / 6; }
  .gridRow10to7_l-01 { grid-row: 10 / 7; }
  .gridRow10to8_l-01 { grid-row: 10 / 8; }
  .gridRow10to9_l-01 { grid-row: 10 / 9; }
  .gridRow10to10_l-01 { grid-row: 10 / 10; }
  .gridRow10to11_l-01 { grid-row: 10 / 11; }
  .gridRow10to12_l-01 { grid-row: 10 / 12; }
  .gridRow11to0_l-01 { grid-row: 11 / 0; }
  .gridRow11to1_l-01 { grid-row: 11 / 1; }
  .gridRow11to2_l-01 { grid-row: 11 / 2; }
  .gridRow11to3_l-01 { grid-row: 11 / 3; }
  .gridRow11to4_l-01 { grid-row: 11 / 4; }
  .gridRow11to5_l-01 { grid-row: 11 / 5; }
  .gridRow11to6_l-01 { grid-row: 11 / 6; }
  .gridRow11to7_l-01 { grid-row: 11 / 7; }
  .gridRow11to8_l-01 { grid-row: 11 / 8; }
  .gridRow11to9_l-01 { grid-row: 11 / 9; }
  .gridRow11to10_l-01 { grid-row: 11 / 10; }
  .gridRow11to11_l-01 { grid-row: 11 / 11; }
  .gridRow11to12_l-01 { grid-row: 11 / 12; }
  .gridRow12to0_l-01 { grid-row: 12 / 0; }
  .gridRow12to1_l-01 { grid-row: 12 / 1; }
  .gridRow12to2_l-01 { grid-row: 12 / 2; }
  .gridRow12to3_l-01 { grid-row: 12 / 3; }
  .gridRow12to4_l-01 { grid-row: 12 / 4; }
  .gridRow12to5_l-01 { grid-row: 12 / 5; }
  .gridRow12to6_l-01 { grid-row: 12 / 6; }
  .gridRow12to7_l-01 { grid-row: 12 / 7; }
  .gridRow12to8_l-01 { grid-row: 12 / 8; }
  .gridRow12to9_l-01 { grid-row: 12 / 9; }
  .gridRow12to10_l-01 { grid-row: 12 / 10; }
  .gridRow12to11_l-01 { grid-row: 12 / 11; }
  .gridRow12to12_l-01 { grid-row: 12 / 12; }
  .gridRowSpan0_l-01 { grid-row: auto / span 0; }
  .gridRowSpan1_l-01 { grid-row: auto / span 1; }
  .gridRowSpan2_l-01 { grid-row: auto / span 2; }
  .gridRowSpan3_l-01 { grid-row: auto / span 3; }
  .gridRowSpan4_l-01 { grid-row: auto / span 4; }
  .gridRowSpan5_l-01 { grid-row: auto / span 5; }
  .gridRowSpan6_l-01 { grid-row: auto / span 6; }
  .gridRowSpan7_l-01 { grid-row: auto / span 7; }
  .gridRowSpan8_l-01 { grid-row: auto / span 8; }
  .gridRowSpan9_l-01 { grid-row: auto / span 9; }
  .gridRowSpan10_l-01 { grid-row: auto / span 10; }
  .gridColumn0_l-01 { grid-column: 0; }
  .gridColumn1_l-01 { grid-column: 1; }
  .gridColumn2_l-01 { grid-column: 2; }
  .gridColumn3_l-01 { grid-column: 3; }
  .gridColumn4_l-01 { grid-column: 4; }
  .gridColumn5_l-01 { grid-column: 5; }
  .gridColumn6_l-01 { grid-column: 6; }
  .gridColumn7_l-01 { grid-column: 7; }
  .gridColumn8_l-01 { grid-column: 8; }
  .gridColumn9_l-01 { grid-column: 9; }
  .gridColumn10_l-01 { grid-column: 10; }
  .gridColumn11_l-01 { grid-column: 11; }
  .gridColumn12_l-01 { grid-column: 12; }
  .gridColumn0to0_l-01 { grid-column: 0 / 0; }
  .gridColumn0to1_l-01 { grid-column: 0 / 1; }
  .gridColumn0to2_l-01 { grid-column: 0 / 2; }
  .gridColumn0to3_l-01 { grid-column: 0 / 3; }
  .gridColumn0to4_l-01 { grid-column: 0 / 4; }
  .gridColumn0to5_l-01 { grid-column: 0 / 5; }
  .gridColumn0to6_l-01 { grid-column: 0 / 6; }
  .gridColumn0to7_l-01 { grid-column: 0 / 7; }
  .gridColumn0to8_l-01 { grid-column: 0 / 8; }
  .gridColumn0to9_l-01 { grid-column: 0 / 9; }
  .gridColumn0to10_l-01 { grid-column: 0 / 10; }
  .gridColumn0to11_l-01 { grid-column: 0 / 11; }
  .gridColumn0to12_l-01 { grid-column: 0 / 12; }
  .gridColumn1to0_l-01 { grid-column: 1 / 0; }
  .gridColumn1to1_l-01 { grid-column: 1 / 1; }
  .gridColumn1to2_l-01 { grid-column: 1 / 2; }
  .gridColumn1to3_l-01 { grid-column: 1 / 3; }
  .gridColumn1to4_l-01 { grid-column: 1 / 4; }
  .gridColumn1to5_l-01 { grid-column: 1 / 5; }
  .gridColumn1to6_l-01 { grid-column: 1 / 6; }
  .gridColumn1to7_l-01 { grid-column: 1 / 7; }
  .gridColumn1to8_l-01 { grid-column: 1 / 8; }
  .gridColumn1to9_l-01 { grid-column: 1 / 9; }
  .gridColumn1to10_l-01 { grid-column: 1 / 10; }
  .gridColumn1to11_l-01 { grid-column: 1 / 11; }
  .gridColumn1to12_l-01 { grid-column: 1 / 12; }
  .gridColumn2to0_l-01 { grid-column: 2 / 0; }
  .gridColumn2to1_l-01 { grid-column: 2 / 1; }
  .gridColumn2to2_l-01 { grid-column: 2 / 2; }
  .gridColumn2to3_l-01 { grid-column: 2 / 3; }
  .gridColumn2to4_l-01 { grid-column: 2 / 4; }
  .gridColumn2to5_l-01 { grid-column: 2 / 5; }
  .gridColumn2to6_l-01 { grid-column: 2 / 6; }
  .gridColumn2to7_l-01 { grid-column: 2 / 7; }
  .gridColumn2to8_l-01 { grid-column: 2 / 8; }
  .gridColumn2to9_l-01 { grid-column: 2 / 9; }
  .gridColumn2to10_l-01 { grid-column: 2 / 10; }
  .gridColumn2to11_l-01 { grid-column: 2 / 11; }
  .gridColumn2to12_l-01 { grid-column: 2 / 12; }
  .gridColumn3to0_l-01 { grid-column: 3 / 0; }
  .gridColumn3to1_l-01 { grid-column: 3 / 1; }
  .gridColumn3to2_l-01 { grid-column: 3 / 2; }
  .gridColumn3to3_l-01 { grid-column: 3 / 3; }
  .gridColumn3to4_l-01 { grid-column: 3 / 4; }
  .gridColumn3to5_l-01 { grid-column: 3 / 5; }
  .gridColumn3to6_l-01 { grid-column: 3 / 6; }
  .gridColumn3to7_l-01 { grid-column: 3 / 7; }
  .gridColumn3to8_l-01 { grid-column: 3 / 8; }
  .gridColumn3to9_l-01 { grid-column: 3 / 9; }
  .gridColumn3to10_l-01 { grid-column: 3 / 10; }
  .gridColumn3to11_l-01 { grid-column: 3 / 11; }
  .gridColumn3to12_l-01 { grid-column: 3 / 12; }
  .gridColumn4to0_l-01 { grid-column: 4 / 0; }
  .gridColumn4to1_l-01 { grid-column: 4 / 1; }
  .gridColumn4to2_l-01 { grid-column: 4 / 2; }
  .gridColumn4to3_l-01 { grid-column: 4 / 3; }
  .gridColumn4to4_l-01 { grid-column: 4 / 4; }
  .gridColumn4to5_l-01 { grid-column: 4 / 5; }
  .gridColumn4to6_l-01 { grid-column: 4 / 6; }
  .gridColumn4to7_l-01 { grid-column: 4 / 7; }
  .gridColumn4to8_l-01 { grid-column: 4 / 8; }
  .gridColumn4to9_l-01 { grid-column: 4 / 9; }
  .gridColumn4to10_l-01 { grid-column: 4 / 10; }
  .gridColumn4to11_l-01 { grid-column: 4 / 11; }
  .gridColumn4to12_l-01 { grid-column: 4 / 12; }
  .gridColumn5to0_l-01 { grid-column: 5 / 0; }
  .gridColumn5to1_l-01 { grid-column: 5 / 1; }
  .gridColumn5to2_l-01 { grid-column: 5 / 2; }
  .gridColumn5to3_l-01 { grid-column: 5 / 3; }
  .gridColumn5to4_l-01 { grid-column: 5 / 4; }
  .gridColumn5to5_l-01 { grid-column: 5 / 5; }
  .gridColumn5to6_l-01 { grid-column: 5 / 6; }
  .gridColumn5to7_l-01 { grid-column: 5 / 7; }
  .gridColumn5to8_l-01 { grid-column: 5 / 8; }
  .gridColumn5to9_l-01 { grid-column: 5 / 9; }
  .gridColumn5to10_l-01 { grid-column: 5 / 10; }
  .gridColumn5to11_l-01 { grid-column: 5 / 11; }
  .gridColumn5to12_l-01 { grid-column: 5 / 12; }
  .gridColumn6to0_l-01 { grid-column: 6 / 0; }
  .gridColumn6to1_l-01 { grid-column: 6 / 1; }
  .gridColumn6to2_l-01 { grid-column: 6 / 2; }
  .gridColumn6to3_l-01 { grid-column: 6 / 3; }
  .gridColumn6to4_l-01 { grid-column: 6 / 4; }
  .gridColumn6to5_l-01 { grid-column: 6 / 5; }
  .gridColumn6to6_l-01 { grid-column: 6 / 6; }
  .gridColumn6to7_l-01 { grid-column: 6 / 7; }
  .gridColumn6to8_l-01 { grid-column: 6 / 8; }
  .gridColumn6to9_l-01 { grid-column: 6 / 9; }
  .gridColumn6to10_l-01 { grid-column: 6 / 10; }
  .gridColumn6to11_l-01 { grid-column: 6 / 11; }
  .gridColumn6to12_l-01 { grid-column: 6 / 12; }
  .gridColumn7to0_l-01 { grid-column: 7 / 0; }
  .gridColumn7to1_l-01 { grid-column: 7 / 1; }
  .gridColumn7to2_l-01 { grid-column: 7 / 2; }
  .gridColumn7to3_l-01 { grid-column: 7 / 3; }
  .gridColumn7to4_l-01 { grid-column: 7 / 4; }
  .gridColumn7to5_l-01 { grid-column: 7 / 5; }
  .gridColumn7to6_l-01 { grid-column: 7 / 6; }
  .gridColumn7to7_l-01 { grid-column: 7 / 7; }
  .gridColumn7to8_l-01 { grid-column: 7 / 8; }
  .gridColumn7to9_l-01 { grid-column: 7 / 9; }
  .gridColumn7to10_l-01 { grid-column: 7 / 10; }
  .gridColumn7to11_l-01 { grid-column: 7 / 11; }
  .gridColumn7to12_l-01 { grid-column: 7 / 12; }
  .gridColumn8to0_l-01 { grid-column: 8 / 0; }
  .gridColumn8to1_l-01 { grid-column: 8 / 1; }
  .gridColumn8to2_l-01 { grid-column: 8 / 2; }
  .gridColumn8to3_l-01 { grid-column: 8 / 3; }
  .gridColumn8to4_l-01 { grid-column: 8 / 4; }
  .gridColumn8to5_l-01 { grid-column: 8 / 5; }
  .gridColumn8to6_l-01 { grid-column: 8 / 6; }
  .gridColumn8to7_l-01 { grid-column: 8 / 7; }
  .gridColumn8to8_l-01 { grid-column: 8 / 8; }
  .gridColumn8to9_l-01 { grid-column: 8 / 9; }
  .gridColumn8to10_l-01 { grid-column: 8 / 10; }
  .gridColumn8to11_l-01 { grid-column: 8 / 11; }
  .gridColumn8to12_l-01 { grid-column: 8 / 12; }
  .gridColumn9to0_l-01 { grid-column: 9 / 0; }
  .gridColumn9to1_l-01 { grid-column: 9 / 1; }
  .gridColumn9to2_l-01 { grid-column: 9 / 2; }
  .gridColumn9to3_l-01 { grid-column: 9 / 3; }
  .gridColumn9to4_l-01 { grid-column: 9 / 4; }
  .gridColumn9to5_l-01 { grid-column: 9 / 5; }
  .gridColumn9to6_l-01 { grid-column: 9 / 6; }
  .gridColumn9to7_l-01 { grid-column: 9 / 7; }
  .gridColumn9to8_l-01 { grid-column: 9 / 8; }
  .gridColumn9to9_l-01 { grid-column: 9 / 9; }
  .gridColumn9to10_l-01 { grid-column: 9 / 10; }
  .gridColumn9to11_l-01 { grid-column: 9 / 11; }
  .gridColumn9to12_l-01 { grid-column: 9 / 12; }
  .gridColumn10to0_l-01 { grid-column: 10 / 0; }
  .gridColumn10to1_l-01 { grid-column: 10 / 1; }
  .gridColumn10to2_l-01 { grid-column: 10 / 2; }
  .gridColumn10to3_l-01 { grid-column: 10 / 3; }
  .gridColumn10to4_l-01 { grid-column: 10 / 4; }
  .gridColumn10to5_l-01 { grid-column: 10 / 5; }
  .gridColumn10to6_l-01 { grid-column: 10 / 6; }
  .gridColumn10to7_l-01 { grid-column: 10 / 7; }
  .gridColumn10to8_l-01 { grid-column: 10 / 8; }
  .gridColumn10to9_l-01 { grid-column: 10 / 9; }
  .gridColumn10to10_l-01 { grid-column: 10 / 10; }
  .gridColumn10to11_l-01 { grid-column: 10 / 11; }
  .gridColumn10to12_l-01 { grid-column: 10 / 12; }
  .gridColumn11to0_l-01 { grid-column: 11 / 0; }
  .gridColumn11to1_l-01 { grid-column: 11 / 1; }
  .gridColumn11to2_l-01 { grid-column: 11 / 2; }
  .gridColumn11to3_l-01 { grid-column: 11 / 3; }
  .gridColumn11to4_l-01 { grid-column: 11 / 4; }
  .gridColumn11to5_l-01 { grid-column: 11 / 5; }
  .gridColumn11to6_l-01 { grid-column: 11 / 6; }
  .gridColumn11to7_l-01 { grid-column: 11 / 7; }
  .gridColumn11to8_l-01 { grid-column: 11 / 8; }
  .gridColumn11to9_l-01 { grid-column: 11 / 9; }
  .gridColumn11to10_l-01 { grid-column: 11 / 10; }
  .gridColumn11to11_l-01 { grid-column: 11 / 11; }
  .gridColumn11to12_l-01 { grid-column: 11 / 12; }
  .gridColumn12to0_l-01 { grid-column: 12 / 0; }
  .gridColumn12to1_l-01 { grid-column: 12 / 1; }
  .gridColumn12to2_l-01 { grid-column: 12 / 2; }
  .gridColumn12to3_l-01 { grid-column: 12 / 3; }
  .gridColumn12to4_l-01 { grid-column: 12 / 4; }
  .gridColumn12to5_l-01 { grid-column: 12 / 5; }
  .gridColumn12to6_l-01 { grid-column: 12 / 6; }
  .gridColumn12to7_l-01 { grid-column: 12 / 7; }
  .gridColumn12to8_l-01 { grid-column: 12 / 8; }
  .gridColumn12to9_l-01 { grid-column: 12 / 9; }
  .gridColumn12to10_l-01 { grid-column: 12 / 10; }
  .gridColumn12to11_l-01 { grid-column: 12 / 11; }
  .gridColumn12to12_l-01 { grid-column: 12 / 12; }
  .gridColumnSpan0_l-01 { grid-column: auto / span 0; }
  .gridColumnSpan1_l-01 { grid-column: auto / span 1; }
  .gridColumnSpan2_l-01 { grid-column: auto / span 2; }
  .gridColumnSpan3_l-01 { grid-column: auto / span 3; }
  .gridColumnSpan4_l-01 { grid-column: auto / span 4; }
  .gridColumnSpan5_l-01 { grid-column: auto / span 5; }
  .gridColumnSpan6_l-01 { grid-column: auto / span 6; }
  .gridColumnSpan7_l-01 { grid-column: auto / span 7; }
  .gridColumnSpan8_l-01 { grid-column: auto / span 8; }
  .gridColumnSpan9_l-01 { grid-column: auto / span 9; }
  .gridColumnSpan10_l-01 { grid-column: auto / span 10; }
  .w1_l-01 { width: var(--rem1); }
  .w2_l-01 { width: var(--rem2); }
  .w3_l-01 { width: var(--rem3); }
  .w4_l-01 { width: var(--rem4); }
  .w5_l-01 { width: var(--rem5); }
  .w6_l-01 { width: var(--rem6); }
  .w7_l-01 { width: var(--rem7); }
  .w1px_l-01 { width: var(--px1); }
  .w2px_l-01 { width: var(--px2); }
  .w3px_l-01 { width: var(--px3); }
  .w4px_l-01 { width: var(--px4); }
  .w5px_l-01 { width: var(--px5); }
  .w6px_l-01 { width: var(--px6); }
  .w7px_l-01 { width: var(--px7); }
  .w8px_l-01 { width: var(--px8); }
  .w9px_l-01 { width: var(--px9); }
  .w10px_l-01 { width: var(--px10); }
  .w11px_l-01 { width: var(--px11); }
  .w12px_l-01 { width: var(--px12); }
  .w13px_l-01 { width: var(--px13); }
  .w14px_l-01 { width: var(--px14); }
  .w15px_l-01 { width: var(--px15); }
  .w16px_l-01 { width: var(--px16); }
  .w17px_l-01 { width: var(--px17); }
  .w18px_l-01 { width: var(--px18); }
  .w19px_l-01 { width: var(--px19); }
  .w20px_l-01 { width: var(--px20); }
  .w1p_l-01 { width: 1%; }
  .w2p_l-01 { width: 2%; }
  .w3p_l-01 { width: 3%; }
  .w4p_l-01 { width: 4%; }
  .w5p_l-01 { width: 5%; }
  .w6p_l-01 { width: 6%; }
  .w7p_l-01 { width: 7%; }
  .w8p_l-01 { width: 8%; }
  .w9p_l-01 { width: 9%; }
  .w10p_l-01 { width: 10%; }
  .w11p_l-01 { width: 11%; }
  .w12p_l-01 { width: 12%; }
  .w13p_l-01 { width: 13%; }
  .w14p_l-01 { width: 14%; }
  .w15p_l-01 { width: 15%; }
  .w16p_l-01 { width: 16%; }
  .w17p_l-01 { width: 17%; }
  .w18p_l-01 { width: 18%; }
  .w19p_l-01 { width: 19%; }
  .w20p_l-01 { width: 20%; }
  .w21p_l-01 { width: 21%; }
  .w22p_l-01 { width: 22%; }
  .w23p_l-01 { width: 23%; }
  .w24p_l-01 { width: 24%; }
  .w25p_l-01 { width: 25%; }
  .w26p_l-01 { width: 26%; }
  .w27p_l-01 { width: 27%; }
  .w28p_l-01 { width: 28%; }
  .w29p_l-01 { width: 29%; }
  .w30p_l-01 { width: 30%; }
  .w31p_l-01 { width: 31%; }
  .w32p_l-01 { width: 32%; }
  .w33p_l-01 { width: 33%; }
  .w34p_l-01 { width: 34%; }
  .w35p_l-01 { width: 35%; }
  .w36p_l-01 { width: 36%; }
  .w37p_l-01 { width: 37%; }
  .w38p_l-01 { width: 38%; }
  .w39p_l-01 { width: 39%; }
  .w40p_l-01 { width: 40%; }
  .w41p_l-01 { width: 41%; }
  .w42p_l-01 { width: 42%; }
  .w43p_l-01 { width: 43%; }
  .w44p_l-01 { width: 44%; }
  .w45p_l-01 { width: 45%; }
  .w46p_l-01 { width: 46%; }
  .w47p_l-01 { width: 47%; }
  .w48p_l-01 { width: 48%; }
  .w49p_l-01 { width: 49%; }
  .w50p_l-01 { width: 50%; }
  .w51p_l-01 { width: 51%; }
  .w52p_l-01 { width: 52%; }
  .w53p_l-01 { width: 53%; }
  .w54p_l-01 { width: 54%; }
  .w55p_l-01 { width: 55%; }
  .w56p_l-01 { width: 56%; }
  .w57p_l-01 { width: 57%; }
  .w58p_l-01 { width: 58%; }
  .w59p_l-01 { width: 59%; }
  .w60p_l-01 { width: 60%; }
  .w61p_l-01 { width: 61%; }
  .w62p_l-01 { width: 62%; }
  .w63p_l-01 { width: 63%; }
  .w64p_l-01 { width: 64%; }
  .w65p_l-01 { width: 65%; }
  .w66p_l-01 { width: 66%; }
  .w67p_l-01 { width: 67%; }
  .w68p_l-01 { width: 68%; }
  .w69p_l-01 { width: 69%; }
  .w70p_l-01 { width: 70%; }
  .w71p_l-01 { width: 71%; }
  .w72p_l-01 { width: 72%; }
  .w73p_l-01 { width: 73%; }
  .w74p_l-01 { width: 74%; }
  .w75p_l-01 { width: 75%; }
  .w76p_l-01 { width: 76%; }
  .w77p_l-01 { width: 77%; }
  .w78p_l-01 { width: 78%; }
  .w79p_l-01 { width: 79%; }
  .w80p_l-01 { width: 80%; }
  .w81p_l-01 { width: 81%; }
  .w82p_l-01 { width: 82%; }
  .w83p_l-01 { width: 83%; }
  .w84p_l-01 { width: 84%; }
  .w85p_l-01 { width: 85%; }
  .w86p_l-01 { width: 86%; }
  .w87p_l-01 { width: 87%; }
  .w88p_l-01 { width: 88%; }
  .w89p_l-01 { width: 89%; }
  .w90p_l-01 { width: 90%; }
  .w91p_l-01 { width: 91%; }
  .w92p_l-01 { width: 92%; }
  .w93p_l-01 { width: 93%; }
  .w94p_l-01 { width: 94%; }
  .w95p_l-01 { width: 95%; }
  .w96p_l-01 { width: 96%; }
  .w97p_l-01 { width: 97%; }
  .w98p_l-01 { width: 98%; }
  .w99p_l-01 { width: 99%; }
  .w100p_l-01 { width: 100%; }
  .minW1_l-01 { min-width: var(--rem1); }
  .minW2_l-01 { min-width: var(--rem2); }
  .minW3_l-01 { min-width: var(--rem3); }
  .minW4_l-01 { min-width: var(--rem4); }
  .minW5_l-01 { min-width: var(--rem5); }
  .minW6_l-01 { min-width: var(--rem6); }
  .minW7_l-01 { min-width: var(--rem7); }
  .minW1px_l-01 { min-width: var(--px1); }
  .minW2px_l-01 { min-width: var(--px2); }
  .minW3px_l-01 { min-width: var(--px3); }
  .minW4px_l-01 { min-width: var(--px4); }
  .minW5px_l-01 { min-width: var(--px5); }
  .minW6px_l-01 { min-width: var(--px6); }
  .minW7px_l-01 { min-width: var(--px7); }
  .minW8px_l-01 { min-width: var(--px8); }
  .minW9px_l-01 { min-width: var(--px9); }
  .minW10px_l-01 { min-width: var(--px10); }
  .minW11px_l-01 { min-width: var(--px11); }
  .minW12px_l-01 { min-width: var(--px12); }
  .minW13px_l-01 { min-width: var(--px13); }
  .minW14px_l-01 { min-width: var(--px14); }
  .minW15px_l-01 { min-width: var(--px15); }
  .minW16px_l-01 { min-width: var(--px16); }
  .minW17px_l-01 { min-width: var(--px17); }
  .minW18px_l-01 { min-width: var(--px18); }
  .minW19px_l-01 { min-width: var(--px19); }
  .minW20px_l-01 { min-width: var(--px20); }
  .minW5p_l-01 { min-width: 5%; }
  .minW10p_l-01 { min-width: 10%; }
  .minW15p_l-01 { min-width: 15%; }
  .minW20p_l-01 { min-width: 20%; }
  .minW25p_l-01 { min-width: 25%; }
  .minW30p_l-01 { min-width: 30%; }
  .minW35p_l-01 { min-width: 35%; }
  .minW40p_l-01 { min-width: 40%; }
  .minW45p_l-01 { min-width: 45%; }
  .minW50p_l-01 { min-width: 50%; }
  .minW55p_l-01 { min-width: 55%; }
  .minW60p_l-01 { min-width: 60%; }
  .minW65p_l-01 { min-width: 65%; }
  .minW70p_l-01 { min-width: 70%; }
  .minW75p_l-01 { min-width: 75%; }
  .minW80p_l-01 { min-width: 80%; }
  .minW85p_l-01 { min-width: 85%; }
  .minW90p_l-01 { min-width: 90%; }
  .minW95p_l-01 { min-width: 95%; }
  .minW100p_l-01 { min-width: 100%; }
  .maxW1_l-01 { max-width: var(--rem1); }
  .maxW2_l-01 { max-width: var(--rem2); }
  .maxW3_l-01 { max-width: var(--rem3); }
  .maxW4_l-01 { max-width: var(--rem4); }
  .maxW5_l-01 { max-width: var(--rem5); }
  .maxW6_l-01 { max-width: var(--rem6); }
  .maxW7_l-01 { max-width: var(--rem7); }
  .maxW1px_l-01 { max-width: var(--px1); }
  .maxW2px_l-01 { max-width: var(--px2); }
  .maxW3px_l-01 { max-width: var(--px3); }
  .maxW4px_l-01 { max-width: var(--px4); }
  .maxW5px_l-01 { max-width: var(--px5); }
  .maxW6px_l-01 { max-width: var(--px6); }
  .maxW7px_l-01 { max-width: var(--px7); }
  .maxW8px_l-01 { max-width: var(--px8); }
  .maxW9px_l-01 { max-width: var(--px9); }
  .maxW10px_l-01 { max-width: var(--px10); }
  .maxW11px_l-01 { max-width: var(--px11); }
  .maxW12px_l-01 { max-width: var(--px12); }
  .maxW13px_l-01 { max-width: var(--px13); }
  .maxW14px_l-01 { max-width: var(--px14); }
  .maxW15px_l-01 { max-width: var(--px15); }
  .maxW16px_l-01 { max-width: var(--px16); }
  .maxW17px_l-01 { max-width: var(--px17); }
  .maxW18px_l-01 { max-width: var(--px18); }
  .maxW19px_l-01 { max-width: var(--px19); }
  .maxW20px_l-01 { max-width: var(--px20); }
  .maxW5p_l-01 { max-width: 5%; }
  .maxW10p_l-01 { max-width: 10%; }
  .maxW15p_l-01 { max-width: 15%; }
  .maxW20p_l-01 { max-width: 20%; }
  .maxW25p_l-01 { max-width: 25%; }
  .maxW30p_l-01 { max-width: 30%; }
  .maxW35p_l-01 { max-width: 35%; }
  .maxW40p_l-01 { max-width: 40%; }
  .maxW45p_l-01 { max-width: 45%; }
  .maxW50p_l-01 { max-width: 50%; }
  .maxW55p_l-01 { max-width: 55%; }
  .maxW60p_l-01 { max-width: 60%; }
  .maxW65p_l-01 { max-width: 65%; }
  .maxW70p_l-01 { max-width: 70%; }
  .maxW75p_l-01 { max-width: 75%; }
  .maxW80p_l-01 { max-width: 80%; }
  .maxW85p_l-01 { max-width: 85%; }
  .maxW90p_l-01 { max-width: 90%; }
  .maxW95p_l-01 { max-width: 95%; }
  .maxW100p_l-01 { max-width: 100%; }
  .h1_l-01 { height: var(--rem1); }
  .h2_l-01 { height: var(--rem2); }
  .h3_l-01 { height: var(--rem3); }
  .h4_l-01 { height: var(--rem4); }
  .h5_l-01 { height: var(--rem5); }
  .h6_l-01 { height: var(--rem6); }
  .h7_l-01 { height: var(--rem7); }
  .h1px_l-01 { height: var(--px1); }
  .h2px_l-01 { height: var(--px2); }
  .h3px_l-01 { height: var(--px3); }
  .h4px_l-01 { height: var(--px4); }
  .h5px_l-01 { height: var(--px5); }
  .h6px_l-01 { height: var(--px6); }
  .h7px_l-01 { height: var(--px7); }
  .h8px_l-01 { height: var(--px8); }
  .h9px_l-01 { height: var(--px9); }
  .h10px_l-01 { height: var(--px10); }
  .h11px_l-01 { height: var(--px11); }
  .h12px_l-01 { height: var(--px12); }
  .h13px_l-01 { height: var(--px13); }
  .h14px_l-01 { height: var(--px14); }
  .h15px_l-01 { height: var(--px15); }
  .h16px_l-01 { height: var(--px16); }
  .h17px_l-01 { height: var(--px17); }
  .h18px_l-01 { height: var(--px18); }
  .h19px_l-01 { height: var(--px19); }
  .h20px_l-01 { height: var(--px20); }
  .h5p_l-01 { height: 5%; }
  .h10p_l-01 { height: 10%; }
  .h15p_l-01 { height: 15%; }
  .h20p_l-01 { height: 20%; }
  .h25p_l-01 { height: 25%; }
  .h30p_l-01 { height: 30%; }
  .h35p_l-01 { height: 35%; }
  .h40p_l-01 { height: 40%; }
  .h45p_l-01 { height: 45%; }
  .h50p_l-01 { height: 50%; }
  .h55p_l-01 { height: 55%; }
  .h60p_l-01 { height: 60%; }
  .h65p_l-01 { height: 65%; }
  .h70p_l-01 { height: 70%; }
  .h75p_l-01 { height: 75%; }
  .h80p_l-01 { height: 80%; }
  .h85p_l-01 { height: 85%; }
  .h90p_l-01 { height: 90%; }
  .h95p_l-01 { height: 95%; }
  .h100p_l-01 { height: 100%; }
  .minH1_l-01 { min-height: var(--rem1); }
  .minH2_l-01 { min-height: var(--rem2); }
  .minH3_l-01 { min-height: var(--rem3); }
  .minH4_l-01 { min-height: var(--rem4); }
  .minH5_l-01 { min-height: var(--rem5); }
  .minH6_l-01 { min-height: var(--rem6); }
  .minH7_l-01 { min-height: var(--rem7); }
  .minH1px_l-01 { min-height: var(--px1); }
  .minH2px_l-01 { min-height: var(--px2); }
  .minH3px_l-01 { min-height: var(--px3); }
  .minH4px_l-01 { min-height: var(--px4); }
  .minH5px_l-01 { min-height: var(--px5); }
  .minH6px_l-01 { min-height: var(--px6); }
  .minH7px_l-01 { min-height: var(--px7); }
  .minH8px_l-01 { min-height: var(--px8); }
  .minH9px_l-01 { min-height: var(--px9); }
  .minH10px_l-01 { min-height: var(--px10); }
  .minH11px_l-01 { min-height: var(--px11); }
  .minH12px_l-01 { min-height: var(--px12); }
  .minH13px_l-01 { min-height: var(--px13); }
  .minH14px_l-01 { min-height: var(--px14); }
  .minH15px_l-01 { min-height: var(--px15); }
  .minH16px_l-01 { min-height: var(--px16); }
  .minH17px_l-01 { min-height: var(--px17); }
  .minH18px_l-01 { min-height: var(--px18); }
  .minH19px_l-01 { min-height: var(--px19); }
  .minH20px_l-01 { min-height: var(--px20); }
  .minH5p_l-01 { min-height: 5%; }
  .minH10p_l-01 { min-height: 10%; }
  .minH15p_l-01 { min-height: 15%; }
  .minH20p_l-01 { min-height: 20%; }
  .minH25p_l-01 { min-height: 25%; }
  .minH30p_l-01 { min-height: 30%; }
  .minH35p_l-01 { min-height: 35%; }
  .minH40p_l-01 { min-height: 40%; }
  .minH45p_l-01 { min-height: 45%; }
  .minH50p_l-01 { min-height: 50%; }
  .minH55p_l-01 { min-height: 55%; }
  .minH60p_l-01 { min-height: 60%; }
  .minH65p_l-01 { min-height: 65%; }
  .minH70p_l-01 { min-height: 70%; }
  .minH75p_l-01 { min-height: 75%; }
  .minH80p_l-01 { min-height: 80%; }
  .minH85p_l-01 { min-height: 85%; }
  .minH90p_l-01 { min-height: 90%; }
  .minH95p_l-01 { min-height: 95%; }
  .minH100p_l-01 { min-height: 100%; }
  .maxH1_l-01 { max-height: var(--rem1); }
  .maxH2_l-01 { max-height: var(--rem2); }
  .maxH3_l-01 { max-height: var(--rem3); }
  .maxH4_l-01 { max-height: var(--rem4); }
  .maxH5_l-01 { max-height: var(--rem5); }
  .maxH6_l-01 { max-height: var(--rem6); }
  .maxH7_l-01 { max-height: var(--rem7); }
  .maxH1px_l-01 { max-height: var(--px1); }
  .maxH2px_l-01 { max-height: var(--px2); }
  .maxH3px_l-01 { max-height: var(--px3); }
  .maxH4px_l-01 { max-height: var(--px4); }
  .maxH5px_l-01 { max-height: var(--px5); }
  .maxH6px_l-01 { max-height: var(--px6); }
  .maxH7px_l-01 { max-height: var(--px7); }
  .maxH8px_l-01 { max-height: var(--px8); }
  .maxH9px_l-01 { max-height: var(--px9); }
  .maxH10px_l-01 { max-height: var(--px10); }
  .maxH11px_l-01 { max-height: var(--px11); }
  .maxH12px_l-01 { max-height: var(--px12); }
  .maxH13px_l-01 { max-height: var(--px13); }
  .maxH14px_l-01 { max-height: var(--px14); }
  .maxH15px_l-01 { max-height: var(--px15); }
  .maxH16px_l-01 { max-height: var(--px16); }
  .maxH17px_l-01 { max-height: var(--px17); }
  .maxH18px_l-01 { max-height: var(--px18); }
  .maxH19px_l-01 { max-height: var(--px19); }
  .maxH20px_l-01 { max-height: var(--px20); }
  .maxH5p_l-01 { max-height: 5%; }
  .maxH10p_l-01 { max-height: 10%; }
  .maxH15p_l-01 { max-height: 15%; }
  .maxH20p_l-01 { max-height: 20%; }
  .maxH25p_l-01 { max-height: 25%; }
  .maxH30p_l-01 { max-height: 30%; }
  .maxH35p_l-01 { max-height: 35%; }
  .maxH40p_l-01 { max-height: 40%; }
  .maxH45p_l-01 { max-height: 45%; }
  .maxH50p_l-01 { max-height: 50%; }
  .maxH55p_l-01 { max-height: 55%; }
  .maxH60p_l-01 { max-height: 60%; }
  .maxH65p_l-01 { max-height: 65%; }
  .maxH70p_l-01 { max-height: 70%; }
  .maxH75p_l-01 { max-height: 75%; }
  .maxH80p_l-01 { max-height: 80%; }
  .maxH85p_l-01 { max-height: 85%; }
  .maxH90p_l-01 { max-height: 90%; }
  .maxH95p_l-01 { max-height: 95%; }
  .maxH100p_l-01 { max-height: 100%; }
  .maxH5vh_l-01 { max-height: 5vh; }
  .maxH10vh_l-01 { max-height: 10vh; }
  .maxH15vh_l-01 { max-height: 15vh; }
  .maxH20vh_l-01 { max-height: 20vh; }
  .maxH25vh_l-01 { max-height: 25vh; }
  .maxH30vh_l-01 { max-height: 30vh; }
  .maxH35vh_l-01 { max-height: 35vh; }
  .maxH40vh_l-01 { max-height: 40vh; }
  .maxH45vh_l-01 { max-height: 45vh; }
  .maxH50vh_l-01 { max-height: 50vh; }
  .maxH55vh_l-01 { max-height: 55vh; }
  .maxH60vh_l-01 { max-height: 60vh; }
  .maxH65vh_l-01 { max-height: 65vh; }
  .maxH70vh_l-01 { max-height: 70vh; }
  .maxH75vh_l-01 { max-height: 75vh; }
  .maxH80vh_l-01 { max-height: 80vh; }
  .maxH85vh_l-01 { max-height: 85vh; }
  .maxH90vh_l-01 { max-height: 90vh; }
  .maxH95vh_l-01 { max-height: 95vh; }
  .maxH100vh_l-01 { max-height: 100vh; }
  .resizeA_l-01 { resize: both; }
  .resizeV_l-01 { resize: vertical; }
  .resizeH_l-01 { resize: horizontal; }
  .resizeNone_l-01 { resize: none; }
  .resizeB_l-01 { resize: block; }
  .resizeI_l-01 { resize: inline; }
  .pa1_l-01 { padding: var(--px1); }
  .pa2_l-01 { padding: var(--px2); }
  .pa3_l-01 { padding: var(--px3); }
  .pa4_l-01 { padding: var(--px4); }
  .pa5_l-01 { padding: var(--px5); }
  .pa6_l-01 { padding: var(--px6); }
  .pa7_l-01 { padding: var(--px7); }
  .pa8_l-01 { padding: var(--px8); }
  .pa9_l-01 { padding: var(--px9); }
  .pa10_l-01 { padding: var(--px10); }
  .pa11_l-01 { padding: var(--px11); }
  .pa12_l-01 { padding: var(--px12); }
  .pa13_l-01 { padding: var(--px13); }
  .pa14_l-01 { padding: var(--px14); }
  .pa15_l-01 { padding: var(--px15); }
  .pa16_l-01 { padding: var(--px16); }
  .pa17_l-01 { padding: var(--px17); }
  .pa18_l-01 { padding: var(--px18); }
  .pa19_l-01 { padding: var(--px19); }
  .pa20_l-01 { padding: var(--px20); }
  .pa5p_l-01 { padding: 5%; }
  .pa10p_l-01 { padding: 10%; }
  .pa15p_l-01 { padding: 15%; }
  .pa20p_l-01 { padding: 20%; }
  .pa25p_l-01 { padding: 25%; }
  .pa30p_l-01 { padding: 30%; }
  .pa35p_l-01 { padding: 35%; }
  .pa40p_l-01 { padding: 40%; }
  .pa45p_l-01 { padding: 45%; }
  .pa50p_l-01 { padding: 50%; }
  .pa55p_l-01 { padding: 55%; }
  .pa60p_l-01 { padding: 60%; }
  .pa65p_l-01 { padding: 65%; }
  .pa70p_l-01 { padding: 70%; }
  .pa75p_l-01 { padding: 75%; }
  .pa80p_l-01 { padding: 80%; }
  .pa85p_l-01 { padding: 85%; }
  .pa90p_l-01 { padding: 90%; }
  .pa95p_l-01 { padding: 95%; }
  .pa100p_l-01 { padding: 100%; }
  .pv1_l-01 { padding-top: var(--px1); padding-bottom: var(--px1); }
  .pv2_l-01 { padding-top: var(--px2); padding-bottom: var(--px2); }
  .pv3_l-01 { padding-top: var(--px3); padding-bottom: var(--px3); }
  .pv4_l-01 { padding-top: var(--px4); padding-bottom: var(--px4); }
  .pv5_l-01 { padding-top: var(--px5); padding-bottom: var(--px5); }
  .pv6_l-01 { padding-top: var(--px6); padding-bottom: var(--px6); }
  .pv7_l-01 { padding-top: var(--px7); padding-bottom: var(--px7); }
  .pv8_l-01 { padding-top: var(--px8); padding-bottom: var(--px8); }
  .pv9_l-01 { padding-top: var(--px9); padding-bottom: var(--px9); }
  .pv10_l-01 { padding-top: var(--px10); padding-bottom: var(--px10); }
  .pv11_l-01 { padding-top: var(--px11); padding-bottom: var(--px11); }
  .pv12_l-01 { padding-top: var(--px12); padding-bottom: var(--px12); }
  .pv13_l-01 { padding-top: var(--px13); padding-bottom: var(--px13); }
  .pv14_l-01 { padding-top: var(--px14); padding-bottom: var(--px14); }
  .pv15_l-01 { padding-top: var(--px15); padding-bottom: var(--px15); }
  .pv16_l-01 { padding-top: var(--px16); padding-bottom: var(--px16); }
  .pv17_l-01 { padding-top: var(--px17); padding-bottom: var(--px17); }
  .pv18_l-01 { padding-top: var(--px18); padding-bottom: var(--px18); }
  .pv19_l-01 { padding-top: var(--px19); padding-bottom: var(--px19); }
  .pv20_l-01 { padding-top: var(--px20); padding-bottom: var(--px20); }
  .pv5p_l-01 { padding-top: 5%; padding-bottom: 5%; }
  .pv10p_l-01 { padding-top: 10%; padding-bottom: 10%; }
  .pv15p_l-01 { padding-top: 15%; padding-bottom: 15%; }
  .pv20p_l-01 { padding-top: 20%; padding-bottom: 20%; }
  .pv25p_l-01 { padding-top: 25%; padding-bottom: 25%; }
  .pv30p_l-01 { padding-top: 30%; padding-bottom: 30%; }
  .pv35p_l-01 { padding-top: 35%; padding-bottom: 35%; }
  .pv40p_l-01 { padding-top: 40%; padding-bottom: 40%; }
  .pv45p_l-01 { padding-top: 45%; padding-bottom: 45%; }
  .pv50p_l-01 { padding-top: 50%; padding-bottom: 50%; }
  .pv55p_l-01 { padding-top: 55%; padding-bottom: 55%; }
  .pv60p_l-01 { padding-top: 60%; padding-bottom: 60%; }
  .pv65p_l-01 { padding-top: 65%; padding-bottom: 65%; }
  .pv70p_l-01 { padding-top: 70%; padding-bottom: 70%; }
  .pv75p_l-01 { padding-top: 75%; padding-bottom: 75%; }
  .pv80p_l-01 { padding-top: 80%; padding-bottom: 80%; }
  .pv85p_l-01 { padding-top: 85%; padding-bottom: 85%; }
  .pv90p_l-01 { padding-top: 90%; padding-bottom: 90%; }
  .pv95p_l-01 { padding-top: 95%; padding-bottom: 95%; }
  .pv100p_l-01 { padding-top: 100%; padding-bottom: 100%; }
  .ph1_l-01 { padding-left: var(--px1); padding-right: var(--px1); }
  .ph2_l-01 { padding-left: var(--px2); padding-right: var(--px2); }
  .ph3_l-01 { padding-left: var(--px3); padding-right: var(--px3); }
  .ph4_l-01 { padding-left: var(--px4); padding-right: var(--px4); }
  .ph5_l-01 { padding-left: var(--px5); padding-right: var(--px5); }
  .ph6_l-01 { padding-left: var(--px6); padding-right: var(--px6); }
  .ph7_l-01 { padding-left: var(--px7); padding-right: var(--px7); }
  .ph8_l-01 { padding-left: var(--px8); padding-right: var(--px8); }
  .ph9_l-01 { padding-left: var(--px9); padding-right: var(--px9); }
  .ph10_l-01 { padding-left: var(--px10); padding-right: var(--px10); }
  .ph11_l-01 { padding-left: var(--px11); padding-right: var(--px11); }
  .ph12_l-01 { padding-left: var(--px12); padding-right: var(--px12); }
  .ph13_l-01 { padding-left: var(--px13); padding-right: var(--px13); }
  .ph14_l-01 { padding-left: var(--px14); padding-right: var(--px14); }
  .ph15_l-01 { padding-left: var(--px15); padding-right: var(--px15); }
  .ph16_l-01 { padding-left: var(--px16); padding-right: var(--px16); }
  .ph17_l-01 { padding-left: var(--px17); padding-right: var(--px17); }
  .ph18_l-01 { padding-left: var(--px18); padding-right: var(--px18); }
  .ph19_l-01 { padding-left: var(--px19); padding-right: var(--px19); }
  .ph20_l-01 { padding-left: var(--px20); padding-right: var(--px20); }
  .ph5p_l-01 { padding-left: 5%; padding-right: 5%; }
  .ph10p_l-01 { padding-left: 10%; padding-right: 10%; }
  .ph15p_l-01 { padding-left: 15%; padding-right: 15%; }
  .ph20p_l-01 { padding-left: 20%; padding-right: 20%; }
  .ph25p_l-01 { padding-left: 25%; padding-right: 25%; }
  .ph30p_l-01 { padding-left: 30%; padding-right: 30%; }
  .ph35p_l-01 { padding-left: 35%; padding-right: 35%; }
  .ph40p_l-01 { padding-left: 40%; padding-right: 40%; }
  .ph45p_l-01 { padding-left: 45%; padding-right: 45%; }
  .ph50p_l-01 { padding-left: 50%; padding-right: 50%; }
  .ph55p_l-01 { padding-left: 55%; padding-right: 55%; }
  .ph60p_l-01 { padding-left: 60%; padding-right: 60%; }
  .ph65p_l-01 { padding-left: 65%; padding-right: 65%; }
  .ph70p_l-01 { padding-left: 70%; padding-right: 70%; }
  .ph75p_l-01 { padding-left: 75%; padding-right: 75%; }
  .ph80p_l-01 { padding-left: 80%; padding-right: 80%; }
  .ph85p_l-01 { padding-left: 85%; padding-right: 85%; }
  .ph90p_l-01 { padding-left: 90%; padding-right: 90%; }
  .ph95p_l-01 { padding-left: 95%; padding-right: 95%; }
  .ph100p_l-01 { padding-left: 100%; padding-right: 100%; }
  .pt1_l-01 { padding-top: var(--px1); }
  .pt2_l-01 { padding-top: var(--px2); }
  .pt3_l-01 { padding-top: var(--px3); }
  .pt4_l-01 { padding-top: var(--px4); }
  .pt5_l-01 { padding-top: var(--px5); }
  .pt6_l-01 { padding-top: var(--px6); }
  .pt7_l-01 { padding-top: var(--px7); }
  .pt8_l-01 { padding-top: var(--px8); }
  .pt9_l-01 { padding-top: var(--px9); }
  .pt10_l-01 { padding-top: var(--px10); }
  .pt11_l-01 { padding-top: var(--px11); }
  .pt12_l-01 { padding-top: var(--px12); }
  .pt13_l-01 { padding-top: var(--px13); }
  .pt14_l-01 { padding-top: var(--px14); }
  .pt15_l-01 { padding-top: var(--px15); }
  .pt16_l-01 { padding-top: var(--px16); }
  .pt17_l-01 { padding-top: var(--px17); }
  .pt18_l-01 { padding-top: var(--px18); }
  .pt19_l-01 { padding-top: var(--px19); }
  .pt20_l-01 { padding-top: var(--px20); }
  .pt5p_l-01 { padding-top: 5%; }
  .pt10p_l-01 { padding-top: 10%; }
  .pt15p_l-01 { padding-top: 15%; }
  .pt20p_l-01 { padding-top: 20%; }
  .pt25p_l-01 { padding-top: 25%; }
  .pt30p_l-01 { padding-top: 30%; }
  .pt35p_l-01 { padding-top: 35%; }
  .pt40p_l-01 { padding-top: 40%; }
  .pt45p_l-01 { padding-top: 45%; }
  .pt50p_l-01 { padding-top: 50%; }
  .pt55p_l-01 { padding-top: 55%; }
  .pt60p_l-01 { padding-top: 60%; }
  .pt65p_l-01 { padding-top: 65%; }
  .pt70p_l-01 { padding-top: 70%; }
  .pt75p_l-01 { padding-top: 75%; }
  .pt80p_l-01 { padding-top: 80%; }
  .pt85p_l-01 { padding-top: 85%; }
  .pt90p_l-01 { padding-top: 90%; }
  .pt95p_l-01 { padding-top: 95%; }
  .pt100p_l-01 { padding-top: 100%; }
  .pr1_l-01 { padding-right: var(--px1); }
  .pr2_l-01 { padding-right: var(--px2); }
  .pr3_l-01 { padding-right: var(--px3); }
  .pr4_l-01 { padding-right: var(--px4); }
  .pr5_l-01 { padding-right: var(--px5); }
  .pr6_l-01 { padding-right: var(--px6); }
  .pr7_l-01 { padding-right: var(--px7); }
  .pr8_l-01 { padding-right: var(--px8); }
  .pr9_l-01 { padding-right: var(--px9); }
  .pr10_l-01 { padding-right: var(--px10); }
  .pr11_l-01 { padding-right: var(--px11); }
  .pr12_l-01 { padding-right: var(--px12); }
  .pr13_l-01 { padding-right: var(--px13); }
  .pr14_l-01 { padding-right: var(--px14); }
  .pr15_l-01 { padding-right: var(--px15); }
  .pr16_l-01 { padding-right: var(--px16); }
  .pr17_l-01 { padding-right: var(--px17); }
  .pr18_l-01 { padding-right: var(--px18); }
  .pr19_l-01 { padding-right: var(--px19); }
  .pr20_l-01 { padding-right: var(--px20); }
  .pr5p_l-01 { padding-right: 5%; }
  .pr10p_l-01 { padding-right: 10%; }
  .pr15p_l-01 { padding-right: 15%; }
  .pr20p_l-01 { padding-right: 20%; }
  .pr25p_l-01 { padding-right: 25%; }
  .pr30p_l-01 { padding-right: 30%; }
  .pr35p_l-01 { padding-right: 35%; }
  .pr40p_l-01 { padding-right: 40%; }
  .pr45p_l-01 { padding-right: 45%; }
  .pr50p_l-01 { padding-right: 50%; }
  .pr55p_l-01 { padding-right: 55%; }
  .pr60p_l-01 { padding-right: 60%; }
  .pr65p_l-01 { padding-right: 65%; }
  .pr70p_l-01 { padding-right: 70%; }
  .pr75p_l-01 { padding-right: 75%; }
  .pr80p_l-01 { padding-right: 80%; }
  .pr85p_l-01 { padding-right: 85%; }
  .pr90p_l-01 { padding-right: 90%; }
  .pr95p_l-01 { padding-right: 95%; }
  .pr100p_l-01 { padding-right: 100%; }
  .pb1_l-01 { padding-bottom: var(--px1); }
  .pb2_l-01 { padding-bottom: var(--px2); }
  .pb3_l-01 { padding-bottom: var(--px3); }
  .pb4_l-01 { padding-bottom: var(--px4); }
  .pb5_l-01 { padding-bottom: var(--px5); }
  .pb6_l-01 { padding-bottom: var(--px6); }
  .pb7_l-01 { padding-bottom: var(--px7); }
  .pb8_l-01 { padding-bottom: var(--px8); }
  .pb9_l-01 { padding-bottom: var(--px9); }
  .pb10_l-01 { padding-bottom: var(--px10); }
  .pb11_l-01 { padding-bottom: var(--px11); }
  .pb12_l-01 { padding-bottom: var(--px12); }
  .pb13_l-01 { padding-bottom: var(--px13); }
  .pb14_l-01 { padding-bottom: var(--px14); }
  .pb15_l-01 { padding-bottom: var(--px15); }
  .pb16_l-01 { padding-bottom: var(--px16); }
  .pb17_l-01 { padding-bottom: var(--px17); }
  .pb18_l-01 { padding-bottom: var(--px18); }
  .pb19_l-01 { padding-bottom: var(--px19); }
  .pb20_l-01 { padding-bottom: var(--px20); }
  .pb5p_l-01 { padding-bottom: 5%; }
  .pb10p_l-01 { padding-bottom: 10%; }
  .pb15p_l-01 { padding-bottom: 15%; }
  .pb20p_l-01 { padding-bottom: 20%; }
  .pb25p_l-01 { padding-bottom: 25%; }
  .pb30p_l-01 { padding-bottom: 30%; }
  .pb35p_l-01 { padding-bottom: 35%; }
  .pb40p_l-01 { padding-bottom: 40%; }
  .pb45p_l-01 { padding-bottom: 45%; }
  .pb50p_l-01 { padding-bottom: 50%; }
  .pb55p_l-01 { padding-bottom: 55%; }
  .pb60p_l-01 { padding-bottom: 60%; }
  .pb65p_l-01 { padding-bottom: 65%; }
  .pb70p_l-01 { padding-bottom: 70%; }
  .pb75p_l-01 { padding-bottom: 75%; }
  .pb80p_l-01 { padding-bottom: 80%; }
  .pb85p_l-01 { padding-bottom: 85%; }
  .pb90p_l-01 { padding-bottom: 90%; }
  .pb95p_l-01 { padding-bottom: 95%; }
  .pb100p_l-01 { padding-bottom: 100%; }
  .pl1_l-01 { padding-left: var(--px1); }
  .pl2_l-01 { padding-left: var(--px2); }
  .pl3_l-01 { padding-left: var(--px3); }
  .pl4_l-01 { padding-left: var(--px4); }
  .pl5_l-01 { padding-left: var(--px5); }
  .pl6_l-01 { padding-left: var(--px6); }
  .pl7_l-01 { padding-left: var(--px7); }
  .pl8_l-01 { padding-left: var(--px8); }
  .pl9_l-01 { padding-left: var(--px9); }
  .pl10_l-01 { padding-left: var(--px10); }
  .pl11_l-01 { padding-left: var(--px11); }
  .pl12_l-01 { padding-left: var(--px12); }
  .pl13_l-01 { padding-left: var(--px13); }
  .pl14_l-01 { padding-left: var(--px14); }
  .pl15_l-01 { padding-left: var(--px15); }
  .pl16_l-01 { padding-left: var(--px16); }
  .pl17_l-01 { padding-left: var(--px17); }
  .pl18_l-01 { padding-left: var(--px18); }
  .pl19_l-01 { padding-left: var(--px19); }
  .pl20_l-01 { padding-left: var(--px20); }
  .pl5p_l-01 { padding-left: 5%; }
  .pl10p_l-01 { padding-left: 10%; }
  .pl15p_l-01 { padding-left: 15%; }
  .pl20p_l-01 { padding-left: 20%; }
  .pl25p_l-01 { padding-left: 25%; }
  .pl30p_l-01 { padding-left: 30%; }
  .pl35p_l-01 { padding-left: 35%; }
  .pl40p_l-01 { padding-left: 40%; }
  .pl45p_l-01 { padding-left: 45%; }
  .pl50p_l-01 { padding-left: 50%; }
  .pl55p_l-01 { padding-left: 55%; }
  .pl60p_l-01 { padding-left: 60%; }
  .pl65p_l-01 { padding-left: 65%; }
  .pl70p_l-01 { padding-left: 70%; }
  .pl75p_l-01 { padding-left: 75%; }
  .pl80p_l-01 { padding-left: 80%; }
  .pl85p_l-01 { padding-left: 85%; }
  .pl90p_l-01 { padding-left: 90%; }
  .pl95p_l-01 { padding-left: 95%; }
  .pl100p_l-01 { padding-left: 100%; }
  .ma1_l-01 { margin: var(--px1); }
  .ma2_l-01 { margin: var(--px2); }
  .ma3_l-01 { margin: var(--px3); }
  .ma4_l-01 { margin: var(--px4); }
  .ma5_l-01 { margin: var(--px5); }
  .ma6_l-01 { margin: var(--px6); }
  .ma7_l-01 { margin: var(--px7); }
  .ma8_l-01 { margin: var(--px8); }
  .ma9_l-01 { margin: var(--px9); }
  .ma10_l-01 { margin: var(--px10); }
  .ma11_l-01 { margin: var(--px11); }
  .ma12_l-01 { margin: var(--px12); }
  .ma13_l-01 { margin: var(--px13); }
  .ma14_l-01 { margin: var(--px14); }
  .ma15_l-01 { margin: var(--px15); }
  .ma16_l-01 { margin: var(--px16); }
  .ma17_l-01 { margin: var(--px17); }
  .ma18_l-01 { margin: var(--px18); }
  .ma19_l-01 { margin: var(--px19); }
  .ma20_l-01 { margin: var(--px20); }
  .ma5p_l-01 { margin: 5%; }
  .ma10p_l-01 { margin: 10%; }
  .ma15p_l-01 { margin: 15%; }
  .ma20p_l-01 { margin: 20%; }
  .ma25p_l-01 { margin: 25%; }
  .ma30p_l-01 { margin: 30%; }
  .ma35p_l-01 { margin: 35%; }
  .ma40p_l-01 { margin: 40%; }
  .ma45p_l-01 { margin: 45%; }
  .ma50p_l-01 { margin: 50%; }
  .ma55p_l-01 { margin: 55%; }
  .ma60p_l-01 { margin: 60%; }
  .ma65p_l-01 { margin: 65%; }
  .ma70p_l-01 { margin: 70%; }
  .ma75p_l-01 { margin: 75%; }
  .ma80p_l-01 { margin: 80%; }
  .ma85p_l-01 { margin: 85%; }
  .ma90p_l-01 { margin: 90%; }
  .ma95p_l-01 { margin: 95%; }
  .ma100p_l-01 { margin: 100%; }
  .mv1_l-01 { margin-top: var(--px1); margin-bottom: var(--px1); }
  .mv2_l-01 { margin-top: var(--px2); margin-bottom: var(--px2); }
  .mv3_l-01 { margin-top: var(--px3); margin-bottom: var(--px3); }
  .mv4_l-01 { margin-top: var(--px4); margin-bottom: var(--px4); }
  .mv5_l-01 { margin-top: var(--px5); margin-bottom: var(--px5); }
  .mv6_l-01 { margin-top: var(--px6); margin-bottom: var(--px6); }
  .mv7_l-01 { margin-top: var(--px7); margin-bottom: var(--px7); }
  .mv8_l-01 { margin-top: var(--px8); margin-bottom: var(--px8); }
  .mv9_l-01 { margin-top: var(--px9); margin-bottom: var(--px9); }
  .mv10_l-01 { margin-top: var(--px10); margin-bottom: var(--px10); }
  .mv11_l-01 { margin-top: var(--px11); margin-bottom: var(--px11); }
  .mv12_l-01 { margin-top: var(--px12); margin-bottom: var(--px12); }
  .mv13_l-01 { margin-top: var(--px13); margin-bottom: var(--px13); }
  .mv14_l-01 { margin-top: var(--px14); margin-bottom: var(--px14); }
  .mv15_l-01 { margin-top: var(--px15); margin-bottom: var(--px15); }
  .mv16_l-01 { margin-top: var(--px16); margin-bottom: var(--px16); }
  .mv17_l-01 { margin-top: var(--px17); margin-bottom: var(--px17); }
  .mv18_l-01 { margin-top: var(--px18); margin-bottom: var(--px18); }
  .mv19_l-01 { margin-top: var(--px19); margin-bottom: var(--px19); }
  .mv20_l-01 { margin-top: var(--px20); margin-bottom: var(--px20); }
  .mv5p_l-01 { margin-top: 5%; margin-bottom: 5%; }
  .mv10p_l-01 { margin-top: 10%; margin-bottom: 10%; }
  .mv15p_l-01 { margin-top: 15%; margin-bottom: 15%; }
  .mv20p_l-01 { margin-top: 20%; margin-bottom: 20%; }
  .mv25p_l-01 { margin-top: 25%; margin-bottom: 25%; }
  .mv30p_l-01 { margin-top: 30%; margin-bottom: 30%; }
  .mv35p_l-01 { margin-top: 35%; margin-bottom: 35%; }
  .mv40p_l-01 { margin-top: 40%; margin-bottom: 40%; }
  .mv45p_l-01 { margin-top: 45%; margin-bottom: 45%; }
  .mv50p_l-01 { margin-top: 50%; margin-bottom: 50%; }
  .mv55p_l-01 { margin-top: 55%; margin-bottom: 55%; }
  .mv60p_l-01 { margin-top: 60%; margin-bottom: 60%; }
  .mv65p_l-01 { margin-top: 65%; margin-bottom: 65%; }
  .mv70p_l-01 { margin-top: 70%; margin-bottom: 70%; }
  .mv75p_l-01 { margin-top: 75%; margin-bottom: 75%; }
  .mv80p_l-01 { margin-top: 80%; margin-bottom: 80%; }
  .mv85p_l-01 { margin-top: 85%; margin-bottom: 85%; }
  .mv90p_l-01 { margin-top: 90%; margin-bottom: 90%; }
  .mv95p_l-01 { margin-top: 95%; margin-bottom: 95%; }
  .mv100p_l-01 { margin-top: 100%; margin-bottom: 100%; }
  .mh1_l-01 { margin-left: var(--px1); margin-right: var(--px1); }
  .mh2_l-01 { margin-left: var(--px2); margin-right: var(--px2); }
  .mh3_l-01 { margin-left: var(--px3); margin-right: var(--px3); }
  .mh4_l-01 { margin-left: var(--px4); margin-right: var(--px4); }
  .mh5_l-01 { margin-left: var(--px5); margin-right: var(--px5); }
  .mh6_l-01 { margin-left: var(--px6); margin-right: var(--px6); }
  .mh7_l-01 { margin-left: var(--px7); margin-right: var(--px7); }
  .mh8_l-01 { margin-left: var(--px8); margin-right: var(--px8); }
  .mh9_l-01 { margin-left: var(--px9); margin-right: var(--px9); }
  .mh10_l-01 { margin-left: var(--px10); margin-right: var(--px10); }
  .mh11_l-01 { margin-left: var(--px11); margin-right: var(--px11); }
  .mh12_l-01 { margin-left: var(--px12); margin-right: var(--px12); }
  .mh13_l-01 { margin-left: var(--px13); margin-right: var(--px13); }
  .mh14_l-01 { margin-left: var(--px14); margin-right: var(--px14); }
  .mh15_l-01 { margin-left: var(--px15); margin-right: var(--px15); }
  .mh16_l-01 { margin-left: var(--px16); margin-right: var(--px16); }
  .mh17_l-01 { margin-left: var(--px17); margin-right: var(--px17); }
  .mh18_l-01 { margin-left: var(--px18); margin-right: var(--px18); }
  .mh19_l-01 { margin-left: var(--px19); margin-right: var(--px19); }
  .mh20_l-01 { margin-left: var(--px20); margin-right: var(--px20); }
  .mh5p_l-01 { margin-left: 5%; margin-right: 5%; }
  .mh10p_l-01 { margin-left: 10%; margin-right: 10%; }
  .mh15p_l-01 { margin-left: 15%; margin-right: 15%; }
  .mh20p_l-01 { margin-left: 20%; margin-right: 20%; }
  .mh25p_l-01 { margin-left: 25%; margin-right: 25%; }
  .mh30p_l-01 { margin-left: 30%; margin-right: 30%; }
  .mh35p_l-01 { margin-left: 35%; margin-right: 35%; }
  .mh40p_l-01 { margin-left: 40%; margin-right: 40%; }
  .mh45p_l-01 { margin-left: 45%; margin-right: 45%; }
  .mh50p_l-01 { margin-left: 50%; margin-right: 50%; }
  .mh55p_l-01 { margin-left: 55%; margin-right: 55%; }
  .mh60p_l-01 { margin-left: 60%; margin-right: 60%; }
  .mh65p_l-01 { margin-left: 65%; margin-right: 65%; }
  .mh70p_l-01 { margin-left: 70%; margin-right: 70%; }
  .mh75p_l-01 { margin-left: 75%; margin-right: 75%; }
  .mh80p_l-01 { margin-left: 80%; margin-right: 80%; }
  .mh85p_l-01 { margin-left: 85%; margin-right: 85%; }
  .mh90p_l-01 { margin-left: 90%; margin-right: 90%; }
  .mh95p_l-01 { margin-left: 95%; margin-right: 95%; }
  .mh100p_l-01 { margin-left: 100%; margin-right: 100%; }
  .mt1_l-01 { margin-top: var(--px1); }
  .mt2_l-01 { margin-top: var(--px2); }
  .mt3_l-01 { margin-top: var(--px3); }
  .mt4_l-01 { margin-top: var(--px4); }
  .mt5_l-01 { margin-top: var(--px5); }
  .mt6_l-01 { margin-top: var(--px6); }
  .mt7_l-01 { margin-top: var(--px7); }
  .mt8_l-01 { margin-top: var(--px8); }
  .mt9_l-01 { margin-top: var(--px9); }
  .mt10_l-01 { margin-top: var(--px10); }
  .mt11_l-01 { margin-top: var(--px11); }
  .mt12_l-01 { margin-top: var(--px12); }
  .mt13_l-01 { margin-top: var(--px13); }
  .mt14_l-01 { margin-top: var(--px14); }
  .mt15_l-01 { margin-top: var(--px15); }
  .mt16_l-01 { margin-top: var(--px16); }
  .mt17_l-01 { margin-top: var(--px17); }
  .mt18_l-01 { margin-top: var(--px18); }
  .mt19_l-01 { margin-top: var(--px19); }
  .mt20_l-01 { margin-top: var(--px20); }
  .mt5p_l-01 { margin-top: 5%; }
  .mt10p_l-01 { margin-top: 10%; }
  .mt15p_l-01 { margin-top: 15%; }
  .mt20p_l-01 { margin-top: 20%; }
  .mt25p_l-01 { margin-top: 25%; }
  .mt30p_l-01 { margin-top: 30%; }
  .mt35p_l-01 { margin-top: 35%; }
  .mt40p_l-01 { margin-top: 40%; }
  .mt45p_l-01 { margin-top: 45%; }
  .mt50p_l-01 { margin-top: 50%; }
  .mt55p_l-01 { margin-top: 55%; }
  .mt60p_l-01 { margin-top: 60%; }
  .mt65p_l-01 { margin-top: 65%; }
  .mt70p_l-01 { margin-top: 70%; }
  .mt75p_l-01 { margin-top: 75%; }
  .mt80p_l-01 { margin-top: 80%; }
  .mt85p_l-01 { margin-top: 85%; }
  .mt90p_l-01 { margin-top: 90%; }
  .mt95p_l-01 { margin-top: 95%; }
  .mt100p_l-01 { margin-top: 100%; }
  .mr1_l-01 { margin-right: var(--px1); }
  .mr2_l-01 { margin-right: var(--px2); }
  .mr3_l-01 { margin-right: var(--px3); }
  .mr4_l-01 { margin-right: var(--px4); }
  .mr5_l-01 { margin-right: var(--px5); }
  .mr6_l-01 { margin-right: var(--px6); }
  .mr7_l-01 { margin-right: var(--px7); }
  .mr8_l-01 { margin-right: var(--px8); }
  .mr9_l-01 { margin-right: var(--px9); }
  .mr10_l-01 { margin-right: var(--px10); }
  .mr11_l-01 { margin-right: var(--px11); }
  .mr12_l-01 { margin-right: var(--px12); }
  .mr13_l-01 { margin-right: var(--px13); }
  .mr14_l-01 { margin-right: var(--px14); }
  .mr15_l-01 { margin-right: var(--px15); }
  .mr16_l-01 { margin-right: var(--px16); }
  .mr17_l-01 { margin-right: var(--px17); }
  .mr18_l-01 { margin-right: var(--px18); }
  .mr19_l-01 { margin-right: var(--px19); }
  .mr20_l-01 { margin-right: var(--px20); }
  .mr5p_l-01 { margin-right: 5%; }
  .mr10p_l-01 { margin-right: 10%; }
  .mr15p_l-01 { margin-right: 15%; }
  .mr20p_l-01 { margin-right: 20%; }
  .mr25p_l-01 { margin-right: 25%; }
  .mr30p_l-01 { margin-right: 30%; }
  .mr35p_l-01 { margin-right: 35%; }
  .mr40p_l-01 { margin-right: 40%; }
  .mr45p_l-01 { margin-right: 45%; }
  .mr50p_l-01 { margin-right: 50%; }
  .mr55p_l-01 { margin-right: 55%; }
  .mr60p_l-01 { margin-right: 60%; }
  .mr65p_l-01 { margin-right: 65%; }
  .mr70p_l-01 { margin-right: 70%; }
  .mr75p_l-01 { margin-right: 75%; }
  .mr80p_l-01 { margin-right: 80%; }
  .mr85p_l-01 { margin-right: 85%; }
  .mr90p_l-01 { margin-right: 90%; }
  .mr95p_l-01 { margin-right: 95%; }
  .mr100p_l-01 { margin-right: 100%; }
  .mb1_l-01 { margin-bottom: var(--px1); }
  .mb2_l-01 { margin-bottom: var(--px2); }
  .mb3_l-01 { margin-bottom: var(--px3); }
  .mb4_l-01 { margin-bottom: var(--px4); }
  .mb5_l-01 { margin-bottom: var(--px5); }
  .mb6_l-01 { margin-bottom: var(--px6); }
  .mb7_l-01 { margin-bottom: var(--px7); }
  .mb8_l-01 { margin-bottom: var(--px8); }
  .mb9_l-01 { margin-bottom: var(--px9); }
  .mb10_l-01 { margin-bottom: var(--px10); }
  .mb11_l-01 { margin-bottom: var(--px11); }
  .mb12_l-01 { margin-bottom: var(--px12); }
  .mb13_l-01 { margin-bottom: var(--px13); }
  .mb14_l-01 { margin-bottom: var(--px14); }
  .mb15_l-01 { margin-bottom: var(--px15); }
  .mb16_l-01 { margin-bottom: var(--px16); }
  .mb17_l-01 { margin-bottom: var(--px17); }
  .mb18_l-01 { margin-bottom: var(--px18); }
  .mb19_l-01 { margin-bottom: var(--px19); }
  .mb20_l-01 { margin-bottom: var(--px20); }
  .mb5p_l-01 { margin-bottom: 5%; }
  .mb10p_l-01 { margin-bottom: 10%; }
  .mb15p_l-01 { margin-bottom: 15%; }
  .mb20p_l-01 { margin-bottom: 20%; }
  .mb25p_l-01 { margin-bottom: 25%; }
  .mb30p_l-01 { margin-bottom: 30%; }
  .mb35p_l-01 { margin-bottom: 35%; }
  .mb40p_l-01 { margin-bottom: 40%; }
  .mb45p_l-01 { margin-bottom: 45%; }
  .mb50p_l-01 { margin-bottom: 50%; }
  .mb55p_l-01 { margin-bottom: 55%; }
  .mb60p_l-01 { margin-bottom: 60%; }
  .mb65p_l-01 { margin-bottom: 65%; }
  .mb70p_l-01 { margin-bottom: 70%; }
  .mb75p_l-01 { margin-bottom: 75%; }
  .mb80p_l-01 { margin-bottom: 80%; }
  .mb85p_l-01 { margin-bottom: 85%; }
  .mb90p_l-01 { margin-bottom: 90%; }
  .mb95p_l-01 { margin-bottom: 95%; }
  .mb100p_l-01 { margin-bottom: 100%; }
  .ml1_l-01 { margin-left: var(--px1); }
  .ml2_l-01 { margin-left: var(--px2); }
  .ml3_l-01 { margin-left: var(--px3); }
  .ml4_l-01 { margin-left: var(--px4); }
  .ml5_l-01 { margin-left: var(--px5); }
  .ml6_l-01 { margin-left: var(--px6); }
  .ml7_l-01 { margin-left: var(--px7); }
  .ml8_l-01 { margin-left: var(--px8); }
  .ml9_l-01 { margin-left: var(--px9); }
  .ml10_l-01 { margin-left: var(--px10); }
  .ml11_l-01 { margin-left: var(--px11); }
  .ml12_l-01 { margin-left: var(--px12); }
  .ml13_l-01 { margin-left: var(--px13); }
  .ml14_l-01 { margin-left: var(--px14); }
  .ml15_l-01 { margin-left: var(--px15); }
  .ml16_l-01 { margin-left: var(--px16); }
  .ml17_l-01 { margin-left: var(--px17); }
  .ml18_l-01 { margin-left: var(--px18); }
  .ml19_l-01 { margin-left: var(--px19); }
  .ml20_l-01 { margin-left: var(--px20); }
  .ml5p_l-01 { margin-left: 5%; }
  .ml10p_l-01 { margin-left: 10%; }
  .ml15p_l-01 { margin-left: 15%; }
  .ml20p_l-01 { margin-left: 20%; }
  .ml25p_l-01 { margin-left: 25%; }
  .ml30p_l-01 { margin-left: 30%; }
  .ml35p_l-01 { margin-left: 35%; }
  .ml40p_l-01 { margin-left: 40%; }
  .ml45p_l-01 { margin-left: 45%; }
  .ml50p_l-01 { margin-left: 50%; }
  .ml55p_l-01 { margin-left: 55%; }
  .ml60p_l-01 { margin-left: 60%; }
  .ml65p_l-01 { margin-left: 65%; }
  .ml70p_l-01 { margin-left: 70%; }
  .ml75p_l-01 { margin-left: 75%; }
  .ml80p_l-01 { margin-left: 80%; }
  .ml85p_l-01 { margin-left: 85%; }
  .ml90p_l-01 { margin-left: 90%; }
  .ml95p_l-01 { margin-left: 95%; }
  .ml100p_l-01 { margin-left: 100%; }
  .ba0_l-01 { border: none; }
  .bt0_l-01 { border-top: none; }
  .br0_l-01 { border-right: none; }
  .bb0_l-01 { border-bottom: none; }
  .bl0_l-01 { border-left: none; }
  .ba_l-01 { border: solid 1px rgba(255, 255, 255, 0.15); }
  .bt_l-01 { border-top: solid 1px rgba(255, 255, 255, 0.15); }
  .br_l-01 { border-right: solid 1px rgba(255, 255, 255, 0.15); }
  .bb_l-01 { border-bottom: solid 1px rgba(255, 255, 255, 0.15); }
  .bl_l-01 { border-left: solid 1px rgba(255, 255, 255, 0.15); }
  .bv_l-01 { border-top: solid 1px rgba(255, 255, 255, 0.15); border-bottom: solid 1px rgba(255, 255, 255, 0.15); }
  .bh_l-01 { border-left: solid 1px rgba(255, 255, 255, 0.15); border-right: solid 1px rgba(255, 255, 255, 0.15); }
  .borderNeutralOnFill_l-01 { border-color: var(--neutralOnFill); }
  .borderBlack_l-01 { border-color: var(--black); }
  .borderWhite_l-01 { border-color: var(--white); }
  .borderGreyHighlighted_l-01 { border-color: var(--greyHighlighted); }
  .borderNeutral_l-01 { border-color: var(--neutral); }
  .borderRed_l-01 { border-color: var(--red); }
  .borderTeal_l-01 { border-color: var(--teal); }
  .borderPurple_l-01 { border-color: var(--purple); }
  .borderBlue_l-01 { border-color: var(--blue); }
  .borderOrange_l-01 { border-color: var(--orange); }
  .borderYellow_l-01 { border-color: var(--yellow); }
  .borderGreen_l-01 { border-color: var(--green); }
  .borderPink_l-01 { border-color: var(--pink); }
  .borderGrey_l-01 { border-color: var(--grey); }
  .borderTextNeutral_l-01 { border-color: var(--textNeutral); }
  .borderTextMinimal_l-01 { border-color: var(--textMinimal); }
  .borderDetailNeutral_l-01 { border-color: var(--detailNeutral); }
  .borderDetailMinimal_l-01 { border-color: var(--detailMinimal); }
  .br1_l-01 { border-radius: 2px; }
  .br2_l-01 { border-radius: 5px; }
  .br3_l-01 { border-radius: 10px; }
  .br4_l-01 { border-radius: 15px; }
  .br5_l-01 { border-radius: 20px; }
  .strokeNeutralOnFill_l-01 { stroke: var(--neutralOnFill); }
  .strokeBlack_l-01 { stroke: var(--black); }
  .strokeWhite_l-01 { stroke: var(--white); }
  .strokeGreyHighlighted_l-01 { stroke: var(--greyHighlighted); }
  .strokeNeutral_l-01 { stroke: var(--neutral); }
  .strokeRed_l-01 { stroke: var(--red); }
  .strokeTeal_l-01 { stroke: var(--teal); }
  .strokePurple_l-01 { stroke: var(--purple); }
  .strokeBlue_l-01 { stroke: var(--blue); }
  .strokeOrange_l-01 { stroke: var(--orange); }
  .strokeYellow_l-01 { stroke: var(--yellow); }
  .strokeGreen_l-01 { stroke: var(--green); }
  .strokePink_l-01 { stroke: var(--pink); }
  .strokeGrey_l-01 { stroke: var(--grey); }
  .strokeTextNeutral_l-01 { stroke: var(--textNeutral); }
  .strokeTextMinimal_l-01 { stroke: var(--textMinimal); }
  .strokeDetailNeutral_l-01 { stroke: var(--detailNeutral); }
  .strokeDetailMinimal_l-01 { stroke: var(--detailMinimal); }
  .o0_l-01 { opacity: 0.00; }
  .o5_l-01 { opacity: 0.05; }
  .o10_l-01 { opacity: 0.10; }
  .o15_l-01 { opacity: 0.15; }
  .o20_l-01 { opacity: 0.20; }
  .o25_l-01 { opacity: 0.25; }
  .o30_l-01 { opacity: 0.30; }
  .o35_l-01 { opacity: 0.35; }
  .o40_l-01 { opacity: 0.40; }
  .o45_l-01 { opacity: 0.45; }
  .o50_l-01 { opacity: 0.50; }
  .o55_l-01 { opacity: 0.55; }
  .o60_l-01 { opacity: 0.60; }
  .o65_l-01 { opacity: 0.65; }
  .o70_l-01 { opacity: 0.70; }
  .o75_l-01 { opacity: 0.75; }
  .o80_l-01 { opacity: 0.80; }
  .o85_l-01 { opacity: 0.85; }
  .o90_l-01 { opacity: 0.90; }
  .o95_l-01 { opacity: 0.95; }
  .o100_l-01 { opacity: 1.00; }
  .aShadow_l-01 { box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.25); }
  .tShadow_l-01 { box-shadow: 0px -15px 25px rgba(0, 0, 0, 0.25); }
  .rShadow_l-01 { box-shadow: 15px 0px 25px rgba(0, 0, 0, 0.25); }
  .bShadow_l-01 { box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.25); }
  .lShadow_l-01 { box-shadow: -15px 0px 25px rgba(0, 0, 0, 0.25); }
  .rtShadow_l-01 { box-shadow: 15px -15px 25px rgba(0, 0, 0, 0.25); }
  .rbShadow_l-01 { box-shadow: 15px 15px 25px rgba(0, 0, 0, 0.25); }
  .lbShadow_l-01 { box-shadow: -15px 15px 25px rgba(0, 0, 0, 0.25); }
  .ltShadow_l-01 { box-shadow: -15px -15px 25px rgba(0, 0, 0, 0.25); }
  .rotate0_l-01 { transform: rotate(0deg); }
  .rotate5_l-01 { transform: rotate(5deg); }
  .rotate10_l-01 { transform: rotate(10deg); }
  .rotate15_l-01 { transform: rotate(15deg); }
  .rotate20_l-01 { transform: rotate(20deg); }
  .rotate25_l-01 { transform: rotate(25deg); }
  .rotate30_l-01 { transform: rotate(30deg); }
  .rotate35_l-01 { transform: rotate(35deg); }
  .rotate40_l-01 { transform: rotate(40deg); }
  .rotate45_l-01 { transform: rotate(45deg); }
  .rotate50_l-01 { transform: rotate(50deg); }
  .rotate55_l-01 { transform: rotate(55deg); }
  .rotate60_l-01 { transform: rotate(60deg); }
  .rotate65_l-01 { transform: rotate(65deg); }
  .rotate70_l-01 { transform: rotate(70deg); }
  .rotate75_l-01 { transform: rotate(75deg); }
  .rotate80_l-01 { transform: rotate(80deg); }
  .rotate85_l-01 { transform: rotate(85deg); }
  .rotate90_l-01 { transform: rotate(90deg); }
  .rotate95_l-01 { transform: rotate(95deg); }
  .rotate100_l-01 { transform: rotate(100deg); }
  .rotate105_l-01 { transform: rotate(105deg); }
  .rotate110_l-01 { transform: rotate(110deg); }
  .rotate115_l-01 { transform: rotate(115deg); }
  .rotate120_l-01 { transform: rotate(120deg); }
  .rotate125_l-01 { transform: rotate(125deg); }
  .rotate130_l-01 { transform: rotate(130deg); }
  .rotate135_l-01 { transform: rotate(135deg); }
  .rotate140_l-01 { transform: rotate(140deg); }
  .rotate145_l-01 { transform: rotate(145deg); }
  .rotate150_l-01 { transform: rotate(150deg); }
  .rotate155_l-01 { transform: rotate(155deg); }
  .rotate160_l-01 { transform: rotate(160deg); }
  .rotate165_l-01 { transform: rotate(165deg); }
  .rotate170_l-01 { transform: rotate(170deg); }
  .rotate175_l-01 { transform: rotate(175deg); }
  .rotate180_l-01 { transform: rotate(180deg); }
  .rotate185_l-01 { transform: rotate(185deg); }
  .rotate190_l-01 { transform: rotate(190deg); }
  .rotate195_l-01 { transform: rotate(195deg); }
  .rotate200_l-01 { transform: rotate(200deg); }
  .rotate205_l-01 { transform: rotate(205deg); }
  .rotate210_l-01 { transform: rotate(210deg); }
  .rotate215_l-01 { transform: rotate(215deg); }
  .rotate220_l-01 { transform: rotate(220deg); }
  .rotate225_l-01 { transform: rotate(225deg); }
  .rotate230_l-01 { transform: rotate(230deg); }
  .rotate235_l-01 { transform: rotate(235deg); }
  .rotate240_l-01 { transform: rotate(240deg); }
  .rotate245_l-01 { transform: rotate(245deg); }
  .rotate250_l-01 { transform: rotate(250deg); }
  .rotate255_l-01 { transform: rotate(255deg); }
  .rotate260_l-01 { transform: rotate(260deg); }
  .rotate265_l-01 { transform: rotate(265deg); }
  .rotate270_l-01 { transform: rotate(270deg); }
  .rotate275_l-01 { transform: rotate(275deg); }
  .rotate280_l-01 { transform: rotate(280deg); }
  .rotate285_l-01 { transform: rotate(285deg); }
  .rotate290_l-01 { transform: rotate(290deg); }
  .rotate295_l-01 { transform: rotate(295deg); }
  .rotate300_l-01 { transform: rotate(300deg); }
  .rotate305_l-01 { transform: rotate(305deg); }
  .rotate310_l-01 { transform: rotate(310deg); }
  .rotate315_l-01 { transform: rotate(315deg); }
  .rotate320_l-01 { transform: rotate(320deg); }
  .rotate325_l-01 { transform: rotate(325deg); }
  .rotate330_l-01 { transform: rotate(330deg); }
  .rotate335_l-01 { transform: rotate(335deg); }
  .rotate340_l-01 { transform: rotate(340deg); }
  .rotate345_l-01 { transform: rotate(345deg); }
  .rotate350_l-01 { transform: rotate(350deg); }
  .rotate355_l-01 { transform: rotate(355deg); }
  .rotate360_l-01 { transform: rotate(360deg); }
  .rotate365_l-01 { transform: rotate(365deg); }
  .rotateN0_l-01 { transform: rotate(-0deg); }
  .rotateN5_l-01 { transform: rotate(-5deg); }
  .rotateN10_l-01 { transform: rotate(-10deg); }
  .rotateN15_l-01 { transform: rotate(-15deg); }
  .rotateN20_l-01 { transform: rotate(-20deg); }
  .rotateN25_l-01 { transform: rotate(-25deg); }
  .rotateN30_l-01 { transform: rotate(-30deg); }
  .rotateN35_l-01 { transform: rotate(-35deg); }
  .rotateN40_l-01 { transform: rotate(-40deg); }
  .rotateN45_l-01 { transform: rotate(-45deg); }
  .rotateN50_l-01 { transform: rotate(-50deg); }
  .rotateN55_l-01 { transform: rotate(-55deg); }
  .rotateN60_l-01 { transform: rotate(-60deg); }
  .rotateN65_l-01 { transform: rotate(-65deg); }
  .rotateN70_l-01 { transform: rotate(-70deg); }
  .rotateN75_l-01 { transform: rotate(-75deg); }
  .rotateN80_l-01 { transform: rotate(-80deg); }
  .rotateN85_l-01 { transform: rotate(-85deg); }
  .rotateN90_l-01 { transform: rotate(-90deg); }
  .rotateN95_l-01 { transform: rotate(-95deg); }
  .rotateN100_l-01 { transform: rotate(-100deg); }
  .rotateN105_l-01 { transform: rotate(-105deg); }
  .rotateN110_l-01 { transform: rotate(-110deg); }
  .rotateN115_l-01 { transform: rotate(-115deg); }
  .rotateN120_l-01 { transform: rotate(-120deg); }
  .rotateN125_l-01 { transform: rotate(-125deg); }
  .rotateN130_l-01 { transform: rotate(-130deg); }
  .rotateN135_l-01 { transform: rotate(-135deg); }
  .rotateN140_l-01 { transform: rotate(-140deg); }
  .rotateN145_l-01 { transform: rotate(-145deg); }
  .rotateN150_l-01 { transform: rotate(-150deg); }
  .rotateN155_l-01 { transform: rotate(-155deg); }
  .rotateN160_l-01 { transform: rotate(-160deg); }
  .rotateN165_l-01 { transform: rotate(-165deg); }
  .rotateN170_l-01 { transform: rotate(-170deg); }
  .rotateN175_l-01 { transform: rotate(-175deg); }
  .rotateN180_l-01 { transform: rotate(-180deg); }
  .rotateN185_l-01 { transform: rotate(-185deg); }
  .rotateN190_l-01 { transform: rotate(-190deg); }
  .rotateN195_l-01 { transform: rotate(-195deg); }
  .rotateN200_l-01 { transform: rotate(-200deg); }
  .rotateN205_l-01 { transform: rotate(-205deg); }
  .rotateN210_l-01 { transform: rotate(-210deg); }
  .rotateN215_l-01 { transform: rotate(-215deg); }
  .rotateN220_l-01 { transform: rotate(-220deg); }
  .rotateN225_l-01 { transform: rotate(-225deg); }
  .rotateN230_l-01 { transform: rotate(-230deg); }
  .rotateN235_l-01 { transform: rotate(-235deg); }
  .rotateN240_l-01 { transform: rotate(-240deg); }
  .rotateN245_l-01 { transform: rotate(-245deg); }
  .rotateN250_l-01 { transform: rotate(-250deg); }
  .rotateN255_l-01 { transform: rotate(-255deg); }
  .rotateN260_l-01 { transform: rotate(-260deg); }
  .rotateN265_l-01 { transform: rotate(-265deg); }
  .rotateN270_l-01 { transform: rotate(-270deg); }
  .rotateN275_l-01 { transform: rotate(-275deg); }
  .rotateN280_l-01 { transform: rotate(-280deg); }
  .rotateN285_l-01 { transform: rotate(-285deg); }
  .rotateN290_l-01 { transform: rotate(-290deg); }
  .rotateN295_l-01 { transform: rotate(-295deg); }
  .rotateN300_l-01 { transform: rotate(-300deg); }
  .rotateN305_l-01 { transform: rotate(-305deg); }
  .rotateN310_l-01 { transform: rotate(-310deg); }
  .rotateN315_l-01 { transform: rotate(-315deg); }
  .rotateN320_l-01 { transform: rotate(-320deg); }
  .rotateN325_l-01 { transform: rotate(-325deg); }
  .rotateN330_l-01 { transform: rotate(-330deg); }
  .rotateN335_l-01 { transform: rotate(-335deg); }
  .rotateN340_l-01 { transform: rotate(-340deg); }
  .rotateN345_l-01 { transform: rotate(-345deg); }
  .rotateN350_l-01 { transform: rotate(-350deg); }
  .rotateN355_l-01 { transform: rotate(-355deg); }
  .rotateN360_l-01 { transform: rotate(-360deg); }
  .rotateN365_l-01 { transform: rotate(-365deg); }
  .focusBlack_l-01:focus { color: var(--black); }
  .focusWhite_l-01:focus { color: var(--white); }
  .focusGreyHighlighted_l-01:focus { color: var(--greyHighlightedAlt); }
  .focusNeutral_l-01:focus { color: var(--neutralAlt); }
  .focusRed_l-01:focus { color: var(--redAlt); }
  .focusPurple_l-01:focus { color: var(--purpleAlt); }
  .focusDetailNeutral_l-01:focus { color: var(--detailNeutral); }
  .focusDetailMinimal_l-01:focus { color: var(--detailMinimal); }
  .focusBgBlack_l-01:focus { background-color: var(--black); fill: var(--black); }
  .focusBgWhite_l-01:focus { background-color: var(--white); fill: var(--white); }
  .focusBgGreyHighlighted_l-01:focus { background-color: var(--greyHighlightedAlt); fill: var(--greyHighlightedAlt); }
  .focusBgNeutral_l-01:focus { background-color: var(--neutralFillAlt); fill: var(--neutralFillAlt); }
  .focusBgLevel1_l-01:focus { background-color: var(--bgLevel1); fill: var(--bgLevel1); }
  .focusBgLevel2_l-01:focus { background-color: var(--bgLevel2); fill: var(--bgLevel2); }
  .focusBgLevel3_l-01:focus { background-color: var(--bgLevel3); fill: var(--bgLevel3); }
  .focusBgLevel4_l-01:focus { background-color: var(--bgLevel4); fill: var(--bgLevel4); }
  .focusBgRed_l-01:focus { background-color: var(--redFillAlt); fill: var(--redFillAlt); }
  .focusBgTeal_l-01:focus { background-color: var(--tealFillAlt); fill: var(--tealFillAlt); }
  .focusBgPurple_l-01:focus { background-color: var(--purpleFillAlt); fill: var(--purpleFillAlt); }
  .focusStrokeBlack_l-01:focus * { stroke: var(--black); }
  .focusStrokeWhite_l-01:focus * { stroke: var(--white); }
  .focusStrokeGreyHighlighted_l-01:focus * { stroke: var(--greyHighlightedAlt); }
  .focusStrokeNeutral_l-01:focus * { stroke: var(--neutralAlt); }
  .focusStrokeRed_l-01:focus * { stroke: var(--redAlt); }
  .focusStrokePurple_l-01:focus * { stroke: var(--purpleAlt); }
  .focusStrokeDetailNeutral_l-01:focus * { stroke: var(--detailNeutral); }
  .focusStrokeDetailMinimal_l-01:focus * { stroke: var(--detailMinimal); }
  .focusBorderBlack_l-01:focus { border-color: var(--black); }
  .focusBorderWhite_l-01:focus { border-color: var(--white); }
  .focusBorderGreyHighlighted_l-01:focus { border-color: var(--greyHighlightedAlt); }
  .focusBorderNeutral_l-01:focus { border-color: var(--neutralAlt); }
  .focusBorderRed_l-01:focus { border-color: var(--redAlt); }
  .focusBorderPurple_l-01:focus { border-color: var(--purpleAlt); }
  .focusBorderDetailNeutral_l-01:focus { border-color: var(--detailNeutral); }
  .focusBorderDetailMinimal_l-01:focus { border-color: var(--detailMinimal); }
  .hoverLight_l-01:hover { font-weight: 300; }
  .hoverRegular_l-01:hover { font-weight: 400; }
  .hoverMedium_l-01:hover { font-weight: 500; }
  .hoverBold_l-01:hover { font-weight: 700; }
  .hoverBlack_l-01:hover { color: var(--black); }
  .hoverWhite_l-01:hover { color: var(--white); }
  .hoverGreyHighlighted_l-01:hover { color: var(--greyHighlightedAlt); }
  .hoverNeutral_l-01:hover { color: var(--neutralAlt); }
  .hoverRed_l-01:hover { color: var(--redAlt); }
  .hoverPurple_l-01:hover { color: var(--purpleAlt); }
  .hoverDetailNeutral_l-01:hover { color: var(--detailNeutral); }
  .hoverDetailMinimal_l-01:hover { color: var(--detailMinimal); }
  .hoverBgBlack_l-01:hover { background-color: var(--black); fill: var(--black); }
  .hoverBgWhite_l-01:hover { background-color: var(--white); fill: var(--white); }
  .hoverBgGreyHighlighted_l-01:hover { background-color: var(--greyHighlightedAlt); fill: var(--greyHighlightedAlt); }
  .hoverBgNeutral_l-01:hover { background-color: var(--neutralFillAlt); fill: var(--neutralFillAlt); }
  .hoverBgLevel1_l-01:hover { background-color: var(--bgLevel1); fill: var(--bgLevel1); }
  .hoverBgLevel2_l-01:hover { background-color: var(--bgLevel2); fill: var(--bgLevel2); }
  .hoverBgLevel3_l-01:hover { background-color: var(--bgLevel3); fill: var(--bgLevel3); }
  .hoverBgLevel4_l-01:hover { background-color: var(--bgLevel4); fill: var(--bgLevel4); }
  .hoverBgRed_l-01:hover { background-color: var(--redFillAlt); fill: var(--redFillAlt); }
  .hoverBgTeal_l-01:hover { background-color: var(--tealFillAlt); fill: var(--tealFillAlt); }
  .hoverBgPurple_l-01:hover { background-color: var(--purpleFillAlt); fill: var(--purpleFillAlt); }
  .hoverStrokeBlack_l-01:hover * { stroke: var(--black); }
  .hoverStrokeWhite_l-01:hover * { stroke: var(--white); }
  .hoverStrokeGreyHighlighted_l-01:hover * { stroke: var(--greyHighlightedAlt); }
  .hoverStrokeNeutral_l-01:hover * { stroke: var(--neutralAlt); }
  .hoverStrokeRed_l-01:hover * { stroke: var(--redAlt); }
  .hoverStrokePurple_l-01:hover * { stroke: var(--purpleAlt); }
  .hoverStrokeDetailNeutral_l-01:hover * { stroke: var(--detailNeutral); }
  .hoverStrokeDetailMinimal_l-01:hover * { stroke: var(--detailMinimal); }
  .hoverBorderBlack_l-01:hover { border-color: var(--black); }
  .hoverBorderWhite_l-01:hover { border-color: var(--white); }
  .hoverBorderGreyHighlighted_l-01:hover { border-color: var(--greyHighlightedAlt); }
  .hoverBorderNeutral_l-01:hover { border-color: var(--neutralAlt); }
  .hoverBorderRed_l-01:hover { border-color: var(--redAlt); }
  .hoverBorderPurple_l-01:hover { border-color: var(--purpleAlt); }
  .hoverBorderDetailNeutral_l-01:hover { border-color: var(--detailNeutral); }
  .hoverBorderDetailMinimal_l-01:hover { border-color: var(--detailMinimal); }
  .light_l-01 { font-weight: 300; }
  .regular_l-01 { font-weight: 400; }
  .medium_l-01 { font-weight: 500; }
  .bold_l-01 { font-weight: 700; }
  .bgNone_l-01 { fill: transparent; background-color: transparent; }
  .transparent_l-01 { color: transparent; }
  .vHidden_l-01 { visibility: hidden; }
  .flexWrap_l-01 { display: flex; flex-wrap: wrap; }
  .flexNoWrap_l-01 { display: flex; flex-wrap: nowrap; }
  .flexRow_l-01 { display: flex; flex-direction: row; }
  .flexColumn_l-01 { display: flex; flex-direction: column; }
  .noShrink_l-01 { flex-shrink: 0; }
  .gridRowAuto_l-01 { grid-row: auto; }
  .gridColumnAuto_l-01 { grid-column: auto; }
  .selfStart_l-01 { align-self: flex-start; }
  .selfCenter_l-01 { align-self: center; }
  .selfEnd_l-01 { align-self: flex-end; }
  .selfStretch_l-01 { align-self: stretch; }
  .visible_l-01 { overflow: visible; }
  .visibleX_l-01 { overflow-x: visible; }
  .visibleY_l-01 { overflow-y: visible; }
  .scroll_l-01 { overflow: auto; }
  .scrollX_l-01 { overflow-x: auto; }
  .scrollY_l-01 { overflow-y: auto; }
  .scrollAlways_l-01 { overflow: scroll; }
  .scrollXAlways_l-01 { overflow-x: scroll; }
  .scrollYAlways_l-01 { overflow-y: scroll; }
  .noOverflow_l-01 { overflow: hidden; }
  .fMono_l-01 { font-family: 'IBM Plex Mono', monospace; }
  .fSans_l-01 { font-family: 'IBM Plex Sans', sans-serif; }
  .fs48px_l-01 { font-size: 48px; }
  .fs60px_l-01 { font-size: 60px; }
  .italic_l-01 { font-style: italic; }
  .lhDouble_l-01 { line-height:1.5em; }
  .ellipsis_l-01 { text-overflow: ellipsis; white-space: nowrap; overflow: hidden; }
  .lineClamp1_l-01 { display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical; overflow: hidden; }
  .pre_l-01 { white-space: pre; }
  .preLine_l-01 { white-space: pre-line; }
  .preWrap_l-01 { white-space: pre-wrap; }
  .noWrap_l-01 { white-space: nowrap; }
  .breakAll_l-01 { word-break: break-all; }
  .breakWord_l-01 { word-break: break-word; }
  .noDecoration_l-01 { text-decoration: none; }
  .hyphens_l-01 { hyphens: auto; }
  .hyphensMan_l-01 { hyphens: manual; }
  .wAuto_l-01 { width: auto; }
  .wFitContent_l-01 { width: fit-content; }
  .w100vw_l-01 { width: 100vw; }
  .minW100vw_l-01 { min-width: 100vw; }
  .maxW100vw_l-01 { max-width: 100vw; }
  .wThird_l-01 { width: calc(100% / 3); }
  .minWThird_l-01 { min-width: calc(100% / 3); }
  .maxWThird_l-01 { max-width: calc(100% / 3); }
  .wHalf_l-01 { width: 48%; }
  .minWHalf_l-01 { min-width: 48%; }
  .maxWHalf_l-01 { max-width: 48%; }
  .hAuto_l-01 { height: auto; }
  .h0_l-01 { height: 0; }
  .h100vh_l-01 { height: 100vh; }
  .h50vh_l-01 { height: 50vh; }
  .hFitContent_l-01 { height: fit-content; }
  .minH100vh_l-01 { min-height: 100vh; }
  .hThird_l-01 { height: calc(100% / 3); }
  .minHThird_l-01 { min-height: calc(100% / 3); }
  .maxHThird_l-01 { max-height: calc(100% / 3); }
  .hHalf_l-01 { height: 48%; }
  .minHHalf_l-01 { min-height: 48%; }
  .maxHHalf_l-01 { max-height: 48%; }
  .maAuto_l-01 { margin: auto; }
  .ma0_l-01 { margin: 0; }
  .mvAuto_l-01 { margin-top: auto; margin-bottom: auto; }
  .mv0_l-01 { margin-top: 0; margin-bottom: 0; }
  .mhAuto_l-01 { margin-left: auto; margin-right: auto; }
  .mh0_l-01 { margin-left: 0; margin-right: 0; }
  .mtAuto_l-01 { margin-top: auto; }
  .mt0_l-01 { margin-top: 0; }
  .mrAuto_l-01 { margin-right: auto; }
  .mr0_l-01 { margin-right: 0; }
  .mbAuto_l-01 { margin-bottom: auto; }
  .mb0_l-01 { margin-bottom: 0; }
  .mlAuto_l-01 { margin-left: auto; }
  .ml0_l-01 { margin-left: 0; }
  .pa0_l-01 { padding: 0; }
  .pv0_l-01 { padding-top: 0; padding-bottom: 0; }
  .ph0_l-01 { padding-left: 0; padding-right: 0; }
  .pt0_l-01 { padding-top: 0; }
  .pr0_l-01 { padding-right: 0; }
  .pb0_l-01 { padding-bottom: 0; }
  .pl0_l-01 { padding-left: 0; }
  .paMin_l-01 { padding: 2px; }
  .ptMin_l-01 { padding-top: 2px; }
  .prMin_l-01 { padding-right: 2px; }
  .pbMin_l-01 { padding-bottom: 2px; }
  .plMin_l-01 { padding-left: 2px; }
  .pvMin_l-01 { padding-top: 2px; padding-bottom: 2px; }
  .phMin_l-01 { padding-left: 2px; padding-right: 2px; }
  .br50p_l-01 { border-radius: 50%; }
  .baWhite_l-01 { border: solid 1px white; }
  .baTransparent_l-01 { border: solid 1px transparent; }
  .baBlack_l-01 { border: solid 1px rgba(0, 0, 0, 0.1); }
  .btBlack_l-01 { border-top: solid 1px rgba(0, 0, 0, 0.1); }
  .btWhite_l-01 { border-top: solid 1px white; }
  .brBlack_l-01 { border-right: solid 1px rgba(0, 0, 0, 0.1); }
  .bbTransparent_l-01 { border-bottom: solid 1px transparent; }
  .bbBlack_l-01 { border-bottom: solid 1px rgba(0, 0, 0, 0.1); }
  .bbWhite_l-01 { border-bottom: solid 1px white; }
  .bbPurple_l-01 { border-bottom: solid 1px var(--purple); }
  .bbPurple2_l-01 { border-bottom: solid 2px var(--purple); }
  .blBlack_l-01 { border-left: solid 1px rgba(0, 0, 0, 0.1); }
  .ol0_l-01 { outline: none; }
  .noShadow_l-01 { box-shadow: none; }
  .shadowInset_l-01 { box-shadow: inset 0 15px 20px rgba(0, 0, 0, 0.25); }
  .aShadowInset_l-01 { box-shadow: inset 0 0px 15px rgba(0, 0, 0, 0.5); }
  .rShadowInset_l-01 { box-shadow: inset 10px 0px 15px rgba(0, 0, 0, 0.25); }
  .lShadowInset_l-01 { box-shadow: inset 10px 0px -15px rgba(0, 0, 0, 0.25); }
  .tShadowInset_l-01 { box-shadow: inset 10px 15px 0px rgba(0, 0, 0, 0.25); }
  .bShadowInset_l-01 { box-shadow: inset 10px -15px 0px rgba(0, 0, 0, 0.25); }
  .bhShadow_l-01 { box-shadow: 25px 25px 25px rgba(0, 0, 0, 0.25), -25px 25px 25px rgba(0, 0, 0, 0.25); }
  .shadowLight_l-01 { box-shadow: 0 0 50px var(--white); }
  .pointer_l-01 { cursor: pointer; }
  .cursor_l-01 { cursor: default; }
  .move_l-01 { cursor: move; }
  .animate_l-01 { transition: all 0.2s ease-in-out; }
  .animateColor_l-01 { transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out; }
  .animateOpacity_l-01 { transition: opacity 0.2s ease-in-out; }
  .inactive_l-01 { cursor: default; opacity: 0.3;; }
  .noEvent_l-01 { pointer-events: none; }
  .eventAuto_l-01 { pointer-events: auto; }
  .noSelect_l-01 { user-select: none; }
  .bgWhiteRadialGradient_l-01 { background: radial-gradient(
    rgba(255, 255, 255, 1),
    rgba(255, 255, 255, 0.5) 20%,
    rgba(255, 255, 255, 0.25) 40%,
    rgba(255, 255, 255, 0) 70%
  );
  margin-left: -5px; }
  .t10p_l-01 { top: 10%; }
  .t15p_l-01 { top: 15%; }
  .l10p_l-01 { left: 10%; }
  .l25p_l-01 { left: 25%; }
  .hoverO0_l-01:hover { opacity: 0; }
  .hoverO100_l-01:hover { opacity: 1; }
  .hoverU_l-01:hover { border-bottom: solid 1px var(--white); }
  .hoverShadow_l-01:hover { box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.25); }
  .hoverChildPurple_l-01:hover * { color: var(--purpleAlt); fill: var(--purpleAlt); }
  .hoverTransparentBorder_l-01:hover { border-color: transparent; }
  .noScrollbar_l-01::-webkit-scrollbar { display: none; }
  .outlineWhite_l-01:focus { box-shadow: 0 0 15px 1px var(--white); background: var(--white); color: var(--grey90); }
  .firstLetterCap_l-01::first-letter { text-transform: uppercase; }
}
@media (min-width: 1300px) {
  .neutralOnFill_min_l-01 { color: var(--neutralOnFill); }
  .black_min_l-01 { color: var(--black); }
  .white_min_l-01 { color: var(--white); }
  .greyHighlighted_min_l-01 { color: var(--greyHighlighted); }
  .neutral_min_l-01 { color: var(--neutral); }
  .red_min_l-01 { color: var(--red); }
  .teal_min_l-01 { color: var(--teal); }
  .purple_min_l-01 { color: var(--purple); }
  .blue_min_l-01 { color: var(--blue); }
  .orange_min_l-01 { color: var(--orange); }
  .yellow_min_l-01 { color: var(--yellow); }
  .green_min_l-01 { color: var(--green); }
  .pink_min_l-01 { color: var(--pink); }
  .grey_min_l-01 { color: var(--grey); }
  .textNeutral_min_l-01 { color: var(--textNeutral); }
  .textMinimal_min_l-01 { color: var(--textMinimal); }
  .detailNeutral_min_l-01 { color: var(--detailNeutral); }
  .detailMinimal_min_l-01 { color: var(--detailMinimal); }
  .bgBlack_min_l-01 { fill: var--(black); background-color: var(--black); }
  .bgWhite_min_l-01 { fill: var--(white); background-color: var(--white); }
  .bgGreyHighlighted_min_l-01 { fill: var--(greyHighlighted); background-color: var(--greyHighlighted); }
  .bgNeutral_min_l-01 { fill: var--(neutralFill); background-color: var(--neutralFill); }
  .bgLevel1_min_l-01 { fill: var--(bgLevel1); background-color: var(--bgLevel1); }
  .bgLevel2_min_l-01 { fill: var--(bgLevel2); background-color: var(--bgLevel2); }
  .bgLevel3_min_l-01 { fill: var--(bgLevel3); background-color: var(--bgLevel3); }
  .bgLevel4_min_l-01 { fill: var--(bgLevel4); background-color: var(--bgLevel4); }
  .bgRed_min_l-01 { fill: var--(redFill); background-color: var(--redFill); }
  .bgTeal_min_l-01 { fill: var--(tealFill); background-color: var(--tealFill); }
  .bgPurple_min_l-01 { fill: var--(purpleFill); background-color: var(--purpleFill); }
  .bgBlue_min_l-01 { fill: var--(blueFill); background-color: var(--blueFill); }
  .bgOrange_min_l-01 { fill: var--(orangeFill); background-color: var(--orangeFill); }
  .bgYellow_min_l-01 { fill: var--(yellowFill); background-color: var(--yellowFill); }
  .bgGreen_min_l-01 { fill: var--(greenFill); background-color: var(--greenFill); }
  .bgPink_min_l-01 { fill: var--(pinkFill); background-color: var(--pinkFill); }
  .bgGrey_min_l-01 { fill: var--(greyFill); background-color: var(--greyFill); }
  .fixed_min_l-01 { position: fixed; }
  .relative_min_l-01 { position: relative; }
  .absolute_min_l-01 { position: absolute; }
  .l0_min_l-01 { left: 0; }
  .r0_min_l-01 { right: 0; }
  .t0_min_l-01 { top: 0; }
  .b0_min_l-01 { bottom: 0; }
  .hidden_min_l-01 { display: none; }
  .block_min_l-01 { display: block; }
  .inlineBlock_min_l-01 { display: inline-block; }
  .inlineFlex_min_l-01 { display: inline-flex; }
  .flex_min_l-01 { display: flex; }
  .flex0_min_l-01 { flex: 0; }
  .flex1_min_l-01 { flex: 1; }
  .flex2_min_l-01 { flex: 2; }
  .flex3_min_l-01 { flex: 3; }
  .flex4_min_l-01 { flex: 4; }
  .flex5_min_l-01 { flex: 5; }
  .flex6_min_l-01 { flex: 6; }
  .flex7_min_l-01 { flex: 7; }
  .flex8_min_l-01 { flex: 8; }
  .flex9_min_l-01 { flex: 9; }
  .flex10_min_l-01 { flex: 10; }
  .justifyStart_min_l-01 { display: flex; justify-content: flex-start; }
  .justifyCenter_min_l-01 { display: flex; justify-content: center; }
  .justifyEnd_min_l-01 { display: flex; justify-content: flex-end; }
  .justifyBetween_min_l-01 { display: flex; justify-content: space-between; }
  .justifyAround_min_l-01 { display: flex; justify-content: space-around; }
  .justifyBaseline_min_l-01 { display: flex; justify-content: baseline; }
  .justifyEvenly_min_l-01 { display: flex; justify-content: space-evenly; }
  .justifyStretch_min_l-01 { display: flex; justify-content: stretch; }
  .alignStart_min_l-01 { display: flex; align-items: flex-start; }
  .alignCenter_min_l-01 { display: flex; align-items: center; }
  .alignEnd_min_l-01 { display: flex; align-items: flex-end; }
  .alignBetween_min_l-01 { display: flex; align-items: space-between; }
  .alignAround_min_l-01 { display: flex; align-items: space-around; }
  .alignBaseline_min_l-01 { display: flex; align-items: baseline; }
  .alignStretch_min_l-01 { display: flex; align-items: stretch; }
  .flexGrow0_min_l-01 { flex-grow: 0; }
  .flexGrow1_min_l-01 { flex-grow: 1; }
  .flexGrow2_min_l-01 { flex-grow: 2; }
  .flexGrow3_min_l-01 { flex-grow: 3; }
  .flexGrow4_min_l-01 { flex-grow: 4; }
  .flexGrow5_min_l-01 { flex-grow: 5; }
  .flexShrink0_min_l-01 { flex-shrink: 0; }
  .flexShrink1_min_l-01 { flex-shrink: 1; }
  .flexShrink2_min_l-01 { flex-shrink: 2; }
  .flexShrink3_min_l-01 { flex-shrink: 3; }
  .flexShrink4_min_l-01 { flex-shrink: 4; }
  .flexShrink5_min_l-01 { flex-shrink: 5; }
  .order1_min_l-01 { order: 1; }
  .order2_min_l-01 { order: 2; }
  .order3_min_l-01 { order: 3; }
  .order4_min_l-01 { order: 4; }
  .order5_min_l-01 { order: 5; }
  .order6_min_l-01 { order: 6; }
  .order7_min_l-01 { order: 7; }
  .order8_min_l-01 { order: 8; }
  .order9_min_l-01 { order: 9; }
  .order10_min_l-01 { order: 10; }
  .zi0_min_l-01 { z-index: 0; }
  .zi1_min_l-01 { z-index: 1; }
  .zi2_min_l-01 { z-index: 2; }
  .zi3_min_l-01 { z-index: 3; }
  .zi4_min_l-01 { z-index: 4; }
  .zi5_min_l-01 { z-index: 5; }
  .zi6_min_l-01 { z-index: 6; }
  .zi7_min_l-01 { z-index: 7; }
  .zi8_min_l-01 { z-index: 8; }
  .zi9_min_l-01 { z-index: 9; }
  .zi10_min_l-01 { z-index: 10; }
  .zi11_min_l-01 { z-index: 11; }
  .zi12_min_l-01 { z-index: 12; }
  .zi13_min_l-01 { z-index: 13; }
  .zi14_min_l-01 { z-index: 14; }
  .zi15_min_l-01 { z-index: 15; }
  .zi16_min_l-01 { z-index: 16; }
  .zi17_min_l-01 { z-index: 17; }
  .zi18_min_l-01 { z-index: 18; }
  .zi19_min_l-01 { z-index: 19; }
  .zi20_min_l-01 { z-index: 20; }
  .zi21_min_l-01 { z-index: 21; }
  .zi22_min_l-01 { z-index: 22; }
  .zi23_min_l-01 { z-index: 23; }
  .zi24_min_l-01 { z-index: 24; }
  .zi25_min_l-01 { z-index: 25; }
  .zi26_min_l-01 { z-index: 26; }
  .zi27_min_l-01 { z-index: 27; }
  .zi28_min_l-01 { z-index: 28; }
  .zi29_min_l-01 { z-index: 29; }
  .zi30_min_l-01 { z-index: 30; }
  .zi31_min_l-01 { z-index: 31; }
  .zi32_min_l-01 { z-index: 32; }
  .zi33_min_l-01 { z-index: 33; }
  .zi34_min_l-01 { z-index: 34; }
  .zi35_min_l-01 { z-index: 35; }
  .zi36_min_l-01 { z-index: 36; }
  .zi37_min_l-01 { z-index: 37; }
  .zi38_min_l-01 { z-index: 38; }
  .zi39_min_l-01 { z-index: 39; }
  .zi40_min_l-01 { z-index: 40; }
  .zi41_min_l-01 { z-index: 41; }
  .zi42_min_l-01 { z-index: 42; }
  .zi43_min_l-01 { z-index: 43; }
  .zi44_min_l-01 { z-index: 44; }
  .zi45_min_l-01 { z-index: 45; }
  .zi46_min_l-01 { z-index: 46; }
  .zi47_min_l-01 { z-index: 47; }
  .zi48_min_l-01 { z-index: 48; }
  .zi49_min_l-01 { z-index: 49; }
  .zi50_min_l-01 { z-index: 50; }
  .fs1_min_l-01 { font-size: 4rem; }
  .fs2_min_l-01 { font-size: 2.5rem; }
  .fs3_min_l-01 { font-size: 1.5rem; }
  .fs4_min_l-01 { font-size: 1.25rem; }
  .fs5_min_l-01 { font-size: 1rem; }
  .fs6_min_l-01 { font-size: 0.9rem; }
  .fs7_min_l-01 { font-size: 0.75rem; }
  .textLeft_min_l-01 { text-align: left; }
  .textCenter_min_l-01 { text-align: center; }
  .textRight_min_l-01 { text-align: right; }
  .textEnd_min_l-01 { text-align: end; }
  .lh1_min_l-01 { line-height: 1; }
  .lh2_min_l-01 { line-height: 1.25; }
  .lh3_min_l-01 { line-height: 1.5; }
  .lh4_min_l-01 { line-height: 1.75; }
  .lh5_min_l-01 { line-height: 2; }
  .lh6_min_l-01 { line-height: 2.25; }
  .lh1px_min_l-01 { line-height: var(--px1); }
  .lh2px_min_l-01 { line-height: var(--px2); }
  .lh3px_min_l-01 { line-height: var(--px3); }
  .lh4px_min_l-01 { line-height: var(--px4); }
  .lh5px_min_l-01 { line-height: var(--px5); }
  .lh6px_min_l-01 { line-height: var(--px6); }
  .lh7px_min_l-01 { line-height: var(--px7); }
  .lh8px_min_l-01 { line-height: var(--px8); }
  .lh9px_min_l-01 { line-height: var(--px9); }
  .lh10px_min_l-01 { line-height: var(--px10); }
  .lh11px_min_l-01 { line-height: var(--px11); }
  .lh12px_min_l-01 { line-height: var(--px12); }
  .lh13px_min_l-01 { line-height: var(--px13); }
  .lh14px_min_l-01 { line-height: var(--px14); }
  .lh15px_min_l-01 { line-height: var(--px15); }
  .lh16px_min_l-01 { line-height: var(--px16); }
  .lh17px_min_l-01 { line-height: var(--px17); }
  .lh18px_min_l-01 { line-height: var(--px18); }
  .lh19px_min_l-01 { line-height: var(--px19); }
  .lh20px_min_l-01 { line-height: var(--px20); }
  .ls1_min_l-01 { letter-spacing: 0.03em; }
  .ls2_min_l-01 { letter-spacing: 0.02em; }
  .ls3_min_l-01 { letter-spacing: 0.015em; }
  .uppercase_min_l-01 { text-transform: uppercase; }
  .lowercase_min_l-01 { text-transform: lowercase; }
  .capitalize_min_l-01 { text-transform: capitalize; }
  .gridRow0_min_l-01 { grid-row: 0; }
  .gridRow1_min_l-01 { grid-row: 1; }
  .gridRow2_min_l-01 { grid-row: 2; }
  .gridRow3_min_l-01 { grid-row: 3; }
  .gridRow4_min_l-01 { grid-row: 4; }
  .gridRow5_min_l-01 { grid-row: 5; }
  .gridRow6_min_l-01 { grid-row: 6; }
  .gridRow7_min_l-01 { grid-row: 7; }
  .gridRow8_min_l-01 { grid-row: 8; }
  .gridRow9_min_l-01 { grid-row: 9; }
  .gridRow10_min_l-01 { grid-row: 10; }
  .gridRow11_min_l-01 { grid-row: 11; }
  .gridRow12_min_l-01 { grid-row: 12; }
  .gridRow0to0_min_l-01 { grid-row: 0 / 0; }
  .gridRow0to1_min_l-01 { grid-row: 0 / 1; }
  .gridRow0to2_min_l-01 { grid-row: 0 / 2; }
  .gridRow0to3_min_l-01 { grid-row: 0 / 3; }
  .gridRow0to4_min_l-01 { grid-row: 0 / 4; }
  .gridRow0to5_min_l-01 { grid-row: 0 / 5; }
  .gridRow0to6_min_l-01 { grid-row: 0 / 6; }
  .gridRow0to7_min_l-01 { grid-row: 0 / 7; }
  .gridRow0to8_min_l-01 { grid-row: 0 / 8; }
  .gridRow0to9_min_l-01 { grid-row: 0 / 9; }
  .gridRow0to10_min_l-01 { grid-row: 0 / 10; }
  .gridRow0to11_min_l-01 { grid-row: 0 / 11; }
  .gridRow0to12_min_l-01 { grid-row: 0 / 12; }
  .gridRow1to0_min_l-01 { grid-row: 1 / 0; }
  .gridRow1to1_min_l-01 { grid-row: 1 / 1; }
  .gridRow1to2_min_l-01 { grid-row: 1 / 2; }
  .gridRow1to3_min_l-01 { grid-row: 1 / 3; }
  .gridRow1to4_min_l-01 { grid-row: 1 / 4; }
  .gridRow1to5_min_l-01 { grid-row: 1 / 5; }
  .gridRow1to6_min_l-01 { grid-row: 1 / 6; }
  .gridRow1to7_min_l-01 { grid-row: 1 / 7; }
  .gridRow1to8_min_l-01 { grid-row: 1 / 8; }
  .gridRow1to9_min_l-01 { grid-row: 1 / 9; }
  .gridRow1to10_min_l-01 { grid-row: 1 / 10; }
  .gridRow1to11_min_l-01 { grid-row: 1 / 11; }
  .gridRow1to12_min_l-01 { grid-row: 1 / 12; }
  .gridRow2to0_min_l-01 { grid-row: 2 / 0; }
  .gridRow2to1_min_l-01 { grid-row: 2 / 1; }
  .gridRow2to2_min_l-01 { grid-row: 2 / 2; }
  .gridRow2to3_min_l-01 { grid-row: 2 / 3; }
  .gridRow2to4_min_l-01 { grid-row: 2 / 4; }
  .gridRow2to5_min_l-01 { grid-row: 2 / 5; }
  .gridRow2to6_min_l-01 { grid-row: 2 / 6; }
  .gridRow2to7_min_l-01 { grid-row: 2 / 7; }
  .gridRow2to8_min_l-01 { grid-row: 2 / 8; }
  .gridRow2to9_min_l-01 { grid-row: 2 / 9; }
  .gridRow2to10_min_l-01 { grid-row: 2 / 10; }
  .gridRow2to11_min_l-01 { grid-row: 2 / 11; }
  .gridRow2to12_min_l-01 { grid-row: 2 / 12; }
  .gridRow3to0_min_l-01 { grid-row: 3 / 0; }
  .gridRow3to1_min_l-01 { grid-row: 3 / 1; }
  .gridRow3to2_min_l-01 { grid-row: 3 / 2; }
  .gridRow3to3_min_l-01 { grid-row: 3 / 3; }
  .gridRow3to4_min_l-01 { grid-row: 3 / 4; }
  .gridRow3to5_min_l-01 { grid-row: 3 / 5; }
  .gridRow3to6_min_l-01 { grid-row: 3 / 6; }
  .gridRow3to7_min_l-01 { grid-row: 3 / 7; }
  .gridRow3to8_min_l-01 { grid-row: 3 / 8; }
  .gridRow3to9_min_l-01 { grid-row: 3 / 9; }
  .gridRow3to10_min_l-01 { grid-row: 3 / 10; }
  .gridRow3to11_min_l-01 { grid-row: 3 / 11; }
  .gridRow3to12_min_l-01 { grid-row: 3 / 12; }
  .gridRow4to0_min_l-01 { grid-row: 4 / 0; }
  .gridRow4to1_min_l-01 { grid-row: 4 / 1; }
  .gridRow4to2_min_l-01 { grid-row: 4 / 2; }
  .gridRow4to3_min_l-01 { grid-row: 4 / 3; }
  .gridRow4to4_min_l-01 { grid-row: 4 / 4; }
  .gridRow4to5_min_l-01 { grid-row: 4 / 5; }
  .gridRow4to6_min_l-01 { grid-row: 4 / 6; }
  .gridRow4to7_min_l-01 { grid-row: 4 / 7; }
  .gridRow4to8_min_l-01 { grid-row: 4 / 8; }
  .gridRow4to9_min_l-01 { grid-row: 4 / 9; }
  .gridRow4to10_min_l-01 { grid-row: 4 / 10; }
  .gridRow4to11_min_l-01 { grid-row: 4 / 11; }
  .gridRow4to12_min_l-01 { grid-row: 4 / 12; }
  .gridRow5to0_min_l-01 { grid-row: 5 / 0; }
  .gridRow5to1_min_l-01 { grid-row: 5 / 1; }
  .gridRow5to2_min_l-01 { grid-row: 5 / 2; }
  .gridRow5to3_min_l-01 { grid-row: 5 / 3; }
  .gridRow5to4_min_l-01 { grid-row: 5 / 4; }
  .gridRow5to5_min_l-01 { grid-row: 5 / 5; }
  .gridRow5to6_min_l-01 { grid-row: 5 / 6; }
  .gridRow5to7_min_l-01 { grid-row: 5 / 7; }
  .gridRow5to8_min_l-01 { grid-row: 5 / 8; }
  .gridRow5to9_min_l-01 { grid-row: 5 / 9; }
  .gridRow5to10_min_l-01 { grid-row: 5 / 10; }
  .gridRow5to11_min_l-01 { grid-row: 5 / 11; }
  .gridRow5to12_min_l-01 { grid-row: 5 / 12; }
  .gridRow6to0_min_l-01 { grid-row: 6 / 0; }
  .gridRow6to1_min_l-01 { grid-row: 6 / 1; }
  .gridRow6to2_min_l-01 { grid-row: 6 / 2; }
  .gridRow6to3_min_l-01 { grid-row: 6 / 3; }
  .gridRow6to4_min_l-01 { grid-row: 6 / 4; }
  .gridRow6to5_min_l-01 { grid-row: 6 / 5; }
  .gridRow6to6_min_l-01 { grid-row: 6 / 6; }
  .gridRow6to7_min_l-01 { grid-row: 6 / 7; }
  .gridRow6to8_min_l-01 { grid-row: 6 / 8; }
  .gridRow6to9_min_l-01 { grid-row: 6 / 9; }
  .gridRow6to10_min_l-01 { grid-row: 6 / 10; }
  .gridRow6to11_min_l-01 { grid-row: 6 / 11; }
  .gridRow6to12_min_l-01 { grid-row: 6 / 12; }
  .gridRow7to0_min_l-01 { grid-row: 7 / 0; }
  .gridRow7to1_min_l-01 { grid-row: 7 / 1; }
  .gridRow7to2_min_l-01 { grid-row: 7 / 2; }
  .gridRow7to3_min_l-01 { grid-row: 7 / 3; }
  .gridRow7to4_min_l-01 { grid-row: 7 / 4; }
  .gridRow7to5_min_l-01 { grid-row: 7 / 5; }
  .gridRow7to6_min_l-01 { grid-row: 7 / 6; }
  .gridRow7to7_min_l-01 { grid-row: 7 / 7; }
  .gridRow7to8_min_l-01 { grid-row: 7 / 8; }
  .gridRow7to9_min_l-01 { grid-row: 7 / 9; }
  .gridRow7to10_min_l-01 { grid-row: 7 / 10; }
  .gridRow7to11_min_l-01 { grid-row: 7 / 11; }
  .gridRow7to12_min_l-01 { grid-row: 7 / 12; }
  .gridRow8to0_min_l-01 { grid-row: 8 / 0; }
  .gridRow8to1_min_l-01 { grid-row: 8 / 1; }
  .gridRow8to2_min_l-01 { grid-row: 8 / 2; }
  .gridRow8to3_min_l-01 { grid-row: 8 / 3; }
  .gridRow8to4_min_l-01 { grid-row: 8 / 4; }
  .gridRow8to5_min_l-01 { grid-row: 8 / 5; }
  .gridRow8to6_min_l-01 { grid-row: 8 / 6; }
  .gridRow8to7_min_l-01 { grid-row: 8 / 7; }
  .gridRow8to8_min_l-01 { grid-row: 8 / 8; }
  .gridRow8to9_min_l-01 { grid-row: 8 / 9; }
  .gridRow8to10_min_l-01 { grid-row: 8 / 10; }
  .gridRow8to11_min_l-01 { grid-row: 8 / 11; }
  .gridRow8to12_min_l-01 { grid-row: 8 / 12; }
  .gridRow9to0_min_l-01 { grid-row: 9 / 0; }
  .gridRow9to1_min_l-01 { grid-row: 9 / 1; }
  .gridRow9to2_min_l-01 { grid-row: 9 / 2; }
  .gridRow9to3_min_l-01 { grid-row: 9 / 3; }
  .gridRow9to4_min_l-01 { grid-row: 9 / 4; }
  .gridRow9to5_min_l-01 { grid-row: 9 / 5; }
  .gridRow9to6_min_l-01 { grid-row: 9 / 6; }
  .gridRow9to7_min_l-01 { grid-row: 9 / 7; }
  .gridRow9to8_min_l-01 { grid-row: 9 / 8; }
  .gridRow9to9_min_l-01 { grid-row: 9 / 9; }
  .gridRow9to10_min_l-01 { grid-row: 9 / 10; }
  .gridRow9to11_min_l-01 { grid-row: 9 / 11; }
  .gridRow9to12_min_l-01 { grid-row: 9 / 12; }
  .gridRow10to0_min_l-01 { grid-row: 10 / 0; }
  .gridRow10to1_min_l-01 { grid-row: 10 / 1; }
  .gridRow10to2_min_l-01 { grid-row: 10 / 2; }
  .gridRow10to3_min_l-01 { grid-row: 10 / 3; }
  .gridRow10to4_min_l-01 { grid-row: 10 / 4; }
  .gridRow10to5_min_l-01 { grid-row: 10 / 5; }
  .gridRow10to6_min_l-01 { grid-row: 10 / 6; }
  .gridRow10to7_min_l-01 { grid-row: 10 / 7; }
  .gridRow10to8_min_l-01 { grid-row: 10 / 8; }
  .gridRow10to9_min_l-01 { grid-row: 10 / 9; }
  .gridRow10to10_min_l-01 { grid-row: 10 / 10; }
  .gridRow10to11_min_l-01 { grid-row: 10 / 11; }
  .gridRow10to12_min_l-01 { grid-row: 10 / 12; }
  .gridRow11to0_min_l-01 { grid-row: 11 / 0; }
  .gridRow11to1_min_l-01 { grid-row: 11 / 1; }
  .gridRow11to2_min_l-01 { grid-row: 11 / 2; }
  .gridRow11to3_min_l-01 { grid-row: 11 / 3; }
  .gridRow11to4_min_l-01 { grid-row: 11 / 4; }
  .gridRow11to5_min_l-01 { grid-row: 11 / 5; }
  .gridRow11to6_min_l-01 { grid-row: 11 / 6; }
  .gridRow11to7_min_l-01 { grid-row: 11 / 7; }
  .gridRow11to8_min_l-01 { grid-row: 11 / 8; }
  .gridRow11to9_min_l-01 { grid-row: 11 / 9; }
  .gridRow11to10_min_l-01 { grid-row: 11 / 10; }
  .gridRow11to11_min_l-01 { grid-row: 11 / 11; }
  .gridRow11to12_min_l-01 { grid-row: 11 / 12; }
  .gridRow12to0_min_l-01 { grid-row: 12 / 0; }
  .gridRow12to1_min_l-01 { grid-row: 12 / 1; }
  .gridRow12to2_min_l-01 { grid-row: 12 / 2; }
  .gridRow12to3_min_l-01 { grid-row: 12 / 3; }
  .gridRow12to4_min_l-01 { grid-row: 12 / 4; }
  .gridRow12to5_min_l-01 { grid-row: 12 / 5; }
  .gridRow12to6_min_l-01 { grid-row: 12 / 6; }
  .gridRow12to7_min_l-01 { grid-row: 12 / 7; }
  .gridRow12to8_min_l-01 { grid-row: 12 / 8; }
  .gridRow12to9_min_l-01 { grid-row: 12 / 9; }
  .gridRow12to10_min_l-01 { grid-row: 12 / 10; }
  .gridRow12to11_min_l-01 { grid-row: 12 / 11; }
  .gridRow12to12_min_l-01 { grid-row: 12 / 12; }
  .gridRowSpan0_min_l-01 { grid-row: auto / span 0; }
  .gridRowSpan1_min_l-01 { grid-row: auto / span 1; }
  .gridRowSpan2_min_l-01 { grid-row: auto / span 2; }
  .gridRowSpan3_min_l-01 { grid-row: auto / span 3; }
  .gridRowSpan4_min_l-01 { grid-row: auto / span 4; }
  .gridRowSpan5_min_l-01 { grid-row: auto / span 5; }
  .gridRowSpan6_min_l-01 { grid-row: auto / span 6; }
  .gridRowSpan7_min_l-01 { grid-row: auto / span 7; }
  .gridRowSpan8_min_l-01 { grid-row: auto / span 8; }
  .gridRowSpan9_min_l-01 { grid-row: auto / span 9; }
  .gridRowSpan10_min_l-01 { grid-row: auto / span 10; }
  .gridColumn0_min_l-01 { grid-column: 0; }
  .gridColumn1_min_l-01 { grid-column: 1; }
  .gridColumn2_min_l-01 { grid-column: 2; }
  .gridColumn3_min_l-01 { grid-column: 3; }
  .gridColumn4_min_l-01 { grid-column: 4; }
  .gridColumn5_min_l-01 { grid-column: 5; }
  .gridColumn6_min_l-01 { grid-column: 6; }
  .gridColumn7_min_l-01 { grid-column: 7; }
  .gridColumn8_min_l-01 { grid-column: 8; }
  .gridColumn9_min_l-01 { grid-column: 9; }
  .gridColumn10_min_l-01 { grid-column: 10; }
  .gridColumn11_min_l-01 { grid-column: 11; }
  .gridColumn12_min_l-01 { grid-column: 12; }
  .gridColumn0to0_min_l-01 { grid-column: 0 / 0; }
  .gridColumn0to1_min_l-01 { grid-column: 0 / 1; }
  .gridColumn0to2_min_l-01 { grid-column: 0 / 2; }
  .gridColumn0to3_min_l-01 { grid-column: 0 / 3; }
  .gridColumn0to4_min_l-01 { grid-column: 0 / 4; }
  .gridColumn0to5_min_l-01 { grid-column: 0 / 5; }
  .gridColumn0to6_min_l-01 { grid-column: 0 / 6; }
  .gridColumn0to7_min_l-01 { grid-column: 0 / 7; }
  .gridColumn0to8_min_l-01 { grid-column: 0 / 8; }
  .gridColumn0to9_min_l-01 { grid-column: 0 / 9; }
  .gridColumn0to10_min_l-01 { grid-column: 0 / 10; }
  .gridColumn0to11_min_l-01 { grid-column: 0 / 11; }
  .gridColumn0to12_min_l-01 { grid-column: 0 / 12; }
  .gridColumn1to0_min_l-01 { grid-column: 1 / 0; }
  .gridColumn1to1_min_l-01 { grid-column: 1 / 1; }
  .gridColumn1to2_min_l-01 { grid-column: 1 / 2; }
  .gridColumn1to3_min_l-01 { grid-column: 1 / 3; }
  .gridColumn1to4_min_l-01 { grid-column: 1 / 4; }
  .gridColumn1to5_min_l-01 { grid-column: 1 / 5; }
  .gridColumn1to6_min_l-01 { grid-column: 1 / 6; }
  .gridColumn1to7_min_l-01 { grid-column: 1 / 7; }
  .gridColumn1to8_min_l-01 { grid-column: 1 / 8; }
  .gridColumn1to9_min_l-01 { grid-column: 1 / 9; }
  .gridColumn1to10_min_l-01 { grid-column: 1 / 10; }
  .gridColumn1to11_min_l-01 { grid-column: 1 / 11; }
  .gridColumn1to12_min_l-01 { grid-column: 1 / 12; }
  .gridColumn2to0_min_l-01 { grid-column: 2 / 0; }
  .gridColumn2to1_min_l-01 { grid-column: 2 / 1; }
  .gridColumn2to2_min_l-01 { grid-column: 2 / 2; }
  .gridColumn2to3_min_l-01 { grid-column: 2 / 3; }
  .gridColumn2to4_min_l-01 { grid-column: 2 / 4; }
  .gridColumn2to5_min_l-01 { grid-column: 2 / 5; }
  .gridColumn2to6_min_l-01 { grid-column: 2 / 6; }
  .gridColumn2to7_min_l-01 { grid-column: 2 / 7; }
  .gridColumn2to8_min_l-01 { grid-column: 2 / 8; }
  .gridColumn2to9_min_l-01 { grid-column: 2 / 9; }
  .gridColumn2to10_min_l-01 { grid-column: 2 / 10; }
  .gridColumn2to11_min_l-01 { grid-column: 2 / 11; }
  .gridColumn2to12_min_l-01 { grid-column: 2 / 12; }
  .gridColumn3to0_min_l-01 { grid-column: 3 / 0; }
  .gridColumn3to1_min_l-01 { grid-column: 3 / 1; }
  .gridColumn3to2_min_l-01 { grid-column: 3 / 2; }
  .gridColumn3to3_min_l-01 { grid-column: 3 / 3; }
  .gridColumn3to4_min_l-01 { grid-column: 3 / 4; }
  .gridColumn3to5_min_l-01 { grid-column: 3 / 5; }
  .gridColumn3to6_min_l-01 { grid-column: 3 / 6; }
  .gridColumn3to7_min_l-01 { grid-column: 3 / 7; }
  .gridColumn3to8_min_l-01 { grid-column: 3 / 8; }
  .gridColumn3to9_min_l-01 { grid-column: 3 / 9; }
  .gridColumn3to10_min_l-01 { grid-column: 3 / 10; }
  .gridColumn3to11_min_l-01 { grid-column: 3 / 11; }
  .gridColumn3to12_min_l-01 { grid-column: 3 / 12; }
  .gridColumn4to0_min_l-01 { grid-column: 4 / 0; }
  .gridColumn4to1_min_l-01 { grid-column: 4 / 1; }
  .gridColumn4to2_min_l-01 { grid-column: 4 / 2; }
  .gridColumn4to3_min_l-01 { grid-column: 4 / 3; }
  .gridColumn4to4_min_l-01 { grid-column: 4 / 4; }
  .gridColumn4to5_min_l-01 { grid-column: 4 / 5; }
  .gridColumn4to6_min_l-01 { grid-column: 4 / 6; }
  .gridColumn4to7_min_l-01 { grid-column: 4 / 7; }
  .gridColumn4to8_min_l-01 { grid-column: 4 / 8; }
  .gridColumn4to9_min_l-01 { grid-column: 4 / 9; }
  .gridColumn4to10_min_l-01 { grid-column: 4 / 10; }
  .gridColumn4to11_min_l-01 { grid-column: 4 / 11; }
  .gridColumn4to12_min_l-01 { grid-column: 4 / 12; }
  .gridColumn5to0_min_l-01 { grid-column: 5 / 0; }
  .gridColumn5to1_min_l-01 { grid-column: 5 / 1; }
  .gridColumn5to2_min_l-01 { grid-column: 5 / 2; }
  .gridColumn5to3_min_l-01 { grid-column: 5 / 3; }
  .gridColumn5to4_min_l-01 { grid-column: 5 / 4; }
  .gridColumn5to5_min_l-01 { grid-column: 5 / 5; }
  .gridColumn5to6_min_l-01 { grid-column: 5 / 6; }
  .gridColumn5to7_min_l-01 { grid-column: 5 / 7; }
  .gridColumn5to8_min_l-01 { grid-column: 5 / 8; }
  .gridColumn5to9_min_l-01 { grid-column: 5 / 9; }
  .gridColumn5to10_min_l-01 { grid-column: 5 / 10; }
  .gridColumn5to11_min_l-01 { grid-column: 5 / 11; }
  .gridColumn5to12_min_l-01 { grid-column: 5 / 12; }
  .gridColumn6to0_min_l-01 { grid-column: 6 / 0; }
  .gridColumn6to1_min_l-01 { grid-column: 6 / 1; }
  .gridColumn6to2_min_l-01 { grid-column: 6 / 2; }
  .gridColumn6to3_min_l-01 { grid-column: 6 / 3; }
  .gridColumn6to4_min_l-01 { grid-column: 6 / 4; }
  .gridColumn6to5_min_l-01 { grid-column: 6 / 5; }
  .gridColumn6to6_min_l-01 { grid-column: 6 / 6; }
  .gridColumn6to7_min_l-01 { grid-column: 6 / 7; }
  .gridColumn6to8_min_l-01 { grid-column: 6 / 8; }
  .gridColumn6to9_min_l-01 { grid-column: 6 / 9; }
  .gridColumn6to10_min_l-01 { grid-column: 6 / 10; }
  .gridColumn6to11_min_l-01 { grid-column: 6 / 11; }
  .gridColumn6to12_min_l-01 { grid-column: 6 / 12; }
  .gridColumn7to0_min_l-01 { grid-column: 7 / 0; }
  .gridColumn7to1_min_l-01 { grid-column: 7 / 1; }
  .gridColumn7to2_min_l-01 { grid-column: 7 / 2; }
  .gridColumn7to3_min_l-01 { grid-column: 7 / 3; }
  .gridColumn7to4_min_l-01 { grid-column: 7 / 4; }
  .gridColumn7to5_min_l-01 { grid-column: 7 / 5; }
  .gridColumn7to6_min_l-01 { grid-column: 7 / 6; }
  .gridColumn7to7_min_l-01 { grid-column: 7 / 7; }
  .gridColumn7to8_min_l-01 { grid-column: 7 / 8; }
  .gridColumn7to9_min_l-01 { grid-column: 7 / 9; }
  .gridColumn7to10_min_l-01 { grid-column: 7 / 10; }
  .gridColumn7to11_min_l-01 { grid-column: 7 / 11; }
  .gridColumn7to12_min_l-01 { grid-column: 7 / 12; }
  .gridColumn8to0_min_l-01 { grid-column: 8 / 0; }
  .gridColumn8to1_min_l-01 { grid-column: 8 / 1; }
  .gridColumn8to2_min_l-01 { grid-column: 8 / 2; }
  .gridColumn8to3_min_l-01 { grid-column: 8 / 3; }
  .gridColumn8to4_min_l-01 { grid-column: 8 / 4; }
  .gridColumn8to5_min_l-01 { grid-column: 8 / 5; }
  .gridColumn8to6_min_l-01 { grid-column: 8 / 6; }
  .gridColumn8to7_min_l-01 { grid-column: 8 / 7; }
  .gridColumn8to8_min_l-01 { grid-column: 8 / 8; }
  .gridColumn8to9_min_l-01 { grid-column: 8 / 9; }
  .gridColumn8to10_min_l-01 { grid-column: 8 / 10; }
  .gridColumn8to11_min_l-01 { grid-column: 8 / 11; }
  .gridColumn8to12_min_l-01 { grid-column: 8 / 12; }
  .gridColumn9to0_min_l-01 { grid-column: 9 / 0; }
  .gridColumn9to1_min_l-01 { grid-column: 9 / 1; }
  .gridColumn9to2_min_l-01 { grid-column: 9 / 2; }
  .gridColumn9to3_min_l-01 { grid-column: 9 / 3; }
  .gridColumn9to4_min_l-01 { grid-column: 9 / 4; }
  .gridColumn9to5_min_l-01 { grid-column: 9 / 5; }
  .gridColumn9to6_min_l-01 { grid-column: 9 / 6; }
  .gridColumn9to7_min_l-01 { grid-column: 9 / 7; }
  .gridColumn9to8_min_l-01 { grid-column: 9 / 8; }
  .gridColumn9to9_min_l-01 { grid-column: 9 / 9; }
  .gridColumn9to10_min_l-01 { grid-column: 9 / 10; }
  .gridColumn9to11_min_l-01 { grid-column: 9 / 11; }
  .gridColumn9to12_min_l-01 { grid-column: 9 / 12; }
  .gridColumn10to0_min_l-01 { grid-column: 10 / 0; }
  .gridColumn10to1_min_l-01 { grid-column: 10 / 1; }
  .gridColumn10to2_min_l-01 { grid-column: 10 / 2; }
  .gridColumn10to3_min_l-01 { grid-column: 10 / 3; }
  .gridColumn10to4_min_l-01 { grid-column: 10 / 4; }
  .gridColumn10to5_min_l-01 { grid-column: 10 / 5; }
  .gridColumn10to6_min_l-01 { grid-column: 10 / 6; }
  .gridColumn10to7_min_l-01 { grid-column: 10 / 7; }
  .gridColumn10to8_min_l-01 { grid-column: 10 / 8; }
  .gridColumn10to9_min_l-01 { grid-column: 10 / 9; }
  .gridColumn10to10_min_l-01 { grid-column: 10 / 10; }
  .gridColumn10to11_min_l-01 { grid-column: 10 / 11; }
  .gridColumn10to12_min_l-01 { grid-column: 10 / 12; }
  .gridColumn11to0_min_l-01 { grid-column: 11 / 0; }
  .gridColumn11to1_min_l-01 { grid-column: 11 / 1; }
  .gridColumn11to2_min_l-01 { grid-column: 11 / 2; }
  .gridColumn11to3_min_l-01 { grid-column: 11 / 3; }
  .gridColumn11to4_min_l-01 { grid-column: 11 / 4; }
  .gridColumn11to5_min_l-01 { grid-column: 11 / 5; }
  .gridColumn11to6_min_l-01 { grid-column: 11 / 6; }
  .gridColumn11to7_min_l-01 { grid-column: 11 / 7; }
  .gridColumn11to8_min_l-01 { grid-column: 11 / 8; }
  .gridColumn11to9_min_l-01 { grid-column: 11 / 9; }
  .gridColumn11to10_min_l-01 { grid-column: 11 / 10; }
  .gridColumn11to11_min_l-01 { grid-column: 11 / 11; }
  .gridColumn11to12_min_l-01 { grid-column: 11 / 12; }
  .gridColumn12to0_min_l-01 { grid-column: 12 / 0; }
  .gridColumn12to1_min_l-01 { grid-column: 12 / 1; }
  .gridColumn12to2_min_l-01 { grid-column: 12 / 2; }
  .gridColumn12to3_min_l-01 { grid-column: 12 / 3; }
  .gridColumn12to4_min_l-01 { grid-column: 12 / 4; }
  .gridColumn12to5_min_l-01 { grid-column: 12 / 5; }
  .gridColumn12to6_min_l-01 { grid-column: 12 / 6; }
  .gridColumn12to7_min_l-01 { grid-column: 12 / 7; }
  .gridColumn12to8_min_l-01 { grid-column: 12 / 8; }
  .gridColumn12to9_min_l-01 { grid-column: 12 / 9; }
  .gridColumn12to10_min_l-01 { grid-column: 12 / 10; }
  .gridColumn12to11_min_l-01 { grid-column: 12 / 11; }
  .gridColumn12to12_min_l-01 { grid-column: 12 / 12; }
  .gridColumnSpan0_min_l-01 { grid-column: auto / span 0; }
  .gridColumnSpan1_min_l-01 { grid-column: auto / span 1; }
  .gridColumnSpan2_min_l-01 { grid-column: auto / span 2; }
  .gridColumnSpan3_min_l-01 { grid-column: auto / span 3; }
  .gridColumnSpan4_min_l-01 { grid-column: auto / span 4; }
  .gridColumnSpan5_min_l-01 { grid-column: auto / span 5; }
  .gridColumnSpan6_min_l-01 { grid-column: auto / span 6; }
  .gridColumnSpan7_min_l-01 { grid-column: auto / span 7; }
  .gridColumnSpan8_min_l-01 { grid-column: auto / span 8; }
  .gridColumnSpan9_min_l-01 { grid-column: auto / span 9; }
  .gridColumnSpan10_min_l-01 { grid-column: auto / span 10; }
  .w1_min_l-01 { width: var(--rem1); }
  .w2_min_l-01 { width: var(--rem2); }
  .w3_min_l-01 { width: var(--rem3); }
  .w4_min_l-01 { width: var(--rem4); }
  .w5_min_l-01 { width: var(--rem5); }
  .w6_min_l-01 { width: var(--rem6); }
  .w7_min_l-01 { width: var(--rem7); }
  .w1px_min_l-01 { width: var(--px1); }
  .w2px_min_l-01 { width: var(--px2); }
  .w3px_min_l-01 { width: var(--px3); }
  .w4px_min_l-01 { width: var(--px4); }
  .w5px_min_l-01 { width: var(--px5); }
  .w6px_min_l-01 { width: var(--px6); }
  .w7px_min_l-01 { width: var(--px7); }
  .w8px_min_l-01 { width: var(--px8); }
  .w9px_min_l-01 { width: var(--px9); }
  .w10px_min_l-01 { width: var(--px10); }
  .w11px_min_l-01 { width: var(--px11); }
  .w12px_min_l-01 { width: var(--px12); }
  .w13px_min_l-01 { width: var(--px13); }
  .w14px_min_l-01 { width: var(--px14); }
  .w15px_min_l-01 { width: var(--px15); }
  .w16px_min_l-01 { width: var(--px16); }
  .w17px_min_l-01 { width: var(--px17); }
  .w18px_min_l-01 { width: var(--px18); }
  .w19px_min_l-01 { width: var(--px19); }
  .w20px_min_l-01 { width: var(--px20); }
  .w1p_min_l-01 { width: 1%; }
  .w2p_min_l-01 { width: 2%; }
  .w3p_min_l-01 { width: 3%; }
  .w4p_min_l-01 { width: 4%; }
  .w5p_min_l-01 { width: 5%; }
  .w6p_min_l-01 { width: 6%; }
  .w7p_min_l-01 { width: 7%; }
  .w8p_min_l-01 { width: 8%; }
  .w9p_min_l-01 { width: 9%; }
  .w10p_min_l-01 { width: 10%; }
  .w11p_min_l-01 { width: 11%; }
  .w12p_min_l-01 { width: 12%; }
  .w13p_min_l-01 { width: 13%; }
  .w14p_min_l-01 { width: 14%; }
  .w15p_min_l-01 { width: 15%; }
  .w16p_min_l-01 { width: 16%; }
  .w17p_min_l-01 { width: 17%; }
  .w18p_min_l-01 { width: 18%; }
  .w19p_min_l-01 { width: 19%; }
  .w20p_min_l-01 { width: 20%; }
  .w21p_min_l-01 { width: 21%; }
  .w22p_min_l-01 { width: 22%; }
  .w23p_min_l-01 { width: 23%; }
  .w24p_min_l-01 { width: 24%; }
  .w25p_min_l-01 { width: 25%; }
  .w26p_min_l-01 { width: 26%; }
  .w27p_min_l-01 { width: 27%; }
  .w28p_min_l-01 { width: 28%; }
  .w29p_min_l-01 { width: 29%; }
  .w30p_min_l-01 { width: 30%; }
  .w31p_min_l-01 { width: 31%; }
  .w32p_min_l-01 { width: 32%; }
  .w33p_min_l-01 { width: 33%; }
  .w34p_min_l-01 { width: 34%; }
  .w35p_min_l-01 { width: 35%; }
  .w36p_min_l-01 { width: 36%; }
  .w37p_min_l-01 { width: 37%; }
  .w38p_min_l-01 { width: 38%; }
  .w39p_min_l-01 { width: 39%; }
  .w40p_min_l-01 { width: 40%; }
  .w41p_min_l-01 { width: 41%; }
  .w42p_min_l-01 { width: 42%; }
  .w43p_min_l-01 { width: 43%; }
  .w44p_min_l-01 { width: 44%; }
  .w45p_min_l-01 { width: 45%; }
  .w46p_min_l-01 { width: 46%; }
  .w47p_min_l-01 { width: 47%; }
  .w48p_min_l-01 { width: 48%; }
  .w49p_min_l-01 { width: 49%; }
  .w50p_min_l-01 { width: 50%; }
  .w51p_min_l-01 { width: 51%; }
  .w52p_min_l-01 { width: 52%; }
  .w53p_min_l-01 { width: 53%; }
  .w54p_min_l-01 { width: 54%; }
  .w55p_min_l-01 { width: 55%; }
  .w56p_min_l-01 { width: 56%; }
  .w57p_min_l-01 { width: 57%; }
  .w58p_min_l-01 { width: 58%; }
  .w59p_min_l-01 { width: 59%; }
  .w60p_min_l-01 { width: 60%; }
  .w61p_min_l-01 { width: 61%; }
  .w62p_min_l-01 { width: 62%; }
  .w63p_min_l-01 { width: 63%; }
  .w64p_min_l-01 { width: 64%; }
  .w65p_min_l-01 { width: 65%; }
  .w66p_min_l-01 { width: 66%; }
  .w67p_min_l-01 { width: 67%; }
  .w68p_min_l-01 { width: 68%; }
  .w69p_min_l-01 { width: 69%; }
  .w70p_min_l-01 { width: 70%; }
  .w71p_min_l-01 { width: 71%; }
  .w72p_min_l-01 { width: 72%; }
  .w73p_min_l-01 { width: 73%; }
  .w74p_min_l-01 { width: 74%; }
  .w75p_min_l-01 { width: 75%; }
  .w76p_min_l-01 { width: 76%; }
  .w77p_min_l-01 { width: 77%; }
  .w78p_min_l-01 { width: 78%; }
  .w79p_min_l-01 { width: 79%; }
  .w80p_min_l-01 { width: 80%; }
  .w81p_min_l-01 { width: 81%; }
  .w82p_min_l-01 { width: 82%; }
  .w83p_min_l-01 { width: 83%; }
  .w84p_min_l-01 { width: 84%; }
  .w85p_min_l-01 { width: 85%; }
  .w86p_min_l-01 { width: 86%; }
  .w87p_min_l-01 { width: 87%; }
  .w88p_min_l-01 { width: 88%; }
  .w89p_min_l-01 { width: 89%; }
  .w90p_min_l-01 { width: 90%; }
  .w91p_min_l-01 { width: 91%; }
  .w92p_min_l-01 { width: 92%; }
  .w93p_min_l-01 { width: 93%; }
  .w94p_min_l-01 { width: 94%; }
  .w95p_min_l-01 { width: 95%; }
  .w96p_min_l-01 { width: 96%; }
  .w97p_min_l-01 { width: 97%; }
  .w98p_min_l-01 { width: 98%; }
  .w99p_min_l-01 { width: 99%; }
  .w100p_min_l-01 { width: 100%; }
  .minW1_min_l-01 { min-width: var(--rem1); }
  .minW2_min_l-01 { min-width: var(--rem2); }
  .minW3_min_l-01 { min-width: var(--rem3); }
  .minW4_min_l-01 { min-width: var(--rem4); }
  .minW5_min_l-01 { min-width: var(--rem5); }
  .minW6_min_l-01 { min-width: var(--rem6); }
  .minW7_min_l-01 { min-width: var(--rem7); }
  .minW1px_min_l-01 { min-width: var(--px1); }
  .minW2px_min_l-01 { min-width: var(--px2); }
  .minW3px_min_l-01 { min-width: var(--px3); }
  .minW4px_min_l-01 { min-width: var(--px4); }
  .minW5px_min_l-01 { min-width: var(--px5); }
  .minW6px_min_l-01 { min-width: var(--px6); }
  .minW7px_min_l-01 { min-width: var(--px7); }
  .minW8px_min_l-01 { min-width: var(--px8); }
  .minW9px_min_l-01 { min-width: var(--px9); }
  .minW10px_min_l-01 { min-width: var(--px10); }
  .minW11px_min_l-01 { min-width: var(--px11); }
  .minW12px_min_l-01 { min-width: var(--px12); }
  .minW13px_min_l-01 { min-width: var(--px13); }
  .minW14px_min_l-01 { min-width: var(--px14); }
  .minW15px_min_l-01 { min-width: var(--px15); }
  .minW16px_min_l-01 { min-width: var(--px16); }
  .minW17px_min_l-01 { min-width: var(--px17); }
  .minW18px_min_l-01 { min-width: var(--px18); }
  .minW19px_min_l-01 { min-width: var(--px19); }
  .minW20px_min_l-01 { min-width: var(--px20); }
  .minW5p_min_l-01 { min-width: 5%; }
  .minW10p_min_l-01 { min-width: 10%; }
  .minW15p_min_l-01 { min-width: 15%; }
  .minW20p_min_l-01 { min-width: 20%; }
  .minW25p_min_l-01 { min-width: 25%; }
  .minW30p_min_l-01 { min-width: 30%; }
  .minW35p_min_l-01 { min-width: 35%; }
  .minW40p_min_l-01 { min-width: 40%; }
  .minW45p_min_l-01 { min-width: 45%; }
  .minW50p_min_l-01 { min-width: 50%; }
  .minW55p_min_l-01 { min-width: 55%; }
  .minW60p_min_l-01 { min-width: 60%; }
  .minW65p_min_l-01 { min-width: 65%; }
  .minW70p_min_l-01 { min-width: 70%; }
  .minW75p_min_l-01 { min-width: 75%; }
  .minW80p_min_l-01 { min-width: 80%; }
  .minW85p_min_l-01 { min-width: 85%; }
  .minW90p_min_l-01 { min-width: 90%; }
  .minW95p_min_l-01 { min-width: 95%; }
  .minW100p_min_l-01 { min-width: 100%; }
  .maxW1_min_l-01 { max-width: var(--rem1); }
  .maxW2_min_l-01 { max-width: var(--rem2); }
  .maxW3_min_l-01 { max-width: var(--rem3); }
  .maxW4_min_l-01 { max-width: var(--rem4); }
  .maxW5_min_l-01 { max-width: var(--rem5); }
  .maxW6_min_l-01 { max-width: var(--rem6); }
  .maxW7_min_l-01 { max-width: var(--rem7); }
  .maxW1px_min_l-01 { max-width: var(--px1); }
  .maxW2px_min_l-01 { max-width: var(--px2); }
  .maxW3px_min_l-01 { max-width: var(--px3); }
  .maxW4px_min_l-01 { max-width: var(--px4); }
  .maxW5px_min_l-01 { max-width: var(--px5); }
  .maxW6px_min_l-01 { max-width: var(--px6); }
  .maxW7px_min_l-01 { max-width: var(--px7); }
  .maxW8px_min_l-01 { max-width: var(--px8); }
  .maxW9px_min_l-01 { max-width: var(--px9); }
  .maxW10px_min_l-01 { max-width: var(--px10); }
  .maxW11px_min_l-01 { max-width: var(--px11); }
  .maxW12px_min_l-01 { max-width: var(--px12); }
  .maxW13px_min_l-01 { max-width: var(--px13); }
  .maxW14px_min_l-01 { max-width: var(--px14); }
  .maxW15px_min_l-01 { max-width: var(--px15); }
  .maxW16px_min_l-01 { max-width: var(--px16); }
  .maxW17px_min_l-01 { max-width: var(--px17); }
  .maxW18px_min_l-01 { max-width: var(--px18); }
  .maxW19px_min_l-01 { max-width: var(--px19); }
  .maxW20px_min_l-01 { max-width: var(--px20); }
  .maxW5p_min_l-01 { max-width: 5%; }
  .maxW10p_min_l-01 { max-width: 10%; }
  .maxW15p_min_l-01 { max-width: 15%; }
  .maxW20p_min_l-01 { max-width: 20%; }
  .maxW25p_min_l-01 { max-width: 25%; }
  .maxW30p_min_l-01 { max-width: 30%; }
  .maxW35p_min_l-01 { max-width: 35%; }
  .maxW40p_min_l-01 { max-width: 40%; }
  .maxW45p_min_l-01 { max-width: 45%; }
  .maxW50p_min_l-01 { max-width: 50%; }
  .maxW55p_min_l-01 { max-width: 55%; }
  .maxW60p_min_l-01 { max-width: 60%; }
  .maxW65p_min_l-01 { max-width: 65%; }
  .maxW70p_min_l-01 { max-width: 70%; }
  .maxW75p_min_l-01 { max-width: 75%; }
  .maxW80p_min_l-01 { max-width: 80%; }
  .maxW85p_min_l-01 { max-width: 85%; }
  .maxW90p_min_l-01 { max-width: 90%; }
  .maxW95p_min_l-01 { max-width: 95%; }
  .maxW100p_min_l-01 { max-width: 100%; }
  .h1_min_l-01 { height: var(--rem1); }
  .h2_min_l-01 { height: var(--rem2); }
  .h3_min_l-01 { height: var(--rem3); }
  .h4_min_l-01 { height: var(--rem4); }
  .h5_min_l-01 { height: var(--rem5); }
  .h6_min_l-01 { height: var(--rem6); }
  .h7_min_l-01 { height: var(--rem7); }
  .h1px_min_l-01 { height: var(--px1); }
  .h2px_min_l-01 { height: var(--px2); }
  .h3px_min_l-01 { height: var(--px3); }
  .h4px_min_l-01 { height: var(--px4); }
  .h5px_min_l-01 { height: var(--px5); }
  .h6px_min_l-01 { height: var(--px6); }
  .h7px_min_l-01 { height: var(--px7); }
  .h8px_min_l-01 { height: var(--px8); }
  .h9px_min_l-01 { height: var(--px9); }
  .h10px_min_l-01 { height: var(--px10); }
  .h11px_min_l-01 { height: var(--px11); }
  .h12px_min_l-01 { height: var(--px12); }
  .h13px_min_l-01 { height: var(--px13); }
  .h14px_min_l-01 { height: var(--px14); }
  .h15px_min_l-01 { height: var(--px15); }
  .h16px_min_l-01 { height: var(--px16); }
  .h17px_min_l-01 { height: var(--px17); }
  .h18px_min_l-01 { height: var(--px18); }
  .h19px_min_l-01 { height: var(--px19); }
  .h20px_min_l-01 { height: var(--px20); }
  .h5p_min_l-01 { height: 5%; }
  .h10p_min_l-01 { height: 10%; }
  .h15p_min_l-01 { height: 15%; }
  .h20p_min_l-01 { height: 20%; }
  .h25p_min_l-01 { height: 25%; }
  .h30p_min_l-01 { height: 30%; }
  .h35p_min_l-01 { height: 35%; }
  .h40p_min_l-01 { height: 40%; }
  .h45p_min_l-01 { height: 45%; }
  .h50p_min_l-01 { height: 50%; }
  .h55p_min_l-01 { height: 55%; }
  .h60p_min_l-01 { height: 60%; }
  .h65p_min_l-01 { height: 65%; }
  .h70p_min_l-01 { height: 70%; }
  .h75p_min_l-01 { height: 75%; }
  .h80p_min_l-01 { height: 80%; }
  .h85p_min_l-01 { height: 85%; }
  .h90p_min_l-01 { height: 90%; }
  .h95p_min_l-01 { height: 95%; }
  .h100p_min_l-01 { height: 100%; }
  .minH1_min_l-01 { min-height: var(--rem1); }
  .minH2_min_l-01 { min-height: var(--rem2); }
  .minH3_min_l-01 { min-height: var(--rem3); }
  .minH4_min_l-01 { min-height: var(--rem4); }
  .minH5_min_l-01 { min-height: var(--rem5); }
  .minH6_min_l-01 { min-height: var(--rem6); }
  .minH7_min_l-01 { min-height: var(--rem7); }
  .minH1px_min_l-01 { min-height: var(--px1); }
  .minH2px_min_l-01 { min-height: var(--px2); }
  .minH3px_min_l-01 { min-height: var(--px3); }
  .minH4px_min_l-01 { min-height: var(--px4); }
  .minH5px_min_l-01 { min-height: var(--px5); }
  .minH6px_min_l-01 { min-height: var(--px6); }
  .minH7px_min_l-01 { min-height: var(--px7); }
  .minH8px_min_l-01 { min-height: var(--px8); }
  .minH9px_min_l-01 { min-height: var(--px9); }
  .minH10px_min_l-01 { min-height: var(--px10); }
  .minH11px_min_l-01 { min-height: var(--px11); }
  .minH12px_min_l-01 { min-height: var(--px12); }
  .minH13px_min_l-01 { min-height: var(--px13); }
  .minH14px_min_l-01 { min-height: var(--px14); }
  .minH15px_min_l-01 { min-height: var(--px15); }
  .minH16px_min_l-01 { min-height: var(--px16); }
  .minH17px_min_l-01 { min-height: var(--px17); }
  .minH18px_min_l-01 { min-height: var(--px18); }
  .minH19px_min_l-01 { min-height: var(--px19); }
  .minH20px_min_l-01 { min-height: var(--px20); }
  .minH5p_min_l-01 { min-height: 5%; }
  .minH10p_min_l-01 { min-height: 10%; }
  .minH15p_min_l-01 { min-height: 15%; }
  .minH20p_min_l-01 { min-height: 20%; }
  .minH25p_min_l-01 { min-height: 25%; }
  .minH30p_min_l-01 { min-height: 30%; }
  .minH35p_min_l-01 { min-height: 35%; }
  .minH40p_min_l-01 { min-height: 40%; }
  .minH45p_min_l-01 { min-height: 45%; }
  .minH50p_min_l-01 { min-height: 50%; }
  .minH55p_min_l-01 { min-height: 55%; }
  .minH60p_min_l-01 { min-height: 60%; }
  .minH65p_min_l-01 { min-height: 65%; }
  .minH70p_min_l-01 { min-height: 70%; }
  .minH75p_min_l-01 { min-height: 75%; }
  .minH80p_min_l-01 { min-height: 80%; }
  .minH85p_min_l-01 { min-height: 85%; }
  .minH90p_min_l-01 { min-height: 90%; }
  .minH95p_min_l-01 { min-height: 95%; }
  .minH100p_min_l-01 { min-height: 100%; }
  .maxH1_min_l-01 { max-height: var(--rem1); }
  .maxH2_min_l-01 { max-height: var(--rem2); }
  .maxH3_min_l-01 { max-height: var(--rem3); }
  .maxH4_min_l-01 { max-height: var(--rem4); }
  .maxH5_min_l-01 { max-height: var(--rem5); }
  .maxH6_min_l-01 { max-height: var(--rem6); }
  .maxH7_min_l-01 { max-height: var(--rem7); }
  .maxH1px_min_l-01 { max-height: var(--px1); }
  .maxH2px_min_l-01 { max-height: var(--px2); }
  .maxH3px_min_l-01 { max-height: var(--px3); }
  .maxH4px_min_l-01 { max-height: var(--px4); }
  .maxH5px_min_l-01 { max-height: var(--px5); }
  .maxH6px_min_l-01 { max-height: var(--px6); }
  .maxH7px_min_l-01 { max-height: var(--px7); }
  .maxH8px_min_l-01 { max-height: var(--px8); }
  .maxH9px_min_l-01 { max-height: var(--px9); }
  .maxH10px_min_l-01 { max-height: var(--px10); }
  .maxH11px_min_l-01 { max-height: var(--px11); }
  .maxH12px_min_l-01 { max-height: var(--px12); }
  .maxH13px_min_l-01 { max-height: var(--px13); }
  .maxH14px_min_l-01 { max-height: var(--px14); }
  .maxH15px_min_l-01 { max-height: var(--px15); }
  .maxH16px_min_l-01 { max-height: var(--px16); }
  .maxH17px_min_l-01 { max-height: var(--px17); }
  .maxH18px_min_l-01 { max-height: var(--px18); }
  .maxH19px_min_l-01 { max-height: var(--px19); }
  .maxH20px_min_l-01 { max-height: var(--px20); }
  .maxH5p_min_l-01 { max-height: 5%; }
  .maxH10p_min_l-01 { max-height: 10%; }
  .maxH15p_min_l-01 { max-height: 15%; }
  .maxH20p_min_l-01 { max-height: 20%; }
  .maxH25p_min_l-01 { max-height: 25%; }
  .maxH30p_min_l-01 { max-height: 30%; }
  .maxH35p_min_l-01 { max-height: 35%; }
  .maxH40p_min_l-01 { max-height: 40%; }
  .maxH45p_min_l-01 { max-height: 45%; }
  .maxH50p_min_l-01 { max-height: 50%; }
  .maxH55p_min_l-01 { max-height: 55%; }
  .maxH60p_min_l-01 { max-height: 60%; }
  .maxH65p_min_l-01 { max-height: 65%; }
  .maxH70p_min_l-01 { max-height: 70%; }
  .maxH75p_min_l-01 { max-height: 75%; }
  .maxH80p_min_l-01 { max-height: 80%; }
  .maxH85p_min_l-01 { max-height: 85%; }
  .maxH90p_min_l-01 { max-height: 90%; }
  .maxH95p_min_l-01 { max-height: 95%; }
  .maxH100p_min_l-01 { max-height: 100%; }
  .maxH5vh_min_l-01 { max-height: 5vh; }
  .maxH10vh_min_l-01 { max-height: 10vh; }
  .maxH15vh_min_l-01 { max-height: 15vh; }
  .maxH20vh_min_l-01 { max-height: 20vh; }
  .maxH25vh_min_l-01 { max-height: 25vh; }
  .maxH30vh_min_l-01 { max-height: 30vh; }
  .maxH35vh_min_l-01 { max-height: 35vh; }
  .maxH40vh_min_l-01 { max-height: 40vh; }
  .maxH45vh_min_l-01 { max-height: 45vh; }
  .maxH50vh_min_l-01 { max-height: 50vh; }
  .maxH55vh_min_l-01 { max-height: 55vh; }
  .maxH60vh_min_l-01 { max-height: 60vh; }
  .maxH65vh_min_l-01 { max-height: 65vh; }
  .maxH70vh_min_l-01 { max-height: 70vh; }
  .maxH75vh_min_l-01 { max-height: 75vh; }
  .maxH80vh_min_l-01 { max-height: 80vh; }
  .maxH85vh_min_l-01 { max-height: 85vh; }
  .maxH90vh_min_l-01 { max-height: 90vh; }
  .maxH95vh_min_l-01 { max-height: 95vh; }
  .maxH100vh_min_l-01 { max-height: 100vh; }
  .resizeA_min_l-01 { resize: both; }
  .resizeV_min_l-01 { resize: vertical; }
  .resizeH_min_l-01 { resize: horizontal; }
  .resizeNone_min_l-01 { resize: none; }
  .resizeB_min_l-01 { resize: block; }
  .resizeI_min_l-01 { resize: inline; }
  .pa1_min_l-01 { padding: var(--px1); }
  .pa2_min_l-01 { padding: var(--px2); }
  .pa3_min_l-01 { padding: var(--px3); }
  .pa4_min_l-01 { padding: var(--px4); }
  .pa5_min_l-01 { padding: var(--px5); }
  .pa6_min_l-01 { padding: var(--px6); }
  .pa7_min_l-01 { padding: var(--px7); }
  .pa8_min_l-01 { padding: var(--px8); }
  .pa9_min_l-01 { padding: var(--px9); }
  .pa10_min_l-01 { padding: var(--px10); }
  .pa11_min_l-01 { padding: var(--px11); }
  .pa12_min_l-01 { padding: var(--px12); }
  .pa13_min_l-01 { padding: var(--px13); }
  .pa14_min_l-01 { padding: var(--px14); }
  .pa15_min_l-01 { padding: var(--px15); }
  .pa16_min_l-01 { padding: var(--px16); }
  .pa17_min_l-01 { padding: var(--px17); }
  .pa18_min_l-01 { padding: var(--px18); }
  .pa19_min_l-01 { padding: var(--px19); }
  .pa20_min_l-01 { padding: var(--px20); }
  .pa5p_min_l-01 { padding: 5%; }
  .pa10p_min_l-01 { padding: 10%; }
  .pa15p_min_l-01 { padding: 15%; }
  .pa20p_min_l-01 { padding: 20%; }
  .pa25p_min_l-01 { padding: 25%; }
  .pa30p_min_l-01 { padding: 30%; }
  .pa35p_min_l-01 { padding: 35%; }
  .pa40p_min_l-01 { padding: 40%; }
  .pa45p_min_l-01 { padding: 45%; }
  .pa50p_min_l-01 { padding: 50%; }
  .pa55p_min_l-01 { padding: 55%; }
  .pa60p_min_l-01 { padding: 60%; }
  .pa65p_min_l-01 { padding: 65%; }
  .pa70p_min_l-01 { padding: 70%; }
  .pa75p_min_l-01 { padding: 75%; }
  .pa80p_min_l-01 { padding: 80%; }
  .pa85p_min_l-01 { padding: 85%; }
  .pa90p_min_l-01 { padding: 90%; }
  .pa95p_min_l-01 { padding: 95%; }
  .pa100p_min_l-01 { padding: 100%; }
  .pv1_min_l-01 { padding-top: var(--px1); padding-bottom: var(--px1); }
  .pv2_min_l-01 { padding-top: var(--px2); padding-bottom: var(--px2); }
  .pv3_min_l-01 { padding-top: var(--px3); padding-bottom: var(--px3); }
  .pv4_min_l-01 { padding-top: var(--px4); padding-bottom: var(--px4); }
  .pv5_min_l-01 { padding-top: var(--px5); padding-bottom: var(--px5); }
  .pv6_min_l-01 { padding-top: var(--px6); padding-bottom: var(--px6); }
  .pv7_min_l-01 { padding-top: var(--px7); padding-bottom: var(--px7); }
  .pv8_min_l-01 { padding-top: var(--px8); padding-bottom: var(--px8); }
  .pv9_min_l-01 { padding-top: var(--px9); padding-bottom: var(--px9); }
  .pv10_min_l-01 { padding-top: var(--px10); padding-bottom: var(--px10); }
  .pv11_min_l-01 { padding-top: var(--px11); padding-bottom: var(--px11); }
  .pv12_min_l-01 { padding-top: var(--px12); padding-bottom: var(--px12); }
  .pv13_min_l-01 { padding-top: var(--px13); padding-bottom: var(--px13); }
  .pv14_min_l-01 { padding-top: var(--px14); padding-bottom: var(--px14); }
  .pv15_min_l-01 { padding-top: var(--px15); padding-bottom: var(--px15); }
  .pv16_min_l-01 { padding-top: var(--px16); padding-bottom: var(--px16); }
  .pv17_min_l-01 { padding-top: var(--px17); padding-bottom: var(--px17); }
  .pv18_min_l-01 { padding-top: var(--px18); padding-bottom: var(--px18); }
  .pv19_min_l-01 { padding-top: var(--px19); padding-bottom: var(--px19); }
  .pv20_min_l-01 { padding-top: var(--px20); padding-bottom: var(--px20); }
  .pv5p_min_l-01 { padding-top: 5%; padding-bottom: 5%; }
  .pv10p_min_l-01 { padding-top: 10%; padding-bottom: 10%; }
  .pv15p_min_l-01 { padding-top: 15%; padding-bottom: 15%; }
  .pv20p_min_l-01 { padding-top: 20%; padding-bottom: 20%; }
  .pv25p_min_l-01 { padding-top: 25%; padding-bottom: 25%; }
  .pv30p_min_l-01 { padding-top: 30%; padding-bottom: 30%; }
  .pv35p_min_l-01 { padding-top: 35%; padding-bottom: 35%; }
  .pv40p_min_l-01 { padding-top: 40%; padding-bottom: 40%; }
  .pv45p_min_l-01 { padding-top: 45%; padding-bottom: 45%; }
  .pv50p_min_l-01 { padding-top: 50%; padding-bottom: 50%; }
  .pv55p_min_l-01 { padding-top: 55%; padding-bottom: 55%; }
  .pv60p_min_l-01 { padding-top: 60%; padding-bottom: 60%; }
  .pv65p_min_l-01 { padding-top: 65%; padding-bottom: 65%; }
  .pv70p_min_l-01 { padding-top: 70%; padding-bottom: 70%; }
  .pv75p_min_l-01 { padding-top: 75%; padding-bottom: 75%; }
  .pv80p_min_l-01 { padding-top: 80%; padding-bottom: 80%; }
  .pv85p_min_l-01 { padding-top: 85%; padding-bottom: 85%; }
  .pv90p_min_l-01 { padding-top: 90%; padding-bottom: 90%; }
  .pv95p_min_l-01 { padding-top: 95%; padding-bottom: 95%; }
  .pv100p_min_l-01 { padding-top: 100%; padding-bottom: 100%; }
  .ph1_min_l-01 { padding-left: var(--px1); padding-right: var(--px1); }
  .ph2_min_l-01 { padding-left: var(--px2); padding-right: var(--px2); }
  .ph3_min_l-01 { padding-left: var(--px3); padding-right: var(--px3); }
  .ph4_min_l-01 { padding-left: var(--px4); padding-right: var(--px4); }
  .ph5_min_l-01 { padding-left: var(--px5); padding-right: var(--px5); }
  .ph6_min_l-01 { padding-left: var(--px6); padding-right: var(--px6); }
  .ph7_min_l-01 { padding-left: var(--px7); padding-right: var(--px7); }
  .ph8_min_l-01 { padding-left: var(--px8); padding-right: var(--px8); }
  .ph9_min_l-01 { padding-left: var(--px9); padding-right: var(--px9); }
  .ph10_min_l-01 { padding-left: var(--px10); padding-right: var(--px10); }
  .ph11_min_l-01 { padding-left: var(--px11); padding-right: var(--px11); }
  .ph12_min_l-01 { padding-left: var(--px12); padding-right: var(--px12); }
  .ph13_min_l-01 { padding-left: var(--px13); padding-right: var(--px13); }
  .ph14_min_l-01 { padding-left: var(--px14); padding-right: var(--px14); }
  .ph15_min_l-01 { padding-left: var(--px15); padding-right: var(--px15); }
  .ph16_min_l-01 { padding-left: var(--px16); padding-right: var(--px16); }
  .ph17_min_l-01 { padding-left: var(--px17); padding-right: var(--px17); }
  .ph18_min_l-01 { padding-left: var(--px18); padding-right: var(--px18); }
  .ph19_min_l-01 { padding-left: var(--px19); padding-right: var(--px19); }
  .ph20_min_l-01 { padding-left: var(--px20); padding-right: var(--px20); }
  .ph5p_min_l-01 { padding-left: 5%; padding-right: 5%; }
  .ph10p_min_l-01 { padding-left: 10%; padding-right: 10%; }
  .ph15p_min_l-01 { padding-left: 15%; padding-right: 15%; }
  .ph20p_min_l-01 { padding-left: 20%; padding-right: 20%; }
  .ph25p_min_l-01 { padding-left: 25%; padding-right: 25%; }
  .ph30p_min_l-01 { padding-left: 30%; padding-right: 30%; }
  .ph35p_min_l-01 { padding-left: 35%; padding-right: 35%; }
  .ph40p_min_l-01 { padding-left: 40%; padding-right: 40%; }
  .ph45p_min_l-01 { padding-left: 45%; padding-right: 45%; }
  .ph50p_min_l-01 { padding-left: 50%; padding-right: 50%; }
  .ph55p_min_l-01 { padding-left: 55%; padding-right: 55%; }
  .ph60p_min_l-01 { padding-left: 60%; padding-right: 60%; }
  .ph65p_min_l-01 { padding-left: 65%; padding-right: 65%; }
  .ph70p_min_l-01 { padding-left: 70%; padding-right: 70%; }
  .ph75p_min_l-01 { padding-left: 75%; padding-right: 75%; }
  .ph80p_min_l-01 { padding-left: 80%; padding-right: 80%; }
  .ph85p_min_l-01 { padding-left: 85%; padding-right: 85%; }
  .ph90p_min_l-01 { padding-left: 90%; padding-right: 90%; }
  .ph95p_min_l-01 { padding-left: 95%; padding-right: 95%; }
  .ph100p_min_l-01 { padding-left: 100%; padding-right: 100%; }
  .pt1_min_l-01 { padding-top: var(--px1); }
  .pt2_min_l-01 { padding-top: var(--px2); }
  .pt3_min_l-01 { padding-top: var(--px3); }
  .pt4_min_l-01 { padding-top: var(--px4); }
  .pt5_min_l-01 { padding-top: var(--px5); }
  .pt6_min_l-01 { padding-top: var(--px6); }
  .pt7_min_l-01 { padding-top: var(--px7); }
  .pt8_min_l-01 { padding-top: var(--px8); }
  .pt9_min_l-01 { padding-top: var(--px9); }
  .pt10_min_l-01 { padding-top: var(--px10); }
  .pt11_min_l-01 { padding-top: var(--px11); }
  .pt12_min_l-01 { padding-top: var(--px12); }
  .pt13_min_l-01 { padding-top: var(--px13); }
  .pt14_min_l-01 { padding-top: var(--px14); }
  .pt15_min_l-01 { padding-top: var(--px15); }
  .pt16_min_l-01 { padding-top: var(--px16); }
  .pt17_min_l-01 { padding-top: var(--px17); }
  .pt18_min_l-01 { padding-top: var(--px18); }
  .pt19_min_l-01 { padding-top: var(--px19); }
  .pt20_min_l-01 { padding-top: var(--px20); }
  .pt5p_min_l-01 { padding-top: 5%; }
  .pt10p_min_l-01 { padding-top: 10%; }
  .pt15p_min_l-01 { padding-top: 15%; }
  .pt20p_min_l-01 { padding-top: 20%; }
  .pt25p_min_l-01 { padding-top: 25%; }
  .pt30p_min_l-01 { padding-top: 30%; }
  .pt35p_min_l-01 { padding-top: 35%; }
  .pt40p_min_l-01 { padding-top: 40%; }
  .pt45p_min_l-01 { padding-top: 45%; }
  .pt50p_min_l-01 { padding-top: 50%; }
  .pt55p_min_l-01 { padding-top: 55%; }
  .pt60p_min_l-01 { padding-top: 60%; }
  .pt65p_min_l-01 { padding-top: 65%; }
  .pt70p_min_l-01 { padding-top: 70%; }
  .pt75p_min_l-01 { padding-top: 75%; }
  .pt80p_min_l-01 { padding-top: 80%; }
  .pt85p_min_l-01 { padding-top: 85%; }
  .pt90p_min_l-01 { padding-top: 90%; }
  .pt95p_min_l-01 { padding-top: 95%; }
  .pt100p_min_l-01 { padding-top: 100%; }
  .pr1_min_l-01 { padding-right: var(--px1); }
  .pr2_min_l-01 { padding-right: var(--px2); }
  .pr3_min_l-01 { padding-right: var(--px3); }
  .pr4_min_l-01 { padding-right: var(--px4); }
  .pr5_min_l-01 { padding-right: var(--px5); }
  .pr6_min_l-01 { padding-right: var(--px6); }
  .pr7_min_l-01 { padding-right: var(--px7); }
  .pr8_min_l-01 { padding-right: var(--px8); }
  .pr9_min_l-01 { padding-right: var(--px9); }
  .pr10_min_l-01 { padding-right: var(--px10); }
  .pr11_min_l-01 { padding-right: var(--px11); }
  .pr12_min_l-01 { padding-right: var(--px12); }
  .pr13_min_l-01 { padding-right: var(--px13); }
  .pr14_min_l-01 { padding-right: var(--px14); }
  .pr15_min_l-01 { padding-right: var(--px15); }
  .pr16_min_l-01 { padding-right: var(--px16); }
  .pr17_min_l-01 { padding-right: var(--px17); }
  .pr18_min_l-01 { padding-right: var(--px18); }
  .pr19_min_l-01 { padding-right: var(--px19); }
  .pr20_min_l-01 { padding-right: var(--px20); }
  .pr5p_min_l-01 { padding-right: 5%; }
  .pr10p_min_l-01 { padding-right: 10%; }
  .pr15p_min_l-01 { padding-right: 15%; }
  .pr20p_min_l-01 { padding-right: 20%; }
  .pr25p_min_l-01 { padding-right: 25%; }
  .pr30p_min_l-01 { padding-right: 30%; }
  .pr35p_min_l-01 { padding-right: 35%; }
  .pr40p_min_l-01 { padding-right: 40%; }
  .pr45p_min_l-01 { padding-right: 45%; }
  .pr50p_min_l-01 { padding-right: 50%; }
  .pr55p_min_l-01 { padding-right: 55%; }
  .pr60p_min_l-01 { padding-right: 60%; }
  .pr65p_min_l-01 { padding-right: 65%; }
  .pr70p_min_l-01 { padding-right: 70%; }
  .pr75p_min_l-01 { padding-right: 75%; }
  .pr80p_min_l-01 { padding-right: 80%; }
  .pr85p_min_l-01 { padding-right: 85%; }
  .pr90p_min_l-01 { padding-right: 90%; }
  .pr95p_min_l-01 { padding-right: 95%; }
  .pr100p_min_l-01 { padding-right: 100%; }
  .pb1_min_l-01 { padding-bottom: var(--px1); }
  .pb2_min_l-01 { padding-bottom: var(--px2); }
  .pb3_min_l-01 { padding-bottom: var(--px3); }
  .pb4_min_l-01 { padding-bottom: var(--px4); }
  .pb5_min_l-01 { padding-bottom: var(--px5); }
  .pb6_min_l-01 { padding-bottom: var(--px6); }
  .pb7_min_l-01 { padding-bottom: var(--px7); }
  .pb8_min_l-01 { padding-bottom: var(--px8); }
  .pb9_min_l-01 { padding-bottom: var(--px9); }
  .pb10_min_l-01 { padding-bottom: var(--px10); }
  .pb11_min_l-01 { padding-bottom: var(--px11); }
  .pb12_min_l-01 { padding-bottom: var(--px12); }
  .pb13_min_l-01 { padding-bottom: var(--px13); }
  .pb14_min_l-01 { padding-bottom: var(--px14); }
  .pb15_min_l-01 { padding-bottom: var(--px15); }
  .pb16_min_l-01 { padding-bottom: var(--px16); }
  .pb17_min_l-01 { padding-bottom: var(--px17); }
  .pb18_min_l-01 { padding-bottom: var(--px18); }
  .pb19_min_l-01 { padding-bottom: var(--px19); }
  .pb20_min_l-01 { padding-bottom: var(--px20); }
  .pb5p_min_l-01 { padding-bottom: 5%; }
  .pb10p_min_l-01 { padding-bottom: 10%; }
  .pb15p_min_l-01 { padding-bottom: 15%; }
  .pb20p_min_l-01 { padding-bottom: 20%; }
  .pb25p_min_l-01 { padding-bottom: 25%; }
  .pb30p_min_l-01 { padding-bottom: 30%; }
  .pb35p_min_l-01 { padding-bottom: 35%; }
  .pb40p_min_l-01 { padding-bottom: 40%; }
  .pb45p_min_l-01 { padding-bottom: 45%; }
  .pb50p_min_l-01 { padding-bottom: 50%; }
  .pb55p_min_l-01 { padding-bottom: 55%; }
  .pb60p_min_l-01 { padding-bottom: 60%; }
  .pb65p_min_l-01 { padding-bottom: 65%; }
  .pb70p_min_l-01 { padding-bottom: 70%; }
  .pb75p_min_l-01 { padding-bottom: 75%; }
  .pb80p_min_l-01 { padding-bottom: 80%; }
  .pb85p_min_l-01 { padding-bottom: 85%; }
  .pb90p_min_l-01 { padding-bottom: 90%; }
  .pb95p_min_l-01 { padding-bottom: 95%; }
  .pb100p_min_l-01 { padding-bottom: 100%; }
  .pl1_min_l-01 { padding-left: var(--px1); }
  .pl2_min_l-01 { padding-left: var(--px2); }
  .pl3_min_l-01 { padding-left: var(--px3); }
  .pl4_min_l-01 { padding-left: var(--px4); }
  .pl5_min_l-01 { padding-left: var(--px5); }
  .pl6_min_l-01 { padding-left: var(--px6); }
  .pl7_min_l-01 { padding-left: var(--px7); }
  .pl8_min_l-01 { padding-left: var(--px8); }
  .pl9_min_l-01 { padding-left: var(--px9); }
  .pl10_min_l-01 { padding-left: var(--px10); }
  .pl11_min_l-01 { padding-left: var(--px11); }
  .pl12_min_l-01 { padding-left: var(--px12); }
  .pl13_min_l-01 { padding-left: var(--px13); }
  .pl14_min_l-01 { padding-left: var(--px14); }
  .pl15_min_l-01 { padding-left: var(--px15); }
  .pl16_min_l-01 { padding-left: var(--px16); }
  .pl17_min_l-01 { padding-left: var(--px17); }
  .pl18_min_l-01 { padding-left: var(--px18); }
  .pl19_min_l-01 { padding-left: var(--px19); }
  .pl20_min_l-01 { padding-left: var(--px20); }
  .pl5p_min_l-01 { padding-left: 5%; }
  .pl10p_min_l-01 { padding-left: 10%; }
  .pl15p_min_l-01 { padding-left: 15%; }
  .pl20p_min_l-01 { padding-left: 20%; }
  .pl25p_min_l-01 { padding-left: 25%; }
  .pl30p_min_l-01 { padding-left: 30%; }
  .pl35p_min_l-01 { padding-left: 35%; }
  .pl40p_min_l-01 { padding-left: 40%; }
  .pl45p_min_l-01 { padding-left: 45%; }
  .pl50p_min_l-01 { padding-left: 50%; }
  .pl55p_min_l-01 { padding-left: 55%; }
  .pl60p_min_l-01 { padding-left: 60%; }
  .pl65p_min_l-01 { padding-left: 65%; }
  .pl70p_min_l-01 { padding-left: 70%; }
  .pl75p_min_l-01 { padding-left: 75%; }
  .pl80p_min_l-01 { padding-left: 80%; }
  .pl85p_min_l-01 { padding-left: 85%; }
  .pl90p_min_l-01 { padding-left: 90%; }
  .pl95p_min_l-01 { padding-left: 95%; }
  .pl100p_min_l-01 { padding-left: 100%; }
  .ma1_min_l-01 { margin: var(--px1); }
  .ma2_min_l-01 { margin: var(--px2); }
  .ma3_min_l-01 { margin: var(--px3); }
  .ma4_min_l-01 { margin: var(--px4); }
  .ma5_min_l-01 { margin: var(--px5); }
  .ma6_min_l-01 { margin: var(--px6); }
  .ma7_min_l-01 { margin: var(--px7); }
  .ma8_min_l-01 { margin: var(--px8); }
  .ma9_min_l-01 { margin: var(--px9); }
  .ma10_min_l-01 { margin: var(--px10); }
  .ma11_min_l-01 { margin: var(--px11); }
  .ma12_min_l-01 { margin: var(--px12); }
  .ma13_min_l-01 { margin: var(--px13); }
  .ma14_min_l-01 { margin: var(--px14); }
  .ma15_min_l-01 { margin: var(--px15); }
  .ma16_min_l-01 { margin: var(--px16); }
  .ma17_min_l-01 { margin: var(--px17); }
  .ma18_min_l-01 { margin: var(--px18); }
  .ma19_min_l-01 { margin: var(--px19); }
  .ma20_min_l-01 { margin: var(--px20); }
  .ma5p_min_l-01 { margin: 5%; }
  .ma10p_min_l-01 { margin: 10%; }
  .ma15p_min_l-01 { margin: 15%; }
  .ma20p_min_l-01 { margin: 20%; }
  .ma25p_min_l-01 { margin: 25%; }
  .ma30p_min_l-01 { margin: 30%; }
  .ma35p_min_l-01 { margin: 35%; }
  .ma40p_min_l-01 { margin: 40%; }
  .ma45p_min_l-01 { margin: 45%; }
  .ma50p_min_l-01 { margin: 50%; }
  .ma55p_min_l-01 { margin: 55%; }
  .ma60p_min_l-01 { margin: 60%; }
  .ma65p_min_l-01 { margin: 65%; }
  .ma70p_min_l-01 { margin: 70%; }
  .ma75p_min_l-01 { margin: 75%; }
  .ma80p_min_l-01 { margin: 80%; }
  .ma85p_min_l-01 { margin: 85%; }
  .ma90p_min_l-01 { margin: 90%; }
  .ma95p_min_l-01 { margin: 95%; }
  .ma100p_min_l-01 { margin: 100%; }
  .mv1_min_l-01 { margin-top: var(--px1); margin-bottom: var(--px1); }
  .mv2_min_l-01 { margin-top: var(--px2); margin-bottom: var(--px2); }
  .mv3_min_l-01 { margin-top: var(--px3); margin-bottom: var(--px3); }
  .mv4_min_l-01 { margin-top: var(--px4); margin-bottom: var(--px4); }
  .mv5_min_l-01 { margin-top: var(--px5); margin-bottom: var(--px5); }
  .mv6_min_l-01 { margin-top: var(--px6); margin-bottom: var(--px6); }
  .mv7_min_l-01 { margin-top: var(--px7); margin-bottom: var(--px7); }
  .mv8_min_l-01 { margin-top: var(--px8); margin-bottom: var(--px8); }
  .mv9_min_l-01 { margin-top: var(--px9); margin-bottom: var(--px9); }
  .mv10_min_l-01 { margin-top: var(--px10); margin-bottom: var(--px10); }
  .mv11_min_l-01 { margin-top: var(--px11); margin-bottom: var(--px11); }
  .mv12_min_l-01 { margin-top: var(--px12); margin-bottom: var(--px12); }
  .mv13_min_l-01 { margin-top: var(--px13); margin-bottom: var(--px13); }
  .mv14_min_l-01 { margin-top: var(--px14); margin-bottom: var(--px14); }
  .mv15_min_l-01 { margin-top: var(--px15); margin-bottom: var(--px15); }
  .mv16_min_l-01 { margin-top: var(--px16); margin-bottom: var(--px16); }
  .mv17_min_l-01 { margin-top: var(--px17); margin-bottom: var(--px17); }
  .mv18_min_l-01 { margin-top: var(--px18); margin-bottom: var(--px18); }
  .mv19_min_l-01 { margin-top: var(--px19); margin-bottom: var(--px19); }
  .mv20_min_l-01 { margin-top: var(--px20); margin-bottom: var(--px20); }
  .mv5p_min_l-01 { margin-top: 5%; margin-bottom: 5%; }
  .mv10p_min_l-01 { margin-top: 10%; margin-bottom: 10%; }
  .mv15p_min_l-01 { margin-top: 15%; margin-bottom: 15%; }
  .mv20p_min_l-01 { margin-top: 20%; margin-bottom: 20%; }
  .mv25p_min_l-01 { margin-top: 25%; margin-bottom: 25%; }
  .mv30p_min_l-01 { margin-top: 30%; margin-bottom: 30%; }
  .mv35p_min_l-01 { margin-top: 35%; margin-bottom: 35%; }
  .mv40p_min_l-01 { margin-top: 40%; margin-bottom: 40%; }
  .mv45p_min_l-01 { margin-top: 45%; margin-bottom: 45%; }
  .mv50p_min_l-01 { margin-top: 50%; margin-bottom: 50%; }
  .mv55p_min_l-01 { margin-top: 55%; margin-bottom: 55%; }
  .mv60p_min_l-01 { margin-top: 60%; margin-bottom: 60%; }
  .mv65p_min_l-01 { margin-top: 65%; margin-bottom: 65%; }
  .mv70p_min_l-01 { margin-top: 70%; margin-bottom: 70%; }
  .mv75p_min_l-01 { margin-top: 75%; margin-bottom: 75%; }
  .mv80p_min_l-01 { margin-top: 80%; margin-bottom: 80%; }
  .mv85p_min_l-01 { margin-top: 85%; margin-bottom: 85%; }
  .mv90p_min_l-01 { margin-top: 90%; margin-bottom: 90%; }
  .mv95p_min_l-01 { margin-top: 95%; margin-bottom: 95%; }
  .mv100p_min_l-01 { margin-top: 100%; margin-bottom: 100%; }
  .mh1_min_l-01 { margin-left: var(--px1); margin-right: var(--px1); }
  .mh2_min_l-01 { margin-left: var(--px2); margin-right: var(--px2); }
  .mh3_min_l-01 { margin-left: var(--px3); margin-right: var(--px3); }
  .mh4_min_l-01 { margin-left: var(--px4); margin-right: var(--px4); }
  .mh5_min_l-01 { margin-left: var(--px5); margin-right: var(--px5); }
  .mh6_min_l-01 { margin-left: var(--px6); margin-right: var(--px6); }
  .mh7_min_l-01 { margin-left: var(--px7); margin-right: var(--px7); }
  .mh8_min_l-01 { margin-left: var(--px8); margin-right: var(--px8); }
  .mh9_min_l-01 { margin-left: var(--px9); margin-right: var(--px9); }
  .mh10_min_l-01 { margin-left: var(--px10); margin-right: var(--px10); }
  .mh11_min_l-01 { margin-left: var(--px11); margin-right: var(--px11); }
  .mh12_min_l-01 { margin-left: var(--px12); margin-right: var(--px12); }
  .mh13_min_l-01 { margin-left: var(--px13); margin-right: var(--px13); }
  .mh14_min_l-01 { margin-left: var(--px14); margin-right: var(--px14); }
  .mh15_min_l-01 { margin-left: var(--px15); margin-right: var(--px15); }
  .mh16_min_l-01 { margin-left: var(--px16); margin-right: var(--px16); }
  .mh17_min_l-01 { margin-left: var(--px17); margin-right: var(--px17); }
  .mh18_min_l-01 { margin-left: var(--px18); margin-right: var(--px18); }
  .mh19_min_l-01 { margin-left: var(--px19); margin-right: var(--px19); }
  .mh20_min_l-01 { margin-left: var(--px20); margin-right: var(--px20); }
  .mh5p_min_l-01 { margin-left: 5%; margin-right: 5%; }
  .mh10p_min_l-01 { margin-left: 10%; margin-right: 10%; }
  .mh15p_min_l-01 { margin-left: 15%; margin-right: 15%; }
  .mh20p_min_l-01 { margin-left: 20%; margin-right: 20%; }
  .mh25p_min_l-01 { margin-left: 25%; margin-right: 25%; }
  .mh30p_min_l-01 { margin-left: 30%; margin-right: 30%; }
  .mh35p_min_l-01 { margin-left: 35%; margin-right: 35%; }
  .mh40p_min_l-01 { margin-left: 40%; margin-right: 40%; }
  .mh45p_min_l-01 { margin-left: 45%; margin-right: 45%; }
  .mh50p_min_l-01 { margin-left: 50%; margin-right: 50%; }
  .mh55p_min_l-01 { margin-left: 55%; margin-right: 55%; }
  .mh60p_min_l-01 { margin-left: 60%; margin-right: 60%; }
  .mh65p_min_l-01 { margin-left: 65%; margin-right: 65%; }
  .mh70p_min_l-01 { margin-left: 70%; margin-right: 70%; }
  .mh75p_min_l-01 { margin-left: 75%; margin-right: 75%; }
  .mh80p_min_l-01 { margin-left: 80%; margin-right: 80%; }
  .mh85p_min_l-01 { margin-left: 85%; margin-right: 85%; }
  .mh90p_min_l-01 { margin-left: 90%; margin-right: 90%; }
  .mh95p_min_l-01 { margin-left: 95%; margin-right: 95%; }
  .mh100p_min_l-01 { margin-left: 100%; margin-right: 100%; }
  .mt1_min_l-01 { margin-top: var(--px1); }
  .mt2_min_l-01 { margin-top: var(--px2); }
  .mt3_min_l-01 { margin-top: var(--px3); }
  .mt4_min_l-01 { margin-top: var(--px4); }
  .mt5_min_l-01 { margin-top: var(--px5); }
  .mt6_min_l-01 { margin-top: var(--px6); }
  .mt7_min_l-01 { margin-top: var(--px7); }
  .mt8_min_l-01 { margin-top: var(--px8); }
  .mt9_min_l-01 { margin-top: var(--px9); }
  .mt10_min_l-01 { margin-top: var(--px10); }
  .mt11_min_l-01 { margin-top: var(--px11); }
  .mt12_min_l-01 { margin-top: var(--px12); }
  .mt13_min_l-01 { margin-top: var(--px13); }
  .mt14_min_l-01 { margin-top: var(--px14); }
  .mt15_min_l-01 { margin-top: var(--px15); }
  .mt16_min_l-01 { margin-top: var(--px16); }
  .mt17_min_l-01 { margin-top: var(--px17); }
  .mt18_min_l-01 { margin-top: var(--px18); }
  .mt19_min_l-01 { margin-top: var(--px19); }
  .mt20_min_l-01 { margin-top: var(--px20); }
  .mt5p_min_l-01 { margin-top: 5%; }
  .mt10p_min_l-01 { margin-top: 10%; }
  .mt15p_min_l-01 { margin-top: 15%; }
  .mt20p_min_l-01 { margin-top: 20%; }
  .mt25p_min_l-01 { margin-top: 25%; }
  .mt30p_min_l-01 { margin-top: 30%; }
  .mt35p_min_l-01 { margin-top: 35%; }
  .mt40p_min_l-01 { margin-top: 40%; }
  .mt45p_min_l-01 { margin-top: 45%; }
  .mt50p_min_l-01 { margin-top: 50%; }
  .mt55p_min_l-01 { margin-top: 55%; }
  .mt60p_min_l-01 { margin-top: 60%; }
  .mt65p_min_l-01 { margin-top: 65%; }
  .mt70p_min_l-01 { margin-top: 70%; }
  .mt75p_min_l-01 { margin-top: 75%; }
  .mt80p_min_l-01 { margin-top: 80%; }
  .mt85p_min_l-01 { margin-top: 85%; }
  .mt90p_min_l-01 { margin-top: 90%; }
  .mt95p_min_l-01 { margin-top: 95%; }
  .mt100p_min_l-01 { margin-top: 100%; }
  .mr1_min_l-01 { margin-right: var(--px1); }
  .mr2_min_l-01 { margin-right: var(--px2); }
  .mr3_min_l-01 { margin-right: var(--px3); }
  .mr4_min_l-01 { margin-right: var(--px4); }
  .mr5_min_l-01 { margin-right: var(--px5); }
  .mr6_min_l-01 { margin-right: var(--px6); }
  .mr7_min_l-01 { margin-right: var(--px7); }
  .mr8_min_l-01 { margin-right: var(--px8); }
  .mr9_min_l-01 { margin-right: var(--px9); }
  .mr10_min_l-01 { margin-right: var(--px10); }
  .mr11_min_l-01 { margin-right: var(--px11); }
  .mr12_min_l-01 { margin-right: var(--px12); }
  .mr13_min_l-01 { margin-right: var(--px13); }
  .mr14_min_l-01 { margin-right: var(--px14); }
  .mr15_min_l-01 { margin-right: var(--px15); }
  .mr16_min_l-01 { margin-right: var(--px16); }
  .mr17_min_l-01 { margin-right: var(--px17); }
  .mr18_min_l-01 { margin-right: var(--px18); }
  .mr19_min_l-01 { margin-right: var(--px19); }
  .mr20_min_l-01 { margin-right: var(--px20); }
  .mr5p_min_l-01 { margin-right: 5%; }
  .mr10p_min_l-01 { margin-right: 10%; }
  .mr15p_min_l-01 { margin-right: 15%; }
  .mr20p_min_l-01 { margin-right: 20%; }
  .mr25p_min_l-01 { margin-right: 25%; }
  .mr30p_min_l-01 { margin-right: 30%; }
  .mr35p_min_l-01 { margin-right: 35%; }
  .mr40p_min_l-01 { margin-right: 40%; }
  .mr45p_min_l-01 { margin-right: 45%; }
  .mr50p_min_l-01 { margin-right: 50%; }
  .mr55p_min_l-01 { margin-right: 55%; }
  .mr60p_min_l-01 { margin-right: 60%; }
  .mr65p_min_l-01 { margin-right: 65%; }
  .mr70p_min_l-01 { margin-right: 70%; }
  .mr75p_min_l-01 { margin-right: 75%; }
  .mr80p_min_l-01 { margin-right: 80%; }
  .mr85p_min_l-01 { margin-right: 85%; }
  .mr90p_min_l-01 { margin-right: 90%; }
  .mr95p_min_l-01 { margin-right: 95%; }
  .mr100p_min_l-01 { margin-right: 100%; }
  .mb1_min_l-01 { margin-bottom: var(--px1); }
  .mb2_min_l-01 { margin-bottom: var(--px2); }
  .mb3_min_l-01 { margin-bottom: var(--px3); }
  .mb4_min_l-01 { margin-bottom: var(--px4); }
  .mb5_min_l-01 { margin-bottom: var(--px5); }
  .mb6_min_l-01 { margin-bottom: var(--px6); }
  .mb7_min_l-01 { margin-bottom: var(--px7); }
  .mb8_min_l-01 { margin-bottom: var(--px8); }
  .mb9_min_l-01 { margin-bottom: var(--px9); }
  .mb10_min_l-01 { margin-bottom: var(--px10); }
  .mb11_min_l-01 { margin-bottom: var(--px11); }
  .mb12_min_l-01 { margin-bottom: var(--px12); }
  .mb13_min_l-01 { margin-bottom: var(--px13); }
  .mb14_min_l-01 { margin-bottom: var(--px14); }
  .mb15_min_l-01 { margin-bottom: var(--px15); }
  .mb16_min_l-01 { margin-bottom: var(--px16); }
  .mb17_min_l-01 { margin-bottom: var(--px17); }
  .mb18_min_l-01 { margin-bottom: var(--px18); }
  .mb19_min_l-01 { margin-bottom: var(--px19); }
  .mb20_min_l-01 { margin-bottom: var(--px20); }
  .mb5p_min_l-01 { margin-bottom: 5%; }
  .mb10p_min_l-01 { margin-bottom: 10%; }
  .mb15p_min_l-01 { margin-bottom: 15%; }
  .mb20p_min_l-01 { margin-bottom: 20%; }
  .mb25p_min_l-01 { margin-bottom: 25%; }
  .mb30p_min_l-01 { margin-bottom: 30%; }
  .mb35p_min_l-01 { margin-bottom: 35%; }
  .mb40p_min_l-01 { margin-bottom: 40%; }
  .mb45p_min_l-01 { margin-bottom: 45%; }
  .mb50p_min_l-01 { margin-bottom: 50%; }
  .mb55p_min_l-01 { margin-bottom: 55%; }
  .mb60p_min_l-01 { margin-bottom: 60%; }
  .mb65p_min_l-01 { margin-bottom: 65%; }
  .mb70p_min_l-01 { margin-bottom: 70%; }
  .mb75p_min_l-01 { margin-bottom: 75%; }
  .mb80p_min_l-01 { margin-bottom: 80%; }
  .mb85p_min_l-01 { margin-bottom: 85%; }
  .mb90p_min_l-01 { margin-bottom: 90%; }
  .mb95p_min_l-01 { margin-bottom: 95%; }
  .mb100p_min_l-01 { margin-bottom: 100%; }
  .ml1_min_l-01 { margin-left: var(--px1); }
  .ml2_min_l-01 { margin-left: var(--px2); }
  .ml3_min_l-01 { margin-left: var(--px3); }
  .ml4_min_l-01 { margin-left: var(--px4); }
  .ml5_min_l-01 { margin-left: var(--px5); }
  .ml6_min_l-01 { margin-left: var(--px6); }
  .ml7_min_l-01 { margin-left: var(--px7); }
  .ml8_min_l-01 { margin-left: var(--px8); }
  .ml9_min_l-01 { margin-left: var(--px9); }
  .ml10_min_l-01 { margin-left: var(--px10); }
  .ml11_min_l-01 { margin-left: var(--px11); }
  .ml12_min_l-01 { margin-left: var(--px12); }
  .ml13_min_l-01 { margin-left: var(--px13); }
  .ml14_min_l-01 { margin-left: var(--px14); }
  .ml15_min_l-01 { margin-left: var(--px15); }
  .ml16_min_l-01 { margin-left: var(--px16); }
  .ml17_min_l-01 { margin-left: var(--px17); }
  .ml18_min_l-01 { margin-left: var(--px18); }
  .ml19_min_l-01 { margin-left: var(--px19); }
  .ml20_min_l-01 { margin-left: var(--px20); }
  .ml5p_min_l-01 { margin-left: 5%; }
  .ml10p_min_l-01 { margin-left: 10%; }
  .ml15p_min_l-01 { margin-left: 15%; }
  .ml20p_min_l-01 { margin-left: 20%; }
  .ml25p_min_l-01 { margin-left: 25%; }
  .ml30p_min_l-01 { margin-left: 30%; }
  .ml35p_min_l-01 { margin-left: 35%; }
  .ml40p_min_l-01 { margin-left: 40%; }
  .ml45p_min_l-01 { margin-left: 45%; }
  .ml50p_min_l-01 { margin-left: 50%; }
  .ml55p_min_l-01 { margin-left: 55%; }
  .ml60p_min_l-01 { margin-left: 60%; }
  .ml65p_min_l-01 { margin-left: 65%; }
  .ml70p_min_l-01 { margin-left: 70%; }
  .ml75p_min_l-01 { margin-left: 75%; }
  .ml80p_min_l-01 { margin-left: 80%; }
  .ml85p_min_l-01 { margin-left: 85%; }
  .ml90p_min_l-01 { margin-left: 90%; }
  .ml95p_min_l-01 { margin-left: 95%; }
  .ml100p_min_l-01 { margin-left: 100%; }
  .ba0_min_l-01 { border: none; }
  .bt0_min_l-01 { border-top: none; }
  .br0_min_l-01 { border-right: none; }
  .bb0_min_l-01 { border-bottom: none; }
  .bl0_min_l-01 { border-left: none; }
  .ba_min_l-01 { border: solid 1px rgba(255, 255, 255, 0.15); }
  .bt_min_l-01 { border-top: solid 1px rgba(255, 255, 255, 0.15); }
  .br_min_l-01 { border-right: solid 1px rgba(255, 255, 255, 0.15); }
  .bb_min_l-01 { border-bottom: solid 1px rgba(255, 255, 255, 0.15); }
  .bl_min_l-01 { border-left: solid 1px rgba(255, 255, 255, 0.15); }
  .bv_min_l-01 { border-top: solid 1px rgba(255, 255, 255, 0.15); border-bottom: solid 1px rgba(255, 255, 255, 0.15); }
  .bh_min_l-01 { border-left: solid 1px rgba(255, 255, 255, 0.15); border-right: solid 1px rgba(255, 255, 255, 0.15); }
  .borderNeutralOnFill_min_l-01 { border-color: var(--neutralOnFill); }
  .borderBlack_min_l-01 { border-color: var(--black); }
  .borderWhite_min_l-01 { border-color: var(--white); }
  .borderGreyHighlighted_min_l-01 { border-color: var(--greyHighlighted); }
  .borderNeutral_min_l-01 { border-color: var(--neutral); }
  .borderRed_min_l-01 { border-color: var(--red); }
  .borderTeal_min_l-01 { border-color: var(--teal); }
  .borderPurple_min_l-01 { border-color: var(--purple); }
  .borderBlue_min_l-01 { border-color: var(--blue); }
  .borderOrange_min_l-01 { border-color: var(--orange); }
  .borderYellow_min_l-01 { border-color: var(--yellow); }
  .borderGreen_min_l-01 { border-color: var(--green); }
  .borderPink_min_l-01 { border-color: var(--pink); }
  .borderGrey_min_l-01 { border-color: var(--grey); }
  .borderTextNeutral_min_l-01 { border-color: var(--textNeutral); }
  .borderTextMinimal_min_l-01 { border-color: var(--textMinimal); }
  .borderDetailNeutral_min_l-01 { border-color: var(--detailNeutral); }
  .borderDetailMinimal_min_l-01 { border-color: var(--detailMinimal); }
  .br1_min_l-01 { border-radius: 2px; }
  .br2_min_l-01 { border-radius: 5px; }
  .br3_min_l-01 { border-radius: 10px; }
  .br4_min_l-01 { border-radius: 15px; }
  .br5_min_l-01 { border-radius: 20px; }
  .strokeNeutralOnFill_min_l-01 { stroke: var(--neutralOnFill); }
  .strokeBlack_min_l-01 { stroke: var(--black); }
  .strokeWhite_min_l-01 { stroke: var(--white); }
  .strokeGreyHighlighted_min_l-01 { stroke: var(--greyHighlighted); }
  .strokeNeutral_min_l-01 { stroke: var(--neutral); }
  .strokeRed_min_l-01 { stroke: var(--red); }
  .strokeTeal_min_l-01 { stroke: var(--teal); }
  .strokePurple_min_l-01 { stroke: var(--purple); }
  .strokeBlue_min_l-01 { stroke: var(--blue); }
  .strokeOrange_min_l-01 { stroke: var(--orange); }
  .strokeYellow_min_l-01 { stroke: var(--yellow); }
  .strokeGreen_min_l-01 { stroke: var(--green); }
  .strokePink_min_l-01 { stroke: var(--pink); }
  .strokeGrey_min_l-01 { stroke: var(--grey); }
  .strokeTextNeutral_min_l-01 { stroke: var(--textNeutral); }
  .strokeTextMinimal_min_l-01 { stroke: var(--textMinimal); }
  .strokeDetailNeutral_min_l-01 { stroke: var(--detailNeutral); }
  .strokeDetailMinimal_min_l-01 { stroke: var(--detailMinimal); }
  .o0_min_l-01 { opacity: 0.00; }
  .o5_min_l-01 { opacity: 0.05; }
  .o10_min_l-01 { opacity: 0.10; }
  .o15_min_l-01 { opacity: 0.15; }
  .o20_min_l-01 { opacity: 0.20; }
  .o25_min_l-01 { opacity: 0.25; }
  .o30_min_l-01 { opacity: 0.30; }
  .o35_min_l-01 { opacity: 0.35; }
  .o40_min_l-01 { opacity: 0.40; }
  .o45_min_l-01 { opacity: 0.45; }
  .o50_min_l-01 { opacity: 0.50; }
  .o55_min_l-01 { opacity: 0.55; }
  .o60_min_l-01 { opacity: 0.60; }
  .o65_min_l-01 { opacity: 0.65; }
  .o70_min_l-01 { opacity: 0.70; }
  .o75_min_l-01 { opacity: 0.75; }
  .o80_min_l-01 { opacity: 0.80; }
  .o85_min_l-01 { opacity: 0.85; }
  .o90_min_l-01 { opacity: 0.90; }
  .o95_min_l-01 { opacity: 0.95; }
  .o100_min_l-01 { opacity: 1.00; }
  .aShadow_min_l-01 { box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.25); }
  .tShadow_min_l-01 { box-shadow: 0px -15px 25px rgba(0, 0, 0, 0.25); }
  .rShadow_min_l-01 { box-shadow: 15px 0px 25px rgba(0, 0, 0, 0.25); }
  .bShadow_min_l-01 { box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.25); }
  .lShadow_min_l-01 { box-shadow: -15px 0px 25px rgba(0, 0, 0, 0.25); }
  .rtShadow_min_l-01 { box-shadow: 15px -15px 25px rgba(0, 0, 0, 0.25); }
  .rbShadow_min_l-01 { box-shadow: 15px 15px 25px rgba(0, 0, 0, 0.25); }
  .lbShadow_min_l-01 { box-shadow: -15px 15px 25px rgba(0, 0, 0, 0.25); }
  .ltShadow_min_l-01 { box-shadow: -15px -15px 25px rgba(0, 0, 0, 0.25); }
  .rotate0_min_l-01 { transform: rotate(0deg); }
  .rotate5_min_l-01 { transform: rotate(5deg); }
  .rotate10_min_l-01 { transform: rotate(10deg); }
  .rotate15_min_l-01 { transform: rotate(15deg); }
  .rotate20_min_l-01 { transform: rotate(20deg); }
  .rotate25_min_l-01 { transform: rotate(25deg); }
  .rotate30_min_l-01 { transform: rotate(30deg); }
  .rotate35_min_l-01 { transform: rotate(35deg); }
  .rotate40_min_l-01 { transform: rotate(40deg); }
  .rotate45_min_l-01 { transform: rotate(45deg); }
  .rotate50_min_l-01 { transform: rotate(50deg); }
  .rotate55_min_l-01 { transform: rotate(55deg); }
  .rotate60_min_l-01 { transform: rotate(60deg); }
  .rotate65_min_l-01 { transform: rotate(65deg); }
  .rotate70_min_l-01 { transform: rotate(70deg); }
  .rotate75_min_l-01 { transform: rotate(75deg); }
  .rotate80_min_l-01 { transform: rotate(80deg); }
  .rotate85_min_l-01 { transform: rotate(85deg); }
  .rotate90_min_l-01 { transform: rotate(90deg); }
  .rotate95_min_l-01 { transform: rotate(95deg); }
  .rotate100_min_l-01 { transform: rotate(100deg); }
  .rotate105_min_l-01 { transform: rotate(105deg); }
  .rotate110_min_l-01 { transform: rotate(110deg); }
  .rotate115_min_l-01 { transform: rotate(115deg); }
  .rotate120_min_l-01 { transform: rotate(120deg); }
  .rotate125_min_l-01 { transform: rotate(125deg); }
  .rotate130_min_l-01 { transform: rotate(130deg); }
  .rotate135_min_l-01 { transform: rotate(135deg); }
  .rotate140_min_l-01 { transform: rotate(140deg); }
  .rotate145_min_l-01 { transform: rotate(145deg); }
  .rotate150_min_l-01 { transform: rotate(150deg); }
  .rotate155_min_l-01 { transform: rotate(155deg); }
  .rotate160_min_l-01 { transform: rotate(160deg); }
  .rotate165_min_l-01 { transform: rotate(165deg); }
  .rotate170_min_l-01 { transform: rotate(170deg); }
  .rotate175_min_l-01 { transform: rotate(175deg); }
  .rotate180_min_l-01 { transform: rotate(180deg); }
  .rotate185_min_l-01 { transform: rotate(185deg); }
  .rotate190_min_l-01 { transform: rotate(190deg); }
  .rotate195_min_l-01 { transform: rotate(195deg); }
  .rotate200_min_l-01 { transform: rotate(200deg); }
  .rotate205_min_l-01 { transform: rotate(205deg); }
  .rotate210_min_l-01 { transform: rotate(210deg); }
  .rotate215_min_l-01 { transform: rotate(215deg); }
  .rotate220_min_l-01 { transform: rotate(220deg); }
  .rotate225_min_l-01 { transform: rotate(225deg); }
  .rotate230_min_l-01 { transform: rotate(230deg); }
  .rotate235_min_l-01 { transform: rotate(235deg); }
  .rotate240_min_l-01 { transform: rotate(240deg); }
  .rotate245_min_l-01 { transform: rotate(245deg); }
  .rotate250_min_l-01 { transform: rotate(250deg); }
  .rotate255_min_l-01 { transform: rotate(255deg); }
  .rotate260_min_l-01 { transform: rotate(260deg); }
  .rotate265_min_l-01 { transform: rotate(265deg); }
  .rotate270_min_l-01 { transform: rotate(270deg); }
  .rotate275_min_l-01 { transform: rotate(275deg); }
  .rotate280_min_l-01 { transform: rotate(280deg); }
  .rotate285_min_l-01 { transform: rotate(285deg); }
  .rotate290_min_l-01 { transform: rotate(290deg); }
  .rotate295_min_l-01 { transform: rotate(295deg); }
  .rotate300_min_l-01 { transform: rotate(300deg); }
  .rotate305_min_l-01 { transform: rotate(305deg); }
  .rotate310_min_l-01 { transform: rotate(310deg); }
  .rotate315_min_l-01 { transform: rotate(315deg); }
  .rotate320_min_l-01 { transform: rotate(320deg); }
  .rotate325_min_l-01 { transform: rotate(325deg); }
  .rotate330_min_l-01 { transform: rotate(330deg); }
  .rotate335_min_l-01 { transform: rotate(335deg); }
  .rotate340_min_l-01 { transform: rotate(340deg); }
  .rotate345_min_l-01 { transform: rotate(345deg); }
  .rotate350_min_l-01 { transform: rotate(350deg); }
  .rotate355_min_l-01 { transform: rotate(355deg); }
  .rotate360_min_l-01 { transform: rotate(360deg); }
  .rotate365_min_l-01 { transform: rotate(365deg); }
  .rotateN0_min_l-01 { transform: rotate(-0deg); }
  .rotateN5_min_l-01 { transform: rotate(-5deg); }
  .rotateN10_min_l-01 { transform: rotate(-10deg); }
  .rotateN15_min_l-01 { transform: rotate(-15deg); }
  .rotateN20_min_l-01 { transform: rotate(-20deg); }
  .rotateN25_min_l-01 { transform: rotate(-25deg); }
  .rotateN30_min_l-01 { transform: rotate(-30deg); }
  .rotateN35_min_l-01 { transform: rotate(-35deg); }
  .rotateN40_min_l-01 { transform: rotate(-40deg); }
  .rotateN45_min_l-01 { transform: rotate(-45deg); }
  .rotateN50_min_l-01 { transform: rotate(-50deg); }
  .rotateN55_min_l-01 { transform: rotate(-55deg); }
  .rotateN60_min_l-01 { transform: rotate(-60deg); }
  .rotateN65_min_l-01 { transform: rotate(-65deg); }
  .rotateN70_min_l-01 { transform: rotate(-70deg); }
  .rotateN75_min_l-01 { transform: rotate(-75deg); }
  .rotateN80_min_l-01 { transform: rotate(-80deg); }
  .rotateN85_min_l-01 { transform: rotate(-85deg); }
  .rotateN90_min_l-01 { transform: rotate(-90deg); }
  .rotateN95_min_l-01 { transform: rotate(-95deg); }
  .rotateN100_min_l-01 { transform: rotate(-100deg); }
  .rotateN105_min_l-01 { transform: rotate(-105deg); }
  .rotateN110_min_l-01 { transform: rotate(-110deg); }
  .rotateN115_min_l-01 { transform: rotate(-115deg); }
  .rotateN120_min_l-01 { transform: rotate(-120deg); }
  .rotateN125_min_l-01 { transform: rotate(-125deg); }
  .rotateN130_min_l-01 { transform: rotate(-130deg); }
  .rotateN135_min_l-01 { transform: rotate(-135deg); }
  .rotateN140_min_l-01 { transform: rotate(-140deg); }
  .rotateN145_min_l-01 { transform: rotate(-145deg); }
  .rotateN150_min_l-01 { transform: rotate(-150deg); }
  .rotateN155_min_l-01 { transform: rotate(-155deg); }
  .rotateN160_min_l-01 { transform: rotate(-160deg); }
  .rotateN165_min_l-01 { transform: rotate(-165deg); }
  .rotateN170_min_l-01 { transform: rotate(-170deg); }
  .rotateN175_min_l-01 { transform: rotate(-175deg); }
  .rotateN180_min_l-01 { transform: rotate(-180deg); }
  .rotateN185_min_l-01 { transform: rotate(-185deg); }
  .rotateN190_min_l-01 { transform: rotate(-190deg); }
  .rotateN195_min_l-01 { transform: rotate(-195deg); }
  .rotateN200_min_l-01 { transform: rotate(-200deg); }
  .rotateN205_min_l-01 { transform: rotate(-205deg); }
  .rotateN210_min_l-01 { transform: rotate(-210deg); }
  .rotateN215_min_l-01 { transform: rotate(-215deg); }
  .rotateN220_min_l-01 { transform: rotate(-220deg); }
  .rotateN225_min_l-01 { transform: rotate(-225deg); }
  .rotateN230_min_l-01 { transform: rotate(-230deg); }
  .rotateN235_min_l-01 { transform: rotate(-235deg); }
  .rotateN240_min_l-01 { transform: rotate(-240deg); }
  .rotateN245_min_l-01 { transform: rotate(-245deg); }
  .rotateN250_min_l-01 { transform: rotate(-250deg); }
  .rotateN255_min_l-01 { transform: rotate(-255deg); }
  .rotateN260_min_l-01 { transform: rotate(-260deg); }
  .rotateN265_min_l-01 { transform: rotate(-265deg); }
  .rotateN270_min_l-01 { transform: rotate(-270deg); }
  .rotateN275_min_l-01 { transform: rotate(-275deg); }
  .rotateN280_min_l-01 { transform: rotate(-280deg); }
  .rotateN285_min_l-01 { transform: rotate(-285deg); }
  .rotateN290_min_l-01 { transform: rotate(-290deg); }
  .rotateN295_min_l-01 { transform: rotate(-295deg); }
  .rotateN300_min_l-01 { transform: rotate(-300deg); }
  .rotateN305_min_l-01 { transform: rotate(-305deg); }
  .rotateN310_min_l-01 { transform: rotate(-310deg); }
  .rotateN315_min_l-01 { transform: rotate(-315deg); }
  .rotateN320_min_l-01 { transform: rotate(-320deg); }
  .rotateN325_min_l-01 { transform: rotate(-325deg); }
  .rotateN330_min_l-01 { transform: rotate(-330deg); }
  .rotateN335_min_l-01 { transform: rotate(-335deg); }
  .rotateN340_min_l-01 { transform: rotate(-340deg); }
  .rotateN345_min_l-01 { transform: rotate(-345deg); }
  .rotateN350_min_l-01 { transform: rotate(-350deg); }
  .rotateN355_min_l-01 { transform: rotate(-355deg); }
  .rotateN360_min_l-01 { transform: rotate(-360deg); }
  .rotateN365_min_l-01 { transform: rotate(-365deg); }
  .focusBlack_min_l-01:focus { color: var(--black); }
  .focusWhite_min_l-01:focus { color: var(--white); }
  .focusGreyHighlighted_min_l-01:focus { color: var(--greyHighlightedAlt); }
  .focusNeutral_min_l-01:focus { color: var(--neutralAlt); }
  .focusRed_min_l-01:focus { color: var(--redAlt); }
  .focusPurple_min_l-01:focus { color: var(--purpleAlt); }
  .focusDetailNeutral_min_l-01:focus { color: var(--detailNeutral); }
  .focusDetailMinimal_min_l-01:focus { color: var(--detailMinimal); }
  .focusBgBlack_min_l-01:focus { background-color: var(--black); fill: var(--black); }
  .focusBgWhite_min_l-01:focus { background-color: var(--white); fill: var(--white); }
  .focusBgGreyHighlighted_min_l-01:focus { background-color: var(--greyHighlightedAlt); fill: var(--greyHighlightedAlt); }
  .focusBgNeutral_min_l-01:focus { background-color: var(--neutralFillAlt); fill: var(--neutralFillAlt); }
  .focusBgLevel1_min_l-01:focus { background-color: var(--bgLevel1); fill: var(--bgLevel1); }
  .focusBgLevel2_min_l-01:focus { background-color: var(--bgLevel2); fill: var(--bgLevel2); }
  .focusBgLevel3_min_l-01:focus { background-color: var(--bgLevel3); fill: var(--bgLevel3); }
  .focusBgLevel4_min_l-01:focus { background-color: var(--bgLevel4); fill: var(--bgLevel4); }
  .focusBgRed_min_l-01:focus { background-color: var(--redFillAlt); fill: var(--redFillAlt); }
  .focusBgTeal_min_l-01:focus { background-color: var(--tealFillAlt); fill: var(--tealFillAlt); }
  .focusBgPurple_min_l-01:focus { background-color: var(--purpleFillAlt); fill: var(--purpleFillAlt); }
  .focusStrokeBlack_min_l-01:focus * { stroke: var(--black); }
  .focusStrokeWhite_min_l-01:focus * { stroke: var(--white); }
  .focusStrokeGreyHighlighted_min_l-01:focus * { stroke: var(--greyHighlightedAlt); }
  .focusStrokeNeutral_min_l-01:focus * { stroke: var(--neutralAlt); }
  .focusStrokeRed_min_l-01:focus * { stroke: var(--redAlt); }
  .focusStrokePurple_min_l-01:focus * { stroke: var(--purpleAlt); }
  .focusStrokeDetailNeutral_min_l-01:focus * { stroke: var(--detailNeutral); }
  .focusStrokeDetailMinimal_min_l-01:focus * { stroke: var(--detailMinimal); }
  .focusBorderBlack_min_l-01:focus { border-color: var(--black); }
  .focusBorderWhite_min_l-01:focus { border-color: var(--white); }
  .focusBorderGreyHighlighted_min_l-01:focus { border-color: var(--greyHighlightedAlt); }
  .focusBorderNeutral_min_l-01:focus { border-color: var(--neutralAlt); }
  .focusBorderRed_min_l-01:focus { border-color: var(--redAlt); }
  .focusBorderPurple_min_l-01:focus { border-color: var(--purpleAlt); }
  .focusBorderDetailNeutral_min_l-01:focus { border-color: var(--detailNeutral); }
  .focusBorderDetailMinimal_min_l-01:focus { border-color: var(--detailMinimal); }
  .hoverLight_min_l-01:hover { font-weight: 300; }
  .hoverRegular_min_l-01:hover { font-weight: 400; }
  .hoverMedium_min_l-01:hover { font-weight: 500; }
  .hoverBold_min_l-01:hover { font-weight: 700; }
  .hoverBlack_min_l-01:hover { color: var(--black); }
  .hoverWhite_min_l-01:hover { color: var(--white); }
  .hoverGreyHighlighted_min_l-01:hover { color: var(--greyHighlightedAlt); }
  .hoverNeutral_min_l-01:hover { color: var(--neutralAlt); }
  .hoverRed_min_l-01:hover { color: var(--redAlt); }
  .hoverPurple_min_l-01:hover { color: var(--purpleAlt); }
  .hoverDetailNeutral_min_l-01:hover { color: var(--detailNeutral); }
  .hoverDetailMinimal_min_l-01:hover { color: var(--detailMinimal); }
  .hoverBgBlack_min_l-01:hover { background-color: var(--black); fill: var(--black); }
  .hoverBgWhite_min_l-01:hover { background-color: var(--white); fill: var(--white); }
  .hoverBgGreyHighlighted_min_l-01:hover { background-color: var(--greyHighlightedAlt); fill: var(--greyHighlightedAlt); }
  .hoverBgNeutral_min_l-01:hover { background-color: var(--neutralFillAlt); fill: var(--neutralFillAlt); }
  .hoverBgLevel1_min_l-01:hover { background-color: var(--bgLevel1); fill: var(--bgLevel1); }
  .hoverBgLevel2_min_l-01:hover { background-color: var(--bgLevel2); fill: var(--bgLevel2); }
  .hoverBgLevel3_min_l-01:hover { background-color: var(--bgLevel3); fill: var(--bgLevel3); }
  .hoverBgLevel4_min_l-01:hover { background-color: var(--bgLevel4); fill: var(--bgLevel4); }
  .hoverBgRed_min_l-01:hover { background-color: var(--redFillAlt); fill: var(--redFillAlt); }
  .hoverBgTeal_min_l-01:hover { background-color: var(--tealFillAlt); fill: var(--tealFillAlt); }
  .hoverBgPurple_min_l-01:hover { background-color: var(--purpleFillAlt); fill: var(--purpleFillAlt); }
  .hoverStrokeBlack_min_l-01:hover * { stroke: var(--black); }
  .hoverStrokeWhite_min_l-01:hover * { stroke: var(--white); }
  .hoverStrokeGreyHighlighted_min_l-01:hover * { stroke: var(--greyHighlightedAlt); }
  .hoverStrokeNeutral_min_l-01:hover * { stroke: var(--neutralAlt); }
  .hoverStrokeRed_min_l-01:hover * { stroke: var(--redAlt); }
  .hoverStrokePurple_min_l-01:hover * { stroke: var(--purpleAlt); }
  .hoverStrokeDetailNeutral_min_l-01:hover * { stroke: var(--detailNeutral); }
  .hoverStrokeDetailMinimal_min_l-01:hover * { stroke: var(--detailMinimal); }
  .hoverBorderBlack_min_l-01:hover { border-color: var(--black); }
  .hoverBorderWhite_min_l-01:hover { border-color: var(--white); }
  .hoverBorderGreyHighlighted_min_l-01:hover { border-color: var(--greyHighlightedAlt); }
  .hoverBorderNeutral_min_l-01:hover { border-color: var(--neutralAlt); }
  .hoverBorderRed_min_l-01:hover { border-color: var(--redAlt); }
  .hoverBorderPurple_min_l-01:hover { border-color: var(--purpleAlt); }
  .hoverBorderDetailNeutral_min_l-01:hover { border-color: var(--detailNeutral); }
  .hoverBorderDetailMinimal_min_l-01:hover { border-color: var(--detailMinimal); }
  .light_min_l-01 { font-weight: 300; }
  .regular_min_l-01 { font-weight: 400; }
  .medium_min_l-01 { font-weight: 500; }
  .bold_min_l-01 { font-weight: 700; }
  .bgNone_min_l-01 { fill: transparent; background-color: transparent; }
  .transparent_min_l-01 { color: transparent; }
  .vHidden_min_l-01 { visibility: hidden; }
  .flexWrap_min_l-01 { display: flex; flex-wrap: wrap; }
  .flexNoWrap_min_l-01 { display: flex; flex-wrap: nowrap; }
  .flexRow_min_l-01 { display: flex; flex-direction: row; }
  .flexColumn_min_l-01 { display: flex; flex-direction: column; }
  .noShrink_min_l-01 { flex-shrink: 0; }
  .gridRowAuto_min_l-01 { grid-row: auto; }
  .gridColumnAuto_min_l-01 { grid-column: auto; }
  .selfStart_min_l-01 { align-self: flex-start; }
  .selfCenter_min_l-01 { align-self: center; }
  .selfEnd_min_l-01 { align-self: flex-end; }
  .selfStretch_min_l-01 { align-self: stretch; }
  .visible_min_l-01 { overflow: visible; }
  .visibleX_min_l-01 { overflow-x: visible; }
  .visibleY_min_l-01 { overflow-y: visible; }
  .scroll_min_l-01 { overflow: auto; }
  .scrollX_min_l-01 { overflow-x: auto; }
  .scrollY_min_l-01 { overflow-y: auto; }
  .scrollAlways_min_l-01 { overflow: scroll; }
  .scrollXAlways_min_l-01 { overflow-x: scroll; }
  .scrollYAlways_min_l-01 { overflow-y: scroll; }
  .noOverflow_min_l-01 { overflow: hidden; }
  .fMono_min_l-01 { font-family: 'IBM Plex Mono', monospace; }
  .fSans_min_l-01 { font-family: 'IBM Plex Sans', sans-serif; }
  .fs48px_min_l-01 { font-size: 48px; }
  .fs60px_min_l-01 { font-size: 60px; }
  .italic_min_l-01 { font-style: italic; }
  .lhDouble_min_l-01 { line-height:1.5em; }
  .ellipsis_min_l-01 { text-overflow: ellipsis; white-space: nowrap; overflow: hidden; }
  .lineClamp1_min_l-01 { display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical; overflow: hidden; }
  .pre_min_l-01 { white-space: pre; }
  .preLine_min_l-01 { white-space: pre-line; }
  .preWrap_min_l-01 { white-space: pre-wrap; }
  .noWrap_min_l-01 { white-space: nowrap; }
  .breakAll_min_l-01 { word-break: break-all; }
  .breakWord_min_l-01 { word-break: break-word; }
  .noDecoration_min_l-01 { text-decoration: none; }
  .hyphens_min_l-01 { hyphens: auto; }
  .hyphensMan_min_l-01 { hyphens: manual; }
  .wAuto_min_l-01 { width: auto; }
  .wFitContent_min_l-01 { width: fit-content; }
  .w100vw_min_l-01 { width: 100vw; }
  .minW100vw_min_l-01 { min-width: 100vw; }
  .maxW100vw_min_l-01 { max-width: 100vw; }
  .wThird_min_l-01 { width: calc(100% / 3); }
  .minWThird_min_l-01 { min-width: calc(100% / 3); }
  .maxWThird_min_l-01 { max-width: calc(100% / 3); }
  .wHalf_min_l-01 { width: 48%; }
  .minWHalf_min_l-01 { min-width: 48%; }
  .maxWHalf_min_l-01 { max-width: 48%; }
  .hAuto_min_l-01 { height: auto; }
  .h0_min_l-01 { height: 0; }
  .h100vh_min_l-01 { height: 100vh; }
  .h50vh_min_l-01 { height: 50vh; }
  .hFitContent_min_l-01 { height: fit-content; }
  .minH100vh_min_l-01 { min-height: 100vh; }
  .hThird_min_l-01 { height: calc(100% / 3); }
  .minHThird_min_l-01 { min-height: calc(100% / 3); }
  .maxHThird_min_l-01 { max-height: calc(100% / 3); }
  .hHalf_min_l-01 { height: 48%; }
  .minHHalf_min_l-01 { min-height: 48%; }
  .maxHHalf_min_l-01 { max-height: 48%; }
  .maAuto_min_l-01 { margin: auto; }
  .ma0_min_l-01 { margin: 0; }
  .mvAuto_min_l-01 { margin-top: auto; margin-bottom: auto; }
  .mv0_min_l-01 { margin-top: 0; margin-bottom: 0; }
  .mhAuto_min_l-01 { margin-left: auto; margin-right: auto; }
  .mh0_min_l-01 { margin-left: 0; margin-right: 0; }
  .mtAuto_min_l-01 { margin-top: auto; }
  .mt0_min_l-01 { margin-top: 0; }
  .mrAuto_min_l-01 { margin-right: auto; }
  .mr0_min_l-01 { margin-right: 0; }
  .mbAuto_min_l-01 { margin-bottom: auto; }
  .mb0_min_l-01 { margin-bottom: 0; }
  .mlAuto_min_l-01 { margin-left: auto; }
  .ml0_min_l-01 { margin-left: 0; }
  .pa0_min_l-01 { padding: 0; }
  .pv0_min_l-01 { padding-top: 0; padding-bottom: 0; }
  .ph0_min_l-01 { padding-left: 0; padding-right: 0; }
  .pt0_min_l-01 { padding-top: 0; }
  .pr0_min_l-01 { padding-right: 0; }
  .pb0_min_l-01 { padding-bottom: 0; }
  .pl0_min_l-01 { padding-left: 0; }
  .paMin_min_l-01 { padding: 2px; }
  .ptMin_min_l-01 { padding-top: 2px; }
  .prMin_min_l-01 { padding-right: 2px; }
  .pbMin_min_l-01 { padding-bottom: 2px; }
  .plMin_min_l-01 { padding-left: 2px; }
  .pvMin_min_l-01 { padding-top: 2px; padding-bottom: 2px; }
  .phMin_min_l-01 { padding-left: 2px; padding-right: 2px; }
  .br50p_min_l-01 { border-radius: 50%; }
  .baWhite_min_l-01 { border: solid 1px white; }
  .baTransparent_min_l-01 { border: solid 1px transparent; }
  .baBlack_min_l-01 { border: solid 1px rgba(0, 0, 0, 0.1); }
  .btBlack_min_l-01 { border-top: solid 1px rgba(0, 0, 0, 0.1); }
  .btWhite_min_l-01 { border-top: solid 1px white; }
  .brBlack_min_l-01 { border-right: solid 1px rgba(0, 0, 0, 0.1); }
  .bbTransparent_min_l-01 { border-bottom: solid 1px transparent; }
  .bbBlack_min_l-01 { border-bottom: solid 1px rgba(0, 0, 0, 0.1); }
  .bbWhite_min_l-01 { border-bottom: solid 1px white; }
  .bbPurple_min_l-01 { border-bottom: solid 1px var(--purple); }
  .bbPurple2_min_l-01 { border-bottom: solid 2px var(--purple); }
  .blBlack_min_l-01 { border-left: solid 1px rgba(0, 0, 0, 0.1); }
  .ol0_min_l-01 { outline: none; }
  .noShadow_min_l-01 { box-shadow: none; }
  .shadowInset_min_l-01 { box-shadow: inset 0 15px 20px rgba(0, 0, 0, 0.25); }
  .aShadowInset_min_l-01 { box-shadow: inset 0 0px 15px rgba(0, 0, 0, 0.5); }
  .rShadowInset_min_l-01 { box-shadow: inset 10px 0px 15px rgba(0, 0, 0, 0.25); }
  .lShadowInset_min_l-01 { box-shadow: inset 10px 0px -15px rgba(0, 0, 0, 0.25); }
  .tShadowInset_min_l-01 { box-shadow: inset 10px 15px 0px rgba(0, 0, 0, 0.25); }
  .bShadowInset_min_l-01 { box-shadow: inset 10px -15px 0px rgba(0, 0, 0, 0.25); }
  .bhShadow_min_l-01 { box-shadow: 25px 25px 25px rgba(0, 0, 0, 0.25), -25px 25px 25px rgba(0, 0, 0, 0.25); }
  .shadowLight_min_l-01 { box-shadow: 0 0 50px var(--white); }
  .pointer_min_l-01 { cursor: pointer; }
  .cursor_min_l-01 { cursor: default; }
  .move_min_l-01 { cursor: move; }
  .animate_min_l-01 { transition: all 0.2s ease-in-out; }
  .animateColor_min_l-01 { transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out; }
  .animateOpacity_min_l-01 { transition: opacity 0.2s ease-in-out; }
  .inactive_min_l-01 { cursor: default; opacity: 0.3;; }
  .noEvent_min_l-01 { pointer-events: none; }
  .eventAuto_min_l-01 { pointer-events: auto; }
  .noSelect_min_l-01 { user-select: none; }
  .bgWhiteRadialGradient_min_l-01 { background: radial-gradient(
    rgba(255, 255, 255, 1),
    rgba(255, 255, 255, 0.5) 20%,
    rgba(255, 255, 255, 0.25) 40%,
    rgba(255, 255, 255, 0) 70%
  );
  margin-left: -5px; }
  .t10p_min_l-01 { top: 10%; }
  .t15p_min_l-01 { top: 15%; }
  .l10p_min_l-01 { left: 10%; }
  .l25p_min_l-01 { left: 25%; }
  .hoverO0_min_l-01:hover { opacity: 0; }
  .hoverO100_min_l-01:hover { opacity: 1; }
  .hoverU_min_l-01:hover { border-bottom: solid 1px var(--white); }
  .hoverShadow_min_l-01:hover { box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.25); }
  .hoverChildPurple_min_l-01:hover * { color: var(--purpleAlt); fill: var(--purpleAlt); }
  .hoverTransparentBorder_min_l-01:hover { border-color: transparent; }
  .noScrollbar_min_l-01::-webkit-scrollbar { display: none; }
  .outlineWhite_min_l-01:focus { box-shadow: 0 0 15px 1px var(--white); background: var(--white); color: var(--grey90); }
  .firstLetterCap_min_l-01::first-letter { text-transform: uppercase; }
}
/* medium screens */
@media (max-width: 1300px) {
  .neutralOnFill_m-01 { color: var(--neutralOnFill); }
  .black_m-01 { color: var(--black); }
  .white_m-01 { color: var(--white); }
  .greyHighlighted_m-01 { color: var(--greyHighlighted); }
  .neutral_m-01 { color: var(--neutral); }
  .red_m-01 { color: var(--red); }
  .teal_m-01 { color: var(--teal); }
  .purple_m-01 { color: var(--purple); }
  .blue_m-01 { color: var(--blue); }
  .orange_m-01 { color: var(--orange); }
  .yellow_m-01 { color: var(--yellow); }
  .green_m-01 { color: var(--green); }
  .pink_m-01 { color: var(--pink); }
  .grey_m-01 { color: var(--grey); }
  .textNeutral_m-01 { color: var(--textNeutral); }
  .textMinimal_m-01 { color: var(--textMinimal); }
  .detailNeutral_m-01 { color: var(--detailNeutral); }
  .detailMinimal_m-01 { color: var(--detailMinimal); }
  .bgBlack_m-01 { fill: var--(black); background-color: var(--black); }
  .bgWhite_m-01 { fill: var--(white); background-color: var(--white); }
  .bgGreyHighlighted_m-01 { fill: var--(greyHighlighted); background-color: var(--greyHighlighted); }
  .bgNeutral_m-01 { fill: var--(neutralFill); background-color: var(--neutralFill); }
  .bgLevel1_m-01 { fill: var--(bgLevel1); background-color: var(--bgLevel1); }
  .bgLevel2_m-01 { fill: var--(bgLevel2); background-color: var(--bgLevel2); }
  .bgLevel3_m-01 { fill: var--(bgLevel3); background-color: var(--bgLevel3); }
  .bgLevel4_m-01 { fill: var--(bgLevel4); background-color: var(--bgLevel4); }
  .bgRed_m-01 { fill: var--(redFill); background-color: var(--redFill); }
  .bgTeal_m-01 { fill: var--(tealFill); background-color: var(--tealFill); }
  .bgPurple_m-01 { fill: var--(purpleFill); background-color: var(--purpleFill); }
  .bgBlue_m-01 { fill: var--(blueFill); background-color: var(--blueFill); }
  .bgOrange_m-01 { fill: var--(orangeFill); background-color: var(--orangeFill); }
  .bgYellow_m-01 { fill: var--(yellowFill); background-color: var(--yellowFill); }
  .bgGreen_m-01 { fill: var--(greenFill); background-color: var(--greenFill); }
  .bgPink_m-01 { fill: var--(pinkFill); background-color: var(--pinkFill); }
  .bgGrey_m-01 { fill: var--(greyFill); background-color: var(--greyFill); }
  .fixed_m-01 { position: fixed; }
  .relative_m-01 { position: relative; }
  .absolute_m-01 { position: absolute; }
  .l0_m-01 { left: 0; }
  .r0_m-01 { right: 0; }
  .t0_m-01 { top: 0; }
  .b0_m-01 { bottom: 0; }
  .hidden_m-01 { display: none; }
  .block_m-01 { display: block; }
  .inlineBlock_m-01 { display: inline-block; }
  .inlineFlex_m-01 { display: inline-flex; }
  .flex_m-01 { display: flex; }
  .flex0_m-01 { flex: 0; }
  .flex1_m-01 { flex: 1; }
  .flex2_m-01 { flex: 2; }
  .flex3_m-01 { flex: 3; }
  .flex4_m-01 { flex: 4; }
  .flex5_m-01 { flex: 5; }
  .flex6_m-01 { flex: 6; }
  .flex7_m-01 { flex: 7; }
  .flex8_m-01 { flex: 8; }
  .flex9_m-01 { flex: 9; }
  .flex10_m-01 { flex: 10; }
  .justifyStart_m-01 { display: flex; justify-content: flex-start; }
  .justifyCenter_m-01 { display: flex; justify-content: center; }
  .justifyEnd_m-01 { display: flex; justify-content: flex-end; }
  .justifyBetween_m-01 { display: flex; justify-content: space-between; }
  .justifyAround_m-01 { display: flex; justify-content: space-around; }
  .justifyBaseline_m-01 { display: flex; justify-content: baseline; }
  .justifyEvenly_m-01 { display: flex; justify-content: space-evenly; }
  .justifyStretch_m-01 { display: flex; justify-content: stretch; }
  .alignStart_m-01 { display: flex; align-items: flex-start; }
  .alignCenter_m-01 { display: flex; align-items: center; }
  .alignEnd_m-01 { display: flex; align-items: flex-end; }
  .alignBetween_m-01 { display: flex; align-items: space-between; }
  .alignAround_m-01 { display: flex; align-items: space-around; }
  .alignBaseline_m-01 { display: flex; align-items: baseline; }
  .alignStretch_m-01 { display: flex; align-items: stretch; }
  .flexGrow0_m-01 { flex-grow: 0; }
  .flexGrow1_m-01 { flex-grow: 1; }
  .flexGrow2_m-01 { flex-grow: 2; }
  .flexGrow3_m-01 { flex-grow: 3; }
  .flexGrow4_m-01 { flex-grow: 4; }
  .flexGrow5_m-01 { flex-grow: 5; }
  .flexShrink0_m-01 { flex-shrink: 0; }
  .flexShrink1_m-01 { flex-shrink: 1; }
  .flexShrink2_m-01 { flex-shrink: 2; }
  .flexShrink3_m-01 { flex-shrink: 3; }
  .flexShrink4_m-01 { flex-shrink: 4; }
  .flexShrink5_m-01 { flex-shrink: 5; }
  .order1_m-01 { order: 1; }
  .order2_m-01 { order: 2; }
  .order3_m-01 { order: 3; }
  .order4_m-01 { order: 4; }
  .order5_m-01 { order: 5; }
  .order6_m-01 { order: 6; }
  .order7_m-01 { order: 7; }
  .order8_m-01 { order: 8; }
  .order9_m-01 { order: 9; }
  .order10_m-01 { order: 10; }
  .zi0_m-01 { z-index: 0; }
  .zi1_m-01 { z-index: 1; }
  .zi2_m-01 { z-index: 2; }
  .zi3_m-01 { z-index: 3; }
  .zi4_m-01 { z-index: 4; }
  .zi5_m-01 { z-index: 5; }
  .zi6_m-01 { z-index: 6; }
  .zi7_m-01 { z-index: 7; }
  .zi8_m-01 { z-index: 8; }
  .zi9_m-01 { z-index: 9; }
  .zi10_m-01 { z-index: 10; }
  .zi11_m-01 { z-index: 11; }
  .zi12_m-01 { z-index: 12; }
  .zi13_m-01 { z-index: 13; }
  .zi14_m-01 { z-index: 14; }
  .zi15_m-01 { z-index: 15; }
  .zi16_m-01 { z-index: 16; }
  .zi17_m-01 { z-index: 17; }
  .zi18_m-01 { z-index: 18; }
  .zi19_m-01 { z-index: 19; }
  .zi20_m-01 { z-index: 20; }
  .zi21_m-01 { z-index: 21; }
  .zi22_m-01 { z-index: 22; }
  .zi23_m-01 { z-index: 23; }
  .zi24_m-01 { z-index: 24; }
  .zi25_m-01 { z-index: 25; }
  .zi26_m-01 { z-index: 26; }
  .zi27_m-01 { z-index: 27; }
  .zi28_m-01 { z-index: 28; }
  .zi29_m-01 { z-index: 29; }
  .zi30_m-01 { z-index: 30; }
  .zi31_m-01 { z-index: 31; }
  .zi32_m-01 { z-index: 32; }
  .zi33_m-01 { z-index: 33; }
  .zi34_m-01 { z-index: 34; }
  .zi35_m-01 { z-index: 35; }
  .zi36_m-01 { z-index: 36; }
  .zi37_m-01 { z-index: 37; }
  .zi38_m-01 { z-index: 38; }
  .zi39_m-01 { z-index: 39; }
  .zi40_m-01 { z-index: 40; }
  .zi41_m-01 { z-index: 41; }
  .zi42_m-01 { z-index: 42; }
  .zi43_m-01 { z-index: 43; }
  .zi44_m-01 { z-index: 44; }
  .zi45_m-01 { z-index: 45; }
  .zi46_m-01 { z-index: 46; }
  .zi47_m-01 { z-index: 47; }
  .zi48_m-01 { z-index: 48; }
  .zi49_m-01 { z-index: 49; }
  .zi50_m-01 { z-index: 50; }
  .fs1_m-01 { font-size: 4rem; }
  .fs2_m-01 { font-size: 2.5rem; }
  .fs3_m-01 { font-size: 1.5rem; }
  .fs4_m-01 { font-size: 1.25rem; }
  .fs5_m-01 { font-size: 1rem; }
  .fs6_m-01 { font-size: 0.9rem; }
  .fs7_m-01 { font-size: 0.75rem; }
  .textLeft_m-01 { text-align: left; }
  .textCenter_m-01 { text-align: center; }
  .textRight_m-01 { text-align: right; }
  .textEnd_m-01 { text-align: end; }
  .lh1_m-01 { line-height: 1; }
  .lh2_m-01 { line-height: 1.25; }
  .lh3_m-01 { line-height: 1.5; }
  .lh4_m-01 { line-height: 1.75; }
  .lh5_m-01 { line-height: 2; }
  .lh6_m-01 { line-height: 2.25; }
  .lh1px_m-01 { line-height: var(--px1); }
  .lh2px_m-01 { line-height: var(--px2); }
  .lh3px_m-01 { line-height: var(--px3); }
  .lh4px_m-01 { line-height: var(--px4); }
  .lh5px_m-01 { line-height: var(--px5); }
  .lh6px_m-01 { line-height: var(--px6); }
  .lh7px_m-01 { line-height: var(--px7); }
  .lh8px_m-01 { line-height: var(--px8); }
  .lh9px_m-01 { line-height: var(--px9); }
  .lh10px_m-01 { line-height: var(--px10); }
  .lh11px_m-01 { line-height: var(--px11); }
  .lh12px_m-01 { line-height: var(--px12); }
  .lh13px_m-01 { line-height: var(--px13); }
  .lh14px_m-01 { line-height: var(--px14); }
  .lh15px_m-01 { line-height: var(--px15); }
  .lh16px_m-01 { line-height: var(--px16); }
  .lh17px_m-01 { line-height: var(--px17); }
  .lh18px_m-01 { line-height: var(--px18); }
  .lh19px_m-01 { line-height: var(--px19); }
  .lh20px_m-01 { line-height: var(--px20); }
  .ls1_m-01 { letter-spacing: 0.03em; }
  .ls2_m-01 { letter-spacing: 0.02em; }
  .ls3_m-01 { letter-spacing: 0.015em; }
  .uppercase_m-01 { text-transform: uppercase; }
  .lowercase_m-01 { text-transform: lowercase; }
  .capitalize_m-01 { text-transform: capitalize; }
  .gridRow0_m-01 { grid-row: 0; }
  .gridRow1_m-01 { grid-row: 1; }
  .gridRow2_m-01 { grid-row: 2; }
  .gridRow3_m-01 { grid-row: 3; }
  .gridRow4_m-01 { grid-row: 4; }
  .gridRow5_m-01 { grid-row: 5; }
  .gridRow6_m-01 { grid-row: 6; }
  .gridRow7_m-01 { grid-row: 7; }
  .gridRow8_m-01 { grid-row: 8; }
  .gridRow9_m-01 { grid-row: 9; }
  .gridRow10_m-01 { grid-row: 10; }
  .gridRow11_m-01 { grid-row: 11; }
  .gridRow12_m-01 { grid-row: 12; }
  .gridRow0to0_m-01 { grid-row: 0 / 0; }
  .gridRow0to1_m-01 { grid-row: 0 / 1; }
  .gridRow0to2_m-01 { grid-row: 0 / 2; }
  .gridRow0to3_m-01 { grid-row: 0 / 3; }
  .gridRow0to4_m-01 { grid-row: 0 / 4; }
  .gridRow0to5_m-01 { grid-row: 0 / 5; }
  .gridRow0to6_m-01 { grid-row: 0 / 6; }
  .gridRow0to7_m-01 { grid-row: 0 / 7; }
  .gridRow0to8_m-01 { grid-row: 0 / 8; }
  .gridRow0to9_m-01 { grid-row: 0 / 9; }
  .gridRow0to10_m-01 { grid-row: 0 / 10; }
  .gridRow0to11_m-01 { grid-row: 0 / 11; }
  .gridRow0to12_m-01 { grid-row: 0 / 12; }
  .gridRow1to0_m-01 { grid-row: 1 / 0; }
  .gridRow1to1_m-01 { grid-row: 1 / 1; }
  .gridRow1to2_m-01 { grid-row: 1 / 2; }
  .gridRow1to3_m-01 { grid-row: 1 / 3; }
  .gridRow1to4_m-01 { grid-row: 1 / 4; }
  .gridRow1to5_m-01 { grid-row: 1 / 5; }
  .gridRow1to6_m-01 { grid-row: 1 / 6; }
  .gridRow1to7_m-01 { grid-row: 1 / 7; }
  .gridRow1to8_m-01 { grid-row: 1 / 8; }
  .gridRow1to9_m-01 { grid-row: 1 / 9; }
  .gridRow1to10_m-01 { grid-row: 1 / 10; }
  .gridRow1to11_m-01 { grid-row: 1 / 11; }
  .gridRow1to12_m-01 { grid-row: 1 / 12; }
  .gridRow2to0_m-01 { grid-row: 2 / 0; }
  .gridRow2to1_m-01 { grid-row: 2 / 1; }
  .gridRow2to2_m-01 { grid-row: 2 / 2; }
  .gridRow2to3_m-01 { grid-row: 2 / 3; }
  .gridRow2to4_m-01 { grid-row: 2 / 4; }
  .gridRow2to5_m-01 { grid-row: 2 / 5; }
  .gridRow2to6_m-01 { grid-row: 2 / 6; }
  .gridRow2to7_m-01 { grid-row: 2 / 7; }
  .gridRow2to8_m-01 { grid-row: 2 / 8; }
  .gridRow2to9_m-01 { grid-row: 2 / 9; }
  .gridRow2to10_m-01 { grid-row: 2 / 10; }
  .gridRow2to11_m-01 { grid-row: 2 / 11; }
  .gridRow2to12_m-01 { grid-row: 2 / 12; }
  .gridRow3to0_m-01 { grid-row: 3 / 0; }
  .gridRow3to1_m-01 { grid-row: 3 / 1; }
  .gridRow3to2_m-01 { grid-row: 3 / 2; }
  .gridRow3to3_m-01 { grid-row: 3 / 3; }
  .gridRow3to4_m-01 { grid-row: 3 / 4; }
  .gridRow3to5_m-01 { grid-row: 3 / 5; }
  .gridRow3to6_m-01 { grid-row: 3 / 6; }
  .gridRow3to7_m-01 { grid-row: 3 / 7; }
  .gridRow3to8_m-01 { grid-row: 3 / 8; }
  .gridRow3to9_m-01 { grid-row: 3 / 9; }
  .gridRow3to10_m-01 { grid-row: 3 / 10; }
  .gridRow3to11_m-01 { grid-row: 3 / 11; }
  .gridRow3to12_m-01 { grid-row: 3 / 12; }
  .gridRow4to0_m-01 { grid-row: 4 / 0; }
  .gridRow4to1_m-01 { grid-row: 4 / 1; }
  .gridRow4to2_m-01 { grid-row: 4 / 2; }
  .gridRow4to3_m-01 { grid-row: 4 / 3; }
  .gridRow4to4_m-01 { grid-row: 4 / 4; }
  .gridRow4to5_m-01 { grid-row: 4 / 5; }
  .gridRow4to6_m-01 { grid-row: 4 / 6; }
  .gridRow4to7_m-01 { grid-row: 4 / 7; }
  .gridRow4to8_m-01 { grid-row: 4 / 8; }
  .gridRow4to9_m-01 { grid-row: 4 / 9; }
  .gridRow4to10_m-01 { grid-row: 4 / 10; }
  .gridRow4to11_m-01 { grid-row: 4 / 11; }
  .gridRow4to12_m-01 { grid-row: 4 / 12; }
  .gridRow5to0_m-01 { grid-row: 5 / 0; }
  .gridRow5to1_m-01 { grid-row: 5 / 1; }
  .gridRow5to2_m-01 { grid-row: 5 / 2; }
  .gridRow5to3_m-01 { grid-row: 5 / 3; }
  .gridRow5to4_m-01 { grid-row: 5 / 4; }
  .gridRow5to5_m-01 { grid-row: 5 / 5; }
  .gridRow5to6_m-01 { grid-row: 5 / 6; }
  .gridRow5to7_m-01 { grid-row: 5 / 7; }
  .gridRow5to8_m-01 { grid-row: 5 / 8; }
  .gridRow5to9_m-01 { grid-row: 5 / 9; }
  .gridRow5to10_m-01 { grid-row: 5 / 10; }
  .gridRow5to11_m-01 { grid-row: 5 / 11; }
  .gridRow5to12_m-01 { grid-row: 5 / 12; }
  .gridRow6to0_m-01 { grid-row: 6 / 0; }
  .gridRow6to1_m-01 { grid-row: 6 / 1; }
  .gridRow6to2_m-01 { grid-row: 6 / 2; }
  .gridRow6to3_m-01 { grid-row: 6 / 3; }
  .gridRow6to4_m-01 { grid-row: 6 / 4; }
  .gridRow6to5_m-01 { grid-row: 6 / 5; }
  .gridRow6to6_m-01 { grid-row: 6 / 6; }
  .gridRow6to7_m-01 { grid-row: 6 / 7; }
  .gridRow6to8_m-01 { grid-row: 6 / 8; }
  .gridRow6to9_m-01 { grid-row: 6 / 9; }
  .gridRow6to10_m-01 { grid-row: 6 / 10; }
  .gridRow6to11_m-01 { grid-row: 6 / 11; }
  .gridRow6to12_m-01 { grid-row: 6 / 12; }
  .gridRow7to0_m-01 { grid-row: 7 / 0; }
  .gridRow7to1_m-01 { grid-row: 7 / 1; }
  .gridRow7to2_m-01 { grid-row: 7 / 2; }
  .gridRow7to3_m-01 { grid-row: 7 / 3; }
  .gridRow7to4_m-01 { grid-row: 7 / 4; }
  .gridRow7to5_m-01 { grid-row: 7 / 5; }
  .gridRow7to6_m-01 { grid-row: 7 / 6; }
  .gridRow7to7_m-01 { grid-row: 7 / 7; }
  .gridRow7to8_m-01 { grid-row: 7 / 8; }
  .gridRow7to9_m-01 { grid-row: 7 / 9; }
  .gridRow7to10_m-01 { grid-row: 7 / 10; }
  .gridRow7to11_m-01 { grid-row: 7 / 11; }
  .gridRow7to12_m-01 { grid-row: 7 / 12; }
  .gridRow8to0_m-01 { grid-row: 8 / 0; }
  .gridRow8to1_m-01 { grid-row: 8 / 1; }
  .gridRow8to2_m-01 { grid-row: 8 / 2; }
  .gridRow8to3_m-01 { grid-row: 8 / 3; }
  .gridRow8to4_m-01 { grid-row: 8 / 4; }
  .gridRow8to5_m-01 { grid-row: 8 / 5; }
  .gridRow8to6_m-01 { grid-row: 8 / 6; }
  .gridRow8to7_m-01 { grid-row: 8 / 7; }
  .gridRow8to8_m-01 { grid-row: 8 / 8; }
  .gridRow8to9_m-01 { grid-row: 8 / 9; }
  .gridRow8to10_m-01 { grid-row: 8 / 10; }
  .gridRow8to11_m-01 { grid-row: 8 / 11; }
  .gridRow8to12_m-01 { grid-row: 8 / 12; }
  .gridRow9to0_m-01 { grid-row: 9 / 0; }
  .gridRow9to1_m-01 { grid-row: 9 / 1; }
  .gridRow9to2_m-01 { grid-row: 9 / 2; }
  .gridRow9to3_m-01 { grid-row: 9 / 3; }
  .gridRow9to4_m-01 { grid-row: 9 / 4; }
  .gridRow9to5_m-01 { grid-row: 9 / 5; }
  .gridRow9to6_m-01 { grid-row: 9 / 6; }
  .gridRow9to7_m-01 { grid-row: 9 / 7; }
  .gridRow9to8_m-01 { grid-row: 9 / 8; }
  .gridRow9to9_m-01 { grid-row: 9 / 9; }
  .gridRow9to10_m-01 { grid-row: 9 / 10; }
  .gridRow9to11_m-01 { grid-row: 9 / 11; }
  .gridRow9to12_m-01 { grid-row: 9 / 12; }
  .gridRow10to0_m-01 { grid-row: 10 / 0; }
  .gridRow10to1_m-01 { grid-row: 10 / 1; }
  .gridRow10to2_m-01 { grid-row: 10 / 2; }
  .gridRow10to3_m-01 { grid-row: 10 / 3; }
  .gridRow10to4_m-01 { grid-row: 10 / 4; }
  .gridRow10to5_m-01 { grid-row: 10 / 5; }
  .gridRow10to6_m-01 { grid-row: 10 / 6; }
  .gridRow10to7_m-01 { grid-row: 10 / 7; }
  .gridRow10to8_m-01 { grid-row: 10 / 8; }
  .gridRow10to9_m-01 { grid-row: 10 / 9; }
  .gridRow10to10_m-01 { grid-row: 10 / 10; }
  .gridRow10to11_m-01 { grid-row: 10 / 11; }
  .gridRow10to12_m-01 { grid-row: 10 / 12; }
  .gridRow11to0_m-01 { grid-row: 11 / 0; }
  .gridRow11to1_m-01 { grid-row: 11 / 1; }
  .gridRow11to2_m-01 { grid-row: 11 / 2; }
  .gridRow11to3_m-01 { grid-row: 11 / 3; }
  .gridRow11to4_m-01 { grid-row: 11 / 4; }
  .gridRow11to5_m-01 { grid-row: 11 / 5; }
  .gridRow11to6_m-01 { grid-row: 11 / 6; }
  .gridRow11to7_m-01 { grid-row: 11 / 7; }
  .gridRow11to8_m-01 { grid-row: 11 / 8; }
  .gridRow11to9_m-01 { grid-row: 11 / 9; }
  .gridRow11to10_m-01 { grid-row: 11 / 10; }
  .gridRow11to11_m-01 { grid-row: 11 / 11; }
  .gridRow11to12_m-01 { grid-row: 11 / 12; }
  .gridRow12to0_m-01 { grid-row: 12 / 0; }
  .gridRow12to1_m-01 { grid-row: 12 / 1; }
  .gridRow12to2_m-01 { grid-row: 12 / 2; }
  .gridRow12to3_m-01 { grid-row: 12 / 3; }
  .gridRow12to4_m-01 { grid-row: 12 / 4; }
  .gridRow12to5_m-01 { grid-row: 12 / 5; }
  .gridRow12to6_m-01 { grid-row: 12 / 6; }
  .gridRow12to7_m-01 { grid-row: 12 / 7; }
  .gridRow12to8_m-01 { grid-row: 12 / 8; }
  .gridRow12to9_m-01 { grid-row: 12 / 9; }
  .gridRow12to10_m-01 { grid-row: 12 / 10; }
  .gridRow12to11_m-01 { grid-row: 12 / 11; }
  .gridRow12to12_m-01 { grid-row: 12 / 12; }
  .gridRowSpan0_m-01 { grid-row: auto / span 0; }
  .gridRowSpan1_m-01 { grid-row: auto / span 1; }
  .gridRowSpan2_m-01 { grid-row: auto / span 2; }
  .gridRowSpan3_m-01 { grid-row: auto / span 3; }
  .gridRowSpan4_m-01 { grid-row: auto / span 4; }
  .gridRowSpan5_m-01 { grid-row: auto / span 5; }
  .gridRowSpan6_m-01 { grid-row: auto / span 6; }
  .gridRowSpan7_m-01 { grid-row: auto / span 7; }
  .gridRowSpan8_m-01 { grid-row: auto / span 8; }
  .gridRowSpan9_m-01 { grid-row: auto / span 9; }
  .gridRowSpan10_m-01 { grid-row: auto / span 10; }
  .gridColumn0_m-01 { grid-column: 0; }
  .gridColumn1_m-01 { grid-column: 1; }
  .gridColumn2_m-01 { grid-column: 2; }
  .gridColumn3_m-01 { grid-column: 3; }
  .gridColumn4_m-01 { grid-column: 4; }
  .gridColumn5_m-01 { grid-column: 5; }
  .gridColumn6_m-01 { grid-column: 6; }
  .gridColumn7_m-01 { grid-column: 7; }
  .gridColumn8_m-01 { grid-column: 8; }
  .gridColumn9_m-01 { grid-column: 9; }
  .gridColumn10_m-01 { grid-column: 10; }
  .gridColumn11_m-01 { grid-column: 11; }
  .gridColumn12_m-01 { grid-column: 12; }
  .gridColumn0to0_m-01 { grid-column: 0 / 0; }
  .gridColumn0to1_m-01 { grid-column: 0 / 1; }
  .gridColumn0to2_m-01 { grid-column: 0 / 2; }
  .gridColumn0to3_m-01 { grid-column: 0 / 3; }
  .gridColumn0to4_m-01 { grid-column: 0 / 4; }
  .gridColumn0to5_m-01 { grid-column: 0 / 5; }
  .gridColumn0to6_m-01 { grid-column: 0 / 6; }
  .gridColumn0to7_m-01 { grid-column: 0 / 7; }
  .gridColumn0to8_m-01 { grid-column: 0 / 8; }
  .gridColumn0to9_m-01 { grid-column: 0 / 9; }
  .gridColumn0to10_m-01 { grid-column: 0 / 10; }
  .gridColumn0to11_m-01 { grid-column: 0 / 11; }
  .gridColumn0to12_m-01 { grid-column: 0 / 12; }
  .gridColumn1to0_m-01 { grid-column: 1 / 0; }
  .gridColumn1to1_m-01 { grid-column: 1 / 1; }
  .gridColumn1to2_m-01 { grid-column: 1 / 2; }
  .gridColumn1to3_m-01 { grid-column: 1 / 3; }
  .gridColumn1to4_m-01 { grid-column: 1 / 4; }
  .gridColumn1to5_m-01 { grid-column: 1 / 5; }
  .gridColumn1to6_m-01 { grid-column: 1 / 6; }
  .gridColumn1to7_m-01 { grid-column: 1 / 7; }
  .gridColumn1to8_m-01 { grid-column: 1 / 8; }
  .gridColumn1to9_m-01 { grid-column: 1 / 9; }
  .gridColumn1to10_m-01 { grid-column: 1 / 10; }
  .gridColumn1to11_m-01 { grid-column: 1 / 11; }
  .gridColumn1to12_m-01 { grid-column: 1 / 12; }
  .gridColumn2to0_m-01 { grid-column: 2 / 0; }
  .gridColumn2to1_m-01 { grid-column: 2 / 1; }
  .gridColumn2to2_m-01 { grid-column: 2 / 2; }
  .gridColumn2to3_m-01 { grid-column: 2 / 3; }
  .gridColumn2to4_m-01 { grid-column: 2 / 4; }
  .gridColumn2to5_m-01 { grid-column: 2 / 5; }
  .gridColumn2to6_m-01 { grid-column: 2 / 6; }
  .gridColumn2to7_m-01 { grid-column: 2 / 7; }
  .gridColumn2to8_m-01 { grid-column: 2 / 8; }
  .gridColumn2to9_m-01 { grid-column: 2 / 9; }
  .gridColumn2to10_m-01 { grid-column: 2 / 10; }
  .gridColumn2to11_m-01 { grid-column: 2 / 11; }
  .gridColumn2to12_m-01 { grid-column: 2 / 12; }
  .gridColumn3to0_m-01 { grid-column: 3 / 0; }
  .gridColumn3to1_m-01 { grid-column: 3 / 1; }
  .gridColumn3to2_m-01 { grid-column: 3 / 2; }
  .gridColumn3to3_m-01 { grid-column: 3 / 3; }
  .gridColumn3to4_m-01 { grid-column: 3 / 4; }
  .gridColumn3to5_m-01 { grid-column: 3 / 5; }
  .gridColumn3to6_m-01 { grid-column: 3 / 6; }
  .gridColumn3to7_m-01 { grid-column: 3 / 7; }
  .gridColumn3to8_m-01 { grid-column: 3 / 8; }
  .gridColumn3to9_m-01 { grid-column: 3 / 9; }
  .gridColumn3to10_m-01 { grid-column: 3 / 10; }
  .gridColumn3to11_m-01 { grid-column: 3 / 11; }
  .gridColumn3to12_m-01 { grid-column: 3 / 12; }
  .gridColumn4to0_m-01 { grid-column: 4 / 0; }
  .gridColumn4to1_m-01 { grid-column: 4 / 1; }
  .gridColumn4to2_m-01 { grid-column: 4 / 2; }
  .gridColumn4to3_m-01 { grid-column: 4 / 3; }
  .gridColumn4to4_m-01 { grid-column: 4 / 4; }
  .gridColumn4to5_m-01 { grid-column: 4 / 5; }
  .gridColumn4to6_m-01 { grid-column: 4 / 6; }
  .gridColumn4to7_m-01 { grid-column: 4 / 7; }
  .gridColumn4to8_m-01 { grid-column: 4 / 8; }
  .gridColumn4to9_m-01 { grid-column: 4 / 9; }
  .gridColumn4to10_m-01 { grid-column: 4 / 10; }
  .gridColumn4to11_m-01 { grid-column: 4 / 11; }
  .gridColumn4to12_m-01 { grid-column: 4 / 12; }
  .gridColumn5to0_m-01 { grid-column: 5 / 0; }
  .gridColumn5to1_m-01 { grid-column: 5 / 1; }
  .gridColumn5to2_m-01 { grid-column: 5 / 2; }
  .gridColumn5to3_m-01 { grid-column: 5 / 3; }
  .gridColumn5to4_m-01 { grid-column: 5 / 4; }
  .gridColumn5to5_m-01 { grid-column: 5 / 5; }
  .gridColumn5to6_m-01 { grid-column: 5 / 6; }
  .gridColumn5to7_m-01 { grid-column: 5 / 7; }
  .gridColumn5to8_m-01 { grid-column: 5 / 8; }
  .gridColumn5to9_m-01 { grid-column: 5 / 9; }
  .gridColumn5to10_m-01 { grid-column: 5 / 10; }
  .gridColumn5to11_m-01 { grid-column: 5 / 11; }
  .gridColumn5to12_m-01 { grid-column: 5 / 12; }
  .gridColumn6to0_m-01 { grid-column: 6 / 0; }
  .gridColumn6to1_m-01 { grid-column: 6 / 1; }
  .gridColumn6to2_m-01 { grid-column: 6 / 2; }
  .gridColumn6to3_m-01 { grid-column: 6 / 3; }
  .gridColumn6to4_m-01 { grid-column: 6 / 4; }
  .gridColumn6to5_m-01 { grid-column: 6 / 5; }
  .gridColumn6to6_m-01 { grid-column: 6 / 6; }
  .gridColumn6to7_m-01 { grid-column: 6 / 7; }
  .gridColumn6to8_m-01 { grid-column: 6 / 8; }
  .gridColumn6to9_m-01 { grid-column: 6 / 9; }
  .gridColumn6to10_m-01 { grid-column: 6 / 10; }
  .gridColumn6to11_m-01 { grid-column: 6 / 11; }
  .gridColumn6to12_m-01 { grid-column: 6 / 12; }
  .gridColumn7to0_m-01 { grid-column: 7 / 0; }
  .gridColumn7to1_m-01 { grid-column: 7 / 1; }
  .gridColumn7to2_m-01 { grid-column: 7 / 2; }
  .gridColumn7to3_m-01 { grid-column: 7 / 3; }
  .gridColumn7to4_m-01 { grid-column: 7 / 4; }
  .gridColumn7to5_m-01 { grid-column: 7 / 5; }
  .gridColumn7to6_m-01 { grid-column: 7 / 6; }
  .gridColumn7to7_m-01 { grid-column: 7 / 7; }
  .gridColumn7to8_m-01 { grid-column: 7 / 8; }
  .gridColumn7to9_m-01 { grid-column: 7 / 9; }
  .gridColumn7to10_m-01 { grid-column: 7 / 10; }
  .gridColumn7to11_m-01 { grid-column: 7 / 11; }
  .gridColumn7to12_m-01 { grid-column: 7 / 12; }
  .gridColumn8to0_m-01 { grid-column: 8 / 0; }
  .gridColumn8to1_m-01 { grid-column: 8 / 1; }
  .gridColumn8to2_m-01 { grid-column: 8 / 2; }
  .gridColumn8to3_m-01 { grid-column: 8 / 3; }
  .gridColumn8to4_m-01 { grid-column: 8 / 4; }
  .gridColumn8to5_m-01 { grid-column: 8 / 5; }
  .gridColumn8to6_m-01 { grid-column: 8 / 6; }
  .gridColumn8to7_m-01 { grid-column: 8 / 7; }
  .gridColumn8to8_m-01 { grid-column: 8 / 8; }
  .gridColumn8to9_m-01 { grid-column: 8 / 9; }
  .gridColumn8to10_m-01 { grid-column: 8 / 10; }
  .gridColumn8to11_m-01 { grid-column: 8 / 11; }
  .gridColumn8to12_m-01 { grid-column: 8 / 12; }
  .gridColumn9to0_m-01 { grid-column: 9 / 0; }
  .gridColumn9to1_m-01 { grid-column: 9 / 1; }
  .gridColumn9to2_m-01 { grid-column: 9 / 2; }
  .gridColumn9to3_m-01 { grid-column: 9 / 3; }
  .gridColumn9to4_m-01 { grid-column: 9 / 4; }
  .gridColumn9to5_m-01 { grid-column: 9 / 5; }
  .gridColumn9to6_m-01 { grid-column: 9 / 6; }
  .gridColumn9to7_m-01 { grid-column: 9 / 7; }
  .gridColumn9to8_m-01 { grid-column: 9 / 8; }
  .gridColumn9to9_m-01 { grid-column: 9 / 9; }
  .gridColumn9to10_m-01 { grid-column: 9 / 10; }
  .gridColumn9to11_m-01 { grid-column: 9 / 11; }
  .gridColumn9to12_m-01 { grid-column: 9 / 12; }
  .gridColumn10to0_m-01 { grid-column: 10 / 0; }
  .gridColumn10to1_m-01 { grid-column: 10 / 1; }
  .gridColumn10to2_m-01 { grid-column: 10 / 2; }
  .gridColumn10to3_m-01 { grid-column: 10 / 3; }
  .gridColumn10to4_m-01 { grid-column: 10 / 4; }
  .gridColumn10to5_m-01 { grid-column: 10 / 5; }
  .gridColumn10to6_m-01 { grid-column: 10 / 6; }
  .gridColumn10to7_m-01 { grid-column: 10 / 7; }
  .gridColumn10to8_m-01 { grid-column: 10 / 8; }
  .gridColumn10to9_m-01 { grid-column: 10 / 9; }
  .gridColumn10to10_m-01 { grid-column: 10 / 10; }
  .gridColumn10to11_m-01 { grid-column: 10 / 11; }
  .gridColumn10to12_m-01 { grid-column: 10 / 12; }
  .gridColumn11to0_m-01 { grid-column: 11 / 0; }
  .gridColumn11to1_m-01 { grid-column: 11 / 1; }
  .gridColumn11to2_m-01 { grid-column: 11 / 2; }
  .gridColumn11to3_m-01 { grid-column: 11 / 3; }
  .gridColumn11to4_m-01 { grid-column: 11 / 4; }
  .gridColumn11to5_m-01 { grid-column: 11 / 5; }
  .gridColumn11to6_m-01 { grid-column: 11 / 6; }
  .gridColumn11to7_m-01 { grid-column: 11 / 7; }
  .gridColumn11to8_m-01 { grid-column: 11 / 8; }
  .gridColumn11to9_m-01 { grid-column: 11 / 9; }
  .gridColumn11to10_m-01 { grid-column: 11 / 10; }
  .gridColumn11to11_m-01 { grid-column: 11 / 11; }
  .gridColumn11to12_m-01 { grid-column: 11 / 12; }
  .gridColumn12to0_m-01 { grid-column: 12 / 0; }
  .gridColumn12to1_m-01 { grid-column: 12 / 1; }
  .gridColumn12to2_m-01 { grid-column: 12 / 2; }
  .gridColumn12to3_m-01 { grid-column: 12 / 3; }
  .gridColumn12to4_m-01 { grid-column: 12 / 4; }
  .gridColumn12to5_m-01 { grid-column: 12 / 5; }
  .gridColumn12to6_m-01 { grid-column: 12 / 6; }
  .gridColumn12to7_m-01 { grid-column: 12 / 7; }
  .gridColumn12to8_m-01 { grid-column: 12 / 8; }
  .gridColumn12to9_m-01 { grid-column: 12 / 9; }
  .gridColumn12to10_m-01 { grid-column: 12 / 10; }
  .gridColumn12to11_m-01 { grid-column: 12 / 11; }
  .gridColumn12to12_m-01 { grid-column: 12 / 12; }
  .gridColumnSpan0_m-01 { grid-column: auto / span 0; }
  .gridColumnSpan1_m-01 { grid-column: auto / span 1; }
  .gridColumnSpan2_m-01 { grid-column: auto / span 2; }
  .gridColumnSpan3_m-01 { grid-column: auto / span 3; }
  .gridColumnSpan4_m-01 { grid-column: auto / span 4; }
  .gridColumnSpan5_m-01 { grid-column: auto / span 5; }
  .gridColumnSpan6_m-01 { grid-column: auto / span 6; }
  .gridColumnSpan7_m-01 { grid-column: auto / span 7; }
  .gridColumnSpan8_m-01 { grid-column: auto / span 8; }
  .gridColumnSpan9_m-01 { grid-column: auto / span 9; }
  .gridColumnSpan10_m-01 { grid-column: auto / span 10; }
  .w1_m-01 { width: var(--rem1); }
  .w2_m-01 { width: var(--rem2); }
  .w3_m-01 { width: var(--rem3); }
  .w4_m-01 { width: var(--rem4); }
  .w5_m-01 { width: var(--rem5); }
  .w6_m-01 { width: var(--rem6); }
  .w7_m-01 { width: var(--rem7); }
  .w1px_m-01 { width: var(--px1); }
  .w2px_m-01 { width: var(--px2); }
  .w3px_m-01 { width: var(--px3); }
  .w4px_m-01 { width: var(--px4); }
  .w5px_m-01 { width: var(--px5); }
  .w6px_m-01 { width: var(--px6); }
  .w7px_m-01 { width: var(--px7); }
  .w8px_m-01 { width: var(--px8); }
  .w9px_m-01 { width: var(--px9); }
  .w10px_m-01 { width: var(--px10); }
  .w11px_m-01 { width: var(--px11); }
  .w12px_m-01 { width: var(--px12); }
  .w13px_m-01 { width: var(--px13); }
  .w14px_m-01 { width: var(--px14); }
  .w15px_m-01 { width: var(--px15); }
  .w16px_m-01 { width: var(--px16); }
  .w17px_m-01 { width: var(--px17); }
  .w18px_m-01 { width: var(--px18); }
  .w19px_m-01 { width: var(--px19); }
  .w20px_m-01 { width: var(--px20); }
  .w1p_m-01 { width: 1%; }
  .w2p_m-01 { width: 2%; }
  .w3p_m-01 { width: 3%; }
  .w4p_m-01 { width: 4%; }
  .w5p_m-01 { width: 5%; }
  .w6p_m-01 { width: 6%; }
  .w7p_m-01 { width: 7%; }
  .w8p_m-01 { width: 8%; }
  .w9p_m-01 { width: 9%; }
  .w10p_m-01 { width: 10%; }
  .w11p_m-01 { width: 11%; }
  .w12p_m-01 { width: 12%; }
  .w13p_m-01 { width: 13%; }
  .w14p_m-01 { width: 14%; }
  .w15p_m-01 { width: 15%; }
  .w16p_m-01 { width: 16%; }
  .w17p_m-01 { width: 17%; }
  .w18p_m-01 { width: 18%; }
  .w19p_m-01 { width: 19%; }
  .w20p_m-01 { width: 20%; }
  .w21p_m-01 { width: 21%; }
  .w22p_m-01 { width: 22%; }
  .w23p_m-01 { width: 23%; }
  .w24p_m-01 { width: 24%; }
  .w25p_m-01 { width: 25%; }
  .w26p_m-01 { width: 26%; }
  .w27p_m-01 { width: 27%; }
  .w28p_m-01 { width: 28%; }
  .w29p_m-01 { width: 29%; }
  .w30p_m-01 { width: 30%; }
  .w31p_m-01 { width: 31%; }
  .w32p_m-01 { width: 32%; }
  .w33p_m-01 { width: 33%; }
  .w34p_m-01 { width: 34%; }
  .w35p_m-01 { width: 35%; }
  .w36p_m-01 { width: 36%; }
  .w37p_m-01 { width: 37%; }
  .w38p_m-01 { width: 38%; }
  .w39p_m-01 { width: 39%; }
  .w40p_m-01 { width: 40%; }
  .w41p_m-01 { width: 41%; }
  .w42p_m-01 { width: 42%; }
  .w43p_m-01 { width: 43%; }
  .w44p_m-01 { width: 44%; }
  .w45p_m-01 { width: 45%; }
  .w46p_m-01 { width: 46%; }
  .w47p_m-01 { width: 47%; }
  .w48p_m-01 { width: 48%; }
  .w49p_m-01 { width: 49%; }
  .w50p_m-01 { width: 50%; }
  .w51p_m-01 { width: 51%; }
  .w52p_m-01 { width: 52%; }
  .w53p_m-01 { width: 53%; }
  .w54p_m-01 { width: 54%; }
  .w55p_m-01 { width: 55%; }
  .w56p_m-01 { width: 56%; }
  .w57p_m-01 { width: 57%; }
  .w58p_m-01 { width: 58%; }
  .w59p_m-01 { width: 59%; }
  .w60p_m-01 { width: 60%; }
  .w61p_m-01 { width: 61%; }
  .w62p_m-01 { width: 62%; }
  .w63p_m-01 { width: 63%; }
  .w64p_m-01 { width: 64%; }
  .w65p_m-01 { width: 65%; }
  .w66p_m-01 { width: 66%; }
  .w67p_m-01 { width: 67%; }
  .w68p_m-01 { width: 68%; }
  .w69p_m-01 { width: 69%; }
  .w70p_m-01 { width: 70%; }
  .w71p_m-01 { width: 71%; }
  .w72p_m-01 { width: 72%; }
  .w73p_m-01 { width: 73%; }
  .w74p_m-01 { width: 74%; }
  .w75p_m-01 { width: 75%; }
  .w76p_m-01 { width: 76%; }
  .w77p_m-01 { width: 77%; }
  .w78p_m-01 { width: 78%; }
  .w79p_m-01 { width: 79%; }
  .w80p_m-01 { width: 80%; }
  .w81p_m-01 { width: 81%; }
  .w82p_m-01 { width: 82%; }
  .w83p_m-01 { width: 83%; }
  .w84p_m-01 { width: 84%; }
  .w85p_m-01 { width: 85%; }
  .w86p_m-01 { width: 86%; }
  .w87p_m-01 { width: 87%; }
  .w88p_m-01 { width: 88%; }
  .w89p_m-01 { width: 89%; }
  .w90p_m-01 { width: 90%; }
  .w91p_m-01 { width: 91%; }
  .w92p_m-01 { width: 92%; }
  .w93p_m-01 { width: 93%; }
  .w94p_m-01 { width: 94%; }
  .w95p_m-01 { width: 95%; }
  .w96p_m-01 { width: 96%; }
  .w97p_m-01 { width: 97%; }
  .w98p_m-01 { width: 98%; }
  .w99p_m-01 { width: 99%; }
  .w100p_m-01 { width: 100%; }
  .minW1_m-01 { min-width: var(--rem1); }
  .minW2_m-01 { min-width: var(--rem2); }
  .minW3_m-01 { min-width: var(--rem3); }
  .minW4_m-01 { min-width: var(--rem4); }
  .minW5_m-01 { min-width: var(--rem5); }
  .minW6_m-01 { min-width: var(--rem6); }
  .minW7_m-01 { min-width: var(--rem7); }
  .minW1px_m-01 { min-width: var(--px1); }
  .minW2px_m-01 { min-width: var(--px2); }
  .minW3px_m-01 { min-width: var(--px3); }
  .minW4px_m-01 { min-width: var(--px4); }
  .minW5px_m-01 { min-width: var(--px5); }
  .minW6px_m-01 { min-width: var(--px6); }
  .minW7px_m-01 { min-width: var(--px7); }
  .minW8px_m-01 { min-width: var(--px8); }
  .minW9px_m-01 { min-width: var(--px9); }
  .minW10px_m-01 { min-width: var(--px10); }
  .minW11px_m-01 { min-width: var(--px11); }
  .minW12px_m-01 { min-width: var(--px12); }
  .minW13px_m-01 { min-width: var(--px13); }
  .minW14px_m-01 { min-width: var(--px14); }
  .minW15px_m-01 { min-width: var(--px15); }
  .minW16px_m-01 { min-width: var(--px16); }
  .minW17px_m-01 { min-width: var(--px17); }
  .minW18px_m-01 { min-width: var(--px18); }
  .minW19px_m-01 { min-width: var(--px19); }
  .minW20px_m-01 { min-width: var(--px20); }
  .minW5p_m-01 { min-width: 5%; }
  .minW10p_m-01 { min-width: 10%; }
  .minW15p_m-01 { min-width: 15%; }
  .minW20p_m-01 { min-width: 20%; }
  .minW25p_m-01 { min-width: 25%; }
  .minW30p_m-01 { min-width: 30%; }
  .minW35p_m-01 { min-width: 35%; }
  .minW40p_m-01 { min-width: 40%; }
  .minW45p_m-01 { min-width: 45%; }
  .minW50p_m-01 { min-width: 50%; }
  .minW55p_m-01 { min-width: 55%; }
  .minW60p_m-01 { min-width: 60%; }
  .minW65p_m-01 { min-width: 65%; }
  .minW70p_m-01 { min-width: 70%; }
  .minW75p_m-01 { min-width: 75%; }
  .minW80p_m-01 { min-width: 80%; }
  .minW85p_m-01 { min-width: 85%; }
  .minW90p_m-01 { min-width: 90%; }
  .minW95p_m-01 { min-width: 95%; }
  .minW100p_m-01 { min-width: 100%; }
  .maxW1_m-01 { max-width: var(--rem1); }
  .maxW2_m-01 { max-width: var(--rem2); }
  .maxW3_m-01 { max-width: var(--rem3); }
  .maxW4_m-01 { max-width: var(--rem4); }
  .maxW5_m-01 { max-width: var(--rem5); }
  .maxW6_m-01 { max-width: var(--rem6); }
  .maxW7_m-01 { max-width: var(--rem7); }
  .maxW1px_m-01 { max-width: var(--px1); }
  .maxW2px_m-01 { max-width: var(--px2); }
  .maxW3px_m-01 { max-width: var(--px3); }
  .maxW4px_m-01 { max-width: var(--px4); }
  .maxW5px_m-01 { max-width: var(--px5); }
  .maxW6px_m-01 { max-width: var(--px6); }
  .maxW7px_m-01 { max-width: var(--px7); }
  .maxW8px_m-01 { max-width: var(--px8); }
  .maxW9px_m-01 { max-width: var(--px9); }
  .maxW10px_m-01 { max-width: var(--px10); }
  .maxW11px_m-01 { max-width: var(--px11); }
  .maxW12px_m-01 { max-width: var(--px12); }
  .maxW13px_m-01 { max-width: var(--px13); }
  .maxW14px_m-01 { max-width: var(--px14); }
  .maxW15px_m-01 { max-width: var(--px15); }
  .maxW16px_m-01 { max-width: var(--px16); }
  .maxW17px_m-01 { max-width: var(--px17); }
  .maxW18px_m-01 { max-width: var(--px18); }
  .maxW19px_m-01 { max-width: var(--px19); }
  .maxW20px_m-01 { max-width: var(--px20); }
  .maxW5p_m-01 { max-width: 5%; }
  .maxW10p_m-01 { max-width: 10%; }
  .maxW15p_m-01 { max-width: 15%; }
  .maxW20p_m-01 { max-width: 20%; }
  .maxW25p_m-01 { max-width: 25%; }
  .maxW30p_m-01 { max-width: 30%; }
  .maxW35p_m-01 { max-width: 35%; }
  .maxW40p_m-01 { max-width: 40%; }
  .maxW45p_m-01 { max-width: 45%; }
  .maxW50p_m-01 { max-width: 50%; }
  .maxW55p_m-01 { max-width: 55%; }
  .maxW60p_m-01 { max-width: 60%; }
  .maxW65p_m-01 { max-width: 65%; }
  .maxW70p_m-01 { max-width: 70%; }
  .maxW75p_m-01 { max-width: 75%; }
  .maxW80p_m-01 { max-width: 80%; }
  .maxW85p_m-01 { max-width: 85%; }
  .maxW90p_m-01 { max-width: 90%; }
  .maxW95p_m-01 { max-width: 95%; }
  .maxW100p_m-01 { max-width: 100%; }
  .h1_m-01 { height: var(--rem1); }
  .h2_m-01 { height: var(--rem2); }
  .h3_m-01 { height: var(--rem3); }
  .h4_m-01 { height: var(--rem4); }
  .h5_m-01 { height: var(--rem5); }
  .h6_m-01 { height: var(--rem6); }
  .h7_m-01 { height: var(--rem7); }
  .h1px_m-01 { height: var(--px1); }
  .h2px_m-01 { height: var(--px2); }
  .h3px_m-01 { height: var(--px3); }
  .h4px_m-01 { height: var(--px4); }
  .h5px_m-01 { height: var(--px5); }
  .h6px_m-01 { height: var(--px6); }
  .h7px_m-01 { height: var(--px7); }
  .h8px_m-01 { height: var(--px8); }
  .h9px_m-01 { height: var(--px9); }
  .h10px_m-01 { height: var(--px10); }
  .h11px_m-01 { height: var(--px11); }
  .h12px_m-01 { height: var(--px12); }
  .h13px_m-01 { height: var(--px13); }
  .h14px_m-01 { height: var(--px14); }
  .h15px_m-01 { height: var(--px15); }
  .h16px_m-01 { height: var(--px16); }
  .h17px_m-01 { height: var(--px17); }
  .h18px_m-01 { height: var(--px18); }
  .h19px_m-01 { height: var(--px19); }
  .h20px_m-01 { height: var(--px20); }
  .h5p_m-01 { height: 5%; }
  .h10p_m-01 { height: 10%; }
  .h15p_m-01 { height: 15%; }
  .h20p_m-01 { height: 20%; }
  .h25p_m-01 { height: 25%; }
  .h30p_m-01 { height: 30%; }
  .h35p_m-01 { height: 35%; }
  .h40p_m-01 { height: 40%; }
  .h45p_m-01 { height: 45%; }
  .h50p_m-01 { height: 50%; }
  .h55p_m-01 { height: 55%; }
  .h60p_m-01 { height: 60%; }
  .h65p_m-01 { height: 65%; }
  .h70p_m-01 { height: 70%; }
  .h75p_m-01 { height: 75%; }
  .h80p_m-01 { height: 80%; }
  .h85p_m-01 { height: 85%; }
  .h90p_m-01 { height: 90%; }
  .h95p_m-01 { height: 95%; }
  .h100p_m-01 { height: 100%; }
  .minH1_m-01 { min-height: var(--rem1); }
  .minH2_m-01 { min-height: var(--rem2); }
  .minH3_m-01 { min-height: var(--rem3); }
  .minH4_m-01 { min-height: var(--rem4); }
  .minH5_m-01 { min-height: var(--rem5); }
  .minH6_m-01 { min-height: var(--rem6); }
  .minH7_m-01 { min-height: var(--rem7); }
  .minH1px_m-01 { min-height: var(--px1); }
  .minH2px_m-01 { min-height: var(--px2); }
  .minH3px_m-01 { min-height: var(--px3); }
  .minH4px_m-01 { min-height: var(--px4); }
  .minH5px_m-01 { min-height: var(--px5); }
  .minH6px_m-01 { min-height: var(--px6); }
  .minH7px_m-01 { min-height: var(--px7); }
  .minH8px_m-01 { min-height: var(--px8); }
  .minH9px_m-01 { min-height: var(--px9); }
  .minH10px_m-01 { min-height: var(--px10); }
  .minH11px_m-01 { min-height: var(--px11); }
  .minH12px_m-01 { min-height: var(--px12); }
  .minH13px_m-01 { min-height: var(--px13); }
  .minH14px_m-01 { min-height: var(--px14); }
  .minH15px_m-01 { min-height: var(--px15); }
  .minH16px_m-01 { min-height: var(--px16); }
  .minH17px_m-01 { min-height: var(--px17); }
  .minH18px_m-01 { min-height: var(--px18); }
  .minH19px_m-01 { min-height: var(--px19); }
  .minH20px_m-01 { min-height: var(--px20); }
  .minH5p_m-01 { min-height: 5%; }
  .minH10p_m-01 { min-height: 10%; }
  .minH15p_m-01 { min-height: 15%; }
  .minH20p_m-01 { min-height: 20%; }
  .minH25p_m-01 { min-height: 25%; }
  .minH30p_m-01 { min-height: 30%; }
  .minH35p_m-01 { min-height: 35%; }
  .minH40p_m-01 { min-height: 40%; }
  .minH45p_m-01 { min-height: 45%; }
  .minH50p_m-01 { min-height: 50%; }
  .minH55p_m-01 { min-height: 55%; }
  .minH60p_m-01 { min-height: 60%; }
  .minH65p_m-01 { min-height: 65%; }
  .minH70p_m-01 { min-height: 70%; }
  .minH75p_m-01 { min-height: 75%; }
  .minH80p_m-01 { min-height: 80%; }
  .minH85p_m-01 { min-height: 85%; }
  .minH90p_m-01 { min-height: 90%; }
  .minH95p_m-01 { min-height: 95%; }
  .minH100p_m-01 { min-height: 100%; }
  .maxH1_m-01 { max-height: var(--rem1); }
  .maxH2_m-01 { max-height: var(--rem2); }
  .maxH3_m-01 { max-height: var(--rem3); }
  .maxH4_m-01 { max-height: var(--rem4); }
  .maxH5_m-01 { max-height: var(--rem5); }
  .maxH6_m-01 { max-height: var(--rem6); }
  .maxH7_m-01 { max-height: var(--rem7); }
  .maxH1px_m-01 { max-height: var(--px1); }
  .maxH2px_m-01 { max-height: var(--px2); }
  .maxH3px_m-01 { max-height: var(--px3); }
  .maxH4px_m-01 { max-height: var(--px4); }
  .maxH5px_m-01 { max-height: var(--px5); }
  .maxH6px_m-01 { max-height: var(--px6); }
  .maxH7px_m-01 { max-height: var(--px7); }
  .maxH8px_m-01 { max-height: var(--px8); }
  .maxH9px_m-01 { max-height: var(--px9); }
  .maxH10px_m-01 { max-height: var(--px10); }
  .maxH11px_m-01 { max-height: var(--px11); }
  .maxH12px_m-01 { max-height: var(--px12); }
  .maxH13px_m-01 { max-height: var(--px13); }
  .maxH14px_m-01 { max-height: var(--px14); }
  .maxH15px_m-01 { max-height: var(--px15); }
  .maxH16px_m-01 { max-height: var(--px16); }
  .maxH17px_m-01 { max-height: var(--px17); }
  .maxH18px_m-01 { max-height: var(--px18); }
  .maxH19px_m-01 { max-height: var(--px19); }
  .maxH20px_m-01 { max-height: var(--px20); }
  .maxH5p_m-01 { max-height: 5%; }
  .maxH10p_m-01 { max-height: 10%; }
  .maxH15p_m-01 { max-height: 15%; }
  .maxH20p_m-01 { max-height: 20%; }
  .maxH25p_m-01 { max-height: 25%; }
  .maxH30p_m-01 { max-height: 30%; }
  .maxH35p_m-01 { max-height: 35%; }
  .maxH40p_m-01 { max-height: 40%; }
  .maxH45p_m-01 { max-height: 45%; }
  .maxH50p_m-01 { max-height: 50%; }
  .maxH55p_m-01 { max-height: 55%; }
  .maxH60p_m-01 { max-height: 60%; }
  .maxH65p_m-01 { max-height: 65%; }
  .maxH70p_m-01 { max-height: 70%; }
  .maxH75p_m-01 { max-height: 75%; }
  .maxH80p_m-01 { max-height: 80%; }
  .maxH85p_m-01 { max-height: 85%; }
  .maxH90p_m-01 { max-height: 90%; }
  .maxH95p_m-01 { max-height: 95%; }
  .maxH100p_m-01 { max-height: 100%; }
  .maxH5vh_m-01 { max-height: 5vh; }
  .maxH10vh_m-01 { max-height: 10vh; }
  .maxH15vh_m-01 { max-height: 15vh; }
  .maxH20vh_m-01 { max-height: 20vh; }
  .maxH25vh_m-01 { max-height: 25vh; }
  .maxH30vh_m-01 { max-height: 30vh; }
  .maxH35vh_m-01 { max-height: 35vh; }
  .maxH40vh_m-01 { max-height: 40vh; }
  .maxH45vh_m-01 { max-height: 45vh; }
  .maxH50vh_m-01 { max-height: 50vh; }
  .maxH55vh_m-01 { max-height: 55vh; }
  .maxH60vh_m-01 { max-height: 60vh; }
  .maxH65vh_m-01 { max-height: 65vh; }
  .maxH70vh_m-01 { max-height: 70vh; }
  .maxH75vh_m-01 { max-height: 75vh; }
  .maxH80vh_m-01 { max-height: 80vh; }
  .maxH85vh_m-01 { max-height: 85vh; }
  .maxH90vh_m-01 { max-height: 90vh; }
  .maxH95vh_m-01 { max-height: 95vh; }
  .maxH100vh_m-01 { max-height: 100vh; }
  .resizeA_m-01 { resize: both; }
  .resizeV_m-01 { resize: vertical; }
  .resizeH_m-01 { resize: horizontal; }
  .resizeNone_m-01 { resize: none; }
  .resizeB_m-01 { resize: block; }
  .resizeI_m-01 { resize: inline; }
  .pa1_m-01 { padding: var(--px1); }
  .pa2_m-01 { padding: var(--px2); }
  .pa3_m-01 { padding: var(--px3); }
  .pa4_m-01 { padding: var(--px4); }
  .pa5_m-01 { padding: var(--px5); }
  .pa6_m-01 { padding: var(--px6); }
  .pa7_m-01 { padding: var(--px7); }
  .pa8_m-01 { padding: var(--px8); }
  .pa9_m-01 { padding: var(--px9); }
  .pa10_m-01 { padding: var(--px10); }
  .pa11_m-01 { padding: var(--px11); }
  .pa12_m-01 { padding: var(--px12); }
  .pa13_m-01 { padding: var(--px13); }
  .pa14_m-01 { padding: var(--px14); }
  .pa15_m-01 { padding: var(--px15); }
  .pa16_m-01 { padding: var(--px16); }
  .pa17_m-01 { padding: var(--px17); }
  .pa18_m-01 { padding: var(--px18); }
  .pa19_m-01 { padding: var(--px19); }
  .pa20_m-01 { padding: var(--px20); }
  .pa5p_m-01 { padding: 5%; }
  .pa10p_m-01 { padding: 10%; }
  .pa15p_m-01 { padding: 15%; }
  .pa20p_m-01 { padding: 20%; }
  .pa25p_m-01 { padding: 25%; }
  .pa30p_m-01 { padding: 30%; }
  .pa35p_m-01 { padding: 35%; }
  .pa40p_m-01 { padding: 40%; }
  .pa45p_m-01 { padding: 45%; }
  .pa50p_m-01 { padding: 50%; }
  .pa55p_m-01 { padding: 55%; }
  .pa60p_m-01 { padding: 60%; }
  .pa65p_m-01 { padding: 65%; }
  .pa70p_m-01 { padding: 70%; }
  .pa75p_m-01 { padding: 75%; }
  .pa80p_m-01 { padding: 80%; }
  .pa85p_m-01 { padding: 85%; }
  .pa90p_m-01 { padding: 90%; }
  .pa95p_m-01 { padding: 95%; }
  .pa100p_m-01 { padding: 100%; }
  .pv1_m-01 { padding-top: var(--px1); padding-bottom: var(--px1); }
  .pv2_m-01 { padding-top: var(--px2); padding-bottom: var(--px2); }
  .pv3_m-01 { padding-top: var(--px3); padding-bottom: var(--px3); }
  .pv4_m-01 { padding-top: var(--px4); padding-bottom: var(--px4); }
  .pv5_m-01 { padding-top: var(--px5); padding-bottom: var(--px5); }
  .pv6_m-01 { padding-top: var(--px6); padding-bottom: var(--px6); }
  .pv7_m-01 { padding-top: var(--px7); padding-bottom: var(--px7); }
  .pv8_m-01 { padding-top: var(--px8); padding-bottom: var(--px8); }
  .pv9_m-01 { padding-top: var(--px9); padding-bottom: var(--px9); }
  .pv10_m-01 { padding-top: var(--px10); padding-bottom: var(--px10); }
  .pv11_m-01 { padding-top: var(--px11); padding-bottom: var(--px11); }
  .pv12_m-01 { padding-top: var(--px12); padding-bottom: var(--px12); }
  .pv13_m-01 { padding-top: var(--px13); padding-bottom: var(--px13); }
  .pv14_m-01 { padding-top: var(--px14); padding-bottom: var(--px14); }
  .pv15_m-01 { padding-top: var(--px15); padding-bottom: var(--px15); }
  .pv16_m-01 { padding-top: var(--px16); padding-bottom: var(--px16); }
  .pv17_m-01 { padding-top: var(--px17); padding-bottom: var(--px17); }
  .pv18_m-01 { padding-top: var(--px18); padding-bottom: var(--px18); }
  .pv19_m-01 { padding-top: var(--px19); padding-bottom: var(--px19); }
  .pv20_m-01 { padding-top: var(--px20); padding-bottom: var(--px20); }
  .pv5p_m-01 { padding-top: 5%; padding-bottom: 5%; }
  .pv10p_m-01 { padding-top: 10%; padding-bottom: 10%; }
  .pv15p_m-01 { padding-top: 15%; padding-bottom: 15%; }
  .pv20p_m-01 { padding-top: 20%; padding-bottom: 20%; }
  .pv25p_m-01 { padding-top: 25%; padding-bottom: 25%; }
  .pv30p_m-01 { padding-top: 30%; padding-bottom: 30%; }
  .pv35p_m-01 { padding-top: 35%; padding-bottom: 35%; }
  .pv40p_m-01 { padding-top: 40%; padding-bottom: 40%; }
  .pv45p_m-01 { padding-top: 45%; padding-bottom: 45%; }
  .pv50p_m-01 { padding-top: 50%; padding-bottom: 50%; }
  .pv55p_m-01 { padding-top: 55%; padding-bottom: 55%; }
  .pv60p_m-01 { padding-top: 60%; padding-bottom: 60%; }
  .pv65p_m-01 { padding-top: 65%; padding-bottom: 65%; }
  .pv70p_m-01 { padding-top: 70%; padding-bottom: 70%; }
  .pv75p_m-01 { padding-top: 75%; padding-bottom: 75%; }
  .pv80p_m-01 { padding-top: 80%; padding-bottom: 80%; }
  .pv85p_m-01 { padding-top: 85%; padding-bottom: 85%; }
  .pv90p_m-01 { padding-top: 90%; padding-bottom: 90%; }
  .pv95p_m-01 { padding-top: 95%; padding-bottom: 95%; }
  .pv100p_m-01 { padding-top: 100%; padding-bottom: 100%; }
  .ph1_m-01 { padding-left: var(--px1); padding-right: var(--px1); }
  .ph2_m-01 { padding-left: var(--px2); padding-right: var(--px2); }
  .ph3_m-01 { padding-left: var(--px3); padding-right: var(--px3); }
  .ph4_m-01 { padding-left: var(--px4); padding-right: var(--px4); }
  .ph5_m-01 { padding-left: var(--px5); padding-right: var(--px5); }
  .ph6_m-01 { padding-left: var(--px6); padding-right: var(--px6); }
  .ph7_m-01 { padding-left: var(--px7); padding-right: var(--px7); }
  .ph8_m-01 { padding-left: var(--px8); padding-right: var(--px8); }
  .ph9_m-01 { padding-left: var(--px9); padding-right: var(--px9); }
  .ph10_m-01 { padding-left: var(--px10); padding-right: var(--px10); }
  .ph11_m-01 { padding-left: var(--px11); padding-right: var(--px11); }
  .ph12_m-01 { padding-left: var(--px12); padding-right: var(--px12); }
  .ph13_m-01 { padding-left: var(--px13); padding-right: var(--px13); }
  .ph14_m-01 { padding-left: var(--px14); padding-right: var(--px14); }
  .ph15_m-01 { padding-left: var(--px15); padding-right: var(--px15); }
  .ph16_m-01 { padding-left: var(--px16); padding-right: var(--px16); }
  .ph17_m-01 { padding-left: var(--px17); padding-right: var(--px17); }
  .ph18_m-01 { padding-left: var(--px18); padding-right: var(--px18); }
  .ph19_m-01 { padding-left: var(--px19); padding-right: var(--px19); }
  .ph20_m-01 { padding-left: var(--px20); padding-right: var(--px20); }
  .ph5p_m-01 { padding-left: 5%; padding-right: 5%; }
  .ph10p_m-01 { padding-left: 10%; padding-right: 10%; }
  .ph15p_m-01 { padding-left: 15%; padding-right: 15%; }
  .ph20p_m-01 { padding-left: 20%; padding-right: 20%; }
  .ph25p_m-01 { padding-left: 25%; padding-right: 25%; }
  .ph30p_m-01 { padding-left: 30%; padding-right: 30%; }
  .ph35p_m-01 { padding-left: 35%; padding-right: 35%; }
  .ph40p_m-01 { padding-left: 40%; padding-right: 40%; }
  .ph45p_m-01 { padding-left: 45%; padding-right: 45%; }
  .ph50p_m-01 { padding-left: 50%; padding-right: 50%; }
  .ph55p_m-01 { padding-left: 55%; padding-right: 55%; }
  .ph60p_m-01 { padding-left: 60%; padding-right: 60%; }
  .ph65p_m-01 { padding-left: 65%; padding-right: 65%; }
  .ph70p_m-01 { padding-left: 70%; padding-right: 70%; }
  .ph75p_m-01 { padding-left: 75%; padding-right: 75%; }
  .ph80p_m-01 { padding-left: 80%; padding-right: 80%; }
  .ph85p_m-01 { padding-left: 85%; padding-right: 85%; }
  .ph90p_m-01 { padding-left: 90%; padding-right: 90%; }
  .ph95p_m-01 { padding-left: 95%; padding-right: 95%; }
  .ph100p_m-01 { padding-left: 100%; padding-right: 100%; }
  .pt1_m-01 { padding-top: var(--px1); }
  .pt2_m-01 { padding-top: var(--px2); }
  .pt3_m-01 { padding-top: var(--px3); }
  .pt4_m-01 { padding-top: var(--px4); }
  .pt5_m-01 { padding-top: var(--px5); }
  .pt6_m-01 { padding-top: var(--px6); }
  .pt7_m-01 { padding-top: var(--px7); }
  .pt8_m-01 { padding-top: var(--px8); }
  .pt9_m-01 { padding-top: var(--px9); }
  .pt10_m-01 { padding-top: var(--px10); }
  .pt11_m-01 { padding-top: var(--px11); }
  .pt12_m-01 { padding-top: var(--px12); }
  .pt13_m-01 { padding-top: var(--px13); }
  .pt14_m-01 { padding-top: var(--px14); }
  .pt15_m-01 { padding-top: var(--px15); }
  .pt16_m-01 { padding-top: var(--px16); }
  .pt17_m-01 { padding-top: var(--px17); }
  .pt18_m-01 { padding-top: var(--px18); }
  .pt19_m-01 { padding-top: var(--px19); }
  .pt20_m-01 { padding-top: var(--px20); }
  .pt5p_m-01 { padding-top: 5%; }
  .pt10p_m-01 { padding-top: 10%; }
  .pt15p_m-01 { padding-top: 15%; }
  .pt20p_m-01 { padding-top: 20%; }
  .pt25p_m-01 { padding-top: 25%; }
  .pt30p_m-01 { padding-top: 30%; }
  .pt35p_m-01 { padding-top: 35%; }
  .pt40p_m-01 { padding-top: 40%; }
  .pt45p_m-01 { padding-top: 45%; }
  .pt50p_m-01 { padding-top: 50%; }
  .pt55p_m-01 { padding-top: 55%; }
  .pt60p_m-01 { padding-top: 60%; }
  .pt65p_m-01 { padding-top: 65%; }
  .pt70p_m-01 { padding-top: 70%; }
  .pt75p_m-01 { padding-top: 75%; }
  .pt80p_m-01 { padding-top: 80%; }
  .pt85p_m-01 { padding-top: 85%; }
  .pt90p_m-01 { padding-top: 90%; }
  .pt95p_m-01 { padding-top: 95%; }
  .pt100p_m-01 { padding-top: 100%; }
  .pr1_m-01 { padding-right: var(--px1); }
  .pr2_m-01 { padding-right: var(--px2); }
  .pr3_m-01 { padding-right: var(--px3); }
  .pr4_m-01 { padding-right: var(--px4); }
  .pr5_m-01 { padding-right: var(--px5); }
  .pr6_m-01 { padding-right: var(--px6); }
  .pr7_m-01 { padding-right: var(--px7); }
  .pr8_m-01 { padding-right: var(--px8); }
  .pr9_m-01 { padding-right: var(--px9); }
  .pr10_m-01 { padding-right: var(--px10); }
  .pr11_m-01 { padding-right: var(--px11); }
  .pr12_m-01 { padding-right: var(--px12); }
  .pr13_m-01 { padding-right: var(--px13); }
  .pr14_m-01 { padding-right: var(--px14); }
  .pr15_m-01 { padding-right: var(--px15); }
  .pr16_m-01 { padding-right: var(--px16); }
  .pr17_m-01 { padding-right: var(--px17); }
  .pr18_m-01 { padding-right: var(--px18); }
  .pr19_m-01 { padding-right: var(--px19); }
  .pr20_m-01 { padding-right: var(--px20); }
  .pr5p_m-01 { padding-right: 5%; }
  .pr10p_m-01 { padding-right: 10%; }
  .pr15p_m-01 { padding-right: 15%; }
  .pr20p_m-01 { padding-right: 20%; }
  .pr25p_m-01 { padding-right: 25%; }
  .pr30p_m-01 { padding-right: 30%; }
  .pr35p_m-01 { padding-right: 35%; }
  .pr40p_m-01 { padding-right: 40%; }
  .pr45p_m-01 { padding-right: 45%; }
  .pr50p_m-01 { padding-right: 50%; }
  .pr55p_m-01 { padding-right: 55%; }
  .pr60p_m-01 { padding-right: 60%; }
  .pr65p_m-01 { padding-right: 65%; }
  .pr70p_m-01 { padding-right: 70%; }
  .pr75p_m-01 { padding-right: 75%; }
  .pr80p_m-01 { padding-right: 80%; }
  .pr85p_m-01 { padding-right: 85%; }
  .pr90p_m-01 { padding-right: 90%; }
  .pr95p_m-01 { padding-right: 95%; }
  .pr100p_m-01 { padding-right: 100%; }
  .pb1_m-01 { padding-bottom: var(--px1); }
  .pb2_m-01 { padding-bottom: var(--px2); }
  .pb3_m-01 { padding-bottom: var(--px3); }
  .pb4_m-01 { padding-bottom: var(--px4); }
  .pb5_m-01 { padding-bottom: var(--px5); }
  .pb6_m-01 { padding-bottom: var(--px6); }
  .pb7_m-01 { padding-bottom: var(--px7); }
  .pb8_m-01 { padding-bottom: var(--px8); }
  .pb9_m-01 { padding-bottom: var(--px9); }
  .pb10_m-01 { padding-bottom: var(--px10); }
  .pb11_m-01 { padding-bottom: var(--px11); }
  .pb12_m-01 { padding-bottom: var(--px12); }
  .pb13_m-01 { padding-bottom: var(--px13); }
  .pb14_m-01 { padding-bottom: var(--px14); }
  .pb15_m-01 { padding-bottom: var(--px15); }
  .pb16_m-01 { padding-bottom: var(--px16); }
  .pb17_m-01 { padding-bottom: var(--px17); }
  .pb18_m-01 { padding-bottom: var(--px18); }
  .pb19_m-01 { padding-bottom: var(--px19); }
  .pb20_m-01 { padding-bottom: var(--px20); }
  .pb5p_m-01 { padding-bottom: 5%; }
  .pb10p_m-01 { padding-bottom: 10%; }
  .pb15p_m-01 { padding-bottom: 15%; }
  .pb20p_m-01 { padding-bottom: 20%; }
  .pb25p_m-01 { padding-bottom: 25%; }
  .pb30p_m-01 { padding-bottom: 30%; }
  .pb35p_m-01 { padding-bottom: 35%; }
  .pb40p_m-01 { padding-bottom: 40%; }
  .pb45p_m-01 { padding-bottom: 45%; }
  .pb50p_m-01 { padding-bottom: 50%; }
  .pb55p_m-01 { padding-bottom: 55%; }
  .pb60p_m-01 { padding-bottom: 60%; }
  .pb65p_m-01 { padding-bottom: 65%; }
  .pb70p_m-01 { padding-bottom: 70%; }
  .pb75p_m-01 { padding-bottom: 75%; }
  .pb80p_m-01 { padding-bottom: 80%; }
  .pb85p_m-01 { padding-bottom: 85%; }
  .pb90p_m-01 { padding-bottom: 90%; }
  .pb95p_m-01 { padding-bottom: 95%; }
  .pb100p_m-01 { padding-bottom: 100%; }
  .pl1_m-01 { padding-left: var(--px1); }
  .pl2_m-01 { padding-left: var(--px2); }
  .pl3_m-01 { padding-left: var(--px3); }
  .pl4_m-01 { padding-left: var(--px4); }
  .pl5_m-01 { padding-left: var(--px5); }
  .pl6_m-01 { padding-left: var(--px6); }
  .pl7_m-01 { padding-left: var(--px7); }
  .pl8_m-01 { padding-left: var(--px8); }
  .pl9_m-01 { padding-left: var(--px9); }
  .pl10_m-01 { padding-left: var(--px10); }
  .pl11_m-01 { padding-left: var(--px11); }
  .pl12_m-01 { padding-left: var(--px12); }
  .pl13_m-01 { padding-left: var(--px13); }
  .pl14_m-01 { padding-left: var(--px14); }
  .pl15_m-01 { padding-left: var(--px15); }
  .pl16_m-01 { padding-left: var(--px16); }
  .pl17_m-01 { padding-left: var(--px17); }
  .pl18_m-01 { padding-left: var(--px18); }
  .pl19_m-01 { padding-left: var(--px19); }
  .pl20_m-01 { padding-left: var(--px20); }
  .pl5p_m-01 { padding-left: 5%; }
  .pl10p_m-01 { padding-left: 10%; }
  .pl15p_m-01 { padding-left: 15%; }
  .pl20p_m-01 { padding-left: 20%; }
  .pl25p_m-01 { padding-left: 25%; }
  .pl30p_m-01 { padding-left: 30%; }
  .pl35p_m-01 { padding-left: 35%; }
  .pl40p_m-01 { padding-left: 40%; }
  .pl45p_m-01 { padding-left: 45%; }
  .pl50p_m-01 { padding-left: 50%; }
  .pl55p_m-01 { padding-left: 55%; }
  .pl60p_m-01 { padding-left: 60%; }
  .pl65p_m-01 { padding-left: 65%; }
  .pl70p_m-01 { padding-left: 70%; }
  .pl75p_m-01 { padding-left: 75%; }
  .pl80p_m-01 { padding-left: 80%; }
  .pl85p_m-01 { padding-left: 85%; }
  .pl90p_m-01 { padding-left: 90%; }
  .pl95p_m-01 { padding-left: 95%; }
  .pl100p_m-01 { padding-left: 100%; }
  .ma1_m-01 { margin: var(--px1); }
  .ma2_m-01 { margin: var(--px2); }
  .ma3_m-01 { margin: var(--px3); }
  .ma4_m-01 { margin: var(--px4); }
  .ma5_m-01 { margin: var(--px5); }
  .ma6_m-01 { margin: var(--px6); }
  .ma7_m-01 { margin: var(--px7); }
  .ma8_m-01 { margin: var(--px8); }
  .ma9_m-01 { margin: var(--px9); }
  .ma10_m-01 { margin: var(--px10); }
  .ma11_m-01 { margin: var(--px11); }
  .ma12_m-01 { margin: var(--px12); }
  .ma13_m-01 { margin: var(--px13); }
  .ma14_m-01 { margin: var(--px14); }
  .ma15_m-01 { margin: var(--px15); }
  .ma16_m-01 { margin: var(--px16); }
  .ma17_m-01 { margin: var(--px17); }
  .ma18_m-01 { margin: var(--px18); }
  .ma19_m-01 { margin: var(--px19); }
  .ma20_m-01 { margin: var(--px20); }
  .ma5p_m-01 { margin: 5%; }
  .ma10p_m-01 { margin: 10%; }
  .ma15p_m-01 { margin: 15%; }
  .ma20p_m-01 { margin: 20%; }
  .ma25p_m-01 { margin: 25%; }
  .ma30p_m-01 { margin: 30%; }
  .ma35p_m-01 { margin: 35%; }
  .ma40p_m-01 { margin: 40%; }
  .ma45p_m-01 { margin: 45%; }
  .ma50p_m-01 { margin: 50%; }
  .ma55p_m-01 { margin: 55%; }
  .ma60p_m-01 { margin: 60%; }
  .ma65p_m-01 { margin: 65%; }
  .ma70p_m-01 { margin: 70%; }
  .ma75p_m-01 { margin: 75%; }
  .ma80p_m-01 { margin: 80%; }
  .ma85p_m-01 { margin: 85%; }
  .ma90p_m-01 { margin: 90%; }
  .ma95p_m-01 { margin: 95%; }
  .ma100p_m-01 { margin: 100%; }
  .mv1_m-01 { margin-top: var(--px1); margin-bottom: var(--px1); }
  .mv2_m-01 { margin-top: var(--px2); margin-bottom: var(--px2); }
  .mv3_m-01 { margin-top: var(--px3); margin-bottom: var(--px3); }
  .mv4_m-01 { margin-top: var(--px4); margin-bottom: var(--px4); }
  .mv5_m-01 { margin-top: var(--px5); margin-bottom: var(--px5); }
  .mv6_m-01 { margin-top: var(--px6); margin-bottom: var(--px6); }
  .mv7_m-01 { margin-top: var(--px7); margin-bottom: var(--px7); }
  .mv8_m-01 { margin-top: var(--px8); margin-bottom: var(--px8); }
  .mv9_m-01 { margin-top: var(--px9); margin-bottom: var(--px9); }
  .mv10_m-01 { margin-top: var(--px10); margin-bottom: var(--px10); }
  .mv11_m-01 { margin-top: var(--px11); margin-bottom: var(--px11); }
  .mv12_m-01 { margin-top: var(--px12); margin-bottom: var(--px12); }
  .mv13_m-01 { margin-top: var(--px13); margin-bottom: var(--px13); }
  .mv14_m-01 { margin-top: var(--px14); margin-bottom: var(--px14); }
  .mv15_m-01 { margin-top: var(--px15); margin-bottom: var(--px15); }
  .mv16_m-01 { margin-top: var(--px16); margin-bottom: var(--px16); }
  .mv17_m-01 { margin-top: var(--px17); margin-bottom: var(--px17); }
  .mv18_m-01 { margin-top: var(--px18); margin-bottom: var(--px18); }
  .mv19_m-01 { margin-top: var(--px19); margin-bottom: var(--px19); }
  .mv20_m-01 { margin-top: var(--px20); margin-bottom: var(--px20); }
  .mv5p_m-01 { margin-top: 5%; margin-bottom: 5%; }
  .mv10p_m-01 { margin-top: 10%; margin-bottom: 10%; }
  .mv15p_m-01 { margin-top: 15%; margin-bottom: 15%; }
  .mv20p_m-01 { margin-top: 20%; margin-bottom: 20%; }
  .mv25p_m-01 { margin-top: 25%; margin-bottom: 25%; }
  .mv30p_m-01 { margin-top: 30%; margin-bottom: 30%; }
  .mv35p_m-01 { margin-top: 35%; margin-bottom: 35%; }
  .mv40p_m-01 { margin-top: 40%; margin-bottom: 40%; }
  .mv45p_m-01 { margin-top: 45%; margin-bottom: 45%; }
  .mv50p_m-01 { margin-top: 50%; margin-bottom: 50%; }
  .mv55p_m-01 { margin-top: 55%; margin-bottom: 55%; }
  .mv60p_m-01 { margin-top: 60%; margin-bottom: 60%; }
  .mv65p_m-01 { margin-top: 65%; margin-bottom: 65%; }
  .mv70p_m-01 { margin-top: 70%; margin-bottom: 70%; }
  .mv75p_m-01 { margin-top: 75%; margin-bottom: 75%; }
  .mv80p_m-01 { margin-top: 80%; margin-bottom: 80%; }
  .mv85p_m-01 { margin-top: 85%; margin-bottom: 85%; }
  .mv90p_m-01 { margin-top: 90%; margin-bottom: 90%; }
  .mv95p_m-01 { margin-top: 95%; margin-bottom: 95%; }
  .mv100p_m-01 { margin-top: 100%; margin-bottom: 100%; }
  .mh1_m-01 { margin-left: var(--px1); margin-right: var(--px1); }
  .mh2_m-01 { margin-left: var(--px2); margin-right: var(--px2); }
  .mh3_m-01 { margin-left: var(--px3); margin-right: var(--px3); }
  .mh4_m-01 { margin-left: var(--px4); margin-right: var(--px4); }
  .mh5_m-01 { margin-left: var(--px5); margin-right: var(--px5); }
  .mh6_m-01 { margin-left: var(--px6); margin-right: var(--px6); }
  .mh7_m-01 { margin-left: var(--px7); margin-right: var(--px7); }
  .mh8_m-01 { margin-left: var(--px8); margin-right: var(--px8); }
  .mh9_m-01 { margin-left: var(--px9); margin-right: var(--px9); }
  .mh10_m-01 { margin-left: var(--px10); margin-right: var(--px10); }
  .mh11_m-01 { margin-left: var(--px11); margin-right: var(--px11); }
  .mh12_m-01 { margin-left: var(--px12); margin-right: var(--px12); }
  .mh13_m-01 { margin-left: var(--px13); margin-right: var(--px13); }
  .mh14_m-01 { margin-left: var(--px14); margin-right: var(--px14); }
  .mh15_m-01 { margin-left: var(--px15); margin-right: var(--px15); }
  .mh16_m-01 { margin-left: var(--px16); margin-right: var(--px16); }
  .mh17_m-01 { margin-left: var(--px17); margin-right: var(--px17); }
  .mh18_m-01 { margin-left: var(--px18); margin-right: var(--px18); }
  .mh19_m-01 { margin-left: var(--px19); margin-right: var(--px19); }
  .mh20_m-01 { margin-left: var(--px20); margin-right: var(--px20); }
  .mh5p_m-01 { margin-left: 5%; margin-right: 5%; }
  .mh10p_m-01 { margin-left: 10%; margin-right: 10%; }
  .mh15p_m-01 { margin-left: 15%; margin-right: 15%; }
  .mh20p_m-01 { margin-left: 20%; margin-right: 20%; }
  .mh25p_m-01 { margin-left: 25%; margin-right: 25%; }
  .mh30p_m-01 { margin-left: 30%; margin-right: 30%; }
  .mh35p_m-01 { margin-left: 35%; margin-right: 35%; }
  .mh40p_m-01 { margin-left: 40%; margin-right: 40%; }
  .mh45p_m-01 { margin-left: 45%; margin-right: 45%; }
  .mh50p_m-01 { margin-left: 50%; margin-right: 50%; }
  .mh55p_m-01 { margin-left: 55%; margin-right: 55%; }
  .mh60p_m-01 { margin-left: 60%; margin-right: 60%; }
  .mh65p_m-01 { margin-left: 65%; margin-right: 65%; }
  .mh70p_m-01 { margin-left: 70%; margin-right: 70%; }
  .mh75p_m-01 { margin-left: 75%; margin-right: 75%; }
  .mh80p_m-01 { margin-left: 80%; margin-right: 80%; }
  .mh85p_m-01 { margin-left: 85%; margin-right: 85%; }
  .mh90p_m-01 { margin-left: 90%; margin-right: 90%; }
  .mh95p_m-01 { margin-left: 95%; margin-right: 95%; }
  .mh100p_m-01 { margin-left: 100%; margin-right: 100%; }
  .mt1_m-01 { margin-top: var(--px1); }
  .mt2_m-01 { margin-top: var(--px2); }
  .mt3_m-01 { margin-top: var(--px3); }
  .mt4_m-01 { margin-top: var(--px4); }
  .mt5_m-01 { margin-top: var(--px5); }
  .mt6_m-01 { margin-top: var(--px6); }
  .mt7_m-01 { margin-top: var(--px7); }
  .mt8_m-01 { margin-top: var(--px8); }
  .mt9_m-01 { margin-top: var(--px9); }
  .mt10_m-01 { margin-top: var(--px10); }
  .mt11_m-01 { margin-top: var(--px11); }
  .mt12_m-01 { margin-top: var(--px12); }
  .mt13_m-01 { margin-top: var(--px13); }
  .mt14_m-01 { margin-top: var(--px14); }
  .mt15_m-01 { margin-top: var(--px15); }
  .mt16_m-01 { margin-top: var(--px16); }
  .mt17_m-01 { margin-top: var(--px17); }
  .mt18_m-01 { margin-top: var(--px18); }
  .mt19_m-01 { margin-top: var(--px19); }
  .mt20_m-01 { margin-top: var(--px20); }
  .mt5p_m-01 { margin-top: 5%; }
  .mt10p_m-01 { margin-top: 10%; }
  .mt15p_m-01 { margin-top: 15%; }
  .mt20p_m-01 { margin-top: 20%; }
  .mt25p_m-01 { margin-top: 25%; }
  .mt30p_m-01 { margin-top: 30%; }
  .mt35p_m-01 { margin-top: 35%; }
  .mt40p_m-01 { margin-top: 40%; }
  .mt45p_m-01 { margin-top: 45%; }
  .mt50p_m-01 { margin-top: 50%; }
  .mt55p_m-01 { margin-top: 55%; }
  .mt60p_m-01 { margin-top: 60%; }
  .mt65p_m-01 { margin-top: 65%; }
  .mt70p_m-01 { margin-top: 70%; }
  .mt75p_m-01 { margin-top: 75%; }
  .mt80p_m-01 { margin-top: 80%; }
  .mt85p_m-01 { margin-top: 85%; }
  .mt90p_m-01 { margin-top: 90%; }
  .mt95p_m-01 { margin-top: 95%; }
  .mt100p_m-01 { margin-top: 100%; }
  .mr1_m-01 { margin-right: var(--px1); }
  .mr2_m-01 { margin-right: var(--px2); }
  .mr3_m-01 { margin-right: var(--px3); }
  .mr4_m-01 { margin-right: var(--px4); }
  .mr5_m-01 { margin-right: var(--px5); }
  .mr6_m-01 { margin-right: var(--px6); }
  .mr7_m-01 { margin-right: var(--px7); }
  .mr8_m-01 { margin-right: var(--px8); }
  .mr9_m-01 { margin-right: var(--px9); }
  .mr10_m-01 { margin-right: var(--px10); }
  .mr11_m-01 { margin-right: var(--px11); }
  .mr12_m-01 { margin-right: var(--px12); }
  .mr13_m-01 { margin-right: var(--px13); }
  .mr14_m-01 { margin-right: var(--px14); }
  .mr15_m-01 { margin-right: var(--px15); }
  .mr16_m-01 { margin-right: var(--px16); }
  .mr17_m-01 { margin-right: var(--px17); }
  .mr18_m-01 { margin-right: var(--px18); }
  .mr19_m-01 { margin-right: var(--px19); }
  .mr20_m-01 { margin-right: var(--px20); }
  .mr5p_m-01 { margin-right: 5%; }
  .mr10p_m-01 { margin-right: 10%; }
  .mr15p_m-01 { margin-right: 15%; }
  .mr20p_m-01 { margin-right: 20%; }
  .mr25p_m-01 { margin-right: 25%; }
  .mr30p_m-01 { margin-right: 30%; }
  .mr35p_m-01 { margin-right: 35%; }
  .mr40p_m-01 { margin-right: 40%; }
  .mr45p_m-01 { margin-right: 45%; }
  .mr50p_m-01 { margin-right: 50%; }
  .mr55p_m-01 { margin-right: 55%; }
  .mr60p_m-01 { margin-right: 60%; }
  .mr65p_m-01 { margin-right: 65%; }
  .mr70p_m-01 { margin-right: 70%; }
  .mr75p_m-01 { margin-right: 75%; }
  .mr80p_m-01 { margin-right: 80%; }
  .mr85p_m-01 { margin-right: 85%; }
  .mr90p_m-01 { margin-right: 90%; }
  .mr95p_m-01 { margin-right: 95%; }
  .mr100p_m-01 { margin-right: 100%; }
  .mb1_m-01 { margin-bottom: var(--px1); }
  .mb2_m-01 { margin-bottom: var(--px2); }
  .mb3_m-01 { margin-bottom: var(--px3); }
  .mb4_m-01 { margin-bottom: var(--px4); }
  .mb5_m-01 { margin-bottom: var(--px5); }
  .mb6_m-01 { margin-bottom: var(--px6); }
  .mb7_m-01 { margin-bottom: var(--px7); }
  .mb8_m-01 { margin-bottom: var(--px8); }
  .mb9_m-01 { margin-bottom: var(--px9); }
  .mb10_m-01 { margin-bottom: var(--px10); }
  .mb11_m-01 { margin-bottom: var(--px11); }
  .mb12_m-01 { margin-bottom: var(--px12); }
  .mb13_m-01 { margin-bottom: var(--px13); }
  .mb14_m-01 { margin-bottom: var(--px14); }
  .mb15_m-01 { margin-bottom: var(--px15); }
  .mb16_m-01 { margin-bottom: var(--px16); }
  .mb17_m-01 { margin-bottom: var(--px17); }
  .mb18_m-01 { margin-bottom: var(--px18); }
  .mb19_m-01 { margin-bottom: var(--px19); }
  .mb20_m-01 { margin-bottom: var(--px20); }
  .mb5p_m-01 { margin-bottom: 5%; }
  .mb10p_m-01 { margin-bottom: 10%; }
  .mb15p_m-01 { margin-bottom: 15%; }
  .mb20p_m-01 { margin-bottom: 20%; }
  .mb25p_m-01 { margin-bottom: 25%; }
  .mb30p_m-01 { margin-bottom: 30%; }
  .mb35p_m-01 { margin-bottom: 35%; }
  .mb40p_m-01 { margin-bottom: 40%; }
  .mb45p_m-01 { margin-bottom: 45%; }
  .mb50p_m-01 { margin-bottom: 50%; }
  .mb55p_m-01 { margin-bottom: 55%; }
  .mb60p_m-01 { margin-bottom: 60%; }
  .mb65p_m-01 { margin-bottom: 65%; }
  .mb70p_m-01 { margin-bottom: 70%; }
  .mb75p_m-01 { margin-bottom: 75%; }
  .mb80p_m-01 { margin-bottom: 80%; }
  .mb85p_m-01 { margin-bottom: 85%; }
  .mb90p_m-01 { margin-bottom: 90%; }
  .mb95p_m-01 { margin-bottom: 95%; }
  .mb100p_m-01 { margin-bottom: 100%; }
  .ml1_m-01 { margin-left: var(--px1); }
  .ml2_m-01 { margin-left: var(--px2); }
  .ml3_m-01 { margin-left: var(--px3); }
  .ml4_m-01 { margin-left: var(--px4); }
  .ml5_m-01 { margin-left: var(--px5); }
  .ml6_m-01 { margin-left: var(--px6); }
  .ml7_m-01 { margin-left: var(--px7); }
  .ml8_m-01 { margin-left: var(--px8); }
  .ml9_m-01 { margin-left: var(--px9); }
  .ml10_m-01 { margin-left: var(--px10); }
  .ml11_m-01 { margin-left: var(--px11); }
  .ml12_m-01 { margin-left: var(--px12); }
  .ml13_m-01 { margin-left: var(--px13); }
  .ml14_m-01 { margin-left: var(--px14); }
  .ml15_m-01 { margin-left: var(--px15); }
  .ml16_m-01 { margin-left: var(--px16); }
  .ml17_m-01 { margin-left: var(--px17); }
  .ml18_m-01 { margin-left: var(--px18); }
  .ml19_m-01 { margin-left: var(--px19); }
  .ml20_m-01 { margin-left: var(--px20); }
  .ml5p_m-01 { margin-left: 5%; }
  .ml10p_m-01 { margin-left: 10%; }
  .ml15p_m-01 { margin-left: 15%; }
  .ml20p_m-01 { margin-left: 20%; }
  .ml25p_m-01 { margin-left: 25%; }
  .ml30p_m-01 { margin-left: 30%; }
  .ml35p_m-01 { margin-left: 35%; }
  .ml40p_m-01 { margin-left: 40%; }
  .ml45p_m-01 { margin-left: 45%; }
  .ml50p_m-01 { margin-left: 50%; }
  .ml55p_m-01 { margin-left: 55%; }
  .ml60p_m-01 { margin-left: 60%; }
  .ml65p_m-01 { margin-left: 65%; }
  .ml70p_m-01 { margin-left: 70%; }
  .ml75p_m-01 { margin-left: 75%; }
  .ml80p_m-01 { margin-left: 80%; }
  .ml85p_m-01 { margin-left: 85%; }
  .ml90p_m-01 { margin-left: 90%; }
  .ml95p_m-01 { margin-left: 95%; }
  .ml100p_m-01 { margin-left: 100%; }
  .ba0_m-01 { border: none; }
  .bt0_m-01 { border-top: none; }
  .br0_m-01 { border-right: none; }
  .bb0_m-01 { border-bottom: none; }
  .bl0_m-01 { border-left: none; }
  .ba_m-01 { border: solid 1px rgba(255, 255, 255, 0.15); }
  .bt_m-01 { border-top: solid 1px rgba(255, 255, 255, 0.15); }
  .br_m-01 { border-right: solid 1px rgba(255, 255, 255, 0.15); }
  .bb_m-01 { border-bottom: solid 1px rgba(255, 255, 255, 0.15); }
  .bl_m-01 { border-left: solid 1px rgba(255, 255, 255, 0.15); }
  .bv_m-01 { border-top: solid 1px rgba(255, 255, 255, 0.15); border-bottom: solid 1px rgba(255, 255, 255, 0.15); }
  .bh_m-01 { border-left: solid 1px rgba(255, 255, 255, 0.15); border-right: solid 1px rgba(255, 255, 255, 0.15); }
  .borderNeutralOnFill_m-01 { border-color: var(--neutralOnFill); }
  .borderBlack_m-01 { border-color: var(--black); }
  .borderWhite_m-01 { border-color: var(--white); }
  .borderGreyHighlighted_m-01 { border-color: var(--greyHighlighted); }
  .borderNeutral_m-01 { border-color: var(--neutral); }
  .borderRed_m-01 { border-color: var(--red); }
  .borderTeal_m-01 { border-color: var(--teal); }
  .borderPurple_m-01 { border-color: var(--purple); }
  .borderBlue_m-01 { border-color: var(--blue); }
  .borderOrange_m-01 { border-color: var(--orange); }
  .borderYellow_m-01 { border-color: var(--yellow); }
  .borderGreen_m-01 { border-color: var(--green); }
  .borderPink_m-01 { border-color: var(--pink); }
  .borderGrey_m-01 { border-color: var(--grey); }
  .borderTextNeutral_m-01 { border-color: var(--textNeutral); }
  .borderTextMinimal_m-01 { border-color: var(--textMinimal); }
  .borderDetailNeutral_m-01 { border-color: var(--detailNeutral); }
  .borderDetailMinimal_m-01 { border-color: var(--detailMinimal); }
  .br1_m-01 { border-radius: 2px; }
  .br2_m-01 { border-radius: 5px; }
  .br3_m-01 { border-radius: 10px; }
  .br4_m-01 { border-radius: 15px; }
  .br5_m-01 { border-radius: 20px; }
  .strokeNeutralOnFill_m-01 { stroke: var(--neutralOnFill); }
  .strokeBlack_m-01 { stroke: var(--black); }
  .strokeWhite_m-01 { stroke: var(--white); }
  .strokeGreyHighlighted_m-01 { stroke: var(--greyHighlighted); }
  .strokeNeutral_m-01 { stroke: var(--neutral); }
  .strokeRed_m-01 { stroke: var(--red); }
  .strokeTeal_m-01 { stroke: var(--teal); }
  .strokePurple_m-01 { stroke: var(--purple); }
  .strokeBlue_m-01 { stroke: var(--blue); }
  .strokeOrange_m-01 { stroke: var(--orange); }
  .strokeYellow_m-01 { stroke: var(--yellow); }
  .strokeGreen_m-01 { stroke: var(--green); }
  .strokePink_m-01 { stroke: var(--pink); }
  .strokeGrey_m-01 { stroke: var(--grey); }
  .strokeTextNeutral_m-01 { stroke: var(--textNeutral); }
  .strokeTextMinimal_m-01 { stroke: var(--textMinimal); }
  .strokeDetailNeutral_m-01 { stroke: var(--detailNeutral); }
  .strokeDetailMinimal_m-01 { stroke: var(--detailMinimal); }
  .o0_m-01 { opacity: 0.00; }
  .o5_m-01 { opacity: 0.05; }
  .o10_m-01 { opacity: 0.10; }
  .o15_m-01 { opacity: 0.15; }
  .o20_m-01 { opacity: 0.20; }
  .o25_m-01 { opacity: 0.25; }
  .o30_m-01 { opacity: 0.30; }
  .o35_m-01 { opacity: 0.35; }
  .o40_m-01 { opacity: 0.40; }
  .o45_m-01 { opacity: 0.45; }
  .o50_m-01 { opacity: 0.50; }
  .o55_m-01 { opacity: 0.55; }
  .o60_m-01 { opacity: 0.60; }
  .o65_m-01 { opacity: 0.65; }
  .o70_m-01 { opacity: 0.70; }
  .o75_m-01 { opacity: 0.75; }
  .o80_m-01 { opacity: 0.80; }
  .o85_m-01 { opacity: 0.85; }
  .o90_m-01 { opacity: 0.90; }
  .o95_m-01 { opacity: 0.95; }
  .o100_m-01 { opacity: 1.00; }
  .aShadow_m-01 { box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.25); }
  .tShadow_m-01 { box-shadow: 0px -15px 25px rgba(0, 0, 0, 0.25); }
  .rShadow_m-01 { box-shadow: 15px 0px 25px rgba(0, 0, 0, 0.25); }
  .bShadow_m-01 { box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.25); }
  .lShadow_m-01 { box-shadow: -15px 0px 25px rgba(0, 0, 0, 0.25); }
  .rtShadow_m-01 { box-shadow: 15px -15px 25px rgba(0, 0, 0, 0.25); }
  .rbShadow_m-01 { box-shadow: 15px 15px 25px rgba(0, 0, 0, 0.25); }
  .lbShadow_m-01 { box-shadow: -15px 15px 25px rgba(0, 0, 0, 0.25); }
  .ltShadow_m-01 { box-shadow: -15px -15px 25px rgba(0, 0, 0, 0.25); }
  .rotate0_m-01 { transform: rotate(0deg); }
  .rotate5_m-01 { transform: rotate(5deg); }
  .rotate10_m-01 { transform: rotate(10deg); }
  .rotate15_m-01 { transform: rotate(15deg); }
  .rotate20_m-01 { transform: rotate(20deg); }
  .rotate25_m-01 { transform: rotate(25deg); }
  .rotate30_m-01 { transform: rotate(30deg); }
  .rotate35_m-01 { transform: rotate(35deg); }
  .rotate40_m-01 { transform: rotate(40deg); }
  .rotate45_m-01 { transform: rotate(45deg); }
  .rotate50_m-01 { transform: rotate(50deg); }
  .rotate55_m-01 { transform: rotate(55deg); }
  .rotate60_m-01 { transform: rotate(60deg); }
  .rotate65_m-01 { transform: rotate(65deg); }
  .rotate70_m-01 { transform: rotate(70deg); }
  .rotate75_m-01 { transform: rotate(75deg); }
  .rotate80_m-01 { transform: rotate(80deg); }
  .rotate85_m-01 { transform: rotate(85deg); }
  .rotate90_m-01 { transform: rotate(90deg); }
  .rotate95_m-01 { transform: rotate(95deg); }
  .rotate100_m-01 { transform: rotate(100deg); }
  .rotate105_m-01 { transform: rotate(105deg); }
  .rotate110_m-01 { transform: rotate(110deg); }
  .rotate115_m-01 { transform: rotate(115deg); }
  .rotate120_m-01 { transform: rotate(120deg); }
  .rotate125_m-01 { transform: rotate(125deg); }
  .rotate130_m-01 { transform: rotate(130deg); }
  .rotate135_m-01 { transform: rotate(135deg); }
  .rotate140_m-01 { transform: rotate(140deg); }
  .rotate145_m-01 { transform: rotate(145deg); }
  .rotate150_m-01 { transform: rotate(150deg); }
  .rotate155_m-01 { transform: rotate(155deg); }
  .rotate160_m-01 { transform: rotate(160deg); }
  .rotate165_m-01 { transform: rotate(165deg); }
  .rotate170_m-01 { transform: rotate(170deg); }
  .rotate175_m-01 { transform: rotate(175deg); }
  .rotate180_m-01 { transform: rotate(180deg); }
  .rotate185_m-01 { transform: rotate(185deg); }
  .rotate190_m-01 { transform: rotate(190deg); }
  .rotate195_m-01 { transform: rotate(195deg); }
  .rotate200_m-01 { transform: rotate(200deg); }
  .rotate205_m-01 { transform: rotate(205deg); }
  .rotate210_m-01 { transform: rotate(210deg); }
  .rotate215_m-01 { transform: rotate(215deg); }
  .rotate220_m-01 { transform: rotate(220deg); }
  .rotate225_m-01 { transform: rotate(225deg); }
  .rotate230_m-01 { transform: rotate(230deg); }
  .rotate235_m-01 { transform: rotate(235deg); }
  .rotate240_m-01 { transform: rotate(240deg); }
  .rotate245_m-01 { transform: rotate(245deg); }
  .rotate250_m-01 { transform: rotate(250deg); }
  .rotate255_m-01 { transform: rotate(255deg); }
  .rotate260_m-01 { transform: rotate(260deg); }
  .rotate265_m-01 { transform: rotate(265deg); }
  .rotate270_m-01 { transform: rotate(270deg); }
  .rotate275_m-01 { transform: rotate(275deg); }
  .rotate280_m-01 { transform: rotate(280deg); }
  .rotate285_m-01 { transform: rotate(285deg); }
  .rotate290_m-01 { transform: rotate(290deg); }
  .rotate295_m-01 { transform: rotate(295deg); }
  .rotate300_m-01 { transform: rotate(300deg); }
  .rotate305_m-01 { transform: rotate(305deg); }
  .rotate310_m-01 { transform: rotate(310deg); }
  .rotate315_m-01 { transform: rotate(315deg); }
  .rotate320_m-01 { transform: rotate(320deg); }
  .rotate325_m-01 { transform: rotate(325deg); }
  .rotate330_m-01 { transform: rotate(330deg); }
  .rotate335_m-01 { transform: rotate(335deg); }
  .rotate340_m-01 { transform: rotate(340deg); }
  .rotate345_m-01 { transform: rotate(345deg); }
  .rotate350_m-01 { transform: rotate(350deg); }
  .rotate355_m-01 { transform: rotate(355deg); }
  .rotate360_m-01 { transform: rotate(360deg); }
  .rotate365_m-01 { transform: rotate(365deg); }
  .rotateN0_m-01 { transform: rotate(-0deg); }
  .rotateN5_m-01 { transform: rotate(-5deg); }
  .rotateN10_m-01 { transform: rotate(-10deg); }
  .rotateN15_m-01 { transform: rotate(-15deg); }
  .rotateN20_m-01 { transform: rotate(-20deg); }
  .rotateN25_m-01 { transform: rotate(-25deg); }
  .rotateN30_m-01 { transform: rotate(-30deg); }
  .rotateN35_m-01 { transform: rotate(-35deg); }
  .rotateN40_m-01 { transform: rotate(-40deg); }
  .rotateN45_m-01 { transform: rotate(-45deg); }
  .rotateN50_m-01 { transform: rotate(-50deg); }
  .rotateN55_m-01 { transform: rotate(-55deg); }
  .rotateN60_m-01 { transform: rotate(-60deg); }
  .rotateN65_m-01 { transform: rotate(-65deg); }
  .rotateN70_m-01 { transform: rotate(-70deg); }
  .rotateN75_m-01 { transform: rotate(-75deg); }
  .rotateN80_m-01 { transform: rotate(-80deg); }
  .rotateN85_m-01 { transform: rotate(-85deg); }
  .rotateN90_m-01 { transform: rotate(-90deg); }
  .rotateN95_m-01 { transform: rotate(-95deg); }
  .rotateN100_m-01 { transform: rotate(-100deg); }
  .rotateN105_m-01 { transform: rotate(-105deg); }
  .rotateN110_m-01 { transform: rotate(-110deg); }
  .rotateN115_m-01 { transform: rotate(-115deg); }
  .rotateN120_m-01 { transform: rotate(-120deg); }
  .rotateN125_m-01 { transform: rotate(-125deg); }
  .rotateN130_m-01 { transform: rotate(-130deg); }
  .rotateN135_m-01 { transform: rotate(-135deg); }
  .rotateN140_m-01 { transform: rotate(-140deg); }
  .rotateN145_m-01 { transform: rotate(-145deg); }
  .rotateN150_m-01 { transform: rotate(-150deg); }
  .rotateN155_m-01 { transform: rotate(-155deg); }
  .rotateN160_m-01 { transform: rotate(-160deg); }
  .rotateN165_m-01 { transform: rotate(-165deg); }
  .rotateN170_m-01 { transform: rotate(-170deg); }
  .rotateN175_m-01 { transform: rotate(-175deg); }
  .rotateN180_m-01 { transform: rotate(-180deg); }
  .rotateN185_m-01 { transform: rotate(-185deg); }
  .rotateN190_m-01 { transform: rotate(-190deg); }
  .rotateN195_m-01 { transform: rotate(-195deg); }
  .rotateN200_m-01 { transform: rotate(-200deg); }
  .rotateN205_m-01 { transform: rotate(-205deg); }
  .rotateN210_m-01 { transform: rotate(-210deg); }
  .rotateN215_m-01 { transform: rotate(-215deg); }
  .rotateN220_m-01 { transform: rotate(-220deg); }
  .rotateN225_m-01 { transform: rotate(-225deg); }
  .rotateN230_m-01 { transform: rotate(-230deg); }
  .rotateN235_m-01 { transform: rotate(-235deg); }
  .rotateN240_m-01 { transform: rotate(-240deg); }
  .rotateN245_m-01 { transform: rotate(-245deg); }
  .rotateN250_m-01 { transform: rotate(-250deg); }
  .rotateN255_m-01 { transform: rotate(-255deg); }
  .rotateN260_m-01 { transform: rotate(-260deg); }
  .rotateN265_m-01 { transform: rotate(-265deg); }
  .rotateN270_m-01 { transform: rotate(-270deg); }
  .rotateN275_m-01 { transform: rotate(-275deg); }
  .rotateN280_m-01 { transform: rotate(-280deg); }
  .rotateN285_m-01 { transform: rotate(-285deg); }
  .rotateN290_m-01 { transform: rotate(-290deg); }
  .rotateN295_m-01 { transform: rotate(-295deg); }
  .rotateN300_m-01 { transform: rotate(-300deg); }
  .rotateN305_m-01 { transform: rotate(-305deg); }
  .rotateN310_m-01 { transform: rotate(-310deg); }
  .rotateN315_m-01 { transform: rotate(-315deg); }
  .rotateN320_m-01 { transform: rotate(-320deg); }
  .rotateN325_m-01 { transform: rotate(-325deg); }
  .rotateN330_m-01 { transform: rotate(-330deg); }
  .rotateN335_m-01 { transform: rotate(-335deg); }
  .rotateN340_m-01 { transform: rotate(-340deg); }
  .rotateN345_m-01 { transform: rotate(-345deg); }
  .rotateN350_m-01 { transform: rotate(-350deg); }
  .rotateN355_m-01 { transform: rotate(-355deg); }
  .rotateN360_m-01 { transform: rotate(-360deg); }
  .rotateN365_m-01 { transform: rotate(-365deg); }
  .focusBlack_m-01:focus { color: var(--black); }
  .focusWhite_m-01:focus { color: var(--white); }
  .focusGreyHighlighted_m-01:focus { color: var(--greyHighlightedAlt); }
  .focusNeutral_m-01:focus { color: var(--neutralAlt); }
  .focusRed_m-01:focus { color: var(--redAlt); }
  .focusPurple_m-01:focus { color: var(--purpleAlt); }
  .focusDetailNeutral_m-01:focus { color: var(--detailNeutral); }
  .focusDetailMinimal_m-01:focus { color: var(--detailMinimal); }
  .focusBgBlack_m-01:focus { background-color: var(--black); fill: var(--black); }
  .focusBgWhite_m-01:focus { background-color: var(--white); fill: var(--white); }
  .focusBgGreyHighlighted_m-01:focus { background-color: var(--greyHighlightedAlt); fill: var(--greyHighlightedAlt); }
  .focusBgNeutral_m-01:focus { background-color: var(--neutralFillAlt); fill: var(--neutralFillAlt); }
  .focusBgLevel1_m-01:focus { background-color: var(--bgLevel1); fill: var(--bgLevel1); }
  .focusBgLevel2_m-01:focus { background-color: var(--bgLevel2); fill: var(--bgLevel2); }
  .focusBgLevel3_m-01:focus { background-color: var(--bgLevel3); fill: var(--bgLevel3); }
  .focusBgLevel4_m-01:focus { background-color: var(--bgLevel4); fill: var(--bgLevel4); }
  .focusBgRed_m-01:focus { background-color: var(--redFillAlt); fill: var(--redFillAlt); }
  .focusBgTeal_m-01:focus { background-color: var(--tealFillAlt); fill: var(--tealFillAlt); }
  .focusBgPurple_m-01:focus { background-color: var(--purpleFillAlt); fill: var(--purpleFillAlt); }
  .focusStrokeBlack_m-01:focus * { stroke: var(--black); }
  .focusStrokeWhite_m-01:focus * { stroke: var(--white); }
  .focusStrokeGreyHighlighted_m-01:focus * { stroke: var(--greyHighlightedAlt); }
  .focusStrokeNeutral_m-01:focus * { stroke: var(--neutralAlt); }
  .focusStrokeRed_m-01:focus * { stroke: var(--redAlt); }
  .focusStrokePurple_m-01:focus * { stroke: var(--purpleAlt); }
  .focusStrokeDetailNeutral_m-01:focus * { stroke: var(--detailNeutral); }
  .focusStrokeDetailMinimal_m-01:focus * { stroke: var(--detailMinimal); }
  .focusBorderBlack_m-01:focus { border-color: var(--black); }
  .focusBorderWhite_m-01:focus { border-color: var(--white); }
  .focusBorderGreyHighlighted_m-01:focus { border-color: var(--greyHighlightedAlt); }
  .focusBorderNeutral_m-01:focus { border-color: var(--neutralAlt); }
  .focusBorderRed_m-01:focus { border-color: var(--redAlt); }
  .focusBorderPurple_m-01:focus { border-color: var(--purpleAlt); }
  .focusBorderDetailNeutral_m-01:focus { border-color: var(--detailNeutral); }
  .focusBorderDetailMinimal_m-01:focus { border-color: var(--detailMinimal); }
  .hoverLight_m-01:hover { font-weight: 300; }
  .hoverRegular_m-01:hover { font-weight: 400; }
  .hoverMedium_m-01:hover { font-weight: 500; }
  .hoverBold_m-01:hover { font-weight: 700; }
  .hoverBlack_m-01:hover { color: var(--black); }
  .hoverWhite_m-01:hover { color: var(--white); }
  .hoverGreyHighlighted_m-01:hover { color: var(--greyHighlightedAlt); }
  .hoverNeutral_m-01:hover { color: var(--neutralAlt); }
  .hoverRed_m-01:hover { color: var(--redAlt); }
  .hoverPurple_m-01:hover { color: var(--purpleAlt); }
  .hoverDetailNeutral_m-01:hover { color: var(--detailNeutral); }
  .hoverDetailMinimal_m-01:hover { color: var(--detailMinimal); }
  .hoverBgBlack_m-01:hover { background-color: var(--black); fill: var(--black); }
  .hoverBgWhite_m-01:hover { background-color: var(--white); fill: var(--white); }
  .hoverBgGreyHighlighted_m-01:hover { background-color: var(--greyHighlightedAlt); fill: var(--greyHighlightedAlt); }
  .hoverBgNeutral_m-01:hover { background-color: var(--neutralFillAlt); fill: var(--neutralFillAlt); }
  .hoverBgLevel1_m-01:hover { background-color: var(--bgLevel1); fill: var(--bgLevel1); }
  .hoverBgLevel2_m-01:hover { background-color: var(--bgLevel2); fill: var(--bgLevel2); }
  .hoverBgLevel3_m-01:hover { background-color: var(--bgLevel3); fill: var(--bgLevel3); }
  .hoverBgLevel4_m-01:hover { background-color: var(--bgLevel4); fill: var(--bgLevel4); }
  .hoverBgRed_m-01:hover { background-color: var(--redFillAlt); fill: var(--redFillAlt); }
  .hoverBgTeal_m-01:hover { background-color: var(--tealFillAlt); fill: var(--tealFillAlt); }
  .hoverBgPurple_m-01:hover { background-color: var(--purpleFillAlt); fill: var(--purpleFillAlt); }
  .hoverStrokeBlack_m-01:hover * { stroke: var(--black); }
  .hoverStrokeWhite_m-01:hover * { stroke: var(--white); }
  .hoverStrokeGreyHighlighted_m-01:hover * { stroke: var(--greyHighlightedAlt); }
  .hoverStrokeNeutral_m-01:hover * { stroke: var(--neutralAlt); }
  .hoverStrokeRed_m-01:hover * { stroke: var(--redAlt); }
  .hoverStrokePurple_m-01:hover * { stroke: var(--purpleAlt); }
  .hoverStrokeDetailNeutral_m-01:hover * { stroke: var(--detailNeutral); }
  .hoverStrokeDetailMinimal_m-01:hover * { stroke: var(--detailMinimal); }
  .hoverBorderBlack_m-01:hover { border-color: var(--black); }
  .hoverBorderWhite_m-01:hover { border-color: var(--white); }
  .hoverBorderGreyHighlighted_m-01:hover { border-color: var(--greyHighlightedAlt); }
  .hoverBorderNeutral_m-01:hover { border-color: var(--neutralAlt); }
  .hoverBorderRed_m-01:hover { border-color: var(--redAlt); }
  .hoverBorderPurple_m-01:hover { border-color: var(--purpleAlt); }
  .hoverBorderDetailNeutral_m-01:hover { border-color: var(--detailNeutral); }
  .hoverBorderDetailMinimal_m-01:hover { border-color: var(--detailMinimal); }
  .light_m-01 { font-weight: 300; }
  .regular_m-01 { font-weight: 400; }
  .medium_m-01 { font-weight: 500; }
  .bold_m-01 { font-weight: 700; }
  .bgNone_m-01 { fill: transparent; background-color: transparent; }
  .transparent_m-01 { color: transparent; }
  .vHidden_m-01 { visibility: hidden; }
  .flexWrap_m-01 { display: flex; flex-wrap: wrap; }
  .flexNoWrap_m-01 { display: flex; flex-wrap: nowrap; }
  .flexRow_m-01 { display: flex; flex-direction: row; }
  .flexColumn_m-01 { display: flex; flex-direction: column; }
  .noShrink_m-01 { flex-shrink: 0; }
  .gridRowAuto_m-01 { grid-row: auto; }
  .gridColumnAuto_m-01 { grid-column: auto; }
  .selfStart_m-01 { align-self: flex-start; }
  .selfCenter_m-01 { align-self: center; }
  .selfEnd_m-01 { align-self: flex-end; }
  .selfStretch_m-01 { align-self: stretch; }
  .visible_m-01 { overflow: visible; }
  .visibleX_m-01 { overflow-x: visible; }
  .visibleY_m-01 { overflow-y: visible; }
  .scroll_m-01 { overflow: auto; }
  .scrollX_m-01 { overflow-x: auto; }
  .scrollY_m-01 { overflow-y: auto; }
  .scrollAlways_m-01 { overflow: scroll; }
  .scrollXAlways_m-01 { overflow-x: scroll; }
  .scrollYAlways_m-01 { overflow-y: scroll; }
  .noOverflow_m-01 { overflow: hidden; }
  .fMono_m-01 { font-family: 'IBM Plex Mono', monospace; }
  .fSans_m-01 { font-family: 'IBM Plex Sans', sans-serif; }
  .fs48px_m-01 { font-size: 48px; }
  .fs60px_m-01 { font-size: 60px; }
  .italic_m-01 { font-style: italic; }
  .lhDouble_m-01 { line-height:1.5em; }
  .ellipsis_m-01 { text-overflow: ellipsis; white-space: nowrap; overflow: hidden; }
  .lineClamp1_m-01 { display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical; overflow: hidden; }
  .pre_m-01 { white-space: pre; }
  .preLine_m-01 { white-space: pre-line; }
  .preWrap_m-01 { white-space: pre-wrap; }
  .noWrap_m-01 { white-space: nowrap; }
  .breakAll_m-01 { word-break: break-all; }
  .breakWord_m-01 { word-break: break-word; }
  .noDecoration_m-01 { text-decoration: none; }
  .hyphens_m-01 { hyphens: auto; }
  .hyphensMan_m-01 { hyphens: manual; }
  .wAuto_m-01 { width: auto; }
  .wFitContent_m-01 { width: fit-content; }
  .w100vw_m-01 { width: 100vw; }
  .minW100vw_m-01 { min-width: 100vw; }
  .maxW100vw_m-01 { max-width: 100vw; }
  .wThird_m-01 { width: calc(100% / 3); }
  .minWThird_m-01 { min-width: calc(100% / 3); }
  .maxWThird_m-01 { max-width: calc(100% / 3); }
  .wHalf_m-01 { width: 48%; }
  .minWHalf_m-01 { min-width: 48%; }
  .maxWHalf_m-01 { max-width: 48%; }
  .hAuto_m-01 { height: auto; }
  .h0_m-01 { height: 0; }
  .h100vh_m-01 { height: 100vh; }
  .h50vh_m-01 { height: 50vh; }
  .hFitContent_m-01 { height: fit-content; }
  .minH100vh_m-01 { min-height: 100vh; }
  .hThird_m-01 { height: calc(100% / 3); }
  .minHThird_m-01 { min-height: calc(100% / 3); }
  .maxHThird_m-01 { max-height: calc(100% / 3); }
  .hHalf_m-01 { height: 48%; }
  .minHHalf_m-01 { min-height: 48%; }
  .maxHHalf_m-01 { max-height: 48%; }
  .maAuto_m-01 { margin: auto; }
  .ma0_m-01 { margin: 0; }
  .mvAuto_m-01 { margin-top: auto; margin-bottom: auto; }
  .mv0_m-01 { margin-top: 0; margin-bottom: 0; }
  .mhAuto_m-01 { margin-left: auto; margin-right: auto; }
  .mh0_m-01 { margin-left: 0; margin-right: 0; }
  .mtAuto_m-01 { margin-top: auto; }
  .mt0_m-01 { margin-top: 0; }
  .mrAuto_m-01 { margin-right: auto; }
  .mr0_m-01 { margin-right: 0; }
  .mbAuto_m-01 { margin-bottom: auto; }
  .mb0_m-01 { margin-bottom: 0; }
  .mlAuto_m-01 { margin-left: auto; }
  .ml0_m-01 { margin-left: 0; }
  .pa0_m-01 { padding: 0; }
  .pv0_m-01 { padding-top: 0; padding-bottom: 0; }
  .ph0_m-01 { padding-left: 0; padding-right: 0; }
  .pt0_m-01 { padding-top: 0; }
  .pr0_m-01 { padding-right: 0; }
  .pb0_m-01 { padding-bottom: 0; }
  .pl0_m-01 { padding-left: 0; }
  .paMin_m-01 { padding: 2px; }
  .ptMin_m-01 { padding-top: 2px; }
  .prMin_m-01 { padding-right: 2px; }
  .pbMin_m-01 { padding-bottom: 2px; }
  .plMin_m-01 { padding-left: 2px; }
  .pvMin_m-01 { padding-top: 2px; padding-bottom: 2px; }
  .phMin_m-01 { padding-left: 2px; padding-right: 2px; }
  .br50p_m-01 { border-radius: 50%; }
  .baWhite_m-01 { border: solid 1px white; }
  .baTransparent_m-01 { border: solid 1px transparent; }
  .baBlack_m-01 { border: solid 1px rgba(0, 0, 0, 0.1); }
  .btBlack_m-01 { border-top: solid 1px rgba(0, 0, 0, 0.1); }
  .btWhite_m-01 { border-top: solid 1px white; }
  .brBlack_m-01 { border-right: solid 1px rgba(0, 0, 0, 0.1); }
  .bbTransparent_m-01 { border-bottom: solid 1px transparent; }
  .bbBlack_m-01 { border-bottom: solid 1px rgba(0, 0, 0, 0.1); }
  .bbWhite_m-01 { border-bottom: solid 1px white; }
  .bbPurple_m-01 { border-bottom: solid 1px var(--purple); }
  .bbPurple2_m-01 { border-bottom: solid 2px var(--purple); }
  .blBlack_m-01 { border-left: solid 1px rgba(0, 0, 0, 0.1); }
  .ol0_m-01 { outline: none; }
  .noShadow_m-01 { box-shadow: none; }
  .shadowInset_m-01 { box-shadow: inset 0 15px 20px rgba(0, 0, 0, 0.25); }
  .aShadowInset_m-01 { box-shadow: inset 0 0px 15px rgba(0, 0, 0, 0.5); }
  .rShadowInset_m-01 { box-shadow: inset 10px 0px 15px rgba(0, 0, 0, 0.25); }
  .lShadowInset_m-01 { box-shadow: inset 10px 0px -15px rgba(0, 0, 0, 0.25); }
  .tShadowInset_m-01 { box-shadow: inset 10px 15px 0px rgba(0, 0, 0, 0.25); }
  .bShadowInset_m-01 { box-shadow: inset 10px -15px 0px rgba(0, 0, 0, 0.25); }
  .bhShadow_m-01 { box-shadow: 25px 25px 25px rgba(0, 0, 0, 0.25), -25px 25px 25px rgba(0, 0, 0, 0.25); }
  .shadowLight_m-01 { box-shadow: 0 0 50px var(--white); }
  .pointer_m-01 { cursor: pointer; }
  .cursor_m-01 { cursor: default; }
  .move_m-01 { cursor: move; }
  .animate_m-01 { transition: all 0.2s ease-in-out; }
  .animateColor_m-01 { transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out; }
  .animateOpacity_m-01 { transition: opacity 0.2s ease-in-out; }
  .inactive_m-01 { cursor: default; opacity: 0.3;; }
  .noEvent_m-01 { pointer-events: none; }
  .eventAuto_m-01 { pointer-events: auto; }
  .noSelect_m-01 { user-select: none; }
  .bgWhiteRadialGradient_m-01 { background: radial-gradient(
    rgba(255, 255, 255, 1),
    rgba(255, 255, 255, 0.5) 20%,
    rgba(255, 255, 255, 0.25) 40%,
    rgba(255, 255, 255, 0) 70%
  );
  margin-left: -5px; }
  .t10p_m-01 { top: 10%; }
  .t15p_m-01 { top: 15%; }
  .l10p_m-01 { left: 10%; }
  .l25p_m-01 { left: 25%; }
  .hoverO0_m-01:hover { opacity: 0; }
  .hoverO100_m-01:hover { opacity: 1; }
  .hoverU_m-01:hover { border-bottom: solid 1px var(--white); }
  .hoverShadow_m-01:hover { box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.25); }
  .hoverChildPurple_m-01:hover * { color: var(--purpleAlt); fill: var(--purpleAlt); }
  .hoverTransparentBorder_m-01:hover { border-color: transparent; }
  .noScrollbar_m-01::-webkit-scrollbar { display: none; }
  .outlineWhite_m-01:focus { box-shadow: 0 0 15px 1px var(--white); background: var(--white); color: var(--grey90); }
  .firstLetterCap_m-01::first-letter { text-transform: uppercase; }
}
@media (900px <= width <= 1300px) {
  .neutralOnFill_in_m-01 { color: var(--neutralOnFill); }
  .black_in_m-01 { color: var(--black); }
  .white_in_m-01 { color: var(--white); }
  .greyHighlighted_in_m-01 { color: var(--greyHighlighted); }
  .neutral_in_m-01 { color: var(--neutral); }
  .red_in_m-01 { color: var(--red); }
  .teal_in_m-01 { color: var(--teal); }
  .purple_in_m-01 { color: var(--purple); }
  .blue_in_m-01 { color: var(--blue); }
  .orange_in_m-01 { color: var(--orange); }
  .yellow_in_m-01 { color: var(--yellow); }
  .green_in_m-01 { color: var(--green); }
  .pink_in_m-01 { color: var(--pink); }
  .grey_in_m-01 { color: var(--grey); }
  .textNeutral_in_m-01 { color: var(--textNeutral); }
  .textMinimal_in_m-01 { color: var(--textMinimal); }
  .detailNeutral_in_m-01 { color: var(--detailNeutral); }
  .detailMinimal_in_m-01 { color: var(--detailMinimal); }
  .bgBlack_in_m-01 { fill: var--(black); background-color: var(--black); }
  .bgWhite_in_m-01 { fill: var--(white); background-color: var(--white); }
  .bgGreyHighlighted_in_m-01 { fill: var--(greyHighlighted); background-color: var(--greyHighlighted); }
  .bgNeutral_in_m-01 { fill: var--(neutralFill); background-color: var(--neutralFill); }
  .bgLevel1_in_m-01 { fill: var--(bgLevel1); background-color: var(--bgLevel1); }
  .bgLevel2_in_m-01 { fill: var--(bgLevel2); background-color: var(--bgLevel2); }
  .bgLevel3_in_m-01 { fill: var--(bgLevel3); background-color: var(--bgLevel3); }
  .bgLevel4_in_m-01 { fill: var--(bgLevel4); background-color: var(--bgLevel4); }
  .bgRed_in_m-01 { fill: var--(redFill); background-color: var(--redFill); }
  .bgTeal_in_m-01 { fill: var--(tealFill); background-color: var(--tealFill); }
  .bgPurple_in_m-01 { fill: var--(purpleFill); background-color: var(--purpleFill); }
  .bgBlue_in_m-01 { fill: var--(blueFill); background-color: var(--blueFill); }
  .bgOrange_in_m-01 { fill: var--(orangeFill); background-color: var(--orangeFill); }
  .bgYellow_in_m-01 { fill: var--(yellowFill); background-color: var(--yellowFill); }
  .bgGreen_in_m-01 { fill: var--(greenFill); background-color: var(--greenFill); }
  .bgPink_in_m-01 { fill: var--(pinkFill); background-color: var(--pinkFill); }
  .bgGrey_in_m-01 { fill: var--(greyFill); background-color: var(--greyFill); }
  .fixed_in_m-01 { position: fixed; }
  .relative_in_m-01 { position: relative; }
  .absolute_in_m-01 { position: absolute; }
  .l0_in_m-01 { left: 0; }
  .r0_in_m-01 { right: 0; }
  .t0_in_m-01 { top: 0; }
  .b0_in_m-01 { bottom: 0; }
  .hidden_in_m-01 { display: none; }
  .block_in_m-01 { display: block; }
  .inlineBlock_in_m-01 { display: inline-block; }
  .inlineFlex_in_m-01 { display: inline-flex; }
  .flex_in_m-01 { display: flex; }
  .flex0_in_m-01 { flex: 0; }
  .flex1_in_m-01 { flex: 1; }
  .flex2_in_m-01 { flex: 2; }
  .flex3_in_m-01 { flex: 3; }
  .flex4_in_m-01 { flex: 4; }
  .flex5_in_m-01 { flex: 5; }
  .flex6_in_m-01 { flex: 6; }
  .flex7_in_m-01 { flex: 7; }
  .flex8_in_m-01 { flex: 8; }
  .flex9_in_m-01 { flex: 9; }
  .flex10_in_m-01 { flex: 10; }
  .justifyStart_in_m-01 { display: flex; justify-content: flex-start; }
  .justifyCenter_in_m-01 { display: flex; justify-content: center; }
  .justifyEnd_in_m-01 { display: flex; justify-content: flex-end; }
  .justifyBetween_in_m-01 { display: flex; justify-content: space-between; }
  .justifyAround_in_m-01 { display: flex; justify-content: space-around; }
  .justifyBaseline_in_m-01 { display: flex; justify-content: baseline; }
  .justifyEvenly_in_m-01 { display: flex; justify-content: space-evenly; }
  .justifyStretch_in_m-01 { display: flex; justify-content: stretch; }
  .alignStart_in_m-01 { display: flex; align-items: flex-start; }
  .alignCenter_in_m-01 { display: flex; align-items: center; }
  .alignEnd_in_m-01 { display: flex; align-items: flex-end; }
  .alignBetween_in_m-01 { display: flex; align-items: space-between; }
  .alignAround_in_m-01 { display: flex; align-items: space-around; }
  .alignBaseline_in_m-01 { display: flex; align-items: baseline; }
  .alignStretch_in_m-01 { display: flex; align-items: stretch; }
  .flexGrow0_in_m-01 { flex-grow: 0; }
  .flexGrow1_in_m-01 { flex-grow: 1; }
  .flexGrow2_in_m-01 { flex-grow: 2; }
  .flexGrow3_in_m-01 { flex-grow: 3; }
  .flexGrow4_in_m-01 { flex-grow: 4; }
  .flexGrow5_in_m-01 { flex-grow: 5; }
  .flexShrink0_in_m-01 { flex-shrink: 0; }
  .flexShrink1_in_m-01 { flex-shrink: 1; }
  .flexShrink2_in_m-01 { flex-shrink: 2; }
  .flexShrink3_in_m-01 { flex-shrink: 3; }
  .flexShrink4_in_m-01 { flex-shrink: 4; }
  .flexShrink5_in_m-01 { flex-shrink: 5; }
  .order1_in_m-01 { order: 1; }
  .order2_in_m-01 { order: 2; }
  .order3_in_m-01 { order: 3; }
  .order4_in_m-01 { order: 4; }
  .order5_in_m-01 { order: 5; }
  .order6_in_m-01 { order: 6; }
  .order7_in_m-01 { order: 7; }
  .order8_in_m-01 { order: 8; }
  .order9_in_m-01 { order: 9; }
  .order10_in_m-01 { order: 10; }
  .zi0_in_m-01 { z-index: 0; }
  .zi1_in_m-01 { z-index: 1; }
  .zi2_in_m-01 { z-index: 2; }
  .zi3_in_m-01 { z-index: 3; }
  .zi4_in_m-01 { z-index: 4; }
  .zi5_in_m-01 { z-index: 5; }
  .zi6_in_m-01 { z-index: 6; }
  .zi7_in_m-01 { z-index: 7; }
  .zi8_in_m-01 { z-index: 8; }
  .zi9_in_m-01 { z-index: 9; }
  .zi10_in_m-01 { z-index: 10; }
  .zi11_in_m-01 { z-index: 11; }
  .zi12_in_m-01 { z-index: 12; }
  .zi13_in_m-01 { z-index: 13; }
  .zi14_in_m-01 { z-index: 14; }
  .zi15_in_m-01 { z-index: 15; }
  .zi16_in_m-01 { z-index: 16; }
  .zi17_in_m-01 { z-index: 17; }
  .zi18_in_m-01 { z-index: 18; }
  .zi19_in_m-01 { z-index: 19; }
  .zi20_in_m-01 { z-index: 20; }
  .zi21_in_m-01 { z-index: 21; }
  .zi22_in_m-01 { z-index: 22; }
  .zi23_in_m-01 { z-index: 23; }
  .zi24_in_m-01 { z-index: 24; }
  .zi25_in_m-01 { z-index: 25; }
  .zi26_in_m-01 { z-index: 26; }
  .zi27_in_m-01 { z-index: 27; }
  .zi28_in_m-01 { z-index: 28; }
  .zi29_in_m-01 { z-index: 29; }
  .zi30_in_m-01 { z-index: 30; }
  .zi31_in_m-01 { z-index: 31; }
  .zi32_in_m-01 { z-index: 32; }
  .zi33_in_m-01 { z-index: 33; }
  .zi34_in_m-01 { z-index: 34; }
  .zi35_in_m-01 { z-index: 35; }
  .zi36_in_m-01 { z-index: 36; }
  .zi37_in_m-01 { z-index: 37; }
  .zi38_in_m-01 { z-index: 38; }
  .zi39_in_m-01 { z-index: 39; }
  .zi40_in_m-01 { z-index: 40; }
  .zi41_in_m-01 { z-index: 41; }
  .zi42_in_m-01 { z-index: 42; }
  .zi43_in_m-01 { z-index: 43; }
  .zi44_in_m-01 { z-index: 44; }
  .zi45_in_m-01 { z-index: 45; }
  .zi46_in_m-01 { z-index: 46; }
  .zi47_in_m-01 { z-index: 47; }
  .zi48_in_m-01 { z-index: 48; }
  .zi49_in_m-01 { z-index: 49; }
  .zi50_in_m-01 { z-index: 50; }
  .fs1_in_m-01 { font-size: 4rem; }
  .fs2_in_m-01 { font-size: 2.5rem; }
  .fs3_in_m-01 { font-size: 1.5rem; }
  .fs4_in_m-01 { font-size: 1.25rem; }
  .fs5_in_m-01 { font-size: 1rem; }
  .fs6_in_m-01 { font-size: 0.9rem; }
  .fs7_in_m-01 { font-size: 0.75rem; }
  .textLeft_in_m-01 { text-align: left; }
  .textCenter_in_m-01 { text-align: center; }
  .textRight_in_m-01 { text-align: right; }
  .textEnd_in_m-01 { text-align: end; }
  .lh1_in_m-01 { line-height: 1; }
  .lh2_in_m-01 { line-height: 1.25; }
  .lh3_in_m-01 { line-height: 1.5; }
  .lh4_in_m-01 { line-height: 1.75; }
  .lh5_in_m-01 { line-height: 2; }
  .lh6_in_m-01 { line-height: 2.25; }
  .lh1px_in_m-01 { line-height: var(--px1); }
  .lh2px_in_m-01 { line-height: var(--px2); }
  .lh3px_in_m-01 { line-height: var(--px3); }
  .lh4px_in_m-01 { line-height: var(--px4); }
  .lh5px_in_m-01 { line-height: var(--px5); }
  .lh6px_in_m-01 { line-height: var(--px6); }
  .lh7px_in_m-01 { line-height: var(--px7); }
  .lh8px_in_m-01 { line-height: var(--px8); }
  .lh9px_in_m-01 { line-height: var(--px9); }
  .lh10px_in_m-01 { line-height: var(--px10); }
  .lh11px_in_m-01 { line-height: var(--px11); }
  .lh12px_in_m-01 { line-height: var(--px12); }
  .lh13px_in_m-01 { line-height: var(--px13); }
  .lh14px_in_m-01 { line-height: var(--px14); }
  .lh15px_in_m-01 { line-height: var(--px15); }
  .lh16px_in_m-01 { line-height: var(--px16); }
  .lh17px_in_m-01 { line-height: var(--px17); }
  .lh18px_in_m-01 { line-height: var(--px18); }
  .lh19px_in_m-01 { line-height: var(--px19); }
  .lh20px_in_m-01 { line-height: var(--px20); }
  .ls1_in_m-01 { letter-spacing: 0.03em; }
  .ls2_in_m-01 { letter-spacing: 0.02em; }
  .ls3_in_m-01 { letter-spacing: 0.015em; }
  .uppercase_in_m-01 { text-transform: uppercase; }
  .lowercase_in_m-01 { text-transform: lowercase; }
  .capitalize_in_m-01 { text-transform: capitalize; }
  .gridRow0_in_m-01 { grid-row: 0; }
  .gridRow1_in_m-01 { grid-row: 1; }
  .gridRow2_in_m-01 { grid-row: 2; }
  .gridRow3_in_m-01 { grid-row: 3; }
  .gridRow4_in_m-01 { grid-row: 4; }
  .gridRow5_in_m-01 { grid-row: 5; }
  .gridRow6_in_m-01 { grid-row: 6; }
  .gridRow7_in_m-01 { grid-row: 7; }
  .gridRow8_in_m-01 { grid-row: 8; }
  .gridRow9_in_m-01 { grid-row: 9; }
  .gridRow10_in_m-01 { grid-row: 10; }
  .gridRow11_in_m-01 { grid-row: 11; }
  .gridRow12_in_m-01 { grid-row: 12; }
  .gridRow0to0_in_m-01 { grid-row: 0 / 0; }
  .gridRow0to1_in_m-01 { grid-row: 0 / 1; }
  .gridRow0to2_in_m-01 { grid-row: 0 / 2; }
  .gridRow0to3_in_m-01 { grid-row: 0 / 3; }
  .gridRow0to4_in_m-01 { grid-row: 0 / 4; }
  .gridRow0to5_in_m-01 { grid-row: 0 / 5; }
  .gridRow0to6_in_m-01 { grid-row: 0 / 6; }
  .gridRow0to7_in_m-01 { grid-row: 0 / 7; }
  .gridRow0to8_in_m-01 { grid-row: 0 / 8; }
  .gridRow0to9_in_m-01 { grid-row: 0 / 9; }
  .gridRow0to10_in_m-01 { grid-row: 0 / 10; }
  .gridRow0to11_in_m-01 { grid-row: 0 / 11; }
  .gridRow0to12_in_m-01 { grid-row: 0 / 12; }
  .gridRow1to0_in_m-01 { grid-row: 1 / 0; }
  .gridRow1to1_in_m-01 { grid-row: 1 / 1; }
  .gridRow1to2_in_m-01 { grid-row: 1 / 2; }
  .gridRow1to3_in_m-01 { grid-row: 1 / 3; }
  .gridRow1to4_in_m-01 { grid-row: 1 / 4; }
  .gridRow1to5_in_m-01 { grid-row: 1 / 5; }
  .gridRow1to6_in_m-01 { grid-row: 1 / 6; }
  .gridRow1to7_in_m-01 { grid-row: 1 / 7; }
  .gridRow1to8_in_m-01 { grid-row: 1 / 8; }
  .gridRow1to9_in_m-01 { grid-row: 1 / 9; }
  .gridRow1to10_in_m-01 { grid-row: 1 / 10; }
  .gridRow1to11_in_m-01 { grid-row: 1 / 11; }
  .gridRow1to12_in_m-01 { grid-row: 1 / 12; }
  .gridRow2to0_in_m-01 { grid-row: 2 / 0; }
  .gridRow2to1_in_m-01 { grid-row: 2 / 1; }
  .gridRow2to2_in_m-01 { grid-row: 2 / 2; }
  .gridRow2to3_in_m-01 { grid-row: 2 / 3; }
  .gridRow2to4_in_m-01 { grid-row: 2 / 4; }
  .gridRow2to5_in_m-01 { grid-row: 2 / 5; }
  .gridRow2to6_in_m-01 { grid-row: 2 / 6; }
  .gridRow2to7_in_m-01 { grid-row: 2 / 7; }
  .gridRow2to8_in_m-01 { grid-row: 2 / 8; }
  .gridRow2to9_in_m-01 { grid-row: 2 / 9; }
  .gridRow2to10_in_m-01 { grid-row: 2 / 10; }
  .gridRow2to11_in_m-01 { grid-row: 2 / 11; }
  .gridRow2to12_in_m-01 { grid-row: 2 / 12; }
  .gridRow3to0_in_m-01 { grid-row: 3 / 0; }
  .gridRow3to1_in_m-01 { grid-row: 3 / 1; }
  .gridRow3to2_in_m-01 { grid-row: 3 / 2; }
  .gridRow3to3_in_m-01 { grid-row: 3 / 3; }
  .gridRow3to4_in_m-01 { grid-row: 3 / 4; }
  .gridRow3to5_in_m-01 { grid-row: 3 / 5; }
  .gridRow3to6_in_m-01 { grid-row: 3 / 6; }
  .gridRow3to7_in_m-01 { grid-row: 3 / 7; }
  .gridRow3to8_in_m-01 { grid-row: 3 / 8; }
  .gridRow3to9_in_m-01 { grid-row: 3 / 9; }
  .gridRow3to10_in_m-01 { grid-row: 3 / 10; }
  .gridRow3to11_in_m-01 { grid-row: 3 / 11; }
  .gridRow3to12_in_m-01 { grid-row: 3 / 12; }
  .gridRow4to0_in_m-01 { grid-row: 4 / 0; }
  .gridRow4to1_in_m-01 { grid-row: 4 / 1; }
  .gridRow4to2_in_m-01 { grid-row: 4 / 2; }
  .gridRow4to3_in_m-01 { grid-row: 4 / 3; }
  .gridRow4to4_in_m-01 { grid-row: 4 / 4; }
  .gridRow4to5_in_m-01 { grid-row: 4 / 5; }
  .gridRow4to6_in_m-01 { grid-row: 4 / 6; }
  .gridRow4to7_in_m-01 { grid-row: 4 / 7; }
  .gridRow4to8_in_m-01 { grid-row: 4 / 8; }
  .gridRow4to9_in_m-01 { grid-row: 4 / 9; }
  .gridRow4to10_in_m-01 { grid-row: 4 / 10; }
  .gridRow4to11_in_m-01 { grid-row: 4 / 11; }
  .gridRow4to12_in_m-01 { grid-row: 4 / 12; }
  .gridRow5to0_in_m-01 { grid-row: 5 / 0; }
  .gridRow5to1_in_m-01 { grid-row: 5 / 1; }
  .gridRow5to2_in_m-01 { grid-row: 5 / 2; }
  .gridRow5to3_in_m-01 { grid-row: 5 / 3; }
  .gridRow5to4_in_m-01 { grid-row: 5 / 4; }
  .gridRow5to5_in_m-01 { grid-row: 5 / 5; }
  .gridRow5to6_in_m-01 { grid-row: 5 / 6; }
  .gridRow5to7_in_m-01 { grid-row: 5 / 7; }
  .gridRow5to8_in_m-01 { grid-row: 5 / 8; }
  .gridRow5to9_in_m-01 { grid-row: 5 / 9; }
  .gridRow5to10_in_m-01 { grid-row: 5 / 10; }
  .gridRow5to11_in_m-01 { grid-row: 5 / 11; }
  .gridRow5to12_in_m-01 { grid-row: 5 / 12; }
  .gridRow6to0_in_m-01 { grid-row: 6 / 0; }
  .gridRow6to1_in_m-01 { grid-row: 6 / 1; }
  .gridRow6to2_in_m-01 { grid-row: 6 / 2; }
  .gridRow6to3_in_m-01 { grid-row: 6 / 3; }
  .gridRow6to4_in_m-01 { grid-row: 6 / 4; }
  .gridRow6to5_in_m-01 { grid-row: 6 / 5; }
  .gridRow6to6_in_m-01 { grid-row: 6 / 6; }
  .gridRow6to7_in_m-01 { grid-row: 6 / 7; }
  .gridRow6to8_in_m-01 { grid-row: 6 / 8; }
  .gridRow6to9_in_m-01 { grid-row: 6 / 9; }
  .gridRow6to10_in_m-01 { grid-row: 6 / 10; }
  .gridRow6to11_in_m-01 { grid-row: 6 / 11; }
  .gridRow6to12_in_m-01 { grid-row: 6 / 12; }
  .gridRow7to0_in_m-01 { grid-row: 7 / 0; }
  .gridRow7to1_in_m-01 { grid-row: 7 / 1; }
  .gridRow7to2_in_m-01 { grid-row: 7 / 2; }
  .gridRow7to3_in_m-01 { grid-row: 7 / 3; }
  .gridRow7to4_in_m-01 { grid-row: 7 / 4; }
  .gridRow7to5_in_m-01 { grid-row: 7 / 5; }
  .gridRow7to6_in_m-01 { grid-row: 7 / 6; }
  .gridRow7to7_in_m-01 { grid-row: 7 / 7; }
  .gridRow7to8_in_m-01 { grid-row: 7 / 8; }
  .gridRow7to9_in_m-01 { grid-row: 7 / 9; }
  .gridRow7to10_in_m-01 { grid-row: 7 / 10; }
  .gridRow7to11_in_m-01 { grid-row: 7 / 11; }
  .gridRow7to12_in_m-01 { grid-row: 7 / 12; }
  .gridRow8to0_in_m-01 { grid-row: 8 / 0; }
  .gridRow8to1_in_m-01 { grid-row: 8 / 1; }
  .gridRow8to2_in_m-01 { grid-row: 8 / 2; }
  .gridRow8to3_in_m-01 { grid-row: 8 / 3; }
  .gridRow8to4_in_m-01 { grid-row: 8 / 4; }
  .gridRow8to5_in_m-01 { grid-row: 8 / 5; }
  .gridRow8to6_in_m-01 { grid-row: 8 / 6; }
  .gridRow8to7_in_m-01 { grid-row: 8 / 7; }
  .gridRow8to8_in_m-01 { grid-row: 8 / 8; }
  .gridRow8to9_in_m-01 { grid-row: 8 / 9; }
  .gridRow8to10_in_m-01 { grid-row: 8 / 10; }
  .gridRow8to11_in_m-01 { grid-row: 8 / 11; }
  .gridRow8to12_in_m-01 { grid-row: 8 / 12; }
  .gridRow9to0_in_m-01 { grid-row: 9 / 0; }
  .gridRow9to1_in_m-01 { grid-row: 9 / 1; }
  .gridRow9to2_in_m-01 { grid-row: 9 / 2; }
  .gridRow9to3_in_m-01 { grid-row: 9 / 3; }
  .gridRow9to4_in_m-01 { grid-row: 9 / 4; }
  .gridRow9to5_in_m-01 { grid-row: 9 / 5; }
  .gridRow9to6_in_m-01 { grid-row: 9 / 6; }
  .gridRow9to7_in_m-01 { grid-row: 9 / 7; }
  .gridRow9to8_in_m-01 { grid-row: 9 / 8; }
  .gridRow9to9_in_m-01 { grid-row: 9 / 9; }
  .gridRow9to10_in_m-01 { grid-row: 9 / 10; }
  .gridRow9to11_in_m-01 { grid-row: 9 / 11; }
  .gridRow9to12_in_m-01 { grid-row: 9 / 12; }
  .gridRow10to0_in_m-01 { grid-row: 10 / 0; }
  .gridRow10to1_in_m-01 { grid-row: 10 / 1; }
  .gridRow10to2_in_m-01 { grid-row: 10 / 2; }
  .gridRow10to3_in_m-01 { grid-row: 10 / 3; }
  .gridRow10to4_in_m-01 { grid-row: 10 / 4; }
  .gridRow10to5_in_m-01 { grid-row: 10 / 5; }
  .gridRow10to6_in_m-01 { grid-row: 10 / 6; }
  .gridRow10to7_in_m-01 { grid-row: 10 / 7; }
  .gridRow10to8_in_m-01 { grid-row: 10 / 8; }
  .gridRow10to9_in_m-01 { grid-row: 10 / 9; }
  .gridRow10to10_in_m-01 { grid-row: 10 / 10; }
  .gridRow10to11_in_m-01 { grid-row: 10 / 11; }
  .gridRow10to12_in_m-01 { grid-row: 10 / 12; }
  .gridRow11to0_in_m-01 { grid-row: 11 / 0; }
  .gridRow11to1_in_m-01 { grid-row: 11 / 1; }
  .gridRow11to2_in_m-01 { grid-row: 11 / 2; }
  .gridRow11to3_in_m-01 { grid-row: 11 / 3; }
  .gridRow11to4_in_m-01 { grid-row: 11 / 4; }
  .gridRow11to5_in_m-01 { grid-row: 11 / 5; }
  .gridRow11to6_in_m-01 { grid-row: 11 / 6; }
  .gridRow11to7_in_m-01 { grid-row: 11 / 7; }
  .gridRow11to8_in_m-01 { grid-row: 11 / 8; }
  .gridRow11to9_in_m-01 { grid-row: 11 / 9; }
  .gridRow11to10_in_m-01 { grid-row: 11 / 10; }
  .gridRow11to11_in_m-01 { grid-row: 11 / 11; }
  .gridRow11to12_in_m-01 { grid-row: 11 / 12; }
  .gridRow12to0_in_m-01 { grid-row: 12 / 0; }
  .gridRow12to1_in_m-01 { grid-row: 12 / 1; }
  .gridRow12to2_in_m-01 { grid-row: 12 / 2; }
  .gridRow12to3_in_m-01 { grid-row: 12 / 3; }
  .gridRow12to4_in_m-01 { grid-row: 12 / 4; }
  .gridRow12to5_in_m-01 { grid-row: 12 / 5; }
  .gridRow12to6_in_m-01 { grid-row: 12 / 6; }
  .gridRow12to7_in_m-01 { grid-row: 12 / 7; }
  .gridRow12to8_in_m-01 { grid-row: 12 / 8; }
  .gridRow12to9_in_m-01 { grid-row: 12 / 9; }
  .gridRow12to10_in_m-01 { grid-row: 12 / 10; }
  .gridRow12to11_in_m-01 { grid-row: 12 / 11; }
  .gridRow12to12_in_m-01 { grid-row: 12 / 12; }
  .gridRowSpan0_in_m-01 { grid-row: auto / span 0; }
  .gridRowSpan1_in_m-01 { grid-row: auto / span 1; }
  .gridRowSpan2_in_m-01 { grid-row: auto / span 2; }
  .gridRowSpan3_in_m-01 { grid-row: auto / span 3; }
  .gridRowSpan4_in_m-01 { grid-row: auto / span 4; }
  .gridRowSpan5_in_m-01 { grid-row: auto / span 5; }
  .gridRowSpan6_in_m-01 { grid-row: auto / span 6; }
  .gridRowSpan7_in_m-01 { grid-row: auto / span 7; }
  .gridRowSpan8_in_m-01 { grid-row: auto / span 8; }
  .gridRowSpan9_in_m-01 { grid-row: auto / span 9; }
  .gridRowSpan10_in_m-01 { grid-row: auto / span 10; }
  .gridColumn0_in_m-01 { grid-column: 0; }
  .gridColumn1_in_m-01 { grid-column: 1; }
  .gridColumn2_in_m-01 { grid-column: 2; }
  .gridColumn3_in_m-01 { grid-column: 3; }
  .gridColumn4_in_m-01 { grid-column: 4; }
  .gridColumn5_in_m-01 { grid-column: 5; }
  .gridColumn6_in_m-01 { grid-column: 6; }
  .gridColumn7_in_m-01 { grid-column: 7; }
  .gridColumn8_in_m-01 { grid-column: 8; }
  .gridColumn9_in_m-01 { grid-column: 9; }
  .gridColumn10_in_m-01 { grid-column: 10; }
  .gridColumn11_in_m-01 { grid-column: 11; }
  .gridColumn12_in_m-01 { grid-column: 12; }
  .gridColumn0to0_in_m-01 { grid-column: 0 / 0; }
  .gridColumn0to1_in_m-01 { grid-column: 0 / 1; }
  .gridColumn0to2_in_m-01 { grid-column: 0 / 2; }
  .gridColumn0to3_in_m-01 { grid-column: 0 / 3; }
  .gridColumn0to4_in_m-01 { grid-column: 0 / 4; }
  .gridColumn0to5_in_m-01 { grid-column: 0 / 5; }
  .gridColumn0to6_in_m-01 { grid-column: 0 / 6; }
  .gridColumn0to7_in_m-01 { grid-column: 0 / 7; }
  .gridColumn0to8_in_m-01 { grid-column: 0 / 8; }
  .gridColumn0to9_in_m-01 { grid-column: 0 / 9; }
  .gridColumn0to10_in_m-01 { grid-column: 0 / 10; }
  .gridColumn0to11_in_m-01 { grid-column: 0 / 11; }
  .gridColumn0to12_in_m-01 { grid-column: 0 / 12; }
  .gridColumn1to0_in_m-01 { grid-column: 1 / 0; }
  .gridColumn1to1_in_m-01 { grid-column: 1 / 1; }
  .gridColumn1to2_in_m-01 { grid-column: 1 / 2; }
  .gridColumn1to3_in_m-01 { grid-column: 1 / 3; }
  .gridColumn1to4_in_m-01 { grid-column: 1 / 4; }
  .gridColumn1to5_in_m-01 { grid-column: 1 / 5; }
  .gridColumn1to6_in_m-01 { grid-column: 1 / 6; }
  .gridColumn1to7_in_m-01 { grid-column: 1 / 7; }
  .gridColumn1to8_in_m-01 { grid-column: 1 / 8; }
  .gridColumn1to9_in_m-01 { grid-column: 1 / 9; }
  .gridColumn1to10_in_m-01 { grid-column: 1 / 10; }
  .gridColumn1to11_in_m-01 { grid-column: 1 / 11; }
  .gridColumn1to12_in_m-01 { grid-column: 1 / 12; }
  .gridColumn2to0_in_m-01 { grid-column: 2 / 0; }
  .gridColumn2to1_in_m-01 { grid-column: 2 / 1; }
  .gridColumn2to2_in_m-01 { grid-column: 2 / 2; }
  .gridColumn2to3_in_m-01 { grid-column: 2 / 3; }
  .gridColumn2to4_in_m-01 { grid-column: 2 / 4; }
  .gridColumn2to5_in_m-01 { grid-column: 2 / 5; }
  .gridColumn2to6_in_m-01 { grid-column: 2 / 6; }
  .gridColumn2to7_in_m-01 { grid-column: 2 / 7; }
  .gridColumn2to8_in_m-01 { grid-column: 2 / 8; }
  .gridColumn2to9_in_m-01 { grid-column: 2 / 9; }
  .gridColumn2to10_in_m-01 { grid-column: 2 / 10; }
  .gridColumn2to11_in_m-01 { grid-column: 2 / 11; }
  .gridColumn2to12_in_m-01 { grid-column: 2 / 12; }
  .gridColumn3to0_in_m-01 { grid-column: 3 / 0; }
  .gridColumn3to1_in_m-01 { grid-column: 3 / 1; }
  .gridColumn3to2_in_m-01 { grid-column: 3 / 2; }
  .gridColumn3to3_in_m-01 { grid-column: 3 / 3; }
  .gridColumn3to4_in_m-01 { grid-column: 3 / 4; }
  .gridColumn3to5_in_m-01 { grid-column: 3 / 5; }
  .gridColumn3to6_in_m-01 { grid-column: 3 / 6; }
  .gridColumn3to7_in_m-01 { grid-column: 3 / 7; }
  .gridColumn3to8_in_m-01 { grid-column: 3 / 8; }
  .gridColumn3to9_in_m-01 { grid-column: 3 / 9; }
  .gridColumn3to10_in_m-01 { grid-column: 3 / 10; }
  .gridColumn3to11_in_m-01 { grid-column: 3 / 11; }
  .gridColumn3to12_in_m-01 { grid-column: 3 / 12; }
  .gridColumn4to0_in_m-01 { grid-column: 4 / 0; }
  .gridColumn4to1_in_m-01 { grid-column: 4 / 1; }
  .gridColumn4to2_in_m-01 { grid-column: 4 / 2; }
  .gridColumn4to3_in_m-01 { grid-column: 4 / 3; }
  .gridColumn4to4_in_m-01 { grid-column: 4 / 4; }
  .gridColumn4to5_in_m-01 { grid-column: 4 / 5; }
  .gridColumn4to6_in_m-01 { grid-column: 4 / 6; }
  .gridColumn4to7_in_m-01 { grid-column: 4 / 7; }
  .gridColumn4to8_in_m-01 { grid-column: 4 / 8; }
  .gridColumn4to9_in_m-01 { grid-column: 4 / 9; }
  .gridColumn4to10_in_m-01 { grid-column: 4 / 10; }
  .gridColumn4to11_in_m-01 { grid-column: 4 / 11; }
  .gridColumn4to12_in_m-01 { grid-column: 4 / 12; }
  .gridColumn5to0_in_m-01 { grid-column: 5 / 0; }
  .gridColumn5to1_in_m-01 { grid-column: 5 / 1; }
  .gridColumn5to2_in_m-01 { grid-column: 5 / 2; }
  .gridColumn5to3_in_m-01 { grid-column: 5 / 3; }
  .gridColumn5to4_in_m-01 { grid-column: 5 / 4; }
  .gridColumn5to5_in_m-01 { grid-column: 5 / 5; }
  .gridColumn5to6_in_m-01 { grid-column: 5 / 6; }
  .gridColumn5to7_in_m-01 { grid-column: 5 / 7; }
  .gridColumn5to8_in_m-01 { grid-column: 5 / 8; }
  .gridColumn5to9_in_m-01 { grid-column: 5 / 9; }
  .gridColumn5to10_in_m-01 { grid-column: 5 / 10; }
  .gridColumn5to11_in_m-01 { grid-column: 5 / 11; }
  .gridColumn5to12_in_m-01 { grid-column: 5 / 12; }
  .gridColumn6to0_in_m-01 { grid-column: 6 / 0; }
  .gridColumn6to1_in_m-01 { grid-column: 6 / 1; }
  .gridColumn6to2_in_m-01 { grid-column: 6 / 2; }
  .gridColumn6to3_in_m-01 { grid-column: 6 / 3; }
  .gridColumn6to4_in_m-01 { grid-column: 6 / 4; }
  .gridColumn6to5_in_m-01 { grid-column: 6 / 5; }
  .gridColumn6to6_in_m-01 { grid-column: 6 / 6; }
  .gridColumn6to7_in_m-01 { grid-column: 6 / 7; }
  .gridColumn6to8_in_m-01 { grid-column: 6 / 8; }
  .gridColumn6to9_in_m-01 { grid-column: 6 / 9; }
  .gridColumn6to10_in_m-01 { grid-column: 6 / 10; }
  .gridColumn6to11_in_m-01 { grid-column: 6 / 11; }
  .gridColumn6to12_in_m-01 { grid-column: 6 / 12; }
  .gridColumn7to0_in_m-01 { grid-column: 7 / 0; }
  .gridColumn7to1_in_m-01 { grid-column: 7 / 1; }
  .gridColumn7to2_in_m-01 { grid-column: 7 / 2; }
  .gridColumn7to3_in_m-01 { grid-column: 7 / 3; }
  .gridColumn7to4_in_m-01 { grid-column: 7 / 4; }
  .gridColumn7to5_in_m-01 { grid-column: 7 / 5; }
  .gridColumn7to6_in_m-01 { grid-column: 7 / 6; }
  .gridColumn7to7_in_m-01 { grid-column: 7 / 7; }
  .gridColumn7to8_in_m-01 { grid-column: 7 / 8; }
  .gridColumn7to9_in_m-01 { grid-column: 7 / 9; }
  .gridColumn7to10_in_m-01 { grid-column: 7 / 10; }
  .gridColumn7to11_in_m-01 { grid-column: 7 / 11; }
  .gridColumn7to12_in_m-01 { grid-column: 7 / 12; }
  .gridColumn8to0_in_m-01 { grid-column: 8 / 0; }
  .gridColumn8to1_in_m-01 { grid-column: 8 / 1; }
  .gridColumn8to2_in_m-01 { grid-column: 8 / 2; }
  .gridColumn8to3_in_m-01 { grid-column: 8 / 3; }
  .gridColumn8to4_in_m-01 { grid-column: 8 / 4; }
  .gridColumn8to5_in_m-01 { grid-column: 8 / 5; }
  .gridColumn8to6_in_m-01 { grid-column: 8 / 6; }
  .gridColumn8to7_in_m-01 { grid-column: 8 / 7; }
  .gridColumn8to8_in_m-01 { grid-column: 8 / 8; }
  .gridColumn8to9_in_m-01 { grid-column: 8 / 9; }
  .gridColumn8to10_in_m-01 { grid-column: 8 / 10; }
  .gridColumn8to11_in_m-01 { grid-column: 8 / 11; }
  .gridColumn8to12_in_m-01 { grid-column: 8 / 12; }
  .gridColumn9to0_in_m-01 { grid-column: 9 / 0; }
  .gridColumn9to1_in_m-01 { grid-column: 9 / 1; }
  .gridColumn9to2_in_m-01 { grid-column: 9 / 2; }
  .gridColumn9to3_in_m-01 { grid-column: 9 / 3; }
  .gridColumn9to4_in_m-01 { grid-column: 9 / 4; }
  .gridColumn9to5_in_m-01 { grid-column: 9 / 5; }
  .gridColumn9to6_in_m-01 { grid-column: 9 / 6; }
  .gridColumn9to7_in_m-01 { grid-column: 9 / 7; }
  .gridColumn9to8_in_m-01 { grid-column: 9 / 8; }
  .gridColumn9to9_in_m-01 { grid-column: 9 / 9; }
  .gridColumn9to10_in_m-01 { grid-column: 9 / 10; }
  .gridColumn9to11_in_m-01 { grid-column: 9 / 11; }
  .gridColumn9to12_in_m-01 { grid-column: 9 / 12; }
  .gridColumn10to0_in_m-01 { grid-column: 10 / 0; }
  .gridColumn10to1_in_m-01 { grid-column: 10 / 1; }
  .gridColumn10to2_in_m-01 { grid-column: 10 / 2; }
  .gridColumn10to3_in_m-01 { grid-column: 10 / 3; }
  .gridColumn10to4_in_m-01 { grid-column: 10 / 4; }
  .gridColumn10to5_in_m-01 { grid-column: 10 / 5; }
  .gridColumn10to6_in_m-01 { grid-column: 10 / 6; }
  .gridColumn10to7_in_m-01 { grid-column: 10 / 7; }
  .gridColumn10to8_in_m-01 { grid-column: 10 / 8; }
  .gridColumn10to9_in_m-01 { grid-column: 10 / 9; }
  .gridColumn10to10_in_m-01 { grid-column: 10 / 10; }
  .gridColumn10to11_in_m-01 { grid-column: 10 / 11; }
  .gridColumn10to12_in_m-01 { grid-column: 10 / 12; }
  .gridColumn11to0_in_m-01 { grid-column: 11 / 0; }
  .gridColumn11to1_in_m-01 { grid-column: 11 / 1; }
  .gridColumn11to2_in_m-01 { grid-column: 11 / 2; }
  .gridColumn11to3_in_m-01 { grid-column: 11 / 3; }
  .gridColumn11to4_in_m-01 { grid-column: 11 / 4; }
  .gridColumn11to5_in_m-01 { grid-column: 11 / 5; }
  .gridColumn11to6_in_m-01 { grid-column: 11 / 6; }
  .gridColumn11to7_in_m-01 { grid-column: 11 / 7; }
  .gridColumn11to8_in_m-01 { grid-column: 11 / 8; }
  .gridColumn11to9_in_m-01 { grid-column: 11 / 9; }
  .gridColumn11to10_in_m-01 { grid-column: 11 / 10; }
  .gridColumn11to11_in_m-01 { grid-column: 11 / 11; }
  .gridColumn11to12_in_m-01 { grid-column: 11 / 12; }
  .gridColumn12to0_in_m-01 { grid-column: 12 / 0; }
  .gridColumn12to1_in_m-01 { grid-column: 12 / 1; }
  .gridColumn12to2_in_m-01 { grid-column: 12 / 2; }
  .gridColumn12to3_in_m-01 { grid-column: 12 / 3; }
  .gridColumn12to4_in_m-01 { grid-column: 12 / 4; }
  .gridColumn12to5_in_m-01 { grid-column: 12 / 5; }
  .gridColumn12to6_in_m-01 { grid-column: 12 / 6; }
  .gridColumn12to7_in_m-01 { grid-column: 12 / 7; }
  .gridColumn12to8_in_m-01 { grid-column: 12 / 8; }
  .gridColumn12to9_in_m-01 { grid-column: 12 / 9; }
  .gridColumn12to10_in_m-01 { grid-column: 12 / 10; }
  .gridColumn12to11_in_m-01 { grid-column: 12 / 11; }
  .gridColumn12to12_in_m-01 { grid-column: 12 / 12; }
  .gridColumnSpan0_in_m-01 { grid-column: auto / span 0; }
  .gridColumnSpan1_in_m-01 { grid-column: auto / span 1; }
  .gridColumnSpan2_in_m-01 { grid-column: auto / span 2; }
  .gridColumnSpan3_in_m-01 { grid-column: auto / span 3; }
  .gridColumnSpan4_in_m-01 { grid-column: auto / span 4; }
  .gridColumnSpan5_in_m-01 { grid-column: auto / span 5; }
  .gridColumnSpan6_in_m-01 { grid-column: auto / span 6; }
  .gridColumnSpan7_in_m-01 { grid-column: auto / span 7; }
  .gridColumnSpan8_in_m-01 { grid-column: auto / span 8; }
  .gridColumnSpan9_in_m-01 { grid-column: auto / span 9; }
  .gridColumnSpan10_in_m-01 { grid-column: auto / span 10; }
  .w1_in_m-01 { width: var(--rem1); }
  .w2_in_m-01 { width: var(--rem2); }
  .w3_in_m-01 { width: var(--rem3); }
  .w4_in_m-01 { width: var(--rem4); }
  .w5_in_m-01 { width: var(--rem5); }
  .w6_in_m-01 { width: var(--rem6); }
  .w7_in_m-01 { width: var(--rem7); }
  .w1px_in_m-01 { width: var(--px1); }
  .w2px_in_m-01 { width: var(--px2); }
  .w3px_in_m-01 { width: var(--px3); }
  .w4px_in_m-01 { width: var(--px4); }
  .w5px_in_m-01 { width: var(--px5); }
  .w6px_in_m-01 { width: var(--px6); }
  .w7px_in_m-01 { width: var(--px7); }
  .w8px_in_m-01 { width: var(--px8); }
  .w9px_in_m-01 { width: var(--px9); }
  .w10px_in_m-01 { width: var(--px10); }
  .w11px_in_m-01 { width: var(--px11); }
  .w12px_in_m-01 { width: var(--px12); }
  .w13px_in_m-01 { width: var(--px13); }
  .w14px_in_m-01 { width: var(--px14); }
  .w15px_in_m-01 { width: var(--px15); }
  .w16px_in_m-01 { width: var(--px16); }
  .w17px_in_m-01 { width: var(--px17); }
  .w18px_in_m-01 { width: var(--px18); }
  .w19px_in_m-01 { width: var(--px19); }
  .w20px_in_m-01 { width: var(--px20); }
  .w1p_in_m-01 { width: 1%; }
  .w2p_in_m-01 { width: 2%; }
  .w3p_in_m-01 { width: 3%; }
  .w4p_in_m-01 { width: 4%; }
  .w5p_in_m-01 { width: 5%; }
  .w6p_in_m-01 { width: 6%; }
  .w7p_in_m-01 { width: 7%; }
  .w8p_in_m-01 { width: 8%; }
  .w9p_in_m-01 { width: 9%; }
  .w10p_in_m-01 { width: 10%; }
  .w11p_in_m-01 { width: 11%; }
  .w12p_in_m-01 { width: 12%; }
  .w13p_in_m-01 { width: 13%; }
  .w14p_in_m-01 { width: 14%; }
  .w15p_in_m-01 { width: 15%; }
  .w16p_in_m-01 { width: 16%; }
  .w17p_in_m-01 { width: 17%; }
  .w18p_in_m-01 { width: 18%; }
  .w19p_in_m-01 { width: 19%; }
  .w20p_in_m-01 { width: 20%; }
  .w21p_in_m-01 { width: 21%; }
  .w22p_in_m-01 { width: 22%; }
  .w23p_in_m-01 { width: 23%; }
  .w24p_in_m-01 { width: 24%; }
  .w25p_in_m-01 { width: 25%; }
  .w26p_in_m-01 { width: 26%; }
  .w27p_in_m-01 { width: 27%; }
  .w28p_in_m-01 { width: 28%; }
  .w29p_in_m-01 { width: 29%; }
  .w30p_in_m-01 { width: 30%; }
  .w31p_in_m-01 { width: 31%; }
  .w32p_in_m-01 { width: 32%; }
  .w33p_in_m-01 { width: 33%; }
  .w34p_in_m-01 { width: 34%; }
  .w35p_in_m-01 { width: 35%; }
  .w36p_in_m-01 { width: 36%; }
  .w37p_in_m-01 { width: 37%; }
  .w38p_in_m-01 { width: 38%; }
  .w39p_in_m-01 { width: 39%; }
  .w40p_in_m-01 { width: 40%; }
  .w41p_in_m-01 { width: 41%; }
  .w42p_in_m-01 { width: 42%; }
  .w43p_in_m-01 { width: 43%; }
  .w44p_in_m-01 { width: 44%; }
  .w45p_in_m-01 { width: 45%; }
  .w46p_in_m-01 { width: 46%; }
  .w47p_in_m-01 { width: 47%; }
  .w48p_in_m-01 { width: 48%; }
  .w49p_in_m-01 { width: 49%; }
  .w50p_in_m-01 { width: 50%; }
  .w51p_in_m-01 { width: 51%; }
  .w52p_in_m-01 { width: 52%; }
  .w53p_in_m-01 { width: 53%; }
  .w54p_in_m-01 { width: 54%; }
  .w55p_in_m-01 { width: 55%; }
  .w56p_in_m-01 { width: 56%; }
  .w57p_in_m-01 { width: 57%; }
  .w58p_in_m-01 { width: 58%; }
  .w59p_in_m-01 { width: 59%; }
  .w60p_in_m-01 { width: 60%; }
  .w61p_in_m-01 { width: 61%; }
  .w62p_in_m-01 { width: 62%; }
  .w63p_in_m-01 { width: 63%; }
  .w64p_in_m-01 { width: 64%; }
  .w65p_in_m-01 { width: 65%; }
  .w66p_in_m-01 { width: 66%; }
  .w67p_in_m-01 { width: 67%; }
  .w68p_in_m-01 { width: 68%; }
  .w69p_in_m-01 { width: 69%; }
  .w70p_in_m-01 { width: 70%; }
  .w71p_in_m-01 { width: 71%; }
  .w72p_in_m-01 { width: 72%; }
  .w73p_in_m-01 { width: 73%; }
  .w74p_in_m-01 { width: 74%; }
  .w75p_in_m-01 { width: 75%; }
  .w76p_in_m-01 { width: 76%; }
  .w77p_in_m-01 { width: 77%; }
  .w78p_in_m-01 { width: 78%; }
  .w79p_in_m-01 { width: 79%; }
  .w80p_in_m-01 { width: 80%; }
  .w81p_in_m-01 { width: 81%; }
  .w82p_in_m-01 { width: 82%; }
  .w83p_in_m-01 { width: 83%; }
  .w84p_in_m-01 { width: 84%; }
  .w85p_in_m-01 { width: 85%; }
  .w86p_in_m-01 { width: 86%; }
  .w87p_in_m-01 { width: 87%; }
  .w88p_in_m-01 { width: 88%; }
  .w89p_in_m-01 { width: 89%; }
  .w90p_in_m-01 { width: 90%; }
  .w91p_in_m-01 { width: 91%; }
  .w92p_in_m-01 { width: 92%; }
  .w93p_in_m-01 { width: 93%; }
  .w94p_in_m-01 { width: 94%; }
  .w95p_in_m-01 { width: 95%; }
  .w96p_in_m-01 { width: 96%; }
  .w97p_in_m-01 { width: 97%; }
  .w98p_in_m-01 { width: 98%; }
  .w99p_in_m-01 { width: 99%; }
  .w100p_in_m-01 { width: 100%; }
  .minW1_in_m-01 { min-width: var(--rem1); }
  .minW2_in_m-01 { min-width: var(--rem2); }
  .minW3_in_m-01 { min-width: var(--rem3); }
  .minW4_in_m-01 { min-width: var(--rem4); }
  .minW5_in_m-01 { min-width: var(--rem5); }
  .minW6_in_m-01 { min-width: var(--rem6); }
  .minW7_in_m-01 { min-width: var(--rem7); }
  .minW1px_in_m-01 { min-width: var(--px1); }
  .minW2px_in_m-01 { min-width: var(--px2); }
  .minW3px_in_m-01 { min-width: var(--px3); }
  .minW4px_in_m-01 { min-width: var(--px4); }
  .minW5px_in_m-01 { min-width: var(--px5); }
  .minW6px_in_m-01 { min-width: var(--px6); }
  .minW7px_in_m-01 { min-width: var(--px7); }
  .minW8px_in_m-01 { min-width: var(--px8); }
  .minW9px_in_m-01 { min-width: var(--px9); }
  .minW10px_in_m-01 { min-width: var(--px10); }
  .minW11px_in_m-01 { min-width: var(--px11); }
  .minW12px_in_m-01 { min-width: var(--px12); }
  .minW13px_in_m-01 { min-width: var(--px13); }
  .minW14px_in_m-01 { min-width: var(--px14); }
  .minW15px_in_m-01 { min-width: var(--px15); }
  .minW16px_in_m-01 { min-width: var(--px16); }
  .minW17px_in_m-01 { min-width: var(--px17); }
  .minW18px_in_m-01 { min-width: var(--px18); }
  .minW19px_in_m-01 { min-width: var(--px19); }
  .minW20px_in_m-01 { min-width: var(--px20); }
  .minW5p_in_m-01 { min-width: 5%; }
  .minW10p_in_m-01 { min-width: 10%; }
  .minW15p_in_m-01 { min-width: 15%; }
  .minW20p_in_m-01 { min-width: 20%; }
  .minW25p_in_m-01 { min-width: 25%; }
  .minW30p_in_m-01 { min-width: 30%; }
  .minW35p_in_m-01 { min-width: 35%; }
  .minW40p_in_m-01 { min-width: 40%; }
  .minW45p_in_m-01 { min-width: 45%; }
  .minW50p_in_m-01 { min-width: 50%; }
  .minW55p_in_m-01 { min-width: 55%; }
  .minW60p_in_m-01 { min-width: 60%; }
  .minW65p_in_m-01 { min-width: 65%; }
  .minW70p_in_m-01 { min-width: 70%; }
  .minW75p_in_m-01 { min-width: 75%; }
  .minW80p_in_m-01 { min-width: 80%; }
  .minW85p_in_m-01 { min-width: 85%; }
  .minW90p_in_m-01 { min-width: 90%; }
  .minW95p_in_m-01 { min-width: 95%; }
  .minW100p_in_m-01 { min-width: 100%; }
  .maxW1_in_m-01 { max-width: var(--rem1); }
  .maxW2_in_m-01 { max-width: var(--rem2); }
  .maxW3_in_m-01 { max-width: var(--rem3); }
  .maxW4_in_m-01 { max-width: var(--rem4); }
  .maxW5_in_m-01 { max-width: var(--rem5); }
  .maxW6_in_m-01 { max-width: var(--rem6); }
  .maxW7_in_m-01 { max-width: var(--rem7); }
  .maxW1px_in_m-01 { max-width: var(--px1); }
  .maxW2px_in_m-01 { max-width: var(--px2); }
  .maxW3px_in_m-01 { max-width: var(--px3); }
  .maxW4px_in_m-01 { max-width: var(--px4); }
  .maxW5px_in_m-01 { max-width: var(--px5); }
  .maxW6px_in_m-01 { max-width: var(--px6); }
  .maxW7px_in_m-01 { max-width: var(--px7); }
  .maxW8px_in_m-01 { max-width: var(--px8); }
  .maxW9px_in_m-01 { max-width: var(--px9); }
  .maxW10px_in_m-01 { max-width: var(--px10); }
  .maxW11px_in_m-01 { max-width: var(--px11); }
  .maxW12px_in_m-01 { max-width: var(--px12); }
  .maxW13px_in_m-01 { max-width: var(--px13); }
  .maxW14px_in_m-01 { max-width: var(--px14); }
  .maxW15px_in_m-01 { max-width: var(--px15); }
  .maxW16px_in_m-01 { max-width: var(--px16); }
  .maxW17px_in_m-01 { max-width: var(--px17); }
  .maxW18px_in_m-01 { max-width: var(--px18); }
  .maxW19px_in_m-01 { max-width: var(--px19); }
  .maxW20px_in_m-01 { max-width: var(--px20); }
  .maxW5p_in_m-01 { max-width: 5%; }
  .maxW10p_in_m-01 { max-width: 10%; }
  .maxW15p_in_m-01 { max-width: 15%; }
  .maxW20p_in_m-01 { max-width: 20%; }
  .maxW25p_in_m-01 { max-width: 25%; }
  .maxW30p_in_m-01 { max-width: 30%; }
  .maxW35p_in_m-01 { max-width: 35%; }
  .maxW40p_in_m-01 { max-width: 40%; }
  .maxW45p_in_m-01 { max-width: 45%; }
  .maxW50p_in_m-01 { max-width: 50%; }
  .maxW55p_in_m-01 { max-width: 55%; }
  .maxW60p_in_m-01 { max-width: 60%; }
  .maxW65p_in_m-01 { max-width: 65%; }
  .maxW70p_in_m-01 { max-width: 70%; }
  .maxW75p_in_m-01 { max-width: 75%; }
  .maxW80p_in_m-01 { max-width: 80%; }
  .maxW85p_in_m-01 { max-width: 85%; }
  .maxW90p_in_m-01 { max-width: 90%; }
  .maxW95p_in_m-01 { max-width: 95%; }
  .maxW100p_in_m-01 { max-width: 100%; }
  .h1_in_m-01 { height: var(--rem1); }
  .h2_in_m-01 { height: var(--rem2); }
  .h3_in_m-01 { height: var(--rem3); }
  .h4_in_m-01 { height: var(--rem4); }
  .h5_in_m-01 { height: var(--rem5); }
  .h6_in_m-01 { height: var(--rem6); }
  .h7_in_m-01 { height: var(--rem7); }
  .h1px_in_m-01 { height: var(--px1); }
  .h2px_in_m-01 { height: var(--px2); }
  .h3px_in_m-01 { height: var(--px3); }
  .h4px_in_m-01 { height: var(--px4); }
  .h5px_in_m-01 { height: var(--px5); }
  .h6px_in_m-01 { height: var(--px6); }
  .h7px_in_m-01 { height: var(--px7); }
  .h8px_in_m-01 { height: var(--px8); }
  .h9px_in_m-01 { height: var(--px9); }
  .h10px_in_m-01 { height: var(--px10); }
  .h11px_in_m-01 { height: var(--px11); }
  .h12px_in_m-01 { height: var(--px12); }
  .h13px_in_m-01 { height: var(--px13); }
  .h14px_in_m-01 { height: var(--px14); }
  .h15px_in_m-01 { height: var(--px15); }
  .h16px_in_m-01 { height: var(--px16); }
  .h17px_in_m-01 { height: var(--px17); }
  .h18px_in_m-01 { height: var(--px18); }
  .h19px_in_m-01 { height: var(--px19); }
  .h20px_in_m-01 { height: var(--px20); }
  .h5p_in_m-01 { height: 5%; }
  .h10p_in_m-01 { height: 10%; }
  .h15p_in_m-01 { height: 15%; }
  .h20p_in_m-01 { height: 20%; }
  .h25p_in_m-01 { height: 25%; }
  .h30p_in_m-01 { height: 30%; }
  .h35p_in_m-01 { height: 35%; }
  .h40p_in_m-01 { height: 40%; }
  .h45p_in_m-01 { height: 45%; }
  .h50p_in_m-01 { height: 50%; }
  .h55p_in_m-01 { height: 55%; }
  .h60p_in_m-01 { height: 60%; }
  .h65p_in_m-01 { height: 65%; }
  .h70p_in_m-01 { height: 70%; }
  .h75p_in_m-01 { height: 75%; }
  .h80p_in_m-01 { height: 80%; }
  .h85p_in_m-01 { height: 85%; }
  .h90p_in_m-01 { height: 90%; }
  .h95p_in_m-01 { height: 95%; }
  .h100p_in_m-01 { height: 100%; }
  .minH1_in_m-01 { min-height: var(--rem1); }
  .minH2_in_m-01 { min-height: var(--rem2); }
  .minH3_in_m-01 { min-height: var(--rem3); }
  .minH4_in_m-01 { min-height: var(--rem4); }
  .minH5_in_m-01 { min-height: var(--rem5); }
  .minH6_in_m-01 { min-height: var(--rem6); }
  .minH7_in_m-01 { min-height: var(--rem7); }
  .minH1px_in_m-01 { min-height: var(--px1); }
  .minH2px_in_m-01 { min-height: var(--px2); }
  .minH3px_in_m-01 { min-height: var(--px3); }
  .minH4px_in_m-01 { min-height: var(--px4); }
  .minH5px_in_m-01 { min-height: var(--px5); }
  .minH6px_in_m-01 { min-height: var(--px6); }
  .minH7px_in_m-01 { min-height: var(--px7); }
  .minH8px_in_m-01 { min-height: var(--px8); }
  .minH9px_in_m-01 { min-height: var(--px9); }
  .minH10px_in_m-01 { min-height: var(--px10); }
  .minH11px_in_m-01 { min-height: var(--px11); }
  .minH12px_in_m-01 { min-height: var(--px12); }
  .minH13px_in_m-01 { min-height: var(--px13); }
  .minH14px_in_m-01 { min-height: var(--px14); }
  .minH15px_in_m-01 { min-height: var(--px15); }
  .minH16px_in_m-01 { min-height: var(--px16); }
  .minH17px_in_m-01 { min-height: var(--px17); }
  .minH18px_in_m-01 { min-height: var(--px18); }
  .minH19px_in_m-01 { min-height: var(--px19); }
  .minH20px_in_m-01 { min-height: var(--px20); }
  .minH5p_in_m-01 { min-height: 5%; }
  .minH10p_in_m-01 { min-height: 10%; }
  .minH15p_in_m-01 { min-height: 15%; }
  .minH20p_in_m-01 { min-height: 20%; }
  .minH25p_in_m-01 { min-height: 25%; }
  .minH30p_in_m-01 { min-height: 30%; }
  .minH35p_in_m-01 { min-height: 35%; }
  .minH40p_in_m-01 { min-height: 40%; }
  .minH45p_in_m-01 { min-height: 45%; }
  .minH50p_in_m-01 { min-height: 50%; }
  .minH55p_in_m-01 { min-height: 55%; }
  .minH60p_in_m-01 { min-height: 60%; }
  .minH65p_in_m-01 { min-height: 65%; }
  .minH70p_in_m-01 { min-height: 70%; }
  .minH75p_in_m-01 { min-height: 75%; }
  .minH80p_in_m-01 { min-height: 80%; }
  .minH85p_in_m-01 { min-height: 85%; }
  .minH90p_in_m-01 { min-height: 90%; }
  .minH95p_in_m-01 { min-height: 95%; }
  .minH100p_in_m-01 { min-height: 100%; }
  .maxH1_in_m-01 { max-height: var(--rem1); }
  .maxH2_in_m-01 { max-height: var(--rem2); }
  .maxH3_in_m-01 { max-height: var(--rem3); }
  .maxH4_in_m-01 { max-height: var(--rem4); }
  .maxH5_in_m-01 { max-height: var(--rem5); }
  .maxH6_in_m-01 { max-height: var(--rem6); }
  .maxH7_in_m-01 { max-height: var(--rem7); }
  .maxH1px_in_m-01 { max-height: var(--px1); }
  .maxH2px_in_m-01 { max-height: var(--px2); }
  .maxH3px_in_m-01 { max-height: var(--px3); }
  .maxH4px_in_m-01 { max-height: var(--px4); }
  .maxH5px_in_m-01 { max-height: var(--px5); }
  .maxH6px_in_m-01 { max-height: var(--px6); }
  .maxH7px_in_m-01 { max-height: var(--px7); }
  .maxH8px_in_m-01 { max-height: var(--px8); }
  .maxH9px_in_m-01 { max-height: var(--px9); }
  .maxH10px_in_m-01 { max-height: var(--px10); }
  .maxH11px_in_m-01 { max-height: var(--px11); }
  .maxH12px_in_m-01 { max-height: var(--px12); }
  .maxH13px_in_m-01 { max-height: var(--px13); }
  .maxH14px_in_m-01 { max-height: var(--px14); }
  .maxH15px_in_m-01 { max-height: var(--px15); }
  .maxH16px_in_m-01 { max-height: var(--px16); }
  .maxH17px_in_m-01 { max-height: var(--px17); }
  .maxH18px_in_m-01 { max-height: var(--px18); }
  .maxH19px_in_m-01 { max-height: var(--px19); }
  .maxH20px_in_m-01 { max-height: var(--px20); }
  .maxH5p_in_m-01 { max-height: 5%; }
  .maxH10p_in_m-01 { max-height: 10%; }
  .maxH15p_in_m-01 { max-height: 15%; }
  .maxH20p_in_m-01 { max-height: 20%; }
  .maxH25p_in_m-01 { max-height: 25%; }
  .maxH30p_in_m-01 { max-height: 30%; }
  .maxH35p_in_m-01 { max-height: 35%; }
  .maxH40p_in_m-01 { max-height: 40%; }
  .maxH45p_in_m-01 { max-height: 45%; }
  .maxH50p_in_m-01 { max-height: 50%; }
  .maxH55p_in_m-01 { max-height: 55%; }
  .maxH60p_in_m-01 { max-height: 60%; }
  .maxH65p_in_m-01 { max-height: 65%; }
  .maxH70p_in_m-01 { max-height: 70%; }
  .maxH75p_in_m-01 { max-height: 75%; }
  .maxH80p_in_m-01 { max-height: 80%; }
  .maxH85p_in_m-01 { max-height: 85%; }
  .maxH90p_in_m-01 { max-height: 90%; }
  .maxH95p_in_m-01 { max-height: 95%; }
  .maxH100p_in_m-01 { max-height: 100%; }
  .maxH5vh_in_m-01 { max-height: 5vh; }
  .maxH10vh_in_m-01 { max-height: 10vh; }
  .maxH15vh_in_m-01 { max-height: 15vh; }
  .maxH20vh_in_m-01 { max-height: 20vh; }
  .maxH25vh_in_m-01 { max-height: 25vh; }
  .maxH30vh_in_m-01 { max-height: 30vh; }
  .maxH35vh_in_m-01 { max-height: 35vh; }
  .maxH40vh_in_m-01 { max-height: 40vh; }
  .maxH45vh_in_m-01 { max-height: 45vh; }
  .maxH50vh_in_m-01 { max-height: 50vh; }
  .maxH55vh_in_m-01 { max-height: 55vh; }
  .maxH60vh_in_m-01 { max-height: 60vh; }
  .maxH65vh_in_m-01 { max-height: 65vh; }
  .maxH70vh_in_m-01 { max-height: 70vh; }
  .maxH75vh_in_m-01 { max-height: 75vh; }
  .maxH80vh_in_m-01 { max-height: 80vh; }
  .maxH85vh_in_m-01 { max-height: 85vh; }
  .maxH90vh_in_m-01 { max-height: 90vh; }
  .maxH95vh_in_m-01 { max-height: 95vh; }
  .maxH100vh_in_m-01 { max-height: 100vh; }
  .resizeA_in_m-01 { resize: both; }
  .resizeV_in_m-01 { resize: vertical; }
  .resizeH_in_m-01 { resize: horizontal; }
  .resizeNone_in_m-01 { resize: none; }
  .resizeB_in_m-01 { resize: block; }
  .resizeI_in_m-01 { resize: inline; }
  .pa1_in_m-01 { padding: var(--px1); }
  .pa2_in_m-01 { padding: var(--px2); }
  .pa3_in_m-01 { padding: var(--px3); }
  .pa4_in_m-01 { padding: var(--px4); }
  .pa5_in_m-01 { padding: var(--px5); }
  .pa6_in_m-01 { padding: var(--px6); }
  .pa7_in_m-01 { padding: var(--px7); }
  .pa8_in_m-01 { padding: var(--px8); }
  .pa9_in_m-01 { padding: var(--px9); }
  .pa10_in_m-01 { padding: var(--px10); }
  .pa11_in_m-01 { padding: var(--px11); }
  .pa12_in_m-01 { padding: var(--px12); }
  .pa13_in_m-01 { padding: var(--px13); }
  .pa14_in_m-01 { padding: var(--px14); }
  .pa15_in_m-01 { padding: var(--px15); }
  .pa16_in_m-01 { padding: var(--px16); }
  .pa17_in_m-01 { padding: var(--px17); }
  .pa18_in_m-01 { padding: var(--px18); }
  .pa19_in_m-01 { padding: var(--px19); }
  .pa20_in_m-01 { padding: var(--px20); }
  .pa5p_in_m-01 { padding: 5%; }
  .pa10p_in_m-01 { padding: 10%; }
  .pa15p_in_m-01 { padding: 15%; }
  .pa20p_in_m-01 { padding: 20%; }
  .pa25p_in_m-01 { padding: 25%; }
  .pa30p_in_m-01 { padding: 30%; }
  .pa35p_in_m-01 { padding: 35%; }
  .pa40p_in_m-01 { padding: 40%; }
  .pa45p_in_m-01 { padding: 45%; }
  .pa50p_in_m-01 { padding: 50%; }
  .pa55p_in_m-01 { padding: 55%; }
  .pa60p_in_m-01 { padding: 60%; }
  .pa65p_in_m-01 { padding: 65%; }
  .pa70p_in_m-01 { padding: 70%; }
  .pa75p_in_m-01 { padding: 75%; }
  .pa80p_in_m-01 { padding: 80%; }
  .pa85p_in_m-01 { padding: 85%; }
  .pa90p_in_m-01 { padding: 90%; }
  .pa95p_in_m-01 { padding: 95%; }
  .pa100p_in_m-01 { padding: 100%; }
  .pv1_in_m-01 { padding-top: var(--px1); padding-bottom: var(--px1); }
  .pv2_in_m-01 { padding-top: var(--px2); padding-bottom: var(--px2); }
  .pv3_in_m-01 { padding-top: var(--px3); padding-bottom: var(--px3); }
  .pv4_in_m-01 { padding-top: var(--px4); padding-bottom: var(--px4); }
  .pv5_in_m-01 { padding-top: var(--px5); padding-bottom: var(--px5); }
  .pv6_in_m-01 { padding-top: var(--px6); padding-bottom: var(--px6); }
  .pv7_in_m-01 { padding-top: var(--px7); padding-bottom: var(--px7); }
  .pv8_in_m-01 { padding-top: var(--px8); padding-bottom: var(--px8); }
  .pv9_in_m-01 { padding-top: var(--px9); padding-bottom: var(--px9); }
  .pv10_in_m-01 { padding-top: var(--px10); padding-bottom: var(--px10); }
  .pv11_in_m-01 { padding-top: var(--px11); padding-bottom: var(--px11); }
  .pv12_in_m-01 { padding-top: var(--px12); padding-bottom: var(--px12); }
  .pv13_in_m-01 { padding-top: var(--px13); padding-bottom: var(--px13); }
  .pv14_in_m-01 { padding-top: var(--px14); padding-bottom: var(--px14); }
  .pv15_in_m-01 { padding-top: var(--px15); padding-bottom: var(--px15); }
  .pv16_in_m-01 { padding-top: var(--px16); padding-bottom: var(--px16); }
  .pv17_in_m-01 { padding-top: var(--px17); padding-bottom: var(--px17); }
  .pv18_in_m-01 { padding-top: var(--px18); padding-bottom: var(--px18); }
  .pv19_in_m-01 { padding-top: var(--px19); padding-bottom: var(--px19); }
  .pv20_in_m-01 { padding-top: var(--px20); padding-bottom: var(--px20); }
  .pv5p_in_m-01 { padding-top: 5%; padding-bottom: 5%; }
  .pv10p_in_m-01 { padding-top: 10%; padding-bottom: 10%; }
  .pv15p_in_m-01 { padding-top: 15%; padding-bottom: 15%; }
  .pv20p_in_m-01 { padding-top: 20%; padding-bottom: 20%; }
  .pv25p_in_m-01 { padding-top: 25%; padding-bottom: 25%; }
  .pv30p_in_m-01 { padding-top: 30%; padding-bottom: 30%; }
  .pv35p_in_m-01 { padding-top: 35%; padding-bottom: 35%; }
  .pv40p_in_m-01 { padding-top: 40%; padding-bottom: 40%; }
  .pv45p_in_m-01 { padding-top: 45%; padding-bottom: 45%; }
  .pv50p_in_m-01 { padding-top: 50%; padding-bottom: 50%; }
  .pv55p_in_m-01 { padding-top: 55%; padding-bottom: 55%; }
  .pv60p_in_m-01 { padding-top: 60%; padding-bottom: 60%; }
  .pv65p_in_m-01 { padding-top: 65%; padding-bottom: 65%; }
  .pv70p_in_m-01 { padding-top: 70%; padding-bottom: 70%; }
  .pv75p_in_m-01 { padding-top: 75%; padding-bottom: 75%; }
  .pv80p_in_m-01 { padding-top: 80%; padding-bottom: 80%; }
  .pv85p_in_m-01 { padding-top: 85%; padding-bottom: 85%; }
  .pv90p_in_m-01 { padding-top: 90%; padding-bottom: 90%; }
  .pv95p_in_m-01 { padding-top: 95%; padding-bottom: 95%; }
  .pv100p_in_m-01 { padding-top: 100%; padding-bottom: 100%; }
  .ph1_in_m-01 { padding-left: var(--px1); padding-right: var(--px1); }
  .ph2_in_m-01 { padding-left: var(--px2); padding-right: var(--px2); }
  .ph3_in_m-01 { padding-left: var(--px3); padding-right: var(--px3); }
  .ph4_in_m-01 { padding-left: var(--px4); padding-right: var(--px4); }
  .ph5_in_m-01 { padding-left: var(--px5); padding-right: var(--px5); }
  .ph6_in_m-01 { padding-left: var(--px6); padding-right: var(--px6); }
  .ph7_in_m-01 { padding-left: var(--px7); padding-right: var(--px7); }
  .ph8_in_m-01 { padding-left: var(--px8); padding-right: var(--px8); }
  .ph9_in_m-01 { padding-left: var(--px9); padding-right: var(--px9); }
  .ph10_in_m-01 { padding-left: var(--px10); padding-right: var(--px10); }
  .ph11_in_m-01 { padding-left: var(--px11); padding-right: var(--px11); }
  .ph12_in_m-01 { padding-left: var(--px12); padding-right: var(--px12); }
  .ph13_in_m-01 { padding-left: var(--px13); padding-right: var(--px13); }
  .ph14_in_m-01 { padding-left: var(--px14); padding-right: var(--px14); }
  .ph15_in_m-01 { padding-left: var(--px15); padding-right: var(--px15); }
  .ph16_in_m-01 { padding-left: var(--px16); padding-right: var(--px16); }
  .ph17_in_m-01 { padding-left: var(--px17); padding-right: var(--px17); }
  .ph18_in_m-01 { padding-left: var(--px18); padding-right: var(--px18); }
  .ph19_in_m-01 { padding-left: var(--px19); padding-right: var(--px19); }
  .ph20_in_m-01 { padding-left: var(--px20); padding-right: var(--px20); }
  .ph5p_in_m-01 { padding-left: 5%; padding-right: 5%; }
  .ph10p_in_m-01 { padding-left: 10%; padding-right: 10%; }
  .ph15p_in_m-01 { padding-left: 15%; padding-right: 15%; }
  .ph20p_in_m-01 { padding-left: 20%; padding-right: 20%; }
  .ph25p_in_m-01 { padding-left: 25%; padding-right: 25%; }
  .ph30p_in_m-01 { padding-left: 30%; padding-right: 30%; }
  .ph35p_in_m-01 { padding-left: 35%; padding-right: 35%; }
  .ph40p_in_m-01 { padding-left: 40%; padding-right: 40%; }
  .ph45p_in_m-01 { padding-left: 45%; padding-right: 45%; }
  .ph50p_in_m-01 { padding-left: 50%; padding-right: 50%; }
  .ph55p_in_m-01 { padding-left: 55%; padding-right: 55%; }
  .ph60p_in_m-01 { padding-left: 60%; padding-right: 60%; }
  .ph65p_in_m-01 { padding-left: 65%; padding-right: 65%; }
  .ph70p_in_m-01 { padding-left: 70%; padding-right: 70%; }
  .ph75p_in_m-01 { padding-left: 75%; padding-right: 75%; }
  .ph80p_in_m-01 { padding-left: 80%; padding-right: 80%; }
  .ph85p_in_m-01 { padding-left: 85%; padding-right: 85%; }
  .ph90p_in_m-01 { padding-left: 90%; padding-right: 90%; }
  .ph95p_in_m-01 { padding-left: 95%; padding-right: 95%; }
  .ph100p_in_m-01 { padding-left: 100%; padding-right: 100%; }
  .pt1_in_m-01 { padding-top: var(--px1); }
  .pt2_in_m-01 { padding-top: var(--px2); }
  .pt3_in_m-01 { padding-top: var(--px3); }
  .pt4_in_m-01 { padding-top: var(--px4); }
  .pt5_in_m-01 { padding-top: var(--px5); }
  .pt6_in_m-01 { padding-top: var(--px6); }
  .pt7_in_m-01 { padding-top: var(--px7); }
  .pt8_in_m-01 { padding-top: var(--px8); }
  .pt9_in_m-01 { padding-top: var(--px9); }
  .pt10_in_m-01 { padding-top: var(--px10); }
  .pt11_in_m-01 { padding-top: var(--px11); }
  .pt12_in_m-01 { padding-top: var(--px12); }
  .pt13_in_m-01 { padding-top: var(--px13); }
  .pt14_in_m-01 { padding-top: var(--px14); }
  .pt15_in_m-01 { padding-top: var(--px15); }
  .pt16_in_m-01 { padding-top: var(--px16); }
  .pt17_in_m-01 { padding-top: var(--px17); }
  .pt18_in_m-01 { padding-top: var(--px18); }
  .pt19_in_m-01 { padding-top: var(--px19); }
  .pt20_in_m-01 { padding-top: var(--px20); }
  .pt5p_in_m-01 { padding-top: 5%; }
  .pt10p_in_m-01 { padding-top: 10%; }
  .pt15p_in_m-01 { padding-top: 15%; }
  .pt20p_in_m-01 { padding-top: 20%; }
  .pt25p_in_m-01 { padding-top: 25%; }
  .pt30p_in_m-01 { padding-top: 30%; }
  .pt35p_in_m-01 { padding-top: 35%; }
  .pt40p_in_m-01 { padding-top: 40%; }
  .pt45p_in_m-01 { padding-top: 45%; }
  .pt50p_in_m-01 { padding-top: 50%; }
  .pt55p_in_m-01 { padding-top: 55%; }
  .pt60p_in_m-01 { padding-top: 60%; }
  .pt65p_in_m-01 { padding-top: 65%; }
  .pt70p_in_m-01 { padding-top: 70%; }
  .pt75p_in_m-01 { padding-top: 75%; }
  .pt80p_in_m-01 { padding-top: 80%; }
  .pt85p_in_m-01 { padding-top: 85%; }
  .pt90p_in_m-01 { padding-top: 90%; }
  .pt95p_in_m-01 { padding-top: 95%; }
  .pt100p_in_m-01 { padding-top: 100%; }
  .pr1_in_m-01 { padding-right: var(--px1); }
  .pr2_in_m-01 { padding-right: var(--px2); }
  .pr3_in_m-01 { padding-right: var(--px3); }
  .pr4_in_m-01 { padding-right: var(--px4); }
  .pr5_in_m-01 { padding-right: var(--px5); }
  .pr6_in_m-01 { padding-right: var(--px6); }
  .pr7_in_m-01 { padding-right: var(--px7); }
  .pr8_in_m-01 { padding-right: var(--px8); }
  .pr9_in_m-01 { padding-right: var(--px9); }
  .pr10_in_m-01 { padding-right: var(--px10); }
  .pr11_in_m-01 { padding-right: var(--px11); }
  .pr12_in_m-01 { padding-right: var(--px12); }
  .pr13_in_m-01 { padding-right: var(--px13); }
  .pr14_in_m-01 { padding-right: var(--px14); }
  .pr15_in_m-01 { padding-right: var(--px15); }
  .pr16_in_m-01 { padding-right: var(--px16); }
  .pr17_in_m-01 { padding-right: var(--px17); }
  .pr18_in_m-01 { padding-right: var(--px18); }
  .pr19_in_m-01 { padding-right: var(--px19); }
  .pr20_in_m-01 { padding-right: var(--px20); }
  .pr5p_in_m-01 { padding-right: 5%; }
  .pr10p_in_m-01 { padding-right: 10%; }
  .pr15p_in_m-01 { padding-right: 15%; }
  .pr20p_in_m-01 { padding-right: 20%; }
  .pr25p_in_m-01 { padding-right: 25%; }
  .pr30p_in_m-01 { padding-right: 30%; }
  .pr35p_in_m-01 { padding-right: 35%; }
  .pr40p_in_m-01 { padding-right: 40%; }
  .pr45p_in_m-01 { padding-right: 45%; }
  .pr50p_in_m-01 { padding-right: 50%; }
  .pr55p_in_m-01 { padding-right: 55%; }
  .pr60p_in_m-01 { padding-right: 60%; }
  .pr65p_in_m-01 { padding-right: 65%; }
  .pr70p_in_m-01 { padding-right: 70%; }
  .pr75p_in_m-01 { padding-right: 75%; }
  .pr80p_in_m-01 { padding-right: 80%; }
  .pr85p_in_m-01 { padding-right: 85%; }
  .pr90p_in_m-01 { padding-right: 90%; }
  .pr95p_in_m-01 { padding-right: 95%; }
  .pr100p_in_m-01 { padding-right: 100%; }
  .pb1_in_m-01 { padding-bottom: var(--px1); }
  .pb2_in_m-01 { padding-bottom: var(--px2); }
  .pb3_in_m-01 { padding-bottom: var(--px3); }
  .pb4_in_m-01 { padding-bottom: var(--px4); }
  .pb5_in_m-01 { padding-bottom: var(--px5); }
  .pb6_in_m-01 { padding-bottom: var(--px6); }
  .pb7_in_m-01 { padding-bottom: var(--px7); }
  .pb8_in_m-01 { padding-bottom: var(--px8); }
  .pb9_in_m-01 { padding-bottom: var(--px9); }
  .pb10_in_m-01 { padding-bottom: var(--px10); }
  .pb11_in_m-01 { padding-bottom: var(--px11); }
  .pb12_in_m-01 { padding-bottom: var(--px12); }
  .pb13_in_m-01 { padding-bottom: var(--px13); }
  .pb14_in_m-01 { padding-bottom: var(--px14); }
  .pb15_in_m-01 { padding-bottom: var(--px15); }
  .pb16_in_m-01 { padding-bottom: var(--px16); }
  .pb17_in_m-01 { padding-bottom: var(--px17); }
  .pb18_in_m-01 { padding-bottom: var(--px18); }
  .pb19_in_m-01 { padding-bottom: var(--px19); }
  .pb20_in_m-01 { padding-bottom: var(--px20); }
  .pb5p_in_m-01 { padding-bottom: 5%; }
  .pb10p_in_m-01 { padding-bottom: 10%; }
  .pb15p_in_m-01 { padding-bottom: 15%; }
  .pb20p_in_m-01 { padding-bottom: 20%; }
  .pb25p_in_m-01 { padding-bottom: 25%; }
  .pb30p_in_m-01 { padding-bottom: 30%; }
  .pb35p_in_m-01 { padding-bottom: 35%; }
  .pb40p_in_m-01 { padding-bottom: 40%; }
  .pb45p_in_m-01 { padding-bottom: 45%; }
  .pb50p_in_m-01 { padding-bottom: 50%; }
  .pb55p_in_m-01 { padding-bottom: 55%; }
  .pb60p_in_m-01 { padding-bottom: 60%; }
  .pb65p_in_m-01 { padding-bottom: 65%; }
  .pb70p_in_m-01 { padding-bottom: 70%; }
  .pb75p_in_m-01 { padding-bottom: 75%; }
  .pb80p_in_m-01 { padding-bottom: 80%; }
  .pb85p_in_m-01 { padding-bottom: 85%; }
  .pb90p_in_m-01 { padding-bottom: 90%; }
  .pb95p_in_m-01 { padding-bottom: 95%; }
  .pb100p_in_m-01 { padding-bottom: 100%; }
  .pl1_in_m-01 { padding-left: var(--px1); }
  .pl2_in_m-01 { padding-left: var(--px2); }
  .pl3_in_m-01 { padding-left: var(--px3); }
  .pl4_in_m-01 { padding-left: var(--px4); }
  .pl5_in_m-01 { padding-left: var(--px5); }
  .pl6_in_m-01 { padding-left: var(--px6); }
  .pl7_in_m-01 { padding-left: var(--px7); }
  .pl8_in_m-01 { padding-left: var(--px8); }
  .pl9_in_m-01 { padding-left: var(--px9); }
  .pl10_in_m-01 { padding-left: var(--px10); }
  .pl11_in_m-01 { padding-left: var(--px11); }
  .pl12_in_m-01 { padding-left: var(--px12); }
  .pl13_in_m-01 { padding-left: var(--px13); }
  .pl14_in_m-01 { padding-left: var(--px14); }
  .pl15_in_m-01 { padding-left: var(--px15); }
  .pl16_in_m-01 { padding-left: var(--px16); }
  .pl17_in_m-01 { padding-left: var(--px17); }
  .pl18_in_m-01 { padding-left: var(--px18); }
  .pl19_in_m-01 { padding-left: var(--px19); }
  .pl20_in_m-01 { padding-left: var(--px20); }
  .pl5p_in_m-01 { padding-left: 5%; }
  .pl10p_in_m-01 { padding-left: 10%; }
  .pl15p_in_m-01 { padding-left: 15%; }
  .pl20p_in_m-01 { padding-left: 20%; }
  .pl25p_in_m-01 { padding-left: 25%; }
  .pl30p_in_m-01 { padding-left: 30%; }
  .pl35p_in_m-01 { padding-left: 35%; }
  .pl40p_in_m-01 { padding-left: 40%; }
  .pl45p_in_m-01 { padding-left: 45%; }
  .pl50p_in_m-01 { padding-left: 50%; }
  .pl55p_in_m-01 { padding-left: 55%; }
  .pl60p_in_m-01 { padding-left: 60%; }
  .pl65p_in_m-01 { padding-left: 65%; }
  .pl70p_in_m-01 { padding-left: 70%; }
  .pl75p_in_m-01 { padding-left: 75%; }
  .pl80p_in_m-01 { padding-left: 80%; }
  .pl85p_in_m-01 { padding-left: 85%; }
  .pl90p_in_m-01 { padding-left: 90%; }
  .pl95p_in_m-01 { padding-left: 95%; }
  .pl100p_in_m-01 { padding-left: 100%; }
  .ma1_in_m-01 { margin: var(--px1); }
  .ma2_in_m-01 { margin: var(--px2); }
  .ma3_in_m-01 { margin: var(--px3); }
  .ma4_in_m-01 { margin: var(--px4); }
  .ma5_in_m-01 { margin: var(--px5); }
  .ma6_in_m-01 { margin: var(--px6); }
  .ma7_in_m-01 { margin: var(--px7); }
  .ma8_in_m-01 { margin: var(--px8); }
  .ma9_in_m-01 { margin: var(--px9); }
  .ma10_in_m-01 { margin: var(--px10); }
  .ma11_in_m-01 { margin: var(--px11); }
  .ma12_in_m-01 { margin: var(--px12); }
  .ma13_in_m-01 { margin: var(--px13); }
  .ma14_in_m-01 { margin: var(--px14); }
  .ma15_in_m-01 { margin: var(--px15); }
  .ma16_in_m-01 { margin: var(--px16); }
  .ma17_in_m-01 { margin: var(--px17); }
  .ma18_in_m-01 { margin: var(--px18); }
  .ma19_in_m-01 { margin: var(--px19); }
  .ma20_in_m-01 { margin: var(--px20); }
  .ma5p_in_m-01 { margin: 5%; }
  .ma10p_in_m-01 { margin: 10%; }
  .ma15p_in_m-01 { margin: 15%; }
  .ma20p_in_m-01 { margin: 20%; }
  .ma25p_in_m-01 { margin: 25%; }
  .ma30p_in_m-01 { margin: 30%; }
  .ma35p_in_m-01 { margin: 35%; }
  .ma40p_in_m-01 { margin: 40%; }
  .ma45p_in_m-01 { margin: 45%; }
  .ma50p_in_m-01 { margin: 50%; }
  .ma55p_in_m-01 { margin: 55%; }
  .ma60p_in_m-01 { margin: 60%; }
  .ma65p_in_m-01 { margin: 65%; }
  .ma70p_in_m-01 { margin: 70%; }
  .ma75p_in_m-01 { margin: 75%; }
  .ma80p_in_m-01 { margin: 80%; }
  .ma85p_in_m-01 { margin: 85%; }
  .ma90p_in_m-01 { margin: 90%; }
  .ma95p_in_m-01 { margin: 95%; }
  .ma100p_in_m-01 { margin: 100%; }
  .mv1_in_m-01 { margin-top: var(--px1); margin-bottom: var(--px1); }
  .mv2_in_m-01 { margin-top: var(--px2); margin-bottom: var(--px2); }
  .mv3_in_m-01 { margin-top: var(--px3); margin-bottom: var(--px3); }
  .mv4_in_m-01 { margin-top: var(--px4); margin-bottom: var(--px4); }
  .mv5_in_m-01 { margin-top: var(--px5); margin-bottom: var(--px5); }
  .mv6_in_m-01 { margin-top: var(--px6); margin-bottom: var(--px6); }
  .mv7_in_m-01 { margin-top: var(--px7); margin-bottom: var(--px7); }
  .mv8_in_m-01 { margin-top: var(--px8); margin-bottom: var(--px8); }
  .mv9_in_m-01 { margin-top: var(--px9); margin-bottom: var(--px9); }
  .mv10_in_m-01 { margin-top: var(--px10); margin-bottom: var(--px10); }
  .mv11_in_m-01 { margin-top: var(--px11); margin-bottom: var(--px11); }
  .mv12_in_m-01 { margin-top: var(--px12); margin-bottom: var(--px12); }
  .mv13_in_m-01 { margin-top: var(--px13); margin-bottom: var(--px13); }
  .mv14_in_m-01 { margin-top: var(--px14); margin-bottom: var(--px14); }
  .mv15_in_m-01 { margin-top: var(--px15); margin-bottom: var(--px15); }
  .mv16_in_m-01 { margin-top: var(--px16); margin-bottom: var(--px16); }
  .mv17_in_m-01 { margin-top: var(--px17); margin-bottom: var(--px17); }
  .mv18_in_m-01 { margin-top: var(--px18); margin-bottom: var(--px18); }
  .mv19_in_m-01 { margin-top: var(--px19); margin-bottom: var(--px19); }
  .mv20_in_m-01 { margin-top: var(--px20); margin-bottom: var(--px20); }
  .mv5p_in_m-01 { margin-top: 5%; margin-bottom: 5%; }
  .mv10p_in_m-01 { margin-top: 10%; margin-bottom: 10%; }
  .mv15p_in_m-01 { margin-top: 15%; margin-bottom: 15%; }
  .mv20p_in_m-01 { margin-top: 20%; margin-bottom: 20%; }
  .mv25p_in_m-01 { margin-top: 25%; margin-bottom: 25%; }
  .mv30p_in_m-01 { margin-top: 30%; margin-bottom: 30%; }
  .mv35p_in_m-01 { margin-top: 35%; margin-bottom: 35%; }
  .mv40p_in_m-01 { margin-top: 40%; margin-bottom: 40%; }
  .mv45p_in_m-01 { margin-top: 45%; margin-bottom: 45%; }
  .mv50p_in_m-01 { margin-top: 50%; margin-bottom: 50%; }
  .mv55p_in_m-01 { margin-top: 55%; margin-bottom: 55%; }
  .mv60p_in_m-01 { margin-top: 60%; margin-bottom: 60%; }
  .mv65p_in_m-01 { margin-top: 65%; margin-bottom: 65%; }
  .mv70p_in_m-01 { margin-top: 70%; margin-bottom: 70%; }
  .mv75p_in_m-01 { margin-top: 75%; margin-bottom: 75%; }
  .mv80p_in_m-01 { margin-top: 80%; margin-bottom: 80%; }
  .mv85p_in_m-01 { margin-top: 85%; margin-bottom: 85%; }
  .mv90p_in_m-01 { margin-top: 90%; margin-bottom: 90%; }
  .mv95p_in_m-01 { margin-top: 95%; margin-bottom: 95%; }
  .mv100p_in_m-01 { margin-top: 100%; margin-bottom: 100%; }
  .mh1_in_m-01 { margin-left: var(--px1); margin-right: var(--px1); }
  .mh2_in_m-01 { margin-left: var(--px2); margin-right: var(--px2); }
  .mh3_in_m-01 { margin-left: var(--px3); margin-right: var(--px3); }
  .mh4_in_m-01 { margin-left: var(--px4); margin-right: var(--px4); }
  .mh5_in_m-01 { margin-left: var(--px5); margin-right: var(--px5); }
  .mh6_in_m-01 { margin-left: var(--px6); margin-right: var(--px6); }
  .mh7_in_m-01 { margin-left: var(--px7); margin-right: var(--px7); }
  .mh8_in_m-01 { margin-left: var(--px8); margin-right: var(--px8); }
  .mh9_in_m-01 { margin-left: var(--px9); margin-right: var(--px9); }
  .mh10_in_m-01 { margin-left: var(--px10); margin-right: var(--px10); }
  .mh11_in_m-01 { margin-left: var(--px11); margin-right: var(--px11); }
  .mh12_in_m-01 { margin-left: var(--px12); margin-right: var(--px12); }
  .mh13_in_m-01 { margin-left: var(--px13); margin-right: var(--px13); }
  .mh14_in_m-01 { margin-left: var(--px14); margin-right: var(--px14); }
  .mh15_in_m-01 { margin-left: var(--px15); margin-right: var(--px15); }
  .mh16_in_m-01 { margin-left: var(--px16); margin-right: var(--px16); }
  .mh17_in_m-01 { margin-left: var(--px17); margin-right: var(--px17); }
  .mh18_in_m-01 { margin-left: var(--px18); margin-right: var(--px18); }
  .mh19_in_m-01 { margin-left: var(--px19); margin-right: var(--px19); }
  .mh20_in_m-01 { margin-left: var(--px20); margin-right: var(--px20); }
  .mh5p_in_m-01 { margin-left: 5%; margin-right: 5%; }
  .mh10p_in_m-01 { margin-left: 10%; margin-right: 10%; }
  .mh15p_in_m-01 { margin-left: 15%; margin-right: 15%; }
  .mh20p_in_m-01 { margin-left: 20%; margin-right: 20%; }
  .mh25p_in_m-01 { margin-left: 25%; margin-right: 25%; }
  .mh30p_in_m-01 { margin-left: 30%; margin-right: 30%; }
  .mh35p_in_m-01 { margin-left: 35%; margin-right: 35%; }
  .mh40p_in_m-01 { margin-left: 40%; margin-right: 40%; }
  .mh45p_in_m-01 { margin-left: 45%; margin-right: 45%; }
  .mh50p_in_m-01 { margin-left: 50%; margin-right: 50%; }
  .mh55p_in_m-01 { margin-left: 55%; margin-right: 55%; }
  .mh60p_in_m-01 { margin-left: 60%; margin-right: 60%; }
  .mh65p_in_m-01 { margin-left: 65%; margin-right: 65%; }
  .mh70p_in_m-01 { margin-left: 70%; margin-right: 70%; }
  .mh75p_in_m-01 { margin-left: 75%; margin-right: 75%; }
  .mh80p_in_m-01 { margin-left: 80%; margin-right: 80%; }
  .mh85p_in_m-01 { margin-left: 85%; margin-right: 85%; }
  .mh90p_in_m-01 { margin-left: 90%; margin-right: 90%; }
  .mh95p_in_m-01 { margin-left: 95%; margin-right: 95%; }
  .mh100p_in_m-01 { margin-left: 100%; margin-right: 100%; }
  .mt1_in_m-01 { margin-top: var(--px1); }
  .mt2_in_m-01 { margin-top: var(--px2); }
  .mt3_in_m-01 { margin-top: var(--px3); }
  .mt4_in_m-01 { margin-top: var(--px4); }
  .mt5_in_m-01 { margin-top: var(--px5); }
  .mt6_in_m-01 { margin-top: var(--px6); }
  .mt7_in_m-01 { margin-top: var(--px7); }
  .mt8_in_m-01 { margin-top: var(--px8); }
  .mt9_in_m-01 { margin-top: var(--px9); }
  .mt10_in_m-01 { margin-top: var(--px10); }
  .mt11_in_m-01 { margin-top: var(--px11); }
  .mt12_in_m-01 { margin-top: var(--px12); }
  .mt13_in_m-01 { margin-top: var(--px13); }
  .mt14_in_m-01 { margin-top: var(--px14); }
  .mt15_in_m-01 { margin-top: var(--px15); }
  .mt16_in_m-01 { margin-top: var(--px16); }
  .mt17_in_m-01 { margin-top: var(--px17); }
  .mt18_in_m-01 { margin-top: var(--px18); }
  .mt19_in_m-01 { margin-top: var(--px19); }
  .mt20_in_m-01 { margin-top: var(--px20); }
  .mt5p_in_m-01 { margin-top: 5%; }
  .mt10p_in_m-01 { margin-top: 10%; }
  .mt15p_in_m-01 { margin-top: 15%; }
  .mt20p_in_m-01 { margin-top: 20%; }
  .mt25p_in_m-01 { margin-top: 25%; }
  .mt30p_in_m-01 { margin-top: 30%; }
  .mt35p_in_m-01 { margin-top: 35%; }
  .mt40p_in_m-01 { margin-top: 40%; }
  .mt45p_in_m-01 { margin-top: 45%; }
  .mt50p_in_m-01 { margin-top: 50%; }
  .mt55p_in_m-01 { margin-top: 55%; }
  .mt60p_in_m-01 { margin-top: 60%; }
  .mt65p_in_m-01 { margin-top: 65%; }
  .mt70p_in_m-01 { margin-top: 70%; }
  .mt75p_in_m-01 { margin-top: 75%; }
  .mt80p_in_m-01 { margin-top: 80%; }
  .mt85p_in_m-01 { margin-top: 85%; }
  .mt90p_in_m-01 { margin-top: 90%; }
  .mt95p_in_m-01 { margin-top: 95%; }
  .mt100p_in_m-01 { margin-top: 100%; }
  .mr1_in_m-01 { margin-right: var(--px1); }
  .mr2_in_m-01 { margin-right: var(--px2); }
  .mr3_in_m-01 { margin-right: var(--px3); }
  .mr4_in_m-01 { margin-right: var(--px4); }
  .mr5_in_m-01 { margin-right: var(--px5); }
  .mr6_in_m-01 { margin-right: var(--px6); }
  .mr7_in_m-01 { margin-right: var(--px7); }
  .mr8_in_m-01 { margin-right: var(--px8); }
  .mr9_in_m-01 { margin-right: var(--px9); }
  .mr10_in_m-01 { margin-right: var(--px10); }
  .mr11_in_m-01 { margin-right: var(--px11); }
  .mr12_in_m-01 { margin-right: var(--px12); }
  .mr13_in_m-01 { margin-right: var(--px13); }
  .mr14_in_m-01 { margin-right: var(--px14); }
  .mr15_in_m-01 { margin-right: var(--px15); }
  .mr16_in_m-01 { margin-right: var(--px16); }
  .mr17_in_m-01 { margin-right: var(--px17); }
  .mr18_in_m-01 { margin-right: var(--px18); }
  .mr19_in_m-01 { margin-right: var(--px19); }
  .mr20_in_m-01 { margin-right: var(--px20); }
  .mr5p_in_m-01 { margin-right: 5%; }
  .mr10p_in_m-01 { margin-right: 10%; }
  .mr15p_in_m-01 { margin-right: 15%; }
  .mr20p_in_m-01 { margin-right: 20%; }
  .mr25p_in_m-01 { margin-right: 25%; }
  .mr30p_in_m-01 { margin-right: 30%; }
  .mr35p_in_m-01 { margin-right: 35%; }
  .mr40p_in_m-01 { margin-right: 40%; }
  .mr45p_in_m-01 { margin-right: 45%; }
  .mr50p_in_m-01 { margin-right: 50%; }
  .mr55p_in_m-01 { margin-right: 55%; }
  .mr60p_in_m-01 { margin-right: 60%; }
  .mr65p_in_m-01 { margin-right: 65%; }
  .mr70p_in_m-01 { margin-right: 70%; }
  .mr75p_in_m-01 { margin-right: 75%; }
  .mr80p_in_m-01 { margin-right: 80%; }
  .mr85p_in_m-01 { margin-right: 85%; }
  .mr90p_in_m-01 { margin-right: 90%; }
  .mr95p_in_m-01 { margin-right: 95%; }
  .mr100p_in_m-01 { margin-right: 100%; }
  .mb1_in_m-01 { margin-bottom: var(--px1); }
  .mb2_in_m-01 { margin-bottom: var(--px2); }
  .mb3_in_m-01 { margin-bottom: var(--px3); }
  .mb4_in_m-01 { margin-bottom: var(--px4); }
  .mb5_in_m-01 { margin-bottom: var(--px5); }
  .mb6_in_m-01 { margin-bottom: var(--px6); }
  .mb7_in_m-01 { margin-bottom: var(--px7); }
  .mb8_in_m-01 { margin-bottom: var(--px8); }
  .mb9_in_m-01 { margin-bottom: var(--px9); }
  .mb10_in_m-01 { margin-bottom: var(--px10); }
  .mb11_in_m-01 { margin-bottom: var(--px11); }
  .mb12_in_m-01 { margin-bottom: var(--px12); }
  .mb13_in_m-01 { margin-bottom: var(--px13); }
  .mb14_in_m-01 { margin-bottom: var(--px14); }
  .mb15_in_m-01 { margin-bottom: var(--px15); }
  .mb16_in_m-01 { margin-bottom: var(--px16); }
  .mb17_in_m-01 { margin-bottom: var(--px17); }
  .mb18_in_m-01 { margin-bottom: var(--px18); }
  .mb19_in_m-01 { margin-bottom: var(--px19); }
  .mb20_in_m-01 { margin-bottom: var(--px20); }
  .mb5p_in_m-01 { margin-bottom: 5%; }
  .mb10p_in_m-01 { margin-bottom: 10%; }
  .mb15p_in_m-01 { margin-bottom: 15%; }
  .mb20p_in_m-01 { margin-bottom: 20%; }
  .mb25p_in_m-01 { margin-bottom: 25%; }
  .mb30p_in_m-01 { margin-bottom: 30%; }
  .mb35p_in_m-01 { margin-bottom: 35%; }
  .mb40p_in_m-01 { margin-bottom: 40%; }
  .mb45p_in_m-01 { margin-bottom: 45%; }
  .mb50p_in_m-01 { margin-bottom: 50%; }
  .mb55p_in_m-01 { margin-bottom: 55%; }
  .mb60p_in_m-01 { margin-bottom: 60%; }
  .mb65p_in_m-01 { margin-bottom: 65%; }
  .mb70p_in_m-01 { margin-bottom: 70%; }
  .mb75p_in_m-01 { margin-bottom: 75%; }
  .mb80p_in_m-01 { margin-bottom: 80%; }
  .mb85p_in_m-01 { margin-bottom: 85%; }
  .mb90p_in_m-01 { margin-bottom: 90%; }
  .mb95p_in_m-01 { margin-bottom: 95%; }
  .mb100p_in_m-01 { margin-bottom: 100%; }
  .ml1_in_m-01 { margin-left: var(--px1); }
  .ml2_in_m-01 { margin-left: var(--px2); }
  .ml3_in_m-01 { margin-left: var(--px3); }
  .ml4_in_m-01 { margin-left: var(--px4); }
  .ml5_in_m-01 { margin-left: var(--px5); }
  .ml6_in_m-01 { margin-left: var(--px6); }
  .ml7_in_m-01 { margin-left: var(--px7); }
  .ml8_in_m-01 { margin-left: var(--px8); }
  .ml9_in_m-01 { margin-left: var(--px9); }
  .ml10_in_m-01 { margin-left: var(--px10); }
  .ml11_in_m-01 { margin-left: var(--px11); }
  .ml12_in_m-01 { margin-left: var(--px12); }
  .ml13_in_m-01 { margin-left: var(--px13); }
  .ml14_in_m-01 { margin-left: var(--px14); }
  .ml15_in_m-01 { margin-left: var(--px15); }
  .ml16_in_m-01 { margin-left: var(--px16); }
  .ml17_in_m-01 { margin-left: var(--px17); }
  .ml18_in_m-01 { margin-left: var(--px18); }
  .ml19_in_m-01 { margin-left: var(--px19); }
  .ml20_in_m-01 { margin-left: var(--px20); }
  .ml5p_in_m-01 { margin-left: 5%; }
  .ml10p_in_m-01 { margin-left: 10%; }
  .ml15p_in_m-01 { margin-left: 15%; }
  .ml20p_in_m-01 { margin-left: 20%; }
  .ml25p_in_m-01 { margin-left: 25%; }
  .ml30p_in_m-01 { margin-left: 30%; }
  .ml35p_in_m-01 { margin-left: 35%; }
  .ml40p_in_m-01 { margin-left: 40%; }
  .ml45p_in_m-01 { margin-left: 45%; }
  .ml50p_in_m-01 { margin-left: 50%; }
  .ml55p_in_m-01 { margin-left: 55%; }
  .ml60p_in_m-01 { margin-left: 60%; }
  .ml65p_in_m-01 { margin-left: 65%; }
  .ml70p_in_m-01 { margin-left: 70%; }
  .ml75p_in_m-01 { margin-left: 75%; }
  .ml80p_in_m-01 { margin-left: 80%; }
  .ml85p_in_m-01 { margin-left: 85%; }
  .ml90p_in_m-01 { margin-left: 90%; }
  .ml95p_in_m-01 { margin-left: 95%; }
  .ml100p_in_m-01 { margin-left: 100%; }
  .ba0_in_m-01 { border: none; }
  .bt0_in_m-01 { border-top: none; }
  .br0_in_m-01 { border-right: none; }
  .bb0_in_m-01 { border-bottom: none; }
  .bl0_in_m-01 { border-left: none; }
  .ba_in_m-01 { border: solid 1px rgba(255, 255, 255, 0.15); }
  .bt_in_m-01 { border-top: solid 1px rgba(255, 255, 255, 0.15); }
  .br_in_m-01 { border-right: solid 1px rgba(255, 255, 255, 0.15); }
  .bb_in_m-01 { border-bottom: solid 1px rgba(255, 255, 255, 0.15); }
  .bl_in_m-01 { border-left: solid 1px rgba(255, 255, 255, 0.15); }
  .bv_in_m-01 { border-top: solid 1px rgba(255, 255, 255, 0.15); border-bottom: solid 1px rgba(255, 255, 255, 0.15); }
  .bh_in_m-01 { border-left: solid 1px rgba(255, 255, 255, 0.15); border-right: solid 1px rgba(255, 255, 255, 0.15); }
  .borderNeutralOnFill_in_m-01 { border-color: var(--neutralOnFill); }
  .borderBlack_in_m-01 { border-color: var(--black); }
  .borderWhite_in_m-01 { border-color: var(--white); }
  .borderGreyHighlighted_in_m-01 { border-color: var(--greyHighlighted); }
  .borderNeutral_in_m-01 { border-color: var(--neutral); }
  .borderRed_in_m-01 { border-color: var(--red); }
  .borderTeal_in_m-01 { border-color: var(--teal); }
  .borderPurple_in_m-01 { border-color: var(--purple); }
  .borderBlue_in_m-01 { border-color: var(--blue); }
  .borderOrange_in_m-01 { border-color: var(--orange); }
  .borderYellow_in_m-01 { border-color: var(--yellow); }
  .borderGreen_in_m-01 { border-color: var(--green); }
  .borderPink_in_m-01 { border-color: var(--pink); }
  .borderGrey_in_m-01 { border-color: var(--grey); }
  .borderTextNeutral_in_m-01 { border-color: var(--textNeutral); }
  .borderTextMinimal_in_m-01 { border-color: var(--textMinimal); }
  .borderDetailNeutral_in_m-01 { border-color: var(--detailNeutral); }
  .borderDetailMinimal_in_m-01 { border-color: var(--detailMinimal); }
  .br1_in_m-01 { border-radius: 2px; }
  .br2_in_m-01 { border-radius: 5px; }
  .br3_in_m-01 { border-radius: 10px; }
  .br4_in_m-01 { border-radius: 15px; }
  .br5_in_m-01 { border-radius: 20px; }
  .strokeNeutralOnFill_in_m-01 { stroke: var(--neutralOnFill); }
  .strokeBlack_in_m-01 { stroke: var(--black); }
  .strokeWhite_in_m-01 { stroke: var(--white); }
  .strokeGreyHighlighted_in_m-01 { stroke: var(--greyHighlighted); }
  .strokeNeutral_in_m-01 { stroke: var(--neutral); }
  .strokeRed_in_m-01 { stroke: var(--red); }
  .strokeTeal_in_m-01 { stroke: var(--teal); }
  .strokePurple_in_m-01 { stroke: var(--purple); }
  .strokeBlue_in_m-01 { stroke: var(--blue); }
  .strokeOrange_in_m-01 { stroke: var(--orange); }
  .strokeYellow_in_m-01 { stroke: var(--yellow); }
  .strokeGreen_in_m-01 { stroke: var(--green); }
  .strokePink_in_m-01 { stroke: var(--pink); }
  .strokeGrey_in_m-01 { stroke: var(--grey); }
  .strokeTextNeutral_in_m-01 { stroke: var(--textNeutral); }
  .strokeTextMinimal_in_m-01 { stroke: var(--textMinimal); }
  .strokeDetailNeutral_in_m-01 { stroke: var(--detailNeutral); }
  .strokeDetailMinimal_in_m-01 { stroke: var(--detailMinimal); }
  .o0_in_m-01 { opacity: 0.00; }
  .o5_in_m-01 { opacity: 0.05; }
  .o10_in_m-01 { opacity: 0.10; }
  .o15_in_m-01 { opacity: 0.15; }
  .o20_in_m-01 { opacity: 0.20; }
  .o25_in_m-01 { opacity: 0.25; }
  .o30_in_m-01 { opacity: 0.30; }
  .o35_in_m-01 { opacity: 0.35; }
  .o40_in_m-01 { opacity: 0.40; }
  .o45_in_m-01 { opacity: 0.45; }
  .o50_in_m-01 { opacity: 0.50; }
  .o55_in_m-01 { opacity: 0.55; }
  .o60_in_m-01 { opacity: 0.60; }
  .o65_in_m-01 { opacity: 0.65; }
  .o70_in_m-01 { opacity: 0.70; }
  .o75_in_m-01 { opacity: 0.75; }
  .o80_in_m-01 { opacity: 0.80; }
  .o85_in_m-01 { opacity: 0.85; }
  .o90_in_m-01 { opacity: 0.90; }
  .o95_in_m-01 { opacity: 0.95; }
  .o100_in_m-01 { opacity: 1.00; }
  .aShadow_in_m-01 { box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.25); }
  .tShadow_in_m-01 { box-shadow: 0px -15px 25px rgba(0, 0, 0, 0.25); }
  .rShadow_in_m-01 { box-shadow: 15px 0px 25px rgba(0, 0, 0, 0.25); }
  .bShadow_in_m-01 { box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.25); }
  .lShadow_in_m-01 { box-shadow: -15px 0px 25px rgba(0, 0, 0, 0.25); }
  .rtShadow_in_m-01 { box-shadow: 15px -15px 25px rgba(0, 0, 0, 0.25); }
  .rbShadow_in_m-01 { box-shadow: 15px 15px 25px rgba(0, 0, 0, 0.25); }
  .lbShadow_in_m-01 { box-shadow: -15px 15px 25px rgba(0, 0, 0, 0.25); }
  .ltShadow_in_m-01 { box-shadow: -15px -15px 25px rgba(0, 0, 0, 0.25); }
  .rotate0_in_m-01 { transform: rotate(0deg); }
  .rotate5_in_m-01 { transform: rotate(5deg); }
  .rotate10_in_m-01 { transform: rotate(10deg); }
  .rotate15_in_m-01 { transform: rotate(15deg); }
  .rotate20_in_m-01 { transform: rotate(20deg); }
  .rotate25_in_m-01 { transform: rotate(25deg); }
  .rotate30_in_m-01 { transform: rotate(30deg); }
  .rotate35_in_m-01 { transform: rotate(35deg); }
  .rotate40_in_m-01 { transform: rotate(40deg); }
  .rotate45_in_m-01 { transform: rotate(45deg); }
  .rotate50_in_m-01 { transform: rotate(50deg); }
  .rotate55_in_m-01 { transform: rotate(55deg); }
  .rotate60_in_m-01 { transform: rotate(60deg); }
  .rotate65_in_m-01 { transform: rotate(65deg); }
  .rotate70_in_m-01 { transform: rotate(70deg); }
  .rotate75_in_m-01 { transform: rotate(75deg); }
  .rotate80_in_m-01 { transform: rotate(80deg); }
  .rotate85_in_m-01 { transform: rotate(85deg); }
  .rotate90_in_m-01 { transform: rotate(90deg); }
  .rotate95_in_m-01 { transform: rotate(95deg); }
  .rotate100_in_m-01 { transform: rotate(100deg); }
  .rotate105_in_m-01 { transform: rotate(105deg); }
  .rotate110_in_m-01 { transform: rotate(110deg); }
  .rotate115_in_m-01 { transform: rotate(115deg); }
  .rotate120_in_m-01 { transform: rotate(120deg); }
  .rotate125_in_m-01 { transform: rotate(125deg); }
  .rotate130_in_m-01 { transform: rotate(130deg); }
  .rotate135_in_m-01 { transform: rotate(135deg); }
  .rotate140_in_m-01 { transform: rotate(140deg); }
  .rotate145_in_m-01 { transform: rotate(145deg); }
  .rotate150_in_m-01 { transform: rotate(150deg); }
  .rotate155_in_m-01 { transform: rotate(155deg); }
  .rotate160_in_m-01 { transform: rotate(160deg); }
  .rotate165_in_m-01 { transform: rotate(165deg); }
  .rotate170_in_m-01 { transform: rotate(170deg); }
  .rotate175_in_m-01 { transform: rotate(175deg); }
  .rotate180_in_m-01 { transform: rotate(180deg); }
  .rotate185_in_m-01 { transform: rotate(185deg); }
  .rotate190_in_m-01 { transform: rotate(190deg); }
  .rotate195_in_m-01 { transform: rotate(195deg); }
  .rotate200_in_m-01 { transform: rotate(200deg); }
  .rotate205_in_m-01 { transform: rotate(205deg); }
  .rotate210_in_m-01 { transform: rotate(210deg); }
  .rotate215_in_m-01 { transform: rotate(215deg); }
  .rotate220_in_m-01 { transform: rotate(220deg); }
  .rotate225_in_m-01 { transform: rotate(225deg); }
  .rotate230_in_m-01 { transform: rotate(230deg); }
  .rotate235_in_m-01 { transform: rotate(235deg); }
  .rotate240_in_m-01 { transform: rotate(240deg); }
  .rotate245_in_m-01 { transform: rotate(245deg); }
  .rotate250_in_m-01 { transform: rotate(250deg); }
  .rotate255_in_m-01 { transform: rotate(255deg); }
  .rotate260_in_m-01 { transform: rotate(260deg); }
  .rotate265_in_m-01 { transform: rotate(265deg); }
  .rotate270_in_m-01 { transform: rotate(270deg); }
  .rotate275_in_m-01 { transform: rotate(275deg); }
  .rotate280_in_m-01 { transform: rotate(280deg); }
  .rotate285_in_m-01 { transform: rotate(285deg); }
  .rotate290_in_m-01 { transform: rotate(290deg); }
  .rotate295_in_m-01 { transform: rotate(295deg); }
  .rotate300_in_m-01 { transform: rotate(300deg); }
  .rotate305_in_m-01 { transform: rotate(305deg); }
  .rotate310_in_m-01 { transform: rotate(310deg); }
  .rotate315_in_m-01 { transform: rotate(315deg); }
  .rotate320_in_m-01 { transform: rotate(320deg); }
  .rotate325_in_m-01 { transform: rotate(325deg); }
  .rotate330_in_m-01 { transform: rotate(330deg); }
  .rotate335_in_m-01 { transform: rotate(335deg); }
  .rotate340_in_m-01 { transform: rotate(340deg); }
  .rotate345_in_m-01 { transform: rotate(345deg); }
  .rotate350_in_m-01 { transform: rotate(350deg); }
  .rotate355_in_m-01 { transform: rotate(355deg); }
  .rotate360_in_m-01 { transform: rotate(360deg); }
  .rotate365_in_m-01 { transform: rotate(365deg); }
  .rotateN0_in_m-01 { transform: rotate(-0deg); }
  .rotateN5_in_m-01 { transform: rotate(-5deg); }
  .rotateN10_in_m-01 { transform: rotate(-10deg); }
  .rotateN15_in_m-01 { transform: rotate(-15deg); }
  .rotateN20_in_m-01 { transform: rotate(-20deg); }
  .rotateN25_in_m-01 { transform: rotate(-25deg); }
  .rotateN30_in_m-01 { transform: rotate(-30deg); }
  .rotateN35_in_m-01 { transform: rotate(-35deg); }
  .rotateN40_in_m-01 { transform: rotate(-40deg); }
  .rotateN45_in_m-01 { transform: rotate(-45deg); }
  .rotateN50_in_m-01 { transform: rotate(-50deg); }
  .rotateN55_in_m-01 { transform: rotate(-55deg); }
  .rotateN60_in_m-01 { transform: rotate(-60deg); }
  .rotateN65_in_m-01 { transform: rotate(-65deg); }
  .rotateN70_in_m-01 { transform: rotate(-70deg); }
  .rotateN75_in_m-01 { transform: rotate(-75deg); }
  .rotateN80_in_m-01 { transform: rotate(-80deg); }
  .rotateN85_in_m-01 { transform: rotate(-85deg); }
  .rotateN90_in_m-01 { transform: rotate(-90deg); }
  .rotateN95_in_m-01 { transform: rotate(-95deg); }
  .rotateN100_in_m-01 { transform: rotate(-100deg); }
  .rotateN105_in_m-01 { transform: rotate(-105deg); }
  .rotateN110_in_m-01 { transform: rotate(-110deg); }
  .rotateN115_in_m-01 { transform: rotate(-115deg); }
  .rotateN120_in_m-01 { transform: rotate(-120deg); }
  .rotateN125_in_m-01 { transform: rotate(-125deg); }
  .rotateN130_in_m-01 { transform: rotate(-130deg); }
  .rotateN135_in_m-01 { transform: rotate(-135deg); }
  .rotateN140_in_m-01 { transform: rotate(-140deg); }
  .rotateN145_in_m-01 { transform: rotate(-145deg); }
  .rotateN150_in_m-01 { transform: rotate(-150deg); }
  .rotateN155_in_m-01 { transform: rotate(-155deg); }
  .rotateN160_in_m-01 { transform: rotate(-160deg); }
  .rotateN165_in_m-01 { transform: rotate(-165deg); }
  .rotateN170_in_m-01 { transform: rotate(-170deg); }
  .rotateN175_in_m-01 { transform: rotate(-175deg); }
  .rotateN180_in_m-01 { transform: rotate(-180deg); }
  .rotateN185_in_m-01 { transform: rotate(-185deg); }
  .rotateN190_in_m-01 { transform: rotate(-190deg); }
  .rotateN195_in_m-01 { transform: rotate(-195deg); }
  .rotateN200_in_m-01 { transform: rotate(-200deg); }
  .rotateN205_in_m-01 { transform: rotate(-205deg); }
  .rotateN210_in_m-01 { transform: rotate(-210deg); }
  .rotateN215_in_m-01 { transform: rotate(-215deg); }
  .rotateN220_in_m-01 { transform: rotate(-220deg); }
  .rotateN225_in_m-01 { transform: rotate(-225deg); }
  .rotateN230_in_m-01 { transform: rotate(-230deg); }
  .rotateN235_in_m-01 { transform: rotate(-235deg); }
  .rotateN240_in_m-01 { transform: rotate(-240deg); }
  .rotateN245_in_m-01 { transform: rotate(-245deg); }
  .rotateN250_in_m-01 { transform: rotate(-250deg); }
  .rotateN255_in_m-01 { transform: rotate(-255deg); }
  .rotateN260_in_m-01 { transform: rotate(-260deg); }
  .rotateN265_in_m-01 { transform: rotate(-265deg); }
  .rotateN270_in_m-01 { transform: rotate(-270deg); }
  .rotateN275_in_m-01 { transform: rotate(-275deg); }
  .rotateN280_in_m-01 { transform: rotate(-280deg); }
  .rotateN285_in_m-01 { transform: rotate(-285deg); }
  .rotateN290_in_m-01 { transform: rotate(-290deg); }
  .rotateN295_in_m-01 { transform: rotate(-295deg); }
  .rotateN300_in_m-01 { transform: rotate(-300deg); }
  .rotateN305_in_m-01 { transform: rotate(-305deg); }
  .rotateN310_in_m-01 { transform: rotate(-310deg); }
  .rotateN315_in_m-01 { transform: rotate(-315deg); }
  .rotateN320_in_m-01 { transform: rotate(-320deg); }
  .rotateN325_in_m-01 { transform: rotate(-325deg); }
  .rotateN330_in_m-01 { transform: rotate(-330deg); }
  .rotateN335_in_m-01 { transform: rotate(-335deg); }
  .rotateN340_in_m-01 { transform: rotate(-340deg); }
  .rotateN345_in_m-01 { transform: rotate(-345deg); }
  .rotateN350_in_m-01 { transform: rotate(-350deg); }
  .rotateN355_in_m-01 { transform: rotate(-355deg); }
  .rotateN360_in_m-01 { transform: rotate(-360deg); }
  .rotateN365_in_m-01 { transform: rotate(-365deg); }
  .focusBlack_in_m-01:focus { color: var(--black); }
  .focusWhite_in_m-01:focus { color: var(--white); }
  .focusGreyHighlighted_in_m-01:focus { color: var(--greyHighlightedAlt); }
  .focusNeutral_in_m-01:focus { color: var(--neutralAlt); }
  .focusRed_in_m-01:focus { color: var(--redAlt); }
  .focusPurple_in_m-01:focus { color: var(--purpleAlt); }
  .focusDetailNeutral_in_m-01:focus { color: var(--detailNeutral); }
  .focusDetailMinimal_in_m-01:focus { color: var(--detailMinimal); }
  .focusBgBlack_in_m-01:focus { background-color: var(--black); fill: var(--black); }
  .focusBgWhite_in_m-01:focus { background-color: var(--white); fill: var(--white); }
  .focusBgGreyHighlighted_in_m-01:focus { background-color: var(--greyHighlightedAlt); fill: var(--greyHighlightedAlt); }
  .focusBgNeutral_in_m-01:focus { background-color: var(--neutralFillAlt); fill: var(--neutralFillAlt); }
  .focusBgLevel1_in_m-01:focus { background-color: var(--bgLevel1); fill: var(--bgLevel1); }
  .focusBgLevel2_in_m-01:focus { background-color: var(--bgLevel2); fill: var(--bgLevel2); }
  .focusBgLevel3_in_m-01:focus { background-color: var(--bgLevel3); fill: var(--bgLevel3); }
  .focusBgLevel4_in_m-01:focus { background-color: var(--bgLevel4); fill: var(--bgLevel4); }
  .focusBgRed_in_m-01:focus { background-color: var(--redFillAlt); fill: var(--redFillAlt); }
  .focusBgTeal_in_m-01:focus { background-color: var(--tealFillAlt); fill: var(--tealFillAlt); }
  .focusBgPurple_in_m-01:focus { background-color: var(--purpleFillAlt); fill: var(--purpleFillAlt); }
  .focusStrokeBlack_in_m-01:focus * { stroke: var(--black); }
  .focusStrokeWhite_in_m-01:focus * { stroke: var(--white); }
  .focusStrokeGreyHighlighted_in_m-01:focus * { stroke: var(--greyHighlightedAlt); }
  .focusStrokeNeutral_in_m-01:focus * { stroke: var(--neutralAlt); }
  .focusStrokeRed_in_m-01:focus * { stroke: var(--redAlt); }
  .focusStrokePurple_in_m-01:focus * { stroke: var(--purpleAlt); }
  .focusStrokeDetailNeutral_in_m-01:focus * { stroke: var(--detailNeutral); }
  .focusStrokeDetailMinimal_in_m-01:focus * { stroke: var(--detailMinimal); }
  .focusBorderBlack_in_m-01:focus { border-color: var(--black); }
  .focusBorderWhite_in_m-01:focus { border-color: var(--white); }
  .focusBorderGreyHighlighted_in_m-01:focus { border-color: var(--greyHighlightedAlt); }
  .focusBorderNeutral_in_m-01:focus { border-color: var(--neutralAlt); }
  .focusBorderRed_in_m-01:focus { border-color: var(--redAlt); }
  .focusBorderPurple_in_m-01:focus { border-color: var(--purpleAlt); }
  .focusBorderDetailNeutral_in_m-01:focus { border-color: var(--detailNeutral); }
  .focusBorderDetailMinimal_in_m-01:focus { border-color: var(--detailMinimal); }
  .hoverLight_in_m-01:hover { font-weight: 300; }
  .hoverRegular_in_m-01:hover { font-weight: 400; }
  .hoverMedium_in_m-01:hover { font-weight: 500; }
  .hoverBold_in_m-01:hover { font-weight: 700; }
  .hoverBlack_in_m-01:hover { color: var(--black); }
  .hoverWhite_in_m-01:hover { color: var(--white); }
  .hoverGreyHighlighted_in_m-01:hover { color: var(--greyHighlightedAlt); }
  .hoverNeutral_in_m-01:hover { color: var(--neutralAlt); }
  .hoverRed_in_m-01:hover { color: var(--redAlt); }
  .hoverPurple_in_m-01:hover { color: var(--purpleAlt); }
  .hoverDetailNeutral_in_m-01:hover { color: var(--detailNeutral); }
  .hoverDetailMinimal_in_m-01:hover { color: var(--detailMinimal); }
  .hoverBgBlack_in_m-01:hover { background-color: var(--black); fill: var(--black); }
  .hoverBgWhite_in_m-01:hover { background-color: var(--white); fill: var(--white); }
  .hoverBgGreyHighlighted_in_m-01:hover { background-color: var(--greyHighlightedAlt); fill: var(--greyHighlightedAlt); }
  .hoverBgNeutral_in_m-01:hover { background-color: var(--neutralFillAlt); fill: var(--neutralFillAlt); }
  .hoverBgLevel1_in_m-01:hover { background-color: var(--bgLevel1); fill: var(--bgLevel1); }
  .hoverBgLevel2_in_m-01:hover { background-color: var(--bgLevel2); fill: var(--bgLevel2); }
  .hoverBgLevel3_in_m-01:hover { background-color: var(--bgLevel3); fill: var(--bgLevel3); }
  .hoverBgLevel4_in_m-01:hover { background-color: var(--bgLevel4); fill: var(--bgLevel4); }
  .hoverBgRed_in_m-01:hover { background-color: var(--redFillAlt); fill: var(--redFillAlt); }
  .hoverBgTeal_in_m-01:hover { background-color: var(--tealFillAlt); fill: var(--tealFillAlt); }
  .hoverBgPurple_in_m-01:hover { background-color: var(--purpleFillAlt); fill: var(--purpleFillAlt); }
  .hoverStrokeBlack_in_m-01:hover * { stroke: var(--black); }
  .hoverStrokeWhite_in_m-01:hover * { stroke: var(--white); }
  .hoverStrokeGreyHighlighted_in_m-01:hover * { stroke: var(--greyHighlightedAlt); }
  .hoverStrokeNeutral_in_m-01:hover * { stroke: var(--neutralAlt); }
  .hoverStrokeRed_in_m-01:hover * { stroke: var(--redAlt); }
  .hoverStrokePurple_in_m-01:hover * { stroke: var(--purpleAlt); }
  .hoverStrokeDetailNeutral_in_m-01:hover * { stroke: var(--detailNeutral); }
  .hoverStrokeDetailMinimal_in_m-01:hover * { stroke: var(--detailMinimal); }
  .hoverBorderBlack_in_m-01:hover { border-color: var(--black); }
  .hoverBorderWhite_in_m-01:hover { border-color: var(--white); }
  .hoverBorderGreyHighlighted_in_m-01:hover { border-color: var(--greyHighlightedAlt); }
  .hoverBorderNeutral_in_m-01:hover { border-color: var(--neutralAlt); }
  .hoverBorderRed_in_m-01:hover { border-color: var(--redAlt); }
  .hoverBorderPurple_in_m-01:hover { border-color: var(--purpleAlt); }
  .hoverBorderDetailNeutral_in_m-01:hover { border-color: var(--detailNeutral); }
  .hoverBorderDetailMinimal_in_m-01:hover { border-color: var(--detailMinimal); }
  .light_in_m-01 { font-weight: 300; }
  .regular_in_m-01 { font-weight: 400; }
  .medium_in_m-01 { font-weight: 500; }
  .bold_in_m-01 { font-weight: 700; }
  .bgNone_in_m-01 { fill: transparent; background-color: transparent; }
  .transparent_in_m-01 { color: transparent; }
  .vHidden_in_m-01 { visibility: hidden; }
  .flexWrap_in_m-01 { display: flex; flex-wrap: wrap; }
  .flexNoWrap_in_m-01 { display: flex; flex-wrap: nowrap; }
  .flexRow_in_m-01 { display: flex; flex-direction: row; }
  .flexColumn_in_m-01 { display: flex; flex-direction: column; }
  .noShrink_in_m-01 { flex-shrink: 0; }
  .gridRowAuto_in_m-01 { grid-row: auto; }
  .gridColumnAuto_in_m-01 { grid-column: auto; }
  .selfStart_in_m-01 { align-self: flex-start; }
  .selfCenter_in_m-01 { align-self: center; }
  .selfEnd_in_m-01 { align-self: flex-end; }
  .selfStretch_in_m-01 { align-self: stretch; }
  .visible_in_m-01 { overflow: visible; }
  .visibleX_in_m-01 { overflow-x: visible; }
  .visibleY_in_m-01 { overflow-y: visible; }
  .scroll_in_m-01 { overflow: auto; }
  .scrollX_in_m-01 { overflow-x: auto; }
  .scrollY_in_m-01 { overflow-y: auto; }
  .scrollAlways_in_m-01 { overflow: scroll; }
  .scrollXAlways_in_m-01 { overflow-x: scroll; }
  .scrollYAlways_in_m-01 { overflow-y: scroll; }
  .noOverflow_in_m-01 { overflow: hidden; }
  .fMono_in_m-01 { font-family: 'IBM Plex Mono', monospace; }
  .fSans_in_m-01 { font-family: 'IBM Plex Sans', sans-serif; }
  .fs48px_in_m-01 { font-size: 48px; }
  .fs60px_in_m-01 { font-size: 60px; }
  .italic_in_m-01 { font-style: italic; }
  .lhDouble_in_m-01 { line-height:1.5em; }
  .ellipsis_in_m-01 { text-overflow: ellipsis; white-space: nowrap; overflow: hidden; }
  .lineClamp1_in_m-01 { display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical; overflow: hidden; }
  .pre_in_m-01 { white-space: pre; }
  .preLine_in_m-01 { white-space: pre-line; }
  .preWrap_in_m-01 { white-space: pre-wrap; }
  .noWrap_in_m-01 { white-space: nowrap; }
  .breakAll_in_m-01 { word-break: break-all; }
  .breakWord_in_m-01 { word-break: break-word; }
  .noDecoration_in_m-01 { text-decoration: none; }
  .hyphens_in_m-01 { hyphens: auto; }
  .hyphensMan_in_m-01 { hyphens: manual; }
  .wAuto_in_m-01 { width: auto; }
  .wFitContent_in_m-01 { width: fit-content; }
  .w100vw_in_m-01 { width: 100vw; }
  .minW100vw_in_m-01 { min-width: 100vw; }
  .maxW100vw_in_m-01 { max-width: 100vw; }
  .wThird_in_m-01 { width: calc(100% / 3); }
  .minWThird_in_m-01 { min-width: calc(100% / 3); }
  .maxWThird_in_m-01 { max-width: calc(100% / 3); }
  .wHalf_in_m-01 { width: 48%; }
  .minWHalf_in_m-01 { min-width: 48%; }
  .maxWHalf_in_m-01 { max-width: 48%; }
  .hAuto_in_m-01 { height: auto; }
  .h0_in_m-01 { height: 0; }
  .h100vh_in_m-01 { height: 100vh; }
  .h50vh_in_m-01 { height: 50vh; }
  .hFitContent_in_m-01 { height: fit-content; }
  .minH100vh_in_m-01 { min-height: 100vh; }
  .hThird_in_m-01 { height: calc(100% / 3); }
  .minHThird_in_m-01 { min-height: calc(100% / 3); }
  .maxHThird_in_m-01 { max-height: calc(100% / 3); }
  .hHalf_in_m-01 { height: 48%; }
  .minHHalf_in_m-01 { min-height: 48%; }
  .maxHHalf_in_m-01 { max-height: 48%; }
  .maAuto_in_m-01 { margin: auto; }
  .ma0_in_m-01 { margin: 0; }
  .mvAuto_in_m-01 { margin-top: auto; margin-bottom: auto; }
  .mv0_in_m-01 { margin-top: 0; margin-bottom: 0; }
  .mhAuto_in_m-01 { margin-left: auto; margin-right: auto; }
  .mh0_in_m-01 { margin-left: 0; margin-right: 0; }
  .mtAuto_in_m-01 { margin-top: auto; }
  .mt0_in_m-01 { margin-top: 0; }
  .mrAuto_in_m-01 { margin-right: auto; }
  .mr0_in_m-01 { margin-right: 0; }
  .mbAuto_in_m-01 { margin-bottom: auto; }
  .mb0_in_m-01 { margin-bottom: 0; }
  .mlAuto_in_m-01 { margin-left: auto; }
  .ml0_in_m-01 { margin-left: 0; }
  .pa0_in_m-01 { padding: 0; }
  .pv0_in_m-01 { padding-top: 0; padding-bottom: 0; }
  .ph0_in_m-01 { padding-left: 0; padding-right: 0; }
  .pt0_in_m-01 { padding-top: 0; }
  .pr0_in_m-01 { padding-right: 0; }
  .pb0_in_m-01 { padding-bottom: 0; }
  .pl0_in_m-01 { padding-left: 0; }
  .paMin_in_m-01 { padding: 2px; }
  .ptMin_in_m-01 { padding-top: 2px; }
  .prMin_in_m-01 { padding-right: 2px; }
  .pbMin_in_m-01 { padding-bottom: 2px; }
  .plMin_in_m-01 { padding-left: 2px; }
  .pvMin_in_m-01 { padding-top: 2px; padding-bottom: 2px; }
  .phMin_in_m-01 { padding-left: 2px; padding-right: 2px; }
  .br50p_in_m-01 { border-radius: 50%; }
  .baWhite_in_m-01 { border: solid 1px white; }
  .baTransparent_in_m-01 { border: solid 1px transparent; }
  .baBlack_in_m-01 { border: solid 1px rgba(0, 0, 0, 0.1); }
  .btBlack_in_m-01 { border-top: solid 1px rgba(0, 0, 0, 0.1); }
  .btWhite_in_m-01 { border-top: solid 1px white; }
  .brBlack_in_m-01 { border-right: solid 1px rgba(0, 0, 0, 0.1); }
  .bbTransparent_in_m-01 { border-bottom: solid 1px transparent; }
  .bbBlack_in_m-01 { border-bottom: solid 1px rgba(0, 0, 0, 0.1); }
  .bbWhite_in_m-01 { border-bottom: solid 1px white; }
  .bbPurple_in_m-01 { border-bottom: solid 1px var(--purple); }
  .bbPurple2_in_m-01 { border-bottom: solid 2px var(--purple); }
  .blBlack_in_m-01 { border-left: solid 1px rgba(0, 0, 0, 0.1); }
  .ol0_in_m-01 { outline: none; }
  .noShadow_in_m-01 { box-shadow: none; }
  .shadowInset_in_m-01 { box-shadow: inset 0 15px 20px rgba(0, 0, 0, 0.25); }
  .aShadowInset_in_m-01 { box-shadow: inset 0 0px 15px rgba(0, 0, 0, 0.5); }
  .rShadowInset_in_m-01 { box-shadow: inset 10px 0px 15px rgba(0, 0, 0, 0.25); }
  .lShadowInset_in_m-01 { box-shadow: inset 10px 0px -15px rgba(0, 0, 0, 0.25); }
  .tShadowInset_in_m-01 { box-shadow: inset 10px 15px 0px rgba(0, 0, 0, 0.25); }
  .bShadowInset_in_m-01 { box-shadow: inset 10px -15px 0px rgba(0, 0, 0, 0.25); }
  .bhShadow_in_m-01 { box-shadow: 25px 25px 25px rgba(0, 0, 0, 0.25), -25px 25px 25px rgba(0, 0, 0, 0.25); }
  .shadowLight_in_m-01 { box-shadow: 0 0 50px var(--white); }
  .pointer_in_m-01 { cursor: pointer; }
  .cursor_in_m-01 { cursor: default; }
  .move_in_m-01 { cursor: move; }
  .animate_in_m-01 { transition: all 0.2s ease-in-out; }
  .animateColor_in_m-01 { transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out; }
  .animateOpacity_in_m-01 { transition: opacity 0.2s ease-in-out; }
  .inactive_in_m-01 { cursor: default; opacity: 0.3;; }
  .noEvent_in_m-01 { pointer-events: none; }
  .eventAuto_in_m-01 { pointer-events: auto; }
  .noSelect_in_m-01 { user-select: none; }
  .bgWhiteRadialGradient_in_m-01 { background: radial-gradient(
    rgba(255, 255, 255, 1),
    rgba(255, 255, 255, 0.5) 20%,
    rgba(255, 255, 255, 0.25) 40%,
    rgba(255, 255, 255, 0) 70%
  );
  margin-left: -5px; }
  .t10p_in_m-01 { top: 10%; }
  .t15p_in_m-01 { top: 15%; }
  .l10p_in_m-01 { left: 10%; }
  .l25p_in_m-01 { left: 25%; }
  .hoverO0_in_m-01:hover { opacity: 0; }
  .hoverO100_in_m-01:hover { opacity: 1; }
  .hoverU_in_m-01:hover { border-bottom: solid 1px var(--white); }
  .hoverShadow_in_m-01:hover { box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.25); }
  .hoverChildPurple_in_m-01:hover * { color: var(--purpleAlt); fill: var(--purpleAlt); }
  .hoverTransparentBorder_in_m-01:hover { border-color: transparent; }
  .noScrollbar_in_m-01::-webkit-scrollbar { display: none; }
  .outlineWhite_in_m-01:focus { box-shadow: 0 0 15px 1px var(--white); background: var(--white); color: var(--grey90); }
  .firstLetterCap_in_m-01::first-letter { text-transform: uppercase; }
}
@media (min-width: 900px) {
  .neutralOnFill_min_m-01 { color: var(--neutralOnFill); }
  .black_min_m-01 { color: var(--black); }
  .white_min_m-01 { color: var(--white); }
  .greyHighlighted_min_m-01 { color: var(--greyHighlighted); }
  .neutral_min_m-01 { color: var(--neutral); }
  .red_min_m-01 { color: var(--red); }
  .teal_min_m-01 { color: var(--teal); }
  .purple_min_m-01 { color: var(--purple); }
  .blue_min_m-01 { color: var(--blue); }
  .orange_min_m-01 { color: var(--orange); }
  .yellow_min_m-01 { color: var(--yellow); }
  .green_min_m-01 { color: var(--green); }
  .pink_min_m-01 { color: var(--pink); }
  .grey_min_m-01 { color: var(--grey); }
  .textNeutral_min_m-01 { color: var(--textNeutral); }
  .textMinimal_min_m-01 { color: var(--textMinimal); }
  .detailNeutral_min_m-01 { color: var(--detailNeutral); }
  .detailMinimal_min_m-01 { color: var(--detailMinimal); }
  .bgBlack_min_m-01 { fill: var--(black); background-color: var(--black); }
  .bgWhite_min_m-01 { fill: var--(white); background-color: var(--white); }
  .bgGreyHighlighted_min_m-01 { fill: var--(greyHighlighted); background-color: var(--greyHighlighted); }
  .bgNeutral_min_m-01 { fill: var--(neutralFill); background-color: var(--neutralFill); }
  .bgLevel1_min_m-01 { fill: var--(bgLevel1); background-color: var(--bgLevel1); }
  .bgLevel2_min_m-01 { fill: var--(bgLevel2); background-color: var(--bgLevel2); }
  .bgLevel3_min_m-01 { fill: var--(bgLevel3); background-color: var(--bgLevel3); }
  .bgLevel4_min_m-01 { fill: var--(bgLevel4); background-color: var(--bgLevel4); }
  .bgRed_min_m-01 { fill: var--(redFill); background-color: var(--redFill); }
  .bgTeal_min_m-01 { fill: var--(tealFill); background-color: var(--tealFill); }
  .bgPurple_min_m-01 { fill: var--(purpleFill); background-color: var(--purpleFill); }
  .bgBlue_min_m-01 { fill: var--(blueFill); background-color: var(--blueFill); }
  .bgOrange_min_m-01 { fill: var--(orangeFill); background-color: var(--orangeFill); }
  .bgYellow_min_m-01 { fill: var--(yellowFill); background-color: var(--yellowFill); }
  .bgGreen_min_m-01 { fill: var--(greenFill); background-color: var(--greenFill); }
  .bgPink_min_m-01 { fill: var--(pinkFill); background-color: var(--pinkFill); }
  .bgGrey_min_m-01 { fill: var--(greyFill); background-color: var(--greyFill); }
  .fixed_min_m-01 { position: fixed; }
  .relative_min_m-01 { position: relative; }
  .absolute_min_m-01 { position: absolute; }
  .l0_min_m-01 { left: 0; }
  .r0_min_m-01 { right: 0; }
  .t0_min_m-01 { top: 0; }
  .b0_min_m-01 { bottom: 0; }
  .hidden_min_m-01 { display: none; }
  .block_min_m-01 { display: block; }
  .inlineBlock_min_m-01 { display: inline-block; }
  .inlineFlex_min_m-01 { display: inline-flex; }
  .flex_min_m-01 { display: flex; }
  .flex0_min_m-01 { flex: 0; }
  .flex1_min_m-01 { flex: 1; }
  .flex2_min_m-01 { flex: 2; }
  .flex3_min_m-01 { flex: 3; }
  .flex4_min_m-01 { flex: 4; }
  .flex5_min_m-01 { flex: 5; }
  .flex6_min_m-01 { flex: 6; }
  .flex7_min_m-01 { flex: 7; }
  .flex8_min_m-01 { flex: 8; }
  .flex9_min_m-01 { flex: 9; }
  .flex10_min_m-01 { flex: 10; }
  .justifyStart_min_m-01 { display: flex; justify-content: flex-start; }
  .justifyCenter_min_m-01 { display: flex; justify-content: center; }
  .justifyEnd_min_m-01 { display: flex; justify-content: flex-end; }
  .justifyBetween_min_m-01 { display: flex; justify-content: space-between; }
  .justifyAround_min_m-01 { display: flex; justify-content: space-around; }
  .justifyBaseline_min_m-01 { display: flex; justify-content: baseline; }
  .justifyEvenly_min_m-01 { display: flex; justify-content: space-evenly; }
  .justifyStretch_min_m-01 { display: flex; justify-content: stretch; }
  .alignStart_min_m-01 { display: flex; align-items: flex-start; }
  .alignCenter_min_m-01 { display: flex; align-items: center; }
  .alignEnd_min_m-01 { display: flex; align-items: flex-end; }
  .alignBetween_min_m-01 { display: flex; align-items: space-between; }
  .alignAround_min_m-01 { display: flex; align-items: space-around; }
  .alignBaseline_min_m-01 { display: flex; align-items: baseline; }
  .alignStretch_min_m-01 { display: flex; align-items: stretch; }
  .flexGrow0_min_m-01 { flex-grow: 0; }
  .flexGrow1_min_m-01 { flex-grow: 1; }
  .flexGrow2_min_m-01 { flex-grow: 2; }
  .flexGrow3_min_m-01 { flex-grow: 3; }
  .flexGrow4_min_m-01 { flex-grow: 4; }
  .flexGrow5_min_m-01 { flex-grow: 5; }
  .flexShrink0_min_m-01 { flex-shrink: 0; }
  .flexShrink1_min_m-01 { flex-shrink: 1; }
  .flexShrink2_min_m-01 { flex-shrink: 2; }
  .flexShrink3_min_m-01 { flex-shrink: 3; }
  .flexShrink4_min_m-01 { flex-shrink: 4; }
  .flexShrink5_min_m-01 { flex-shrink: 5; }
  .order1_min_m-01 { order: 1; }
  .order2_min_m-01 { order: 2; }
  .order3_min_m-01 { order: 3; }
  .order4_min_m-01 { order: 4; }
  .order5_min_m-01 { order: 5; }
  .order6_min_m-01 { order: 6; }
  .order7_min_m-01 { order: 7; }
  .order8_min_m-01 { order: 8; }
  .order9_min_m-01 { order: 9; }
  .order10_min_m-01 { order: 10; }
  .zi0_min_m-01 { z-index: 0; }
  .zi1_min_m-01 { z-index: 1; }
  .zi2_min_m-01 { z-index: 2; }
  .zi3_min_m-01 { z-index: 3; }
  .zi4_min_m-01 { z-index: 4; }
  .zi5_min_m-01 { z-index: 5; }
  .zi6_min_m-01 { z-index: 6; }
  .zi7_min_m-01 { z-index: 7; }
  .zi8_min_m-01 { z-index: 8; }
  .zi9_min_m-01 { z-index: 9; }
  .zi10_min_m-01 { z-index: 10; }
  .zi11_min_m-01 { z-index: 11; }
  .zi12_min_m-01 { z-index: 12; }
  .zi13_min_m-01 { z-index: 13; }
  .zi14_min_m-01 { z-index: 14; }
  .zi15_min_m-01 { z-index: 15; }
  .zi16_min_m-01 { z-index: 16; }
  .zi17_min_m-01 { z-index: 17; }
  .zi18_min_m-01 { z-index: 18; }
  .zi19_min_m-01 { z-index: 19; }
  .zi20_min_m-01 { z-index: 20; }
  .zi21_min_m-01 { z-index: 21; }
  .zi22_min_m-01 { z-index: 22; }
  .zi23_min_m-01 { z-index: 23; }
  .zi24_min_m-01 { z-index: 24; }
  .zi25_min_m-01 { z-index: 25; }
  .zi26_min_m-01 { z-index: 26; }
  .zi27_min_m-01 { z-index: 27; }
  .zi28_min_m-01 { z-index: 28; }
  .zi29_min_m-01 { z-index: 29; }
  .zi30_min_m-01 { z-index: 30; }
  .zi31_min_m-01 { z-index: 31; }
  .zi32_min_m-01 { z-index: 32; }
  .zi33_min_m-01 { z-index: 33; }
  .zi34_min_m-01 { z-index: 34; }
  .zi35_min_m-01 { z-index: 35; }
  .zi36_min_m-01 { z-index: 36; }
  .zi37_min_m-01 { z-index: 37; }
  .zi38_min_m-01 { z-index: 38; }
  .zi39_min_m-01 { z-index: 39; }
  .zi40_min_m-01 { z-index: 40; }
  .zi41_min_m-01 { z-index: 41; }
  .zi42_min_m-01 { z-index: 42; }
  .zi43_min_m-01 { z-index: 43; }
  .zi44_min_m-01 { z-index: 44; }
  .zi45_min_m-01 { z-index: 45; }
  .zi46_min_m-01 { z-index: 46; }
  .zi47_min_m-01 { z-index: 47; }
  .zi48_min_m-01 { z-index: 48; }
  .zi49_min_m-01 { z-index: 49; }
  .zi50_min_m-01 { z-index: 50; }
  .fs1_min_m-01 { font-size: 4rem; }
  .fs2_min_m-01 { font-size: 2.5rem; }
  .fs3_min_m-01 { font-size: 1.5rem; }
  .fs4_min_m-01 { font-size: 1.25rem; }
  .fs5_min_m-01 { font-size: 1rem; }
  .fs6_min_m-01 { font-size: 0.9rem; }
  .fs7_min_m-01 { font-size: 0.75rem; }
  .textLeft_min_m-01 { text-align: left; }
  .textCenter_min_m-01 { text-align: center; }
  .textRight_min_m-01 { text-align: right; }
  .textEnd_min_m-01 { text-align: end; }
  .lh1_min_m-01 { line-height: 1; }
  .lh2_min_m-01 { line-height: 1.25; }
  .lh3_min_m-01 { line-height: 1.5; }
  .lh4_min_m-01 { line-height: 1.75; }
  .lh5_min_m-01 { line-height: 2; }
  .lh6_min_m-01 { line-height: 2.25; }
  .lh1px_min_m-01 { line-height: var(--px1); }
  .lh2px_min_m-01 { line-height: var(--px2); }
  .lh3px_min_m-01 { line-height: var(--px3); }
  .lh4px_min_m-01 { line-height: var(--px4); }
  .lh5px_min_m-01 { line-height: var(--px5); }
  .lh6px_min_m-01 { line-height: var(--px6); }
  .lh7px_min_m-01 { line-height: var(--px7); }
  .lh8px_min_m-01 { line-height: var(--px8); }
  .lh9px_min_m-01 { line-height: var(--px9); }
  .lh10px_min_m-01 { line-height: var(--px10); }
  .lh11px_min_m-01 { line-height: var(--px11); }
  .lh12px_min_m-01 { line-height: var(--px12); }
  .lh13px_min_m-01 { line-height: var(--px13); }
  .lh14px_min_m-01 { line-height: var(--px14); }
  .lh15px_min_m-01 { line-height: var(--px15); }
  .lh16px_min_m-01 { line-height: var(--px16); }
  .lh17px_min_m-01 { line-height: var(--px17); }
  .lh18px_min_m-01 { line-height: var(--px18); }
  .lh19px_min_m-01 { line-height: var(--px19); }
  .lh20px_min_m-01 { line-height: var(--px20); }
  .ls1_min_m-01 { letter-spacing: 0.03em; }
  .ls2_min_m-01 { letter-spacing: 0.02em; }
  .ls3_min_m-01 { letter-spacing: 0.015em; }
  .uppercase_min_m-01 { text-transform: uppercase; }
  .lowercase_min_m-01 { text-transform: lowercase; }
  .capitalize_min_m-01 { text-transform: capitalize; }
  .gridRow0_min_m-01 { grid-row: 0; }
  .gridRow1_min_m-01 { grid-row: 1; }
  .gridRow2_min_m-01 { grid-row: 2; }
  .gridRow3_min_m-01 { grid-row: 3; }
  .gridRow4_min_m-01 { grid-row: 4; }
  .gridRow5_min_m-01 { grid-row: 5; }
  .gridRow6_min_m-01 { grid-row: 6; }
  .gridRow7_min_m-01 { grid-row: 7; }
  .gridRow8_min_m-01 { grid-row: 8; }
  .gridRow9_min_m-01 { grid-row: 9; }
  .gridRow10_min_m-01 { grid-row: 10; }
  .gridRow11_min_m-01 { grid-row: 11; }
  .gridRow12_min_m-01 { grid-row: 12; }
  .gridRow0to0_min_m-01 { grid-row: 0 / 0; }
  .gridRow0to1_min_m-01 { grid-row: 0 / 1; }
  .gridRow0to2_min_m-01 { grid-row: 0 / 2; }
  .gridRow0to3_min_m-01 { grid-row: 0 / 3; }
  .gridRow0to4_min_m-01 { grid-row: 0 / 4; }
  .gridRow0to5_min_m-01 { grid-row: 0 / 5; }
  .gridRow0to6_min_m-01 { grid-row: 0 / 6; }
  .gridRow0to7_min_m-01 { grid-row: 0 / 7; }
  .gridRow0to8_min_m-01 { grid-row: 0 / 8; }
  .gridRow0to9_min_m-01 { grid-row: 0 / 9; }
  .gridRow0to10_min_m-01 { grid-row: 0 / 10; }
  .gridRow0to11_min_m-01 { grid-row: 0 / 11; }
  .gridRow0to12_min_m-01 { grid-row: 0 / 12; }
  .gridRow1to0_min_m-01 { grid-row: 1 / 0; }
  .gridRow1to1_min_m-01 { grid-row: 1 / 1; }
  .gridRow1to2_min_m-01 { grid-row: 1 / 2; }
  .gridRow1to3_min_m-01 { grid-row: 1 / 3; }
  .gridRow1to4_min_m-01 { grid-row: 1 / 4; }
  .gridRow1to5_min_m-01 { grid-row: 1 / 5; }
  .gridRow1to6_min_m-01 { grid-row: 1 / 6; }
  .gridRow1to7_min_m-01 { grid-row: 1 / 7; }
  .gridRow1to8_min_m-01 { grid-row: 1 / 8; }
  .gridRow1to9_min_m-01 { grid-row: 1 / 9; }
  .gridRow1to10_min_m-01 { grid-row: 1 / 10; }
  .gridRow1to11_min_m-01 { grid-row: 1 / 11; }
  .gridRow1to12_min_m-01 { grid-row: 1 / 12; }
  .gridRow2to0_min_m-01 { grid-row: 2 / 0; }
  .gridRow2to1_min_m-01 { grid-row: 2 / 1; }
  .gridRow2to2_min_m-01 { grid-row: 2 / 2; }
  .gridRow2to3_min_m-01 { grid-row: 2 / 3; }
  .gridRow2to4_min_m-01 { grid-row: 2 / 4; }
  .gridRow2to5_min_m-01 { grid-row: 2 / 5; }
  .gridRow2to6_min_m-01 { grid-row: 2 / 6; }
  .gridRow2to7_min_m-01 { grid-row: 2 / 7; }
  .gridRow2to8_min_m-01 { grid-row: 2 / 8; }
  .gridRow2to9_min_m-01 { grid-row: 2 / 9; }
  .gridRow2to10_min_m-01 { grid-row: 2 / 10; }
  .gridRow2to11_min_m-01 { grid-row: 2 / 11; }
  .gridRow2to12_min_m-01 { grid-row: 2 / 12; }
  .gridRow3to0_min_m-01 { grid-row: 3 / 0; }
  .gridRow3to1_min_m-01 { grid-row: 3 / 1; }
  .gridRow3to2_min_m-01 { grid-row: 3 / 2; }
  .gridRow3to3_min_m-01 { grid-row: 3 / 3; }
  .gridRow3to4_min_m-01 { grid-row: 3 / 4; }
  .gridRow3to5_min_m-01 { grid-row: 3 / 5; }
  .gridRow3to6_min_m-01 { grid-row: 3 / 6; }
  .gridRow3to7_min_m-01 { grid-row: 3 / 7; }
  .gridRow3to8_min_m-01 { grid-row: 3 / 8; }
  .gridRow3to9_min_m-01 { grid-row: 3 / 9; }
  .gridRow3to10_min_m-01 { grid-row: 3 / 10; }
  .gridRow3to11_min_m-01 { grid-row: 3 / 11; }
  .gridRow3to12_min_m-01 { grid-row: 3 / 12; }
  .gridRow4to0_min_m-01 { grid-row: 4 / 0; }
  .gridRow4to1_min_m-01 { grid-row: 4 / 1; }
  .gridRow4to2_min_m-01 { grid-row: 4 / 2; }
  .gridRow4to3_min_m-01 { grid-row: 4 / 3; }
  .gridRow4to4_min_m-01 { grid-row: 4 / 4; }
  .gridRow4to5_min_m-01 { grid-row: 4 / 5; }
  .gridRow4to6_min_m-01 { grid-row: 4 / 6; }
  .gridRow4to7_min_m-01 { grid-row: 4 / 7; }
  .gridRow4to8_min_m-01 { grid-row: 4 / 8; }
  .gridRow4to9_min_m-01 { grid-row: 4 / 9; }
  .gridRow4to10_min_m-01 { grid-row: 4 / 10; }
  .gridRow4to11_min_m-01 { grid-row: 4 / 11; }
  .gridRow4to12_min_m-01 { grid-row: 4 / 12; }
  .gridRow5to0_min_m-01 { grid-row: 5 / 0; }
  .gridRow5to1_min_m-01 { grid-row: 5 / 1; }
  .gridRow5to2_min_m-01 { grid-row: 5 / 2; }
  .gridRow5to3_min_m-01 { grid-row: 5 / 3; }
  .gridRow5to4_min_m-01 { grid-row: 5 / 4; }
  .gridRow5to5_min_m-01 { grid-row: 5 / 5; }
  .gridRow5to6_min_m-01 { grid-row: 5 / 6; }
  .gridRow5to7_min_m-01 { grid-row: 5 / 7; }
  .gridRow5to8_min_m-01 { grid-row: 5 / 8; }
  .gridRow5to9_min_m-01 { grid-row: 5 / 9; }
  .gridRow5to10_min_m-01 { grid-row: 5 / 10; }
  .gridRow5to11_min_m-01 { grid-row: 5 / 11; }
  .gridRow5to12_min_m-01 { grid-row: 5 / 12; }
  .gridRow6to0_min_m-01 { grid-row: 6 / 0; }
  .gridRow6to1_min_m-01 { grid-row: 6 / 1; }
  .gridRow6to2_min_m-01 { grid-row: 6 / 2; }
  .gridRow6to3_min_m-01 { grid-row: 6 / 3; }
  .gridRow6to4_min_m-01 { grid-row: 6 / 4; }
  .gridRow6to5_min_m-01 { grid-row: 6 / 5; }
  .gridRow6to6_min_m-01 { grid-row: 6 / 6; }
  .gridRow6to7_min_m-01 { grid-row: 6 / 7; }
  .gridRow6to8_min_m-01 { grid-row: 6 / 8; }
  .gridRow6to9_min_m-01 { grid-row: 6 / 9; }
  .gridRow6to10_min_m-01 { grid-row: 6 / 10; }
  .gridRow6to11_min_m-01 { grid-row: 6 / 11; }
  .gridRow6to12_min_m-01 { grid-row: 6 / 12; }
  .gridRow7to0_min_m-01 { grid-row: 7 / 0; }
  .gridRow7to1_min_m-01 { grid-row: 7 / 1; }
  .gridRow7to2_min_m-01 { grid-row: 7 / 2; }
  .gridRow7to3_min_m-01 { grid-row: 7 / 3; }
  .gridRow7to4_min_m-01 { grid-row: 7 / 4; }
  .gridRow7to5_min_m-01 { grid-row: 7 / 5; }
  .gridRow7to6_min_m-01 { grid-row: 7 / 6; }
  .gridRow7to7_min_m-01 { grid-row: 7 / 7; }
  .gridRow7to8_min_m-01 { grid-row: 7 / 8; }
  .gridRow7to9_min_m-01 { grid-row: 7 / 9; }
  .gridRow7to10_min_m-01 { grid-row: 7 / 10; }
  .gridRow7to11_min_m-01 { grid-row: 7 / 11; }
  .gridRow7to12_min_m-01 { grid-row: 7 / 12; }
  .gridRow8to0_min_m-01 { grid-row: 8 / 0; }
  .gridRow8to1_min_m-01 { grid-row: 8 / 1; }
  .gridRow8to2_min_m-01 { grid-row: 8 / 2; }
  .gridRow8to3_min_m-01 { grid-row: 8 / 3; }
  .gridRow8to4_min_m-01 { grid-row: 8 / 4; }
  .gridRow8to5_min_m-01 { grid-row: 8 / 5; }
  .gridRow8to6_min_m-01 { grid-row: 8 / 6; }
  .gridRow8to7_min_m-01 { grid-row: 8 / 7; }
  .gridRow8to8_min_m-01 { grid-row: 8 / 8; }
  .gridRow8to9_min_m-01 { grid-row: 8 / 9; }
  .gridRow8to10_min_m-01 { grid-row: 8 / 10; }
  .gridRow8to11_min_m-01 { grid-row: 8 / 11; }
  .gridRow8to12_min_m-01 { grid-row: 8 / 12; }
  .gridRow9to0_min_m-01 { grid-row: 9 / 0; }
  .gridRow9to1_min_m-01 { grid-row: 9 / 1; }
  .gridRow9to2_min_m-01 { grid-row: 9 / 2; }
  .gridRow9to3_min_m-01 { grid-row: 9 / 3; }
  .gridRow9to4_min_m-01 { grid-row: 9 / 4; }
  .gridRow9to5_min_m-01 { grid-row: 9 / 5; }
  .gridRow9to6_min_m-01 { grid-row: 9 / 6; }
  .gridRow9to7_min_m-01 { grid-row: 9 / 7; }
  .gridRow9to8_min_m-01 { grid-row: 9 / 8; }
  .gridRow9to9_min_m-01 { grid-row: 9 / 9; }
  .gridRow9to10_min_m-01 { grid-row: 9 / 10; }
  .gridRow9to11_min_m-01 { grid-row: 9 / 11; }
  .gridRow9to12_min_m-01 { grid-row: 9 / 12; }
  .gridRow10to0_min_m-01 { grid-row: 10 / 0; }
  .gridRow10to1_min_m-01 { grid-row: 10 / 1; }
  .gridRow10to2_min_m-01 { grid-row: 10 / 2; }
  .gridRow10to3_min_m-01 { grid-row: 10 / 3; }
  .gridRow10to4_min_m-01 { grid-row: 10 / 4; }
  .gridRow10to5_min_m-01 { grid-row: 10 / 5; }
  .gridRow10to6_min_m-01 { grid-row: 10 / 6; }
  .gridRow10to7_min_m-01 { grid-row: 10 / 7; }
  .gridRow10to8_min_m-01 { grid-row: 10 / 8; }
  .gridRow10to9_min_m-01 { grid-row: 10 / 9; }
  .gridRow10to10_min_m-01 { grid-row: 10 / 10; }
  .gridRow10to11_min_m-01 { grid-row: 10 / 11; }
  .gridRow10to12_min_m-01 { grid-row: 10 / 12; }
  .gridRow11to0_min_m-01 { grid-row: 11 / 0; }
  .gridRow11to1_min_m-01 { grid-row: 11 / 1; }
  .gridRow11to2_min_m-01 { grid-row: 11 / 2; }
  .gridRow11to3_min_m-01 { grid-row: 11 / 3; }
  .gridRow11to4_min_m-01 { grid-row: 11 / 4; }
  .gridRow11to5_min_m-01 { grid-row: 11 / 5; }
  .gridRow11to6_min_m-01 { grid-row: 11 / 6; }
  .gridRow11to7_min_m-01 { grid-row: 11 / 7; }
  .gridRow11to8_min_m-01 { grid-row: 11 / 8; }
  .gridRow11to9_min_m-01 { grid-row: 11 / 9; }
  .gridRow11to10_min_m-01 { grid-row: 11 / 10; }
  .gridRow11to11_min_m-01 { grid-row: 11 / 11; }
  .gridRow11to12_min_m-01 { grid-row: 11 / 12; }
  .gridRow12to0_min_m-01 { grid-row: 12 / 0; }
  .gridRow12to1_min_m-01 { grid-row: 12 / 1; }
  .gridRow12to2_min_m-01 { grid-row: 12 / 2; }
  .gridRow12to3_min_m-01 { grid-row: 12 / 3; }
  .gridRow12to4_min_m-01 { grid-row: 12 / 4; }
  .gridRow12to5_min_m-01 { grid-row: 12 / 5; }
  .gridRow12to6_min_m-01 { grid-row: 12 / 6; }
  .gridRow12to7_min_m-01 { grid-row: 12 / 7; }
  .gridRow12to8_min_m-01 { grid-row: 12 / 8; }
  .gridRow12to9_min_m-01 { grid-row: 12 / 9; }
  .gridRow12to10_min_m-01 { grid-row: 12 / 10; }
  .gridRow12to11_min_m-01 { grid-row: 12 / 11; }
  .gridRow12to12_min_m-01 { grid-row: 12 / 12; }
  .gridRowSpan0_min_m-01 { grid-row: auto / span 0; }
  .gridRowSpan1_min_m-01 { grid-row: auto / span 1; }
  .gridRowSpan2_min_m-01 { grid-row: auto / span 2; }
  .gridRowSpan3_min_m-01 { grid-row: auto / span 3; }
  .gridRowSpan4_min_m-01 { grid-row: auto / span 4; }
  .gridRowSpan5_min_m-01 { grid-row: auto / span 5; }
  .gridRowSpan6_min_m-01 { grid-row: auto / span 6; }
  .gridRowSpan7_min_m-01 { grid-row: auto / span 7; }
  .gridRowSpan8_min_m-01 { grid-row: auto / span 8; }
  .gridRowSpan9_min_m-01 { grid-row: auto / span 9; }
  .gridRowSpan10_min_m-01 { grid-row: auto / span 10; }
  .gridColumn0_min_m-01 { grid-column: 0; }
  .gridColumn1_min_m-01 { grid-column: 1; }
  .gridColumn2_min_m-01 { grid-column: 2; }
  .gridColumn3_min_m-01 { grid-column: 3; }
  .gridColumn4_min_m-01 { grid-column: 4; }
  .gridColumn5_min_m-01 { grid-column: 5; }
  .gridColumn6_min_m-01 { grid-column: 6; }
  .gridColumn7_min_m-01 { grid-column: 7; }
  .gridColumn8_min_m-01 { grid-column: 8; }
  .gridColumn9_min_m-01 { grid-column: 9; }
  .gridColumn10_min_m-01 { grid-column: 10; }
  .gridColumn11_min_m-01 { grid-column: 11; }
  .gridColumn12_min_m-01 { grid-column: 12; }
  .gridColumn0to0_min_m-01 { grid-column: 0 / 0; }
  .gridColumn0to1_min_m-01 { grid-column: 0 / 1; }
  .gridColumn0to2_min_m-01 { grid-column: 0 / 2; }
  .gridColumn0to3_min_m-01 { grid-column: 0 / 3; }
  .gridColumn0to4_min_m-01 { grid-column: 0 / 4; }
  .gridColumn0to5_min_m-01 { grid-column: 0 / 5; }
  .gridColumn0to6_min_m-01 { grid-column: 0 / 6; }
  .gridColumn0to7_min_m-01 { grid-column: 0 / 7; }
  .gridColumn0to8_min_m-01 { grid-column: 0 / 8; }
  .gridColumn0to9_min_m-01 { grid-column: 0 / 9; }
  .gridColumn0to10_min_m-01 { grid-column: 0 / 10; }
  .gridColumn0to11_min_m-01 { grid-column: 0 / 11; }
  .gridColumn0to12_min_m-01 { grid-column: 0 / 12; }
  .gridColumn1to0_min_m-01 { grid-column: 1 / 0; }
  .gridColumn1to1_min_m-01 { grid-column: 1 / 1; }
  .gridColumn1to2_min_m-01 { grid-column: 1 / 2; }
  .gridColumn1to3_min_m-01 { grid-column: 1 / 3; }
  .gridColumn1to4_min_m-01 { grid-column: 1 / 4; }
  .gridColumn1to5_min_m-01 { grid-column: 1 / 5; }
  .gridColumn1to6_min_m-01 { grid-column: 1 / 6; }
  .gridColumn1to7_min_m-01 { grid-column: 1 / 7; }
  .gridColumn1to8_min_m-01 { grid-column: 1 / 8; }
  .gridColumn1to9_min_m-01 { grid-column: 1 / 9; }
  .gridColumn1to10_min_m-01 { grid-column: 1 / 10; }
  .gridColumn1to11_min_m-01 { grid-column: 1 / 11; }
  .gridColumn1to12_min_m-01 { grid-column: 1 / 12; }
  .gridColumn2to0_min_m-01 { grid-column: 2 / 0; }
  .gridColumn2to1_min_m-01 { grid-column: 2 / 1; }
  .gridColumn2to2_min_m-01 { grid-column: 2 / 2; }
  .gridColumn2to3_min_m-01 { grid-column: 2 / 3; }
  .gridColumn2to4_min_m-01 { grid-column: 2 / 4; }
  .gridColumn2to5_min_m-01 { grid-column: 2 / 5; }
  .gridColumn2to6_min_m-01 { grid-column: 2 / 6; }
  .gridColumn2to7_min_m-01 { grid-column: 2 / 7; }
  .gridColumn2to8_min_m-01 { grid-column: 2 / 8; }
  .gridColumn2to9_min_m-01 { grid-column: 2 / 9; }
  .gridColumn2to10_min_m-01 { grid-column: 2 / 10; }
  .gridColumn2to11_min_m-01 { grid-column: 2 / 11; }
  .gridColumn2to12_min_m-01 { grid-column: 2 / 12; }
  .gridColumn3to0_min_m-01 { grid-column: 3 / 0; }
  .gridColumn3to1_min_m-01 { grid-column: 3 / 1; }
  .gridColumn3to2_min_m-01 { grid-column: 3 / 2; }
  .gridColumn3to3_min_m-01 { grid-column: 3 / 3; }
  .gridColumn3to4_min_m-01 { grid-column: 3 / 4; }
  .gridColumn3to5_min_m-01 { grid-column: 3 / 5; }
  .gridColumn3to6_min_m-01 { grid-column: 3 / 6; }
  .gridColumn3to7_min_m-01 { grid-column: 3 / 7; }
  .gridColumn3to8_min_m-01 { grid-column: 3 / 8; }
  .gridColumn3to9_min_m-01 { grid-column: 3 / 9; }
  .gridColumn3to10_min_m-01 { grid-column: 3 / 10; }
  .gridColumn3to11_min_m-01 { grid-column: 3 / 11; }
  .gridColumn3to12_min_m-01 { grid-column: 3 / 12; }
  .gridColumn4to0_min_m-01 { grid-column: 4 / 0; }
  .gridColumn4to1_min_m-01 { grid-column: 4 / 1; }
  .gridColumn4to2_min_m-01 { grid-column: 4 / 2; }
  .gridColumn4to3_min_m-01 { grid-column: 4 / 3; }
  .gridColumn4to4_min_m-01 { grid-column: 4 / 4; }
  .gridColumn4to5_min_m-01 { grid-column: 4 / 5; }
  .gridColumn4to6_min_m-01 { grid-column: 4 / 6; }
  .gridColumn4to7_min_m-01 { grid-column: 4 / 7; }
  .gridColumn4to8_min_m-01 { grid-column: 4 / 8; }
  .gridColumn4to9_min_m-01 { grid-column: 4 / 9; }
  .gridColumn4to10_min_m-01 { grid-column: 4 / 10; }
  .gridColumn4to11_min_m-01 { grid-column: 4 / 11; }
  .gridColumn4to12_min_m-01 { grid-column: 4 / 12; }
  .gridColumn5to0_min_m-01 { grid-column: 5 / 0; }
  .gridColumn5to1_min_m-01 { grid-column: 5 / 1; }
  .gridColumn5to2_min_m-01 { grid-column: 5 / 2; }
  .gridColumn5to3_min_m-01 { grid-column: 5 / 3; }
  .gridColumn5to4_min_m-01 { grid-column: 5 / 4; }
  .gridColumn5to5_min_m-01 { grid-column: 5 / 5; }
  .gridColumn5to6_min_m-01 { grid-column: 5 / 6; }
  .gridColumn5to7_min_m-01 { grid-column: 5 / 7; }
  .gridColumn5to8_min_m-01 { grid-column: 5 / 8; }
  .gridColumn5to9_min_m-01 { grid-column: 5 / 9; }
  .gridColumn5to10_min_m-01 { grid-column: 5 / 10; }
  .gridColumn5to11_min_m-01 { grid-column: 5 / 11; }
  .gridColumn5to12_min_m-01 { grid-column: 5 / 12; }
  .gridColumn6to0_min_m-01 { grid-column: 6 / 0; }
  .gridColumn6to1_min_m-01 { grid-column: 6 / 1; }
  .gridColumn6to2_min_m-01 { grid-column: 6 / 2; }
  .gridColumn6to3_min_m-01 { grid-column: 6 / 3; }
  .gridColumn6to4_min_m-01 { grid-column: 6 / 4; }
  .gridColumn6to5_min_m-01 { grid-column: 6 / 5; }
  .gridColumn6to6_min_m-01 { grid-column: 6 / 6; }
  .gridColumn6to7_min_m-01 { grid-column: 6 / 7; }
  .gridColumn6to8_min_m-01 { grid-column: 6 / 8; }
  .gridColumn6to9_min_m-01 { grid-column: 6 / 9; }
  .gridColumn6to10_min_m-01 { grid-column: 6 / 10; }
  .gridColumn6to11_min_m-01 { grid-column: 6 / 11; }
  .gridColumn6to12_min_m-01 { grid-column: 6 / 12; }
  .gridColumn7to0_min_m-01 { grid-column: 7 / 0; }
  .gridColumn7to1_min_m-01 { grid-column: 7 / 1; }
  .gridColumn7to2_min_m-01 { grid-column: 7 / 2; }
  .gridColumn7to3_min_m-01 { grid-column: 7 / 3; }
  .gridColumn7to4_min_m-01 { grid-column: 7 / 4; }
  .gridColumn7to5_min_m-01 { grid-column: 7 / 5; }
  .gridColumn7to6_min_m-01 { grid-column: 7 / 6; }
  .gridColumn7to7_min_m-01 { grid-column: 7 / 7; }
  .gridColumn7to8_min_m-01 { grid-column: 7 / 8; }
  .gridColumn7to9_min_m-01 { grid-column: 7 / 9; }
  .gridColumn7to10_min_m-01 { grid-column: 7 / 10; }
  .gridColumn7to11_min_m-01 { grid-column: 7 / 11; }
  .gridColumn7to12_min_m-01 { grid-column: 7 / 12; }
  .gridColumn8to0_min_m-01 { grid-column: 8 / 0; }
  .gridColumn8to1_min_m-01 { grid-column: 8 / 1; }
  .gridColumn8to2_min_m-01 { grid-column: 8 / 2; }
  .gridColumn8to3_min_m-01 { grid-column: 8 / 3; }
  .gridColumn8to4_min_m-01 { grid-column: 8 / 4; }
  .gridColumn8to5_min_m-01 { grid-column: 8 / 5; }
  .gridColumn8to6_min_m-01 { grid-column: 8 / 6; }
  .gridColumn8to7_min_m-01 { grid-column: 8 / 7; }
  .gridColumn8to8_min_m-01 { grid-column: 8 / 8; }
  .gridColumn8to9_min_m-01 { grid-column: 8 / 9; }
  .gridColumn8to10_min_m-01 { grid-column: 8 / 10; }
  .gridColumn8to11_min_m-01 { grid-column: 8 / 11; }
  .gridColumn8to12_min_m-01 { grid-column: 8 / 12; }
  .gridColumn9to0_min_m-01 { grid-column: 9 / 0; }
  .gridColumn9to1_min_m-01 { grid-column: 9 / 1; }
  `