const PROFIL_BODY = `
<div id="root">
    <div style="outline: none;" tabindex="-1">
        <div class="navbarGradient-01 noEvent-01 h12px-01 fixed-01 w100p-01 zi9-01 t0-01 l0-01"></div>
        <nav data-test="navBar" class="fixed-01 w100p-01 alignCenter-01 h5-01 t0-01 l0-01 zi9-01">
            <div class="ml6-01 mr8-01 alignCenter-01">
                <a id="link-profile" style="height: 35px; outline: white;">
                    <img alt="logo" src="assets/img/logo.png" class="pointer-01 h100p-01">
                </a>
            </div>
            <ul class="ma0-01 pl0-01 ml6-01 alignCenter-01 justifyBetween-01 hidden_m-01 ellipsis-01">
                <div class="bbTransparent-01 animate-01 purple-01 hoverPurple-01 hoverBorderPurple-01">
                    <li id="btn-profile" class="fs6-01 pointer-01 ellipsis-01 animate-01 hoverNeutral-01 fMono-01 fs5-01 uppercase-01 textMinimal-01">profile</li>
                </div>
            </ul>
            <div class="mlAuto-01 mr6-01">
                <div class="alignCenter-01">
                    <button id="logOut" class="focusStrokePurple-01">
                        <div class="alignCenter-01 hoverStrokePurple-01 ml4-01 pointer-01">
                            <svg role="img" width="19px" viewBox="0 0 130 130" aria-label="icon">
                                <path style="transition: stroke 0.2s ease-out, opacity 0.2s ease-out;" fill="none" stroke="var(--neutral)" stroke-width="7px" d="M85 21.81a51.5 51.5 0 1 1-39.4-.34M64.5 10v51.66"></path>
                            </svg>
                        </div>
                    </button>
                </div>
            </div>
        </nav>
        <div id="main-section" style="outline: none;" tabindex="-1">
            <div style="max-width: 2000px; margin: 0px auto;">
                <div style="z-index: -1; background: url(&quot;/assets/img/01-trame.svg&quot;) center center / cover;" class="fixed-01 w100vw-01 o15-01 h100vh-01 t0-01 l0-01"></div>
                <div id="container-sections" class="mt10-01 w100p-01 pv11-01 ph12-01 pv7_s-01 ph9_s-01">
                    <div class="alignStart_s-01 alignCenter-01 justifyBetween-01 mb4-01">
                        <h1 data-test="Ismael Mazlin-welcome" class="fMono-01 fs1-01 light-01 alignCenter-01">Welcome, Ismael Mazlin!</h1>
                    </div>
                    <div class="ongoingBanner-01 hoverShadow-01 animate-01 ph3-01 pv2-01 bt-01 bh-01 borderNeutral-01 w100p-01 alignEnd-01 justifyBetween-01 flexColumn_xs-01 alignStart_xs-01 bb-01">
                        <div class="alignBaseline-01 flexWrap-01 flexColumn_s-01 mb4_xs-01">
                            <div class="fs4-01 mr5-01">Graphs</div>
                            <div class="textMinimal-01 mt2_s-01 mr5-01 mr0_xs-01">Check your skills and audit ratio</div>
                        </div>
                        <a id="btn-goto-graphs" class="animate-01 pointer-01 fMono-01 regular-01 fs7-01 ls1-01 alignCenter-01 hoverStrokePurple-01 selfEnd_s-01 uppercase-01">
                            <div class="alignCenter-01 mr1-01">
                                <svg role="img" width="14px" viewBox="0 0 130 130" aria-label="icon">
                                    <path fill="none" stroke="var(--purple)" stroke-width="10" d="M73 18l48 47-48 48M6 65h114"></path>
                                </svg>
                            </div>
                            <div class="bbTransparent-01 animate-01 purple-01 hoverPurple-01 hoverBorderPurple-01">Go to Graphs</div>
                        </a>
                    </div>
                    <div class="grid-01 mt8-01 mt6_xs-01 w100p-01">
                        <div class="bgGreyHighlighted-01 gridRowSpan4_xs-01 gridRowSpan2-01">
                            <div class="alt-theme pv5-01 ph6-01 textMinimal-01 relative-01 aShadow-01 flexColumn-01 justifyBetween-01 alignCenter-01 w100p-01 h100p-01">
                                <div class="fs4-01 textCenter-01 flex-01 flexColumn-01 alignCenter-01">
                                    <div class="textMinimal-01 fs7-01 fMono-01 mb1-01"></div>
                                    <div class="textNeutral-01 mb2-01">Current rank</div>
                                    <div class="textMinimal-01 bt-01 fs7-01 fMono-01 borderNeutral-01 pt2-01 textCenter-01"></div>
                                    <a href="https://zone01normandie.org/intra/rouen/profile/ranks?event=216" class="animate-01 pointer-01 fMono-01 regular-01 fs7-01 ls1-01 alignCenter-01 hoverStrokePurple-01 mt2-01">
                                        <div class="bbTransparent-01 animate-01 purple-01 hoverPurple-01 hoverBorderPurple-01"></div>
                                    </a>
                                </div>
                                <div class="textNeutral-01 relative-01 alignCenter-01 justifyCenter-01 w100p-01 maxW18px-01">
                                    <svg class="levelGraphDots-01" viewBox="0 0 100 100">
                                        <title>level graph progress</title>
                                        <circle cx="50" cy="50" r="35" fill="none" stroke="none"></circle>
                                        <svg width="6" height="6" x="82" y="47" viewBox="0 0 100 100">
                                            <title>dot</title>
                                            <circle style="box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 15px;" fill="var(--purple)" r="10" cx="50%" cy="50%"></circle>
                                        </svg>
                                        <svg width="6" height="6" x="81.56909192082982" y="52.47520627640808" viewBox="0 0 100 100">
                                            <title>dot</title>
                                            <circle style="box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 15px;" fill="var(--purple)" r="10" cx="50%" cy="50%"></circle>
                                        </svg>
                                        <svg width="6" height="6" x="80.28697807033038" y="57.81559480312316" viewBox="0 0 100 100">
                                            <title>dot</title>
                                            <circle style="box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 15px;" fill="var(--purple)" r="10" cx="50%" cy="50%"></circle>
                                        </svg>
                                        <svg width="6" height="6" x="78.18522834659288" y="62.889667490884136" viewBox="0 0 100 100">
                                            <title>dot</title>
                                            <circle style="box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 15px;" fill="var(--purple)" r="10" cx="50%" cy="50%"></circle>
                                        </svg>
                                        <svg width="6" height="6" x="75.31559480312316" y="67.57248383023656" viewBox="0 0 100 100">
                                            <title>dot</title>
                                            <circle style="box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 15px;" fill="var(--purple)" r="10" cx="50%" cy="50%"></circle>
                                        </svg>
                                        <svg width="6" height="6" x="71.74873734152916" y="71.74873734152916" viewBox="0 0 100 100">
                                            <title>dot</title>
                                            <circle style="box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 15px;" fill="var(--purple)" r="10" cx="50%" cy="50%"></circle>
                                        </svg>
                                        <svg width="6" height="6" x="67.57248383023656" y="75.31559480312316" viewBox="0 0 100 100">
                                            <title>dot</title>
                                            <circle style="box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 15px;" fill="var(--purple)" r="10" cx="50%" cy="50%"></circle>
                                        </svg>
                                        <svg width="6" height="6" x="62.889667490884136" y="78.18522834659288" viewBox="0 0 100 100">
                                            <title>dot</title>
                                            <circle style="box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 15px;" fill="var(--purple)" r="10" cx="50%" cy="50%"></circle>
                                        </svg>
                                        <svg width="6" height="6" x="57.81559480312316" y="80.28697807033038" viewBox="0 0 100 100">
                                            <title>dot</title>
                                            <circle style="box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 15px;" fill="var(--purple)" r="10" cx="50%" cy="50%"></circle>
                                        </svg>
                                        <svg width="6" height="6" x="52.47520627640808" y="81.56909192082982" viewBox="0 0 100 100">
                                            <title>dot</title>
                                            <circle style="box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 15px;" fill="var(--purple)" r="10" cx="50%" cy="50%"></circle>
                                        </svg>
                                        <svg width="6" height="6" x="47" y="82" viewBox="0 0 100 100">
                                            <title>dot</title>
                                            <circle style="box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 15px;" fill="var(--purple)" r="10" cx="50%" cy="50%"></circle>
                                        </svg>
                                        <svg width="6" height="6" x="41.52479372359192" y="81.56909192082982" viewBox="0 0 100 100">
                                            <title>dot</title>
                                            <circle style="box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 15px;" fill="var(--purple)" r="10" cx="50%" cy="50%"></circle>
                                        </svg>
                                        <svg width="6" height="6" x="36.184405196876845" y="80.28697807033038" viewBox="0 0 100 100">
                                            <title>dot</title>
                                            <circle style="box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 15px;" fill="var(--purple)" r="10" cx="50%" cy="50%"></circle>
                                        </svg>
                                        <svg width="6" height="6" x="31.110332509115864" y="78.18522834659288" viewBox="0 0 100 100">
                                            <title>dot</title>
                                            <circle style="box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 15px;" fill="var(--purple)" r="10" cx="50%" cy="50%"></circle>
                                        </svg>
                                        <svg width="6" height="6" x="26.427516169763443" y="75.31559480312316" viewBox="0 0 100 100">
                                            <title>dot</title>
                                            <circle style="box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 15px;" fill="var(--purple)" r="10" cx="50%" cy="50%"></circle>
                                        </svg>
                                        <svg width="6" height="6" x="22.25126265847084" y="71.74873734152916" viewBox="0 0 100 100">
                                            <title>dot</title>
                                            <circle style="box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 15px;" fill="var(--purple)" r="10" cx="50%" cy="50%"></circle>
                                        </svg>
                                        <svg width="6" height="6" x="18.684405196876842" y="67.57248383023656" viewBox="0 0 100 100">
                                            <title>dot</title>
                                            <circle style="box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 15px;" fill="var(--purple)" r="10" cx="50%" cy="50%"></circle>
                                        </svg>
                                        <svg width="6" height="6" x="15.814771653407128" y="62.889667490884136" viewBox="0 0 100 100">
                                            <title>dot</title>
                                            <circle style="box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 15px;" fill="var(--purple)" r="10" cx="50%" cy="50%"></circle>
                                        </svg>
                                        <svg width="6" height="6" x="13.71302192966963" y="57.81559480312316" viewBox="0 0 100 100">
                                            <title>dot</title>
                                            <circle style="box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 15px;" fill="var(--purple)" r="10" cx="50%" cy="50%"></circle>
                                        </svg>
                                        <svg width="6" height="6" x="12.43090807917018" y="52.47520627640809" viewBox="0 0 100 100">
                                            <title>dot</title>
                                            <circle style="box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 15px;" fill="var(--purple)" r="10" cx="50%" cy="50%"></circle>
                                        </svg>
                                        <svg width="6" height="6" x="12" y="47.00000000000001" viewBox="0 0 100 100">
                                            <title>dot</title>
                                            <circle style="box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 15px;" fill="var(--purple)" r="10" cx="50%" cy="50%"></circle>
                                        </svg>
                                        <svg width="6" height="6" x="12.43090807917018" y="41.52479372359193" viewBox="0 0 100 100">
                                            <title>dot</title>
                                            <circle style="box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 15px;" fill="var(--purple)" r="10" cx="50%" cy="50%"></circle>
                                        </svg>
                                        <svg width="6" height="6" x="13.713021929669623" y="36.184405196876845" viewBox="0 0 100 100">
                                            <title>dot</title>
                                            <circle style="box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 15px;" fill="var(--purple)" r="10" cx="50%" cy="50%"></circle>
                                        </svg>
                                        <svg width="6" height="6" x="15.814771653407124" y="31.110332509115864" viewBox="0 0 100 100">
                                            <title>dot</title>
                                            <circle style="box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 15px;" fill="var(--neutral)" r="5" cx="50%" cy="50%"></circle>
                                        </svg>
                                        <svg width="6" height="6" x="18.68440519687684" y="26.427516169763443" viewBox="0 0 100 100">
                                            <title>dot</title>
                                            <circle style="box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 15px;" fill="var(--neutral)" r="5" cx="50%" cy="50%"></circle>
                                        </svg>
                                        <svg width="6" height="6" x="22.251262658470832" y="22.25126265847084" viewBox="0 0 100 100">
                                            <title>dot</title>
                                            <circle style="box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 15px;" fill="var(--neutral)" r="5" cx="50%" cy="50%"></circle>
                                        </svg>
                                        <svg width="6" height="6" x="26.427516169763436" y="18.684405196876842" viewBox="0 0 100 100">
                                            <title>dot</title>
                                            <circle style="box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 15px;" fill="var(--neutral)" r="5" cx="50%" cy="50%"></circle>
                                        </svg>
                                        <svg width="6" height="6" x="31.110332509115857" y="15.814771653407128" viewBox="0 0 100 100">
                                            <title>dot</title>
                                            <circle style="box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 15px;" fill="var(--neutral)" r="5" cx="50%" cy="50%"></circle>
                                        </svg>
                                        <svg width="6" height="6" x="36.18440519687684" y="13.71302192966963" viewBox="0 0 100 100">
                                            <title>dot</title>
                                            <circle style="box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 15px;" fill="var(--neutral)" r="5" cx="50%" cy="50%"></circle>
                                        </svg>
                                        <svg width="6" height="6" x="41.52479372359191" y="12.43090807917018" viewBox="0 0 100 100">
                                            <title>dot</title>
                                            <circle style="box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 15px;" fill="var(--neutral)" r="5" cx="50%" cy="50%"></circle>
                                        </svg>
                                        <svg width="6" height="6" x="46.99999999999999" y="12" viewBox="0 0 100 100">
                                            <title>dot</title>
                                            <circle style="box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 15px;" fill="var(--neutral)" r="5" cx="50%" cy="50%"></circle>
                                        </svg>
                                        <svg width="6" height="6" x="52.47520627640807" y="12.43090807917018" viewBox="0 0 100 100">
                                            <title>dot</title>
                                            <circle style="box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 15px;" fill="var(--neutral)" r="5" cx="50%" cy="50%"></circle>
                                        </svg>
                                        <svg width="6" height="6" x="57.815594803123155" y="13.713021929669623" viewBox="0 0 100 100">
                                            <title>dot</title>
                                            <circle style="box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 15px;" fill="var(--neutral)" r="5" cx="50%" cy="50%"></circle>
                                        </svg>
                                        <svg width="6" height="6" x="62.889667490884136" y="15.81477165340712" viewBox="0 0 100 100">
                                            <title>dot</title>
                                            <circle style="box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 15px;" fill="var(--neutral)" r="5" cx="50%" cy="50%"></circle>
                                        </svg>
                                        <svg width="6" height="6" x="67.57248383023655" y="18.684405196876835" viewBox="0 0 100 100">
                                            <title>dot</title>
                                            <circle style="box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 15px;" fill="var(--neutral)" r="5" cx="50%" cy="50%"></circle>
                                        </svg>
                                        <svg width="6" height="6" x="71.74873734152916" y="22.251262658470832" viewBox="0 0 100 100">
                                            <title>dot</title>
                                            <circle style="box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 15px;" fill="var(--neutral)" r="5" cx="50%" cy="50%"></circle>
                                        </svg>
                                        <svg width="6" height="6" x="75.31559480312316" y="26.427516169763432" viewBox="0 0 100 100">
                                            <title>dot</title>
                                            <circle style="box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 15px;" fill="var(--neutral)" r="5" cx="50%" cy="50%"></circle>
                                        </svg>
                                        <svg width="6" height="6" x="78.18522834659288" y="31.110332509115857" viewBox="0 0 100 100">
                                            <title>dot</title>
                                            <circle style="box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 15px;" fill="var(--neutral)" r="5" cx="50%" cy="50%"></circle>
                                        </svg>
                                        <svg width="6" height="6" x="80.28697807033038" y="36.18440519687683" viewBox="0 0 100 100">
                                            <title>dot</title>
                                            <circle style="box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 15px;" fill="var(--neutral)" r="5" cx="50%" cy="50%"></circle>
                                        </svg>
                                        <svg width="6" height="6" x="81.56909192082982" y="41.52479372359191" viewBox="0 0 100 100">
                                            <title>dot</title>
                                            <circle style="box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 15px;" fill="var(--neutral)" r="5" cx="50%" cy="50%"></circle>
                                        </svg>
                                    </svg>
                                    <svg viewBox="0 0 100 100" class="levelCircle-01">
                                        <title>circle</title>
                                        <circle class="dark-theme" cx="50" cy="50" r="29" fill="var(--greyHighlighted)"></circle>
                                    </svg>
                                    <div class="alt-theme fMono-01 fs2-01 absolute-01 alignCenter-01 textNeutral-01 justifyCenter-01 flexColumn-01">
                                        <div class="fs7-01">Level</div>
                                        <div id="user-level"></div>
                                    </div>
                                </div>
                                <div class="w100p-01 flex-01 alignCenter-01 flexColumn-01">
                                    <div class="w90p-01 pb1-01 fs7-01 fMono-01 textCenter-01 textMinimal-01">
                                        <div></div>
                                    </div>
                                    <a href="https://zone01normandie.org/intra/rouen/profile/levels?event=216" class="animate-01 pointer-01 fMono-01 regular-01 fs7-01 ls1-01 alignCenter-01 hoverStrokePurple-01">
                                        <div class="bbTransparent-01 animate-01 purple-01 hoverPurple-01 hoverBorderPurple-01"></div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="bgLevel3-01 hoverBgLevel2-01 gridColumnSpan2-01 gridColumnSpan2_s-01 gridRowSpan1_s-01 gridColumnSpan1_xs-01 gridRowSpan2_xs-01">
                            <div class="hoveringO100-01 pv5-01 ph6-01 textMinimal-01 relative-01 aShadow-01 flexColumn-01 justifyBetween-01 w100p-01 h100p-01">
                                <div style="margin-top: -15px;" class="fs1-01 purple-01 mtNeg ellipsis-01">What's up</div>
                                <div class="fs7-01 fMono-01 flex-01 alignCenter-01">
                                    <div class="alignCenter-01 mr2-01">
                                        <svg role="img" width="24" viewBox="0 0 130 130" aria-label="icon">
                                            <path fill="none" stroke="var(--purple)" stroke-width="5" d="M73 18l48 47-48 48M6 65h114"></path>
                                        </svg>
                                    </div>
                                    <div class="flex-01 alignBaseline-01">
                                        Resume
                                        <a class="animate-01 pointer-01 fMono-01 regular-01 fs7-01 ls1-01 alignCenter-01 hoverStrokeNeutral-01 bb-01 ml2-01 borderNeutral-01">
                                        <div id="user-working-project" class="bbTransparent-01 animate-01 neutral-01 hoverNeutral-01 hoverBorderNeutral-01">graphql</div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="bgLevel3-01 gridRowSpan2-01">
                            <div class="pv5-01 ph6-01 textMinimal-01 relative-01 aShadow-01 flexColumn-01 justifyBetween-01 w100p-01 h100p-01">
                                <div>
                                    <div>
                                        <div class="alignCenter-01 justifyBetween-01 mb1-01">
                                            <div class="fMono-01 fs7-01 textMinimal-01">Your</div>
                                            <div class="w3-01 h3-01 br50p-01 bgTeal-01"></div>
                                        </div>
                                        <div class="fs48px-01 ellipsis-01 fMono-01 uppercase-01 ls2-01 teal-01">GIT</div>
                                        <div class="fs7-01 fSans-01 mt2-01">Keep up the good work!</div>
                                    </div>
                                </div>
                                <div class="w100p-01 justifyEnd-01">
                                    <a id="user-git" href="https://zone01normandie.org/git/" class="animate-01 pointer-01 fMono-01 regular-01 fs7-01 ls1-01 alignCenter-01 hoverStrokePurple-01 uppercase-01">
                                        <div class="bbTransparent-01 animate-01 purple-01 hoverPurple-01 hoverBorderPurple-01">See Git</div>
                                        <div class="alignCenter-01 ml1-01">
                                            <svg role="img" width="14px" viewBox="0 0 130 130" aria-label="icon">
                                                <path fill="none" stroke="var(--purple)" stroke-width="10" d="M73 18l48 47-48 48M6 65h114"></path>
                                            </svg>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="bgLevel3-01 hoverBgLevel2-01 gridColumnSpan2-01 gridColumnSpan1_xs-01 gridRowSpan2_xs-01">
                            <div class="hoveringO100-01 pv5-01 ph6-01 textMinimal-01 relative-01 aShadow-01 flexColumn-01 justifyBetween-01 w100p-01 h100p-01">
                                <div class="flex-01 alignStart-01 justifyBetween-01 flexColumn_s-01">
                                    <div id="user-xp" class="fs1-01 order2_s-01 purple-01 mtNeg ellipsis-01 fs2_xs-01">
                                        806 
                                        <span class="textMinimal-01"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`

