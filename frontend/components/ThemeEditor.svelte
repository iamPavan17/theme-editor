<!-- 
    * vscodeApi: is coming from ThemeEditorPanel. 
-->

<!-- Script section -->
<script>
    import { slide } from "svelte/transition";
    import { onMount, onDestroy } from "svelte";
    export let convertToHumanForm;
    export let formatStylings;
    export let defaultThemeSettings;
    export let assignSelectThemeValues;
    export let resetToDefaultSettings;

    let hasTouched = false;
    let hasLoadedSavedTheme = false;

    let data = defaultThemeSettings;

    const onWindowMessage = (event) => {
        const message = event.data;
        switch (message.type) {
            case 'selectedTheme': {
                data = assignSelectThemeValues(data, message.value);
                hasLoadedSavedTheme = true;
                break;
            }
        }
    }

    onMount(() => {
        // Setting a title for the panel;
        vscodeApi.postMessage({ type: 'setTitle', value: selectedTheme });

        // Getting the themeSettings style obj
        vscodeApi.postMessage({ type: 'getSelectedTheme', value: selectedTheme });

        window.addEventListener("message", onWindowMessage);
    });

    onDestroy(() => { 
        window.removeEventListener("message", onWindowMessage);
    });

    // Apply stylings
    const handleApplyStyles = () => { 
        vscodeApi.postMessage({ type: 'apply', value: formatStylings(data) });
    }

    // Saving stylings
    const handleSaveStyles = () => { 
        if(hasLoadedSavedTheme) {
            vscodeApi.postMessage({ type: 'saveExisting', value: formatStylings(data), savedTheme: selectedTheme });
        } else {
            vscodeApi.postMessage({ type: 'save', value: formatStylings(data) });
        }
    }

    // Resetting stylings to default
    const handleResetStyles = () => {
        vscodeApi.postMessage({ type: 'setTitle', value: "ThemeEditor" });
        hasTouched = false;
        hasLoadedSavedTheme = false;
        data = resetToDefaultSettings(data);
    }

</script>

<!-- HTML section -->
<div>
    <h1>customise theme</h1>
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
            <button disabled={!hasTouched && !hasLoadedSavedTheme} class:disabled-btn={!hasTouched && !hasLoadedSavedTheme} on:click={handleResetStyles}>Reset</button>
            <button disabled={!hasTouched} class:disabled-btn={!hasTouched} on:click={handleSaveStyles}>Save</button>
            <button disabled={!hasTouched} class:disabled-btn={!hasTouched} on:click={handleApplyStyles}>Apply</button>
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
        margin-top: 10px;
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