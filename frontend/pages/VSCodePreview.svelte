<script>
    export let data;
    export let getSelectedColor;
</script>

<div class="vsCoderoot">
    <!-- Top Bar -->
    <div class="topBarContainer" style="background-color: {getSelectedColor(data, 0, 0)}; border-bottom: {getSelectedColor(data, 0, 2, true)}">
        <div class="topbarIconsContainer">
            <div class="topBarActionIcons"></div>
            <div class="topBarActionIcons"></div>
            <div class="topBarActionIcons"></div>
        </div>
        <div class="topBarTitleContainer" style="color: {getSelectedColor(data, 0, 1)};">VS Code Theme Editor</div>
        <div class="clearfix"></div>
    </div>

    <div class="actionSideBarContainer" style="background-color: {getSelectedColor(data, 1, 2)}; border-right: {getSelectedColor(data, 1, 4, true)}">
        <ul>
            <li style="background-color: {getSelectedColor(data, 1, 3)}; border-left: {getSelectedColor(data, 1, 5, true)};">
                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill={getSelectedColor(data, 1, 0).length ? getSelectedColor(data, 1, 0) : 'var(--vscode-activityBar-foreground)'}><path d="M17.5 0h-9L7 1.5V6H2.5L1 7.5v15.07L2.5 24h12.07L16 22.57V18h4.7l1.3-1.43V4.5L17.5 0zm0 2.12l2.38 2.38H17.5V2.12zm-3 20.38h-12v-15H7v9.07L8.5 18h6v4.5zm6-6h-12v-15H16V6h4.5v10.5z"/></svg>
            </li>
            <li>
                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill={getSelectedColor(data, 1, 1).length ? getSelectedColor(data, 1, 1) : 'var(--vscode-activityBar-inactiveForeground)'}><path d="M15.25 0a8.25 8.25 0 0 0-6.18 13.72L1 22.88l1.12 1 8.05-9.12A8.251 8.251 0 1 0 15.25.01V0zm0 15a6.75 6.75 0 1 1 0-13.5 6.75 6.75 0 0 1 0 13.5z"/></svg>
            </li>
            <li>
                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill={getSelectedColor(data, 1, 1).length ? getSelectedColor(data, 1, 1) : 'var(--vscode-activityBar-inactiveForeground)'}><path d="M21.007 8.222A3.738 3.738 0 0 0 15.045 5.2a3.737 3.737 0 0 0 1.156 6.583 2.988 2.988 0 0 1-2.668 1.67h-2.99a4.456 4.456 0 0 0-2.989 1.165V7.4a3.737 3.737 0 1 0-1.494 0v9.117a3.776 3.776 0 1 0 1.816.099 2.99 2.99 0 0 1 2.668-1.667h2.99a4.484 4.484 0 0 0 4.223-3.039 3.736 3.736 0 0 0 3.25-3.687zM4.565 3.738a2.242 2.242 0 1 1 4.484 0 2.242 2.242 0 0 1-4.484 0zm4.484 16.441a2.242 2.242 0 1 1-4.484 0 2.242 2.242 0 0 1 4.484 0zm8.221-9.715a2.242 2.242 0 1 1 0-4.485 2.242 2.242 0 0 1 0 4.485z"/></svg>
            </li>
            <li>
                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill={getSelectedColor(data, 1, 1).length ? getSelectedColor(data, 1, 1) : 'var(--vscode-activityBar-inactiveForeground)'}><path d="M10.94 13.5l-1.32 1.32a3.73 3.73 0 0 0-7.24 0L1.06 13.5 0 14.56l1.72 1.72-.22.22V18H0v1.5h1.5v.08c.077.489.214.966.41 1.42L0 22.94 1.06 24l1.65-1.65A4.308 4.308 0 0 0 6 24a4.31 4.31 0 0 0 3.29-1.65L10.94 24 12 22.94 10.09 21c.198-.464.336-.951.41-1.45v-.1H12V18h-1.5v-1.5l-.22-.22L12 14.56l-1.06-1.06zM6 13.5a2.25 2.25 0 0 1 2.25 2.25h-4.5A2.25 2.25 0 0 1 6 13.5zm3 6a3.33 3.33 0 0 1-3 3 3.33 3.33 0 0 1-3-3v-2.25h6v2.25zm14.76-9.9v1.26L13.5 17.37V15.6l8.5-5.37L9 2v9.46a5.07 5.07 0 0 0-1.5-.72V.63L8.64 0l15.12 9.6z"/></svg>
            </li>
            <li>
                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill={getSelectedColor(data, 1, 1).length ? getSelectedColor(data, 1, 1) : 'var(--vscode-activityBar-inactiveForeground)'}><path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 1.5L15 0h7.5L24 1.5V9l-1.5 1.5H15L13.5 9V1.5zm1.5 0V9h7.5V1.5H15zM0 15V6l1.5-1.5H9L10.5 6v7.5H18l1.5 1.5v7.5L18 24H1.5L0 22.5V15zm9-1.5V6H1.5v7.5H9zM9 15H1.5v7.5H9V15zm1.5 7.5H18V15h-7.5v7.5z"/></svg>
            </li>
            
        </ul>
    </div>

    <div class="filesSideBarContainer" style="background-color: {getSelectedColor(data, 2, 0)}; border-right: {getSelectedColor(data, 2, 4, true)}">
        <div class="filesSideBarHeaderContainer">
            <div class="filesSideBarHeaderOne">EXPLORER</div>
            <div class="filesSideBarHeaderTwo">
                <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm5 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm5 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/></svg>
            </div>
        </div>

        <div class="clearfix"></div>
        <div style="padding-bottom: 10px;"></div>
        <div class="filesSideBarListTitle" style="background-color: {getSelectedColor(data, 2, 2)}; color: {getSelectedColor(data, 2, 3)};">VS CODE</div>

        <div class="filesSideBarListContainer">
            <div class="fileList" style="color: {getSelectedColor(data, 2, 1)};">index.html</div>
            <div class="fileList" style="color: {getSelectedColor(data, 2, 1)};">styles.css</div>
            <div class="fileList" style="color: {getSelectedColor(data, 2, 1)}; background-color: {getSelectedColor(data, 2, 5)}; color: {getSelectedColor(data, 2, 6)};">scripts.js</div>
        </div>
    </div>

    <div class="textEditorContainer">
        <div class="textEditorHeaderContainer"> 
            <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M4.708 5.578L2.061 8.224l2.647 2.646-.708.708-3-3V7.87l3-3 .708.708zm7-.708L11 5.578l2.647 2.646L11 10.87l.708.708 3-3V7.87l-3-3zM4.908 13l.894.448 5-10L9.908 3l-5 10z"/></svg>
            script.js 
            <svg class="closeIcon" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 8.707l3.646 3.647.708-.707L8.707 8l3.647-3.646-.707-.708L8 7.293 4.354 3.646l-.707.708L7.293 8l-3.646 3.646.707.708L8 8.707z"/></svg>
        </div>
        <div class="textEditorBreadcrumb">
            <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M4.708 5.578L2.061 8.224l2.647 2.646-.708.708-3-3V7.87l3-3 .708.708zm7-.708L11 5.578l2.647 2.646L11 10.87l.708.708 3-3V7.87l-3-3zM4.908 13l.894.448 5-10L9.908 3l-5 10z"/></svg>
            script.js</div>
        <div class="textEditorCode">
            <ul>
                <li>
                    console.log("Hello World");
                    <div class="textEditorCursor" style="border: {getSelectedColor(data, 5, 1, true)};"></div>
                </li>
            </ul>
        </div>

        <div class="terminalContainer" style="border-top: {getSelectedColor(data, 4, 0, true)};">
            <ul>
                <li class="activeTerminal" style="border-bottom: {getSelectedColor(data, 4, 1, true)}; color: {getSelectedColor(data, 4, 2)};">Terminal</li>
                <li style="color: {getSelectedColor(data, 4, 3)}">Problems</li>
                <li style="color: {getSelectedColor(data, 4, 3)}">Output</li>
                <li style="color: {getSelectedColor(data, 4, 3)}">Debug Console</li>
            </ul>

            <div class="terminalIcons">
                <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 3h3v1h-1v9l-1 1H4l-1-1V4H2V3h3V2a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v1zM9 2H6v1h3V2zM4 13h7V4H4v9zm2-8H5v7h1V5zm1 0h1v7H7V5zm2 0h1v7H9V5z"/></svg>
                <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.024 5.928l-4.357 4.357-.62-.618L7.716 5h.618L13 9.667l-.619.618-4.357-4.357z"/></svg>
                <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 8.707l3.646 3.647.708-.707L8.707 8l3.647-3.646-.707-.708L8 7.293 4.354 3.646l-.707.708L7.293 8l-3.646 3.646.707.708L8 8.707z"/></svg>
            </div>

            <div class="clearfix"></div>

            <div class="terminalText" style="">
                ~/Sites/projects/play-area/learning/html ~
                <span style="color: {getSelectedColor(data, 4, 5)}">yarn start</span>
                <div class="terminalCursor" style="border: {getSelectedColor(data, 4, 4, true)};"></div>
            </div>
        </div>
    </div>

    <div class="clearfix"></div>

    <div class="footer" style="color: {getSelectedColor(data, 3, 0)}; background-color: {getSelectedColor(data, 3, 1)}; border-top: {getSelectedColor(data, 3, 2, true)}">
        <div class="footerItems">
            <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.6 1c1.6.1 3.1.9 4.2 2 1.3 1.4 2 3.1 2 5.1 0 1.6-.6 3.1-1.6 4.4-1 1.2-2.4 2.1-4 2.4-1.6.3-3.2.1-4.6-.7-1.4-.8-2.5-2-3.1-3.5C.9 9.2.8 7.5 1.3 6c.5-1.6 1.4-2.9 2.8-3.8C5.4 1.3 7 .9 8.6 1zm.5 12.9c1.3-.3 2.5-1 3.4-2.1.8-1.1 1.3-2.4 1.2-3.8 0-1.6-.6-3.2-1.7-4.3-1-1-2.2-1.6-3.6-1.7-1.3-.1-2.7.2-3.8 1-1.1.8-1.9 1.9-2.3 3.3-.4 1.3-.4 2.7.2 4 .6 1.3 1.5 2.3 2.7 3 1.2.7 2.6.9 3.9.6zM7.9 7.5L10.3 5l.7.7-2.4 2.5 2.4 2.5-.7.7-2.4-2.5-2.4 2.5-.7-.7 2.4-2.5-2.4-2.5.7-.7 2.4 2.5z"/></svg>
            0
        </div>
        <div class="footerItems">
            <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.56 1h.88l6.54 12.26-.44.74H1.44L1 13.26 7.56 1zM8 2.28L2.28 13H13.7L8 2.28zM8.625 12v-1h-1.25v1h1.25zm-1.25-2V6h1.25v4h-1.25z"/></svg>
            0
        </div>
    </div>
