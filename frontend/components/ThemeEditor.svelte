<!-- Script section -->
<script>
    import { slide } from "svelte/transition";
    export let convertToHumanForm;

    let hasTouched = false;

    const data = [
		{ id: 1, title: 'titleBar', isOpen: false, data: [
			{ id: 11, styleProp: 'titleBar.activeBackground', value: '' },
			{ id: 12, styleProp: 'titleBar.activeForeground', value: '' },
            { id: 13, styleProp: 'titleBar.border', value: '' },
		] },
		{ id: 2, title: 'activityBar', isOpen: false, data: [
			{ id: 21, styleProp: 'activityBar.foreground', value: '' },
            { id: 22, styleProp: 'activityBar.inactiveForeground', value: '' },
            { id: 23, styleProp: 'activityBar.background', value: '' },
            { id: 24, styleProp: 'activityBar.activeBackground', value: '' },
            { id: 25, styleProp: 'activityBar.border', value: '' },
		] },
        { id: 3, title: 'sideBar', isOpen: false, data: [
			{ id: 31, styleProp: 'sideBar.background', value: '' },
			{ id: 32, styleProp: 'sideBar.foreground', value: '' },
            { id: 33, styleProp: 'sideBarSectionHeader.background', value: '' },
            { id: 34, styleProp: 'sideBarSectionHeader.foreground', value: '' },
            { id: 35, styleProp: 'sideBar.border', value: '' },
            { id: 36, styleProp: 'list.activeSelectionBackground', value: '' },
            { id: 37, styleProp: 'list.activeSelectionForeground', value: '' },
            { id: 38, styleProp: 'list.hoverBackground', value: '' },
            { id: 39, styleProp: 'list.hoverForeground', value: '' },
		] },
        { id: 4, title: 'statusBar', isOpen: false, data: [
			{ id: 41, styleProp: 'statusBar.foreground', value: '' },
			{ id: 42, styleProp: 'statusBar.background', value: '' },
            { id: 43, styleProp: 'statusBar.border', value: '' },
		] },
        { id: 5, title: 'terminal', isOpen: false, data: [
			{ id: 51, styleProp: 'panel.background', value: '' },
			{ id: 52, styleProp: 'panel.border', value: '' },
            { id: 53, styleProp: 'panelTitle.activeBorder', value: '' },
            { id: 54, styleProp: 'panelTitle.activeForeground', value: '' },
            { id: 55, styleProp: 'panelTitle.inactiveForeground', value: '' },
            { id: 56, styleProp: 'terminal.selectionBackground', value: '' },
            { id: 57, styleProp: 'terminalCursor.foreground', value: '' },
            { id: 58, styleProp: 'terminal.foreground', value: '' },
		] },
        { id: 6, title: 'editor', isOpen: false, data: [
			{ id: 61, styleProp: 'editor.background', value: '' },
			{ id: 62, styleProp: 'editorLineNumber.foreground', value: '' },
            { id: 63, styleProp: 'editorCursor.foreground', value: '' },
            { id: 64, styleProp: 'editorError.foreground', value: '' },
            { id: 65, styleProp: 'editorWarning.foreground', value: '' },
            { id: 66, styleProp: 'editorInfo.foreground', value: '' },
            { id: 67, styleProp: 'editor.selectionBackground', value: '' },
		] },
	];
</script>

<!-- HTML section -->
<div>
    <h1 class="test">customise theme</h1>
    <div class="container">
        {#each data as entry}
            <div class="container">
                <button class="accordion" on:click={() => { entry.isOpen = !entry.isOpen; }} aria-expanded={entry.isOpen}>
                    {convertToHumanForm(entry.title)} 
                    <svg style="tran"  width="20" height="20" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 5l7 7-7 7"></path></svg> 
                </button>

                {#if entry.isOpen}
                    <div class="listContainer">
                        <ul transition:slide={{ duration: 300 }}>
                            {#each entry.data as item}
                                <li>
                                    <label for={item.id}>{item.styleProp}:</label>
                                    <input type="color" id={item.id} bind:value={item.value} on:change={() => hasTouched = true}>
                                </li>
                            {/each}
                        </ul>
                    </div>
                {/if}
            </div>
        {/each}
        <pre class="note">Note: Only changed colors will be reflected.</pre>

        <div class="btn-action-container">
            <button disabled={!hasTouched} class:disabled-btn={!hasTouched}>Save</button>
            <button disabled={!hasTouched} class:disabled-btn={!hasTouched}>Apply</button>
        </div>

    </div>
</div>

<!-- Styles section -->
<style>
    h1 { 
        text-transform: uppercase;
        padding: 8px 5px 26px 5px; 
        font-size: 250%;
    }

    h1::after {
        content: "";
        border: 1px solid #ccc;
        width: 10%;
        display: block;
        margin-top: 4px;
        margin-left: 7px;
    }

    .note {
        margin-left: 23px;
    }

    .container {
		margin-left: 17px;
	}

    .disabled-btn {
        opacity: 0.7;
        cursor: not-allowed;
    }

	.listContainer {
		padding-top: 17px;
        height: 100%;
    }

    ul { 
        list-style: none;
    }

    li { 
        display: inline-block;
        margin-left: 26px;
        margin-bottom: 30px;
    }

    label { 
        display: block;
        margin-bottom: 10px;
    }

    .btn-action-container {
        padding: 17px 30px;
        text-align: right;
    }

    .btn-action-container button {
        width: 80px;
        margin-right: 17px;
    }

	.accordion {
		border: none; 
		background: none;
		display: block; 
		color: inherit; 
		font-size: 17px; 
		cursor: pointer; 
		margin: 0; 
		padding-bottom: 0.5em; 
		padding-top: 0.5em;
		text-align: left;
	}

	svg { 
		vertical-align: text-bottom; 
		transition: transform 0.2s ease-in;
	}
	
	[aria-expanded=true] svg { transform: rotate(0.25turn); }
</style>