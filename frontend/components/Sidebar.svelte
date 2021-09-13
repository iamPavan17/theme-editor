<!-- 
    * vscodeApi: containes all the apis of vscode.
-->

<!-- Script section -->
<script>
    import { onMount, onDestroy } from "svelte";
    import { fly } from 'svelte/transition';
    export let formatSavedStylesForList;

    let savedSettings = [];

    const onWindowMessage = (event) => {
        const message = event.data;
        switch (message.type) {
            case 'saved-settings': {
                if(message.value) {
                    savedSettings = formatSavedStylesForList(message.value)
                }
                break;
            }
            case 'delete': {
                savedSettings = savedSettings.filter(item => item.title !== message.value);
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
        // closing theme editor view.
        vscodeApi.postMessage({ type: 'closeThemeEditor', value: null });

        window.removeEventListener("message", onWindowMessage);
    });

    const handleRefresh = () => {
        vscodeApi.postMessage({ type: 'getSavedThemeSettings', value: undefined });
    }

    const handleDelete = (title) => {
        vscodeApi.postMessage({ type: 'popToRemove', value: title });
    }

    const handleSelect = (title) => {
        vscodeApi.postMessage({ type: 'selected-theme', value: title });
    }
</script>

<!-- HTML section -->
<div>
    <h2 class="sideBarTitle">
        saved settings 
        <svg on:click={handleRefresh} width="20" height="20" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.681 3H2V2h3.5l.5.5V6H5V4a5 5 0 1 0 4.53-.761l.302-.954A6 6 0 1 1 4.681 3z"/></svg>
    </h2>

    <div class="savedSettingsContainer">
        {#each savedSettings as item}
            <div out:fly={{x:100}} class="itemContainer" on:click={() => handleSelect(item.title)}>
                {item.title}
                <div class="icon" on:click={() => handleDelete(item.title)}>
                    <svg fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path xmlns="http://www.w3.org/2000/svg" d="M7 4C7 2.89543 7.89543 2 9 2H15C16.1046 2 17 2.89543 17 4V6H18.9897C18.9959 5.99994 19.0021 5.99994 19.0083 6H21C21.5523 6 22 6.44772 22 7C22 7.55228 21.5523 8 21 8H19.9311L19.0638 20.1425C18.989 21.1891 18.1182 22 17.0689 22H6.93112C5.88184 22 5.01096 21.1891 4.9362 20.1425L4.06888 8H3C2.44772 8 2 7.55228 2 7C2 6.44772 2.44772 6 3 6H4.99174C4.99795 5.99994 5.00414 5.99994 5.01032 6H7V4ZM9 6H15V4H9V6ZM6.07398 8L6.93112 20H17.0689L17.926 8H6.07398Z" fill="#0D0D0D"></path>
                    </svg>
                </div>
            </div>
        {:else}
            <pre class="noSettings">No Settings found</pre>
        {/each}
    </div>
</div>