</div>

<style>
.vsCoderoot {
    width: 960px;
    height: 600px;
    margin: 0 auto;
    position: relative;
    box-shadow: 2px 0 1px -2px #cecccc;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
}

.clearfix:after {
    content: "";
    display: table;
    clear: both;
}

.topBarContainer {
    background-color: var(--vscode-titleBar-activeBackground);
    border-bottom: 1px solid var(--vscode-titleBar-border);
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    width: 961.5px;
    height: 26px;
    padding: 5px;
}

.topbarIconsContainer {
    float: left;
}

.topBarTitleContainer {
    color: var(--vscode-titleBar-activeForeground);
    text-align: center;
    margin-right: 41px;
    margin-top: -2px;
}

.topBarActionIcons {
    display: inline-block;
    width: 12px;
    border: 1px solid;
    border-radius: 50%;
    height: 12px;
    margin-left: 3px;
}

.actionSideBarContainer {
    background-color: var(--vscode-activityBar-background);
    width: 5%;
    height: 92%;
    float: left;
    border-right: 1px solid var(--vscode-activityBar-border);
}

.actionSideBarContainer ul {
    list-style: none;
    padding: 0;
    text-align: center;
    margin-top: 5px;
}

.actionSideBarContainer li {
    padding: 9px 0;
}

