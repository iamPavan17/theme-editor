<!-- 
    * vscodeApi: containes all the apis of vscode.
    * selectedTheme: selected setting in sidebar.
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
    export let getSelectedColor;
    export let VSCodePreview;

    let hasTouched = false;
    let hasLoadedSavedTheme = false;

    // const assignDefaultColors = (settings) => {
    //     let settingsClone = [...settings];
    //     for(let key in settings) {
    //         let currentSetting = settingsClone[key].data;
    //         for(let i = 0; i < currentSetting.length; i++) {
    //             const bodyStyles = window.getComputedStyle(document.body);
    //             const color = bodyStyles.getPropertyValue(currentSetting[i].cssVar);
    //             currentSetting[i].value = color;
    //         }
    //     }
    //     return settingsClone;
    // }

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
        // data = assignDefaultColors(data);
    }
</script>

<!-- HTML section -->
<div>
    <h1 class="title">customise theme</h1>
    <div class="container">
        {#each data as entry}
            <div class="container">
                <button class="accordion" on:click={() => { entry.isOpen = !entry.isOpen; }} aria-expanded={entry.isOpen} style="background: none;">
                    {convertToHumanForm(entry.title)} 
                    <svg style="tran"  width="20" height="20" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 5l7 7-7 7"></path></svg> 
                </button>

                {#if entry.isOpen}
                    <div class="listContainer">
                        <ul transition:slide={{ duration: 300 }}>
                            {#each entry.data as item}
                                <li>
                                    <!-- <label class:ColorTitle={!item.value} for={item.id}>{item.label}:</label> -->
                                    <label for={item.id}>{item.label}:</label>
                                    <input type="color" id={item.id} bind:value={item.value} on:change={() => hasTouched = true}>
                                </li>
                            {/each}
                        </ul>
                    </div>
                {/if}
            </div>
        {/each}
        <!-- <pre class="note">Note: Labels with * means, there is no default color has set.</pre> -->
        <pre class="note">Note: Only changed color values will be reflected.</pre>

        <div class="btn-action-container">
            <button disabled={!hasTouched && !hasLoadedSavedTheme} class:disabled-btn={!hasTouched && !hasLoadedSavedTheme} on:click={handleResetStyles}>Reset</button>
            <button disabled={!hasTouched} class:disabled-btn={!hasTouched} on:click={handleSaveStyles}>Save</button>
            <button disabled={!hasTouched} class:disabled-btn={!hasTouched} on:click={handleApplyStyles}>Apply</button>
        </div>

    </div>

    <!-- VS Code preview section -->
    <svelte:component this={VSCodePreview} {data} {getSelectedColor}/>
</div>
