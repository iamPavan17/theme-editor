<!-- Script section -->
<script>
    import { slide } from "svelte/transition";
    export let convertHumanForm;

    const data = [
		{ id: 1, title: 'titleBar', isOpen: false, data: [
			{ id: 12, styleProp: 'activeBackground', value: '#ccc' },
			{ id: 13, styleProp: 'activeForeground', value: '#ccc' }
		] },
		{ id: 2, title: 'activityBar', isOpen: false, data: [
			{ id: 21, styleProp: 'border', value: '#ccc' },
		] }
	];
</script>

<!-- HTML section -->
<div>
    <h1>customise theme</h1>
    <div class="container">
        {#each data as entry}
            <div class="container">
                <button on:click={() => { entry.isOpen = !entry.isOpen; }} aria-expanded={entry.isOpen}>
                    {convertHumanForm(entry.title)} 
                    <svg style="tran"  width="20" height="20" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 5l7 7-7 7"></path></svg> 
                </button>

                {#if entry.isOpen}
                    <div class="listContainer">
                        <ul transition:slide={{ duration: 300 }}>
                            {#each entry.data as item}
                                <li>
                                    <label for="favcolor">{item.styleProp}:</label>
                                    <input type="color" id="favcolor" name="favcolor" bind:value={item.value}>
                                </li>
                            {/each}
                        </ul>
                    </div>
                {/if}
            </div>
        {/each}
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

    .container {
		margin-left: 17px;
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

	button {
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