.actionSideBarContainer li:first-child {
    border-left: 1px solid var(--vscode-activityBar-activeBorder);
    background-color: var(--vscode-activityBar-activeBackground);
}

.filesSideBarContainer {
    background-color: var(--vscode-sideBar-background);
    border-right: 1px solid var(--vscode-sideBar-border);
    width: 24%;
    height: 92%;
    float: left;
}

.filesSideBarHeaderContainer {
    padding: 10px 17px;
}

.filesSideBarHeaderOne {
    font-size: 12px;
    float: left;
}

.filesSideBarHeaderTwo {
    float: right;
}

.filesSideBarListTitle {
    padding: 5px 17px;
    font-size: 12px;
    font-weight: 600;
    color: var(--vscode-sideBarSectionHeader-foreground);
    background-color: var(--vscode-sideBarSectionHeader-background);
}

.fileList {
    color: var(--vscode-sideBar-foreground);
    padding: 5px 35px;
}

.fileList:last-child {
    color: var(--vscode-list-activeSelectionForeground);
    background-color: var(--vscode-list-activeSelectionBackground);
}


.textEditorContainer {
    width: 70%;
    height: 95%;
    float: left;
}

.textEditorHeaderContainer {
    width: 111px;
    background-color: var(--vscode-welcomePage-tileHoverBackground);
    padding: 7px;
}

