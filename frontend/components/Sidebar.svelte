<script>
    import { onMount, onDestroy } from "svelte";
    export let formatSavedStylesForList;

    let savedSettings = [];

    const onWindowMessage = (event) => {
        const message = event.data;
        switch (message.type) {
            case 'saved-settings': 
                if(message.value) {
                    savedSettings = formatSavedStylesForList(message.value)
                }
        }
    }

    onMount(() => {
        // rendering theme editor view.
        vscodeApi.postMessage({ type: 'loadThemeEditor', value: null });

        // getting saved theme settings.
        vscodeApi.postMessage({ type: 'getSavedThemeSettings', value: undefined });
        
        window.addEventListener("message", onWindowMessage);
    });

    onDestroy(() => { 
        window.removeEventListener("message", onWindowMessage);
    });

    const handleRefresh = () => {
        vscodeApi.postMessage({ type: 'getSavedThemeSettings', value: undefined });
    }

</script>

<div>
    <h2>
        saved settings 
        <div class="reload-icon" on:click={handleRefresh}>
            <svg width="20" height="20" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.681 3H2V2h3.5l.5.5V6H5V4a5 5 0 1 0 4.53-.761l.302-.954A6 6 0 1 1 4.681 3z"/></svg>
        </div>
    </h2>
    {#each savedSettings as item}
        <p>{item.title}</p>
    {:else}
        <p>No Settings found</p>
    {/each}
</div>

<style>
    h2 {
        font-size: 17px;
        font-weight: 300;
        text-align: center;
        text-transform: uppercase;
        margin: 20px 0px;
    }

    h2::after {
        content: "";
        display: block;
        width: 71px;
        border-bottom: 1px solid #ccc;
        margin: 0 auto;
        padding-top: 3px;
    }

    p {
        text-align: center;
        padding: 10px 0px;
        border: 1px solid;
        cursor: pointer;
    }

    .reload-icon {
        display: inline-block;
        margin-left: 17px;
        cursor: pointer;
    }

    .reload-icon svg {
        padding-top: 1px;
        vertical-align: bottom;
    }
</style>