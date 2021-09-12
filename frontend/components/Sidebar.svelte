<script>
    import { onMount } from "svelte";

    onMount(() => {
        /** 
         * vscodeApi: is coming from SidebarProvider. 
         * On mount rendering theme editor view.
        */
        vscodeApi.postMessage({ type: 'loadThemeEditor', value: null });
    });

    let savedSettings = [{
        title: 'Item A'
    }];
</script>

<div>
    <h2>saved settings</h2>

    {#each savedSettings as item}
        <p>{item.title}</p>
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
</style>