const PROFIL_GRAPHS = `
<div class="grid-01 mt8-01 mt6_xs-01 w100p-01">
   <div class="bgLevel3-01 hoverBgLevel2-01 w100p-01 gridColumnSpan2-01 gridRowSpan2-01 gridRowSpan4_xs-01 gridColumnSpan1_xs-01">
      <div class="hoveringO100-01 pv5-01 ph6-01 textMinimal-01 relative-01 aShadow-01 flexColumn-01 justifyBetween-01 alignCenter-01 w100p-01 h100p-01">
          <div class="w100p-01 mb5-01">
              <div class="fs4-01 textNeutral-01 flex-01 alignCenter-01 justifyBetween-01">
                  Best Technical Skills
                  <a class="animate-01 pointer-01 fMono-01 regular-01 fs7-01 ls1-01 alignCenter-01 hoverStrokePurple-01 mb0_s-01 uppercase-01">
                      <div class="alignCenter-01 mr1-01">
                          <svg role="img" width="14px" viewBox="0 0 130 130" aria-label="icon">
                              <path fill="none" stroke="var(--purple)" stroke-width="10" d="M73 18l48 47-48 48M6 65h114"></path>
                          </svg>
                      </div>
                      <div class="bbTransparent-01 animate-01 purple-01 hoverPurple-01 hoverBorderPurple-01">See more</div>
                  </a>
              </div>
              <div class="mt3-01 fMono-01 fs7-01 textMinimal-01"></div>
          </div>
          <svg style="overflow: visible;" width="100%" height="100%" viewBox="0 0 400 400" class="mv6-01">
            <circle fill="none" stroke="rgb(170, 170, 170)" stroke-width="0.75" cx="200" cy="200" r="200"></circle>
            <path id="path-technical-skills" stroke-width="0" stroke="none" fill="var(--purple)" d="M 200 0L 249.49747468305833 150.50252531694167L 210 200L 263.6396103067893 263.6396103067893L 200 300L 185.85786437626905 214.14213562373095L 180 200L 157.57359312880715 157.57359312880715"></path>
            <g>
                <line x1="200" y1="0" x2="200" y2="200" stroke-width="0.75" stroke="rgb(170, 170, 170)"></line>
                <circle cx="200" cy="180" fill="rgb(170, 170, 170)" r="1"></circle><circle cx="200" cy="160" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="200" cy="140" fill="rgb(170, 170, 170)" r="1"></circle><circle cx="200" cy="120" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="200" cy="100" fill="rgb(170, 170, 170)" r="1"></circle><circle cx="200" cy="80" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="200" cy="60" fill="rgb(170, 170, 170)" r="1"></circle><circle cx="200" cy="40" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="200" cy="20" fill="rgb(170, 170, 170)" r="1"></circle><circle cx="200" cy="0" fill="rgb(170, 170, 170)" r="0"></circle>
            </g>
            <g>
                <line x1="341.4213562373095" y1="58.57864376269052" x2="200" y2="200" stroke-width="0.75" stroke="rgb(170, 170, 170)"></line>
                <circle cx="214.14213562373095" cy="185.85786437626905" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="228.2842712474619" cy="171.7157287525381" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="242.42640687119285" cy="157.57359312880715" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="256.5685424949238" cy="143.4314575050762" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="270.71067811865476" cy="129.28932188134524" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="284.8528137423857" cy="115.14718625761431" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="298.99494936611666" cy="101.00505063388336" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="313.1370849898476" cy="86.8629150101524" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="327.27922061357856" cy="72.72077938642146" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="341.4213562373095" cy="58.57864376269052" fill="rgb(170, 170, 170)" r="0"></circle>
            </g>
            <g>
                <line x1="400" y1="200" x2="200" y2="200" stroke-width="0.75" stroke="rgb(170, 170, 170)"></line>
                <circle cx="220" cy="200" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="240" cy="200" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="260" cy="200" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="280" cy="200" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="300" cy="200" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="320" cy="200" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="340" cy="200" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="360" cy="200" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="380" cy="200" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="400" cy="200" fill="rgb(170, 170, 170)" r="0"></circle>
            </g>
            <g>
                <line x1="341.4213562373095" y1="341.4213562373095" x2="200" y2="200" stroke-width="0.75" stroke="rgb(170, 170, 170)"></line>
                <circle cx="214.14213562373095" cy="214.14213562373095" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="228.2842712474619" cy="228.2842712474619" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="242.42640687119285" cy="242.42640687119285" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="256.5685424949238" cy="256.5685424949238" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="270.71067811865476" cy="270.71067811865476" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="284.8528137423857" cy="284.8528137423857" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="298.99494936611666" cy="298.99494936611666" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="313.1370849898476" cy="313.1370849898476" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="327.27922061357856" cy="327.27922061357856" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="341.4213562373095" cy="341.4213562373095" fill="rgb(170, 170, 170)" r="0"></circle>
            </g>
            <g>
                <line x1="200" y1="400" x2="200" y2="200" stroke-width="0.75" stroke="rgb(170, 170, 170)"></line>
                <circle cx="200" cy="220" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="200" cy="240" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="200" cy="260" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="200" cy="280" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="200" cy="300" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="200" cy="320" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="200" cy="340" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="200" cy="360" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="200" cy="380" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="200" cy="400" fill="rgb(170, 170, 170)" r="0"></circle>
            </g>
            <g>
                <line x1="58.57864376269052" y1="341.4213562373095" x2="200" y2="200" stroke-width="0.75" stroke="rgb(170, 170, 170)"></line>
                <circle cx="185.85786437626905" cy="214.14213562373095" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="171.7157287525381" cy="228.2842712474619" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="157.57359312880715" cy="242.42640687119285" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="143.4314575050762" cy="256.5685424949238" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="129.28932188134524" cy="270.71067811865476" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="115.14718625761431" cy="284.8528137423857" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="101.00505063388336" cy="298.99494936611666" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="86.8629150101524" cy="313.1370849898476" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="72.72077938642146" cy="327.27922061357856" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="58.57864376269052" cy="341.4213562373095" fill="rgb(170, 170, 170)" r="0"></circle>
            </g>
            <g>
                <line x1="0" y1="200.00000000000003" x2="200" y2="200" stroke-width="0.75" stroke="rgb(170, 170, 170)"></line>
                <circle cx="180" cy="200" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="160" cy="200" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="140" cy="200" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="120" cy="200" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="100" cy="200" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="80" cy="200.00000000000003" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="60" cy="200.00000000000003" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="40" cy="200.00000000000003" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="20" cy="200.00000000000003" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="0" cy="200.00000000000003" fill="rgb(170, 170, 170)" r="0"></circle>
            </g>
            <g>
                <line x1="58.57864376269046" y1="58.57864376269052" x2="200" y2="200" stroke-width="0.75" stroke="rgb(170, 170, 170)"></line>
                <circle cx="185.85786437626905" cy="185.85786437626905" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="171.7157287525381" cy="171.7157287525381" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="157.57359312880715" cy="157.57359312880715" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="143.4314575050762" cy="143.4314575050762" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="129.28932188134524" cy="129.28932188134524" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="115.14718625761428" cy="115.14718625761431" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="101.00505063388333" cy="101.00505063388336" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="86.86291501015236" cy="86.8629150101524" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="72.72077938642141" cy="72.72077938642146" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="58.57864376269046" cy="58.57864376269052" fill="rgb(170, 170, 170)" r="0"></circle>
            </g>
            <text class="technical-skill-text" text-anchor="middle" alignment-baseline="after-edge" x="200" y="-40" fill="white" font-family="IBM Plex Mono" class="capitalize-01" font-size="18" style="background: red;">prog</text>
            <text class="technical-skill-text" text-anchor="start" alignment-baseline="after-edge" x="386.4213562373095" y="58.57864376269052" fill="white" font-family="IBM Plex Mono" class="capitalize-01" font-size="18" style="background: red;">algo</text>
            <text class="technical-skill-text" text-anchor="start" alignment-baseline="central" x="445" y="200" fill="white" font-family="IBM Plex Mono" class="capitalize-01" font-size="18" style="background: red;">sys-admin</text>
            <text class="technical-skill-text" text-anchor="start" alignment-baseline="before-edge" x="386.4213562373095" y="341.4213562373095" fill="white" font-family="IBM Plex Mono" class="capitalize-01" font-size="18" style="background: red;">front-end</text>
            <text class="technical-skill-text" text-anchor="middle" alignment-baseline="before-edge" x="200" y="440" fill="white" font-family="IBM Plex Mono" class="capitalize-01" font-size="18" style="background: red;">back-end</text>
            <text class="technical-skill-text" text-anchor="end" alignment-baseline="before-edge" x="13.578643762690518" y="341.4213562373095" fill="white" font-family="IBM Plex Mono" class="capitalize-01" font-size="18" style="background: red;">stats</text>
            <text class="technical-skill-text" text-anchor="end" alignment-baseline="before-edge" x="-45" y="200.00000000000003" fill="white" font-family="IBM Plex Mono" class="capitalize-01" font-size="18" style="background: red;">game</text>
            <text class="technical-skill-text" text-anchor="end" alignment-baseline="after-edge" x="13.578643762690461" y="58.57864376269052" fill="white" font-family="IBM Plex Mono" class="capitalize-01" font-size="18" style="background: red;">tcp</text>
        </svg>
    </div>
  </div>
   <div class="bgLevel3-01 hoverBgLevel2-01 w100p-01 gridColumnSpan2-01 gridRowSpan2-01 gridRowSpan4_xs-01 gridColumnSpan1_xs-01">
      <div class="hoveringO100-01 pv5-01 ph6-01 textMinimal-01 relative-01 aShadow-01 flexColumn-01 justifyBetween-01 alignCenter-01 w100p-01 h100p-01">
          <div class="w100p-01 mb5-01">
              <div class="fs4-01 textNeutral-01 flex-01 alignCenter-01 justifyBetween-01">
                  Best Technologies
                  <a class="animate-01 pointer-01 fMono-01 regular-01 fs7-01 ls1-01 alignCenter-01 hoverStrokePurple-01 mb0_s-01 uppercase-01">
                      <div class="alignCenter-01 mr1-01">
                          <svg role="img" width="14px" viewBox="0 0 130 130" aria-label="icon">
                              <path fill="none" stroke="var(--purple)" stroke-width="10" d="M73 18l48 47-48 48M6 65h114"></path>
                          </svg>
                      </div>
                      <div class="bbTransparent-01 animate-01 purple-01 hoverPurple-01 hoverBorderPurple-01">See more</div>
                  </a>
              </div>
              <div class="mt3-01 fMono-01 fs7-01 textMinimal-01"></div>
          </div>
          <svg style="overflow: visible;" width="100%" height="100%" viewBox="0 0 400 400" class="mv6-01">
            <circle fill="none" stroke="rgb(170, 170, 170)" stroke-width="0.75" cx="200" cy="200" r="200"></circle>
            <path id="path-technologies" stroke-width="0" stroke="none" fill="var(--purple)" d="M 200 89.99999999999999L 262.5465185974424 150.12081585130133L 268.24495385272763 215.576465376942L 213.01651217352673 227.02906603707257L 186.98348782647327 227.02906603707257L 170.7521626345453 206.67562801868942L 160.9084258765985 168.82550990706332"></path>
            <g>
                <line x1="200" y1="0" x2="200" y2="200" stroke-width="0.75" stroke="rgb(170, 170, 170)"></line>
                <circle cx="200" cy="180" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="200" cy="160" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="200" cy="140" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="200" cy="120" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="200" cy="100" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="200" cy="80" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="200" cy="60" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="200" cy="40" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="200" cy="20" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="200" cy="0" fill="rgb(170, 170, 170)" r="0"></circle>
            </g>
            <g>
                <line x1="356.366296493606" y1="75.3020396282533" x2="200" y2="200" stroke-width="0.75" stroke="rgb(170, 170, 170)"></line>
                <circle cx="215.6366296493606" cy="187.53020396282534" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="231.2732592987212" cy="175.06040792565065" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="246.9098889480818" cy="162.590611888476" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="262.5465185974424" cy="150.12081585130133" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="278.183148246803" cy="137.65101981412664" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="293.8197778961636" cy="125.18122377695198" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="309.45640754552414" cy="112.7114277397773" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="325.0930371948848" cy="100.24163170260265" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="340.72966684424534" cy="87.77183566542797" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="356.366296493606" cy="75.3020396282533" fill="rgb(170, 170, 170)" r="0"></circle>
            </g>
            <g>
                <line x1="394.9855824363647" y1="244.5041867912629" x2="200" y2="200" stroke-width="0.75" stroke="rgb(170, 170, 170)"></line>
                <circle cx="219.49855824363647" cy="204.4504186791263" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="238.99711648727293" cy="208.90083735825257" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="258.4956747309094" cy="213.35125603737887" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="277.99423297454587" cy="217.80167471650515" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="297.49279121818233" cy="222.25209339563145" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="316.9913494618188" cy="226.70251207475772" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="336.48990770545527" cy="231.15293075388402" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="355.9884659490918" cy="235.6033494330103" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="375.48702419272826" cy="240.0537681121366" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="394.9855824363647" cy="244.5041867912629" fill="rgb(170, 170, 170)" r="0"></circle>
            </g>
            <g>
                <line x1="286.77674782351164" y1="380.1937735804838" x2="200" y2="200" stroke-width="0.75" stroke="rgb(170, 170, 170)"></line>
                <circle cx="208.67767478235118" cy="218.0193773580484" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="217.35534956470232" cy="236.03875471609678" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="226.0330243470535" cy="254.05813207414513" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="234.71069912940465" cy="272.07750943219355" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="243.38837391175582" cy="290.0968867902419" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="252.066048694107" cy="308.11626414829027" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="260.7437234764582" cy="326.1356415063387" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="269.4213982588093" cy="344.1550188643871" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="278.09907304116047" cy="362.17439622243546" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="286.77674782351164" cy="380.1937735804838" fill="rgb(170, 170, 170)" r="0"></circle>
            </g>
            <g>
                <line x1="113.22325217648839" y1="380.1937735804838" x2="200" y2="200" stroke-width="0.75" stroke="rgb(170, 170, 170)"></line>
                <circle cx="191.32232521764882" cy="218.0193773580484" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="182.64465043529768" cy="236.03875471609678" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="173.96697565294653" cy="254.05813207414513" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="165.28930087059535" cy="272.07750943219355" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="156.61162608824418" cy="290.0968867902419" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="147.93395130589303" cy="308.11626414829027" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="139.25627652354189" cy="326.1356415063387" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="130.5786017411907" cy="344.1550188643871" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="121.90092695883955" cy="362.17439622243546" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="113.22325217648839" cy="380.1937735804838" fill="rgb(170, 170, 170)" r="0"></circle>
            </g>
            <g>
                <line x1="5.014417563635277" y1="244.5041867912629" x2="200" y2="200" stroke-width="0.75" stroke="rgb(170, 170, 170)"></line>
                <circle cx="180.50144175636353" cy="204.4504186791263" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="161.00288351272707" cy="208.90083735825257" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="141.5043252690906" cy="213.35125603737887" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="122.0057670254541" cy="217.80167471650515" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="102.50720878181764" cy="222.25209339563145" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="83.00865053818117" cy="226.70251207475775" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="63.510092294544705" cy="231.15293075388402" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="44.01153405090821" cy="235.60334943301032" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="24.512975807271744" cy="240.0537681121366" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="5.014417563635277" cy="244.5041867912629" fill="rgb(170, 170, 170)" r="0"></circle>
            </g>
            <g>
                <line x1="43.63370350639403" y1="75.30203962825333" x2="200" y2="200" stroke-width="0.75" stroke="rgb(170, 170, 170)"></line>
                <circle cx="184.3633703506394" cy="187.53020396282534" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="168.7267407012788" cy="175.06040792565068" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="153.0901110519182" cy="162.590611888476" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="137.4534814025576" cy="150.12081585130133" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="121.81685175319701" cy="137.65101981412667" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="106.18022210383641" cy="125.181223776952" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="90.54359245447581" cy="112.71142773977732" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="74.90696280511521" cy="100.24163170260266" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="59.27033315575463" cy="87.771835665428" fill="rgb(170, 170, 170)" r="1"></circle>
                <circle cx="43.63370350639403" cy="75.30203962825333" fill="rgb(170, 170, 170)" r="0"></circle>
            </g>
            <text class="technology-text" text-anchor="middle" alignment-baseline="after-edge" x="200" y="-40" fill="white" font-family="IBM Plex Mono" class="capitalize-01" font-size="18" style="background: red;">go</text>
            <text class="technology-text" text-anchor="start" aligechnology-textnment-baseline="after-edge" x="401.366296493606" y="75.3020396282533" fill="white" font-family="IBM Plex Mono" class="capitalize-01" font-size="18" style="background: red;">js</text>
            <text class="technology-text" text-anchor="start" alignment-baseline="before-edge" x="439.9855824363647" y="244.5041867912629" fill="white" font-family="IBM Plex Mono" class="capitalize-01" font-size="18" style="background: red;">html</text>
            <text class="technology-text" text-anchor="start" alignment-baseline="before-edge" x="331.77674782351164" y="380.1937735804838" fill="white" font-family="IBM Plex Mono" class="capitalize-01" font-size="18" style="background: red;">css</text>
            <text class="technology-text" text-anchor="end" alignment-baseline="before-edge" x="68.22325217648839" y="380.1937735804838" fill="white" font-family="IBM Plex Mono" class="capitalize-01" font-size="18" style="background: red;">unix</text>
            <text class="technology-text" text-anchor="end" alignment-baseline="before-edge" x="-39.98558243636472" y="244.5041867912629" fill="white" font-family="IBM Plex Mono" class="capitalize-01" font-size="18" style="background: red;">docker</text>
            <text class="technology-text" text-anchor="end" alignment-baseline="after-edge" x="-1.3662964936059723" y="75.30203962825333" fill="white" font-family="IBM Plex Mono" class="capitalize-01" font-size="18" style="background: red;">sql</text>
      </svg>
    </div>
  </div>
</div>

<div id="container-audit-ratio" class="bgLevel3-01 gridRowSpan2_xs-01">
    <div class="pv5-01 ph6-01 textMinimal-01 relative-01 aShadow-01 flexColumn-01 justifyBetween-01 w100p-01 h100p-01">
        <div>
            <div class="fs4-01 textNeutral-01">Audits ratio</div>
            <div class="mt1-01 w100p-01 justifyBetween-01 alignCenter-01">
                <div class="w100p-01">
                    <div class="w100p-01 h5px-01">
                        <svg width="100%" height="100%">
                            <title>Graph</title>
                            <line id="line-audit-done" stroke="var(--purple)" stroke-width="6" x1="0" x2="141.71665954589844" y1="11" y2="11"></line>
                        </svg>
                    </div>
                    <div class="w100p-01 h5px-01">
                        <svg width="100%" height="100%">
                            <title>Graph</title>
                            <line id="line-audit-received" stroke="var(--neutralAlt)" stroke-width="6" x1="0" x2="127.82950577567154" y1="11" y2="11"></line>
                        </svg>
                    </div>
                </div>
                <div class="ml3-01">
                    <div class="lh3-01 alignEnd-01 flexColumn-01 fMono-01 fs7-01 ls1-01 noWrap-01 mb2-01 textNeutral-01">
                        <div class="alignCenter-01 order2-01">
                            <div>Done</div>
                            <div class="alignCenter-01 ml1-01">
                                <svg role="img" width="12" viewBox="0 0 130 130" aria-label="icon">
                                    <path fill="none" stroke="var(--textNeutral" stroke-width="6" d="M17.35 55.4L65 7.75l47.65 47.65M65 122.75V8.41"></path>
                                </svg>
                            </div>
                        </div>
                        <div id="xp-audit-done"></div>
                    </div>
                    <div class="lh3-01 alignEnd-01 flexColumn-01 fMono-01 fs7-01 ls1-01 noWrap-01 mt2-01 textNeutral-01">
                        <div class="alignCenter-01">
                            <div>Received</div>
                            <div class="alignCenter-01 ml1-01">
                                <svg role="img" width="12" viewBox="0 0 130 130" aria-label="icon">
                                    <path fill="none" stroke="var(--textNeutral" stroke-width="6" d="M114.65 73.1L67 120.75 19.35 73.1M67 5.75v114.34"></path>
                                </svg>
                            </div>
                        </div>
                        <div id="xp-audit-received"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="alignEnd-01 purple-01">
            <div id="audit-ratio" style="font-size: 4rem; line-height: 0.9;">1.1</div>
        </div>
    </div>
</div>
`