.textEditorBreadcrumb {
    padding: 3px 0px 3px 14px;
    box-shadow: 0px 2px 3px rgb(185 181 181 / 20%);
}

.textEditorCode {
    /* background-color: var(--vscode-editor-background); */
    height: 320px;
}

.textEditorCode ul {
    list-style-type: auto;
    padding-top: 10px;
    padding-left: 35px;
}

.textEditorCode li::marker {
    color: var(--vscode-editorLineNumber-foreground);
}

.textEditorCode li {
    padding-left: 20px;
}

/* .textEditorCode li:after {
    content: "";
    border: 1px solid var(--vscode-editorCursor-foreground);
    display: inline-block;
    width: 6px;
    height: 14px;
    margin-left: 8px;
    margin-top: -2px;
    vertical-align: middle;
} */

.textEditorCursor {
    border: 1px solid var(--vscode-editorCursor-foreground);
    display: inline-block;
    /* width: 7px; */
    height: 16px;
    margin-left: 1px;
    margin-top: -1px;
    vertical-align: middle;
    animation: blink 1s linear infinite;
}

.closeIcon {
    margin-left: 8px;
}

.terminalContainer {
    border-top: 1px solid var(--vscode-panel-border);
    width: 101%;
}

.terminalContainer ul {
    float: left;
    list-style: none;
    padding: 13px 0px 16px 0px;
}

.activeTerminal {
    color: var(--vscode-panelTitle-activeForeground);
}

.terminalContainer li {
    text-transform: uppercase;
    display: inline-block;
    margin-left: 20px;
    font-size: 12px;
}

.terminalContainer li:not(:first-child) {
    color: var(--vscode-panelTitle-inactiveForeground);
}

.activeTerminal::after {
    content: "";
    display: block;
    width: 60px;
    border-bottom: 1px solid var(--vscode-panelTitle-activeBorder);
    padding-bottom: 7px;
    margin: 0 auto;
}

.terminalText {
    padding-left: 18px;
}

.terminalIcons {
    text-align: end;
    float: right;
    width: 80px;
    height: 21px;
    margin-top: 11px;
}

.terminalIcons svg {
    margin-right: 3px;
}

/* .terminalText::after {
    content: "";
    border: 1px solid var(--vscode-terminalCursor-foreground);
    display: inline-block;
    width: 6px;
    height: 14px;
    margin-left: 8px;
    margin-top: -4px;
    vertical-align: middle;
} */

.terminalCursor {
    border: 1px solid var(--vscode-terminalCursor-foreground);
    display: inline-block;
    width: 7px;
    height: 15px;
    margin-left: 1px;
    margin-top: -4px;
    vertical-align: middle;
    animation: blink 1s linear infinite;
}

@keyframes blink{
    0%{ opacity: 0; }
    50%{ opacity: .5; }
    100%{ opacity: 1; }
}

.terminalText span {
    display: inline-block;
    margin-left: 5px;
    color: var(--vscode-terminal-foreground);
}

.footer {
    border-top: 1px solid var(--vscode-statusBar-border);
    background-color: var(--vscode-statusBar-background);
    color: var(--vscode-statusBar-foreground);
    height: 4%;
    width: 100%;
    position: absolute;
    bottom: 0;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    margin-bottom: -1px;
}

.footerItems {
    display: inline-block;
    padding-left: 1px;
    margin-top: 3px;
    font-size: 13px;
}

.footerItems:first-child {
    margin-left: 14px;
}
</style>