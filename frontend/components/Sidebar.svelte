<script>
    import { onMount, onDestroy } from "svelte";
    import { fly } from 'svelte/transition';
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

    const handleDelete = (title) => {
        savedSettings = savedSettings.filter(item => item.title !== title);
    }

</script>

<div>
    <h2>
        saved settings 
        <svg on:click={handleRefresh} width="20" height="20" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.681 3H2V2h3.5l.5.5V6H5V4a5 5 0 1 0 4.53-.761l.302-.954A6 6 0 1 1 4.681 3z"/></svg>
    </h2>

    <div class="savedSettingsContainer">
        {#each savedSettings as item}
            <div out:fly={{x:100}} class="itemContainer">
                {item.title}
                <div class="icon" on:click={() => handleDelete(item.title)}>
                    <svg fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path xmlns="http://www.w3.org/2000/svg" d="M7 4C7 2.89543 7.89543 2 9 2H15C16.1046 2 17 2.89543 17 4V6H18.9897C18.9959 5.99994 19.0021 5.99994 19.0083 6H21C21.5523 6 22 6.44772 22 7C22 7.55228 21.5523 8 21 8H19.9311L19.0638 20.1425C18.989 21.1891 18.1182 22 17.0689 22H6.93112C5.88184 22 5.01096 21.1891 4.9362 20.1425L4.06888 8H3C2.44772 8 2 7.55228 2 7C2 6.44772 2.44772 6 3 6H4.99174C4.99795 5.99994 5.00414 5.99994 5.01032 6H7V4ZM9 6H15V4H9V6ZM6.07398 8L6.93112 20H17.0689L17.926 8H6.07398Z" fill="#0D0D0D"></path>
                    </svg>
                </div>
            </div>
        {:else}
            <pre>No Settings found</pre>
        {/each}
    </div>
</div>

<style>
    h2 {
        font-size: 17px;
        font-weight: 300;
        text-align: center;
        text-transform: uppercase;
        margin: 20px 0px;
    }

    h2::before {
        content: "";
        display: block;
        width: 90%;
        border-top: 1px solid #e6e3e3;
        margin: 0 auto;
        padding-top: 8px;
    }

    h2::after {
        content: "";
        display: block;
        width: 90%;
        border-bottom: 1px solid #e6e3e3;
        margin: 0 auto;
        padding-top: 7px;
    }

    h2 svg {
        margin-left: 17px;
        cursor: pointer;
        padding-top: 1px;
        vertical-align: bottom;
    }

    .itemContainer {
        text-align: center;
		border-top: 1px solid transparent;
		border-bottom: 1px solid transparent;
		transition: border-top 0.2s, border-bottom 0.2s;
		padding: 10px;
		position: relative;
        font-size: 16px;
        font-weight: 200;
        margin-bottom: 2px;
        cursor: pointer;
    }

    .itemContainer:hover {
        border-top: 1px solid rgba(212, 212, 212, 0.671);
		border-bottom: 1px solid rgba(212, 212, 212, 0.671);
    }

    .icon {
        cursor: default;
		position: absolute;
		right: 0;
		top: 0;
		text-align: end;
        margin-top: 6px;
        margin-right: 17px;
	}

    .icon svg {
        width: 16px;
    }

    pre {
        text-align: center;
    }
</style>