const PROFIL_MAIN = `
<div style="max-width: 2000px; margin: 0px auto;">
    <div style="z-index: -1; background: url(&quot;/assets/img/01-trame.svg&quot;) center center / cover;" class="fixed-01 w100vw-01 o15-01 h100vh-01 t0-01 l0-01"></div>
    <div id="container-sections" class="mt10-01 w100p-01 pv11-01 ph12-01 pv7_s-01 ph9_s-01">
        <div class="alignStart_s-01 alignCenter-01 justifyBetween-01 mb4-01">
            <h1 data-test="Ismael Mazlin-welcome" class="fMono-01 fs1-01 light-01 alignCenter-01">Welcome, Ismael Mazlin!</h1>
        </div>
        <div class="ongoingBanner-01 hoverShadow-01 animate-01 ph3-01 pv2-01 bt-01 bh-01 borderNeutral-01 w100p-01 alignEnd-01 justifyBetween-01 flexColumn_xs-01 alignStart_xs-01 bb-01">
            <div class="alignBaseline-01 flexWrap-01 flexColumn_s-01 mb4_xs-01">
                <div class="fs4-01 mr5-01">Graphs</div>
                <div class="textMinimal-01 mt2_s-01 mr5-01 mr0_xs-01">Check your skills and audit ratio</div>
            </div>
            <a id="btn-goto-graphs" class="animate-01 pointer-01 fMono-01 regular-01 fs7-01 ls1-01 alignCenter-01 hoverStrokePurple-01 selfEnd_s-01 uppercase-01">
                <div class="alignCenter-01 mr1-01">
                    <svg role="img" width="14px" viewBox="0 0 130 130" aria-label="icon">
                        <path fill="none" stroke="var(--purple)" stroke-width="10" d="M73 18l48 47-48 48M6 65h114"></path>
                    </svg>
                </div>
                <div class="bbTransparent-01 animate-01 purple-01 hoverPurple-01 hoverBorderPurple-01">Go to Graphs</div>
            </a>
        </div>
        <div class="grid-01 mt8-01 mt6_xs-01 w100p-01">
            <div class="bgGreyHighlighted-01 gridRowSpan4_xs-01 gridRowSpan2-01">
                <div class="alt-theme pv5-01 ph6-01 textMinimal-01 relative-01 aShadow-01 flexColumn-01 justifyBetween-01 alignCenter-01 w100p-01 h100p-01">
                    <div class="fs4-01 textCenter-01 flex-01 flexColumn-01 alignCenter-01">
                        <div class="textMinimal-01 fs7-01 fMono-01 mb1-01"></div>
                        <div class="textNeutral-01 mb2-01">Current rank</div>
                        <div class="textMinimal-01 bt-01 fs7-01 fMono-01 borderNeutral-01 pt2-01 textCenter-01"></div>
                        <a href="https://zone01normandie.org/intra/rouen/profile/ranks?event=216" class="animate-01 pointer-01 fMono-01 regular-01 fs7-01 ls1-01 alignCenter-01 hoverStrokePurple-01 mt2-01">
                            <div class="bbTransparent-01 animate-01 purple-01 hoverPurple-01 hoverBorderPurple-01"></div>
                        </a>
                    </div>
                    <div class="textNeutral-01 relative-01 alignCenter-01 justifyCenter-01 w100p-01 maxW18px-01">
                        <svg class="levelGraphDots-01" viewBox="0 0 100 100">
                            <title>level graph progress</title>
                            <circle cx="50" cy="50" r="35" fill="none" stroke="none"></circle>
                            <svg width="6" height="6" x="82" y="47" viewBox="0 0 100 100">
                                <title>dot</title>
                                <circle style="box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 15px;" fill="var(--purple)" r="10" cx="50%" cy="50%"></circle>
                            </svg>
                            <svg width="6" height="6" x="81.56909192082982" y="52.47520627640808" viewBox="0 0 100 100">
                                <title>dot</title>
                                <circle style="box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 15px;" fill="var(--purple)" r="10" cx="50%" cy="50%"></circle>
                            </svg>
                            <svg width="6" height="6" x="80.28697807033038" y="57.81559480312316" viewBox="0 0 100 100">
                                <title>dot</title>
                                <circle style="box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 15px;" fill="var(--purple)" r="10" cx="50%" cy="50%"></circle>
                            </svg>
                            <svg width="6" height="6" x="78.18522834659288" y="62.889667490884136" viewBox="0 0 100 100">
                                <title>dot</title>
                                <circle style="box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 15px;" fill="var(--purple)" r="10" cx="50%" cy="50%"></circle>
                            </svg>
                            <svg width="6" height="6" x="75.31559480312316" y="67.57248383023656" viewBox="0 0 100 100">
                                <title>dot</title>
                                <circle style="box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 15px;" fill="var(--purple)" r="10" cx="50%" cy="50%"></circle>
                            </svg>
                            <svg width="6" height="6" x="71.74873734152916" y="71.74873734152916" viewBox="0 0 100 100">
                                <title>dot</title>
                                <circle style="box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 15px;" fill="var(--purple)" r="10" cx="50%" cy="50%"></circle>
                            </svg>
                            <svg width="6" height="6" x="67.57248383023656" y="75.31559480312316" viewBox="0 0 100 100">
                                <title>dot</title>
                                <circle style="box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 15px;" fill="var(--purple)" r="10" cx="50%" cy="50%"></circle>
                            </svg>
                            <svg width="6" height="6" x="62.889667490884136" y="78.18522834659288" viewBox="0 0 100 100">
                                <title>dot</title>
                                <circle style="box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 15px;" fill="var(--purple)" r="10" cx="50%" cy="50%"></circle>
                            </svg>
                            <svg width="6" height="6" x="57.81559480312316" y="80.28697807033038" viewBox="0 0 100 100">
                                <title>dot</title>
                                <circle style="box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 15px;" fill="var(--purple)" r="10" cx="50%" cy="50%"></circle>
                            </svg>
                            <svg width="6" height="6" x="52.47520627640808" y="81.56909192082982" viewBox="0 0 100 100">
                                <title>dot</title>
                                <circle style="box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 15px;" fill="var(--purple)" r="10" cx="50%" cy="50%"></circle>
                            </svg>
                            <svg width="6" height="6" x="47" y="82" viewBox="0 0 100 100">
                                <title>dot</title>
                                <circle style="box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 15px;" fill="var(--purple)" r="10" cx="50%" cy="50%"></circle>
                            </svg>
                            <svg width="6" height="6" x="41.52479372359192" y="81.56909192082982" viewBox="0 0 100 100">
                                <title>dot</title>
                                <circle style="box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 15px;" fill="var(--purple)" r="10" cx="50%" cy="50%"></circle>
                            </svg>
                            <svg width="6" height="6" x="36.184405196876845" y="80.28697807033038" viewBox="0 0 100 100">
                                <title>dot</title>
                                <circle style="box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 15px;" fill="var(--purple)" r="10" cx="50%" cy="50%"></circle>
                            </svg>
                            <svg width="6" height="6" x="31.110332509115864" y="78.18522834659288" viewBox="0 0 100 100">
                                <title>dot</title>
                                <circle style="box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 15px;" fill="var(--purple)" r="10" cx="50%" cy="50%"></circle>
                            </svg>
                            <svg width="6" height="6" x="26.427516169763443" y="75.31559480312316" viewBox="0 0 100 100">
                                <title>dot</title>
                                <circle style="box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 15px;" fill="var(--purple)" r="10" cx="50%" cy="50%"></circle>
                            </svg>
                            <svg width="6" height="6" x="22.25126265847084" y="71.74873734152916" viewBox="0 0 100 100">
                                <title>dot</title>
                                <circle style="box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 15px;" fill="var(--purple)" r="10" cx="50%" cy="50%"></circle>
                            </svg>
                            <svg width="6" height="6" x="18.684405196876842" y="67.57248383023656" viewBox="0 0 100 100">
                                <title>dot</title>
                                <circle style="box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 15px;" fill="var(--purple)" r="10" cx="50%" cy="50%"></circle>
                            </svg>
                            <svg width="6" height="6" x="15.814771653407128" y="62.889667490884136" viewBox="0 0 100 100">
                                <title>dot</title>
                                <circle style="box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 15px;" fill="var(--purple)" r="10" cx="50%" cy="50%"></circle>
                            </svg>
                            <svg width="6" height="6" x="13.71302192966963" y="57.81559480312316" viewBox="0 0 100 100">
                                <title>dot</title>
                                <circle style="box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 15px;" fill="var(--purple)" r="10" cx="50%" cy="50%"></circle>
                            </svg>
                            <svg width="6" height="6" x="12.43090807917018" y="52.47520627640809" viewBox="0 0 100 100">
                                <title>dot</title>
                                <circle style="box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 15px;" fill="var(--purple)" r="10" cx="50%" cy="50%"></circle>
                            </svg>
                            <svg width="6" height="6" x="12" y="47.00000000000001" viewBox="0 0 100 100">
                                <title>dot</title>
                                <circle style="box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 15px;" fill="var(--purple)" r="10" cx="50%" cy="50%"></circle>
                            </svg>
                            <svg width="6" height="6" x="12.43090807917018" y="41.52479372359193" viewBox="0 0 100 100">
                                <title>dot</title>
                                <circle style="box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 15px;" fill="var(--purple)" r="10" cx="50%" cy="50%"></circle>
                            </svg>
                            <svg width="6" height="6" x="13.713021929669623" y="36.184405196876845" viewBox="0 0 100 100">
                                <title>dot</title>
                                <circle style="box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 15px;" fill="var(--purple)" r="10" cx="50%" cy="50%"></circle>
                            </svg>
                            <svg width="6" height="6" x="15.814771653407124" y="31.110332509115864" viewBox="0 0 100 100">
                                <title>dot</title>
                                <circle style="box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 15px;" fill="var(--neutral)" r="5" cx="50%" cy="50%"></circle>
                            </svg>
                            <svg width="6" height="6" x="18.68440519687684" y="26.427516169763443" viewBox="0 0 100 100">
                                <title>dot</title>
                                <circle style="box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 15px;" fill="var(--neutral)" r="5" cx="50%" cy="50%"></circle>
                            </svg>
                            <svg width="6" height="6" x="22.251262658470832" y="22.25126265847084" viewBox="0 0 100 100">
                                <title>dot</title>
                                <circle style="box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 15px;" fill="var(--neutral)" r="5" cx="50%" cy="50%"></circle>
                            </svg>
                            <svg width="6" height="6" x="26.427516169763436" y="18.684405196876842" viewBox="0 0 100 100">
                                <title>dot</title>
                                <circle style="box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 15px;" fill="var(--neutral)" r="5" cx="50%" cy="50%"></circle>
                            </svg>
                            <svg width="6" height="6" x="31.110332509115857" y="15.814771653407128" viewBox="0 0 100 100">
                                <title>dot</title>
                                <circle style="box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 15px;" fill="var(--neutral)" r="5" cx="50%" cy="50%"></circle>
                            </svg>
                            <svg width="6" height="6" x="36.18440519687684" y="13.71302192966963" viewBox="0 0 100 100">
                                <title>dot</title>
                                <circle style="box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 15px;" fill="var(--neutral)" r="5" cx="50%" cy="50%"></circle>
                            </svg>
                            <svg width="6" height="6" x="41.52479372359191" y="12.43090807917018" viewBox="0 0 100 100">
                                <title>dot</title>
                                <circle style="box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 15px;" fill="var(--neutral)" r="5" cx="50%" cy="50%"></circle>
                            </svg>
                            <svg width="6" height="6" x="46.99999999999999" y="12" viewBox="0 0 100 100">
                                <title>dot</title>
                                <circle style="box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 15px;" fill="var(--neutral)" r="5" cx="50%" cy="50%"></circle>
                            </svg>
                            <svg width="6" height="6" x="52.47520627640807" y="12.43090807917018" viewBox="0 0 100 100">
                                <title>dot</title>
                                <circle style="box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 15px;" fill="var(--neutral)" r="5" cx="50%" cy="50%"></circle>
                            </svg>
                            <svg width="6" height="6" x="57.815594803123155" y="13.713021929669623" viewBox="0 0 100 100">
                                <title>dot</title>
                                <circle style="box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 15px;" fill="var(--neutral)" r="5" cx="50%" cy="50%"></circle>
                            </svg>
                            <svg width="6" height="6" x="62.889667490884136" y="15.81477165340712" viewBox="0 0 100 100">
                                <title>dot</title>
                                <circle style="box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 15px;" fill="var(--neutral)" r="5" cx="50%" cy="50%"></circle>
                            </svg>
                            <svg width="6" height="6" x="67.57248383023655" y="18.684405196876835" viewBox="0 0 100 100">
                                <title>dot</title>
                                <circle style="box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 15px;" fill="var(--neutral)" r="5" cx="50%" cy="50%"></circle>
                            </svg>
                            <svg width="6" height="6" x="71.74873734152916" y="22.251262658470832" viewBox="0 0 100 100">
                                <title>dot</title>
                                <circle style="box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 15px;" fill="var(--neutral)" r="5" cx="50%" cy="50%"></circle>
                            </svg>
                            <svg width="6" height="6" x="75.31559480312316" y="26.427516169763432" viewBox="0 0 100 100">
                                <title>dot</title>
                                <circle style="box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 15px;" fill="var(--neutral)" r="5" cx="50%" cy="50%"></circle>
                            </svg>
                            <svg width="6" height="6" x="78.18522834659288" y="31.110332509115857" viewBox="0 0 100 100">
                                <title>dot</title>
                                <circle style="box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 15px;" fill="var(--neutral)" r="5" cx="50%" cy="50%"></circle>
                            </svg>
                            <svg width="6" height="6" x="80.28697807033038" y="36.18440519687683" viewBox="0 0 100 100">
                                <title>dot</title>
                                <circle style="box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 15px;" fill="var(--neutral)" r="5" cx="50%" cy="50%"></circle>
                            </svg>
                            <svg width="6" height="6" x="81.56909192082982" y="41.52479372359191" viewBox="0 0 100 100">
                                <title>dot</title>
                                <circle style="box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 15px;" fill="var(--neutral)" r="5" cx="50%" cy="50%"></circle>
                            </svg>
                        </svg>
                        <svg viewBox="0 0 100 100" class="levelCircle-01">
                            <title>circle</title>
                            <circle class="dark-theme" cx="50" cy="50" r="29" fill="var(--greyHighlighted)"></circle>
                        </svg>
                        <div class="alt-theme fMono-01 fs2-01 absolute-01 alignCenter-01 textNeutral-01 justifyCenter-01 flexColumn-01">
                            <div class="fs7-01">Level</div>
                            <div id="user-level"></div>
                        </div>
                    </div>
                    <div class="w100p-01 flex-01 alignCenter-01 flexColumn-01">
                        <div class="w90p-01 pb1-01 fs7-01 fMono-01 textCenter-01 textMinimal-01">
                            <div></div>
                        </div>
                        <a href="https://zone01normandie.org/intra/rouen/profile/levels?event=216" class="animate-01 pointer-01 fMono-01 regular-01 fs7-01 ls1-01 alignCenter-01 hoverStrokePurple-01">
                            <div class="bbTransparent-01 animate-01 purple-01 hoverPurple-01 hoverBorderPurple-01"></div>
                        </a>
                    </div>
                </div>
            </div>
            <div class="bgLevel3-01 hoverBgLevel2-01 gridColumnSpan2-01 gridColumnSpan2_s-01 gridRowSpan1_s-01 gridColumnSpan1_xs-01 gridRowSpan2_xs-01">
                <div class="hoveringO100-01 pv5-01 ph6-01 textMinimal-01 relative-01 aShadow-01 flexColumn-01 justifyBetween-01 w100p-01 h100p-01">
                    <div style="margin-top: -15px;" class="fs1-01 purple-01 mtNeg ellipsis-01">What's up</div>
                    <div class="fs7-01 fMono-01 flex-01 alignCenter-01">
                        <div class="alignCenter-01 mr2-01">
                            <svg role="img" width="24" viewBox="0 0 130 130" aria-label="icon">
                                <path fill="none" stroke="var(--purple)" stroke-width="5" d="M73 18l48 47-48 48M6 65h114"></path>
                            </svg>
                        </div>
                        <div class="flex-01 alignBaseline-01">
                            Resume
                            <a class="animate-01 pointer-01 fMono-01 regular-01 fs7-01 ls1-01 alignCenter-01 hoverStrokeNeutral-01 bb-01 ml2-01 borderNeutral-01">
                            <div id="user-working-project" class="bbTransparent-01 animate-01 neutral-01 hoverNeutral-01 hoverBorderNeutral-01">graphql</div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bgLevel3-01 gridRowSpan2-01">
                <div class="pv5-01 ph6-01 textMinimal-01 relative-01 aShadow-01 flexColumn-01 justifyBetween-01 w100p-01 h100p-01">
                    <div>
                        <div>
                            <div class="alignCenter-01 justifyBetween-01 mb1-01">
                                <div class="fMono-01 fs7-01 textMinimal-01">Your</div>
                                <div class="w3-01 h3-01 br50p-01 bgTeal-01"></div>
                            </div>
                            <div class="fs48px-01 ellipsis-01 fMono-01 uppercase-01 ls2-01 teal-01">GIT</div>
                            <div class="fs7-01 fSans-01 mt2-01">Keep up the good work!</div>
                        </div>
                    </div>
                    <div class="w100p-01 justifyEnd-01">
                        <a id="user-git" href="https://zone01normandie.org/git/" class="animate-01 pointer-01 fMono-01 regular-01 fs7-01 ls1-01 alignCenter-01 hoverStrokePurple-01 uppercase-01">
                            <div class="bbTransparent-01 animate-01 purple-01 hoverPurple-01 hoverBorderPurple-01">See Git</div>
                            <div class="alignCenter-01 ml1-01">
                                <svg role="img" width="14px" viewBox="0 0 130 130" aria-label="icon">
                                    <path fill="none" stroke="var(--purple)" stroke-width="10" d="M73 18l48 47-48 48M6 65h114"></path>
                                </svg>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div class="bgLevel3-01 hoverBgLevel2-01 gridColumnSpan2-01 gridColumnSpan1_xs-01 gridRowSpan2_xs-01">
                <div class="hoveringO100-01 pv5-01 ph6-01 textMinimal-01 relative-01 aShadow-01 flexColumn-01 justifyBetween-01 w100p-01 h100p-01">
                    <div class="flex-01 alignStart-01 justifyBetween-01 flexColumn_s-01">
                        <div id="user-xp" class="fs1-01 order2_s-01 purple-01 mtNeg ellipsis-01 fs2_xs-01">
                            806 
                            <span class="textMinimal-01"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`