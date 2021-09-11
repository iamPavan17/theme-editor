<script>
</script>

<div>
    <h1>customise theme</h1>
    
    <div class="root">
        <ul>
            <li>
                <label for="favcolor">Select your favorite color:</label>
                <input type="color" id="favcolor" name="favcolor" value="#ff0000">
            </li>
            <li>
                <label for="favcolor">Select your favorite color:</label>
                <input type="color" id="favcolor" name="favcolor" value="#ff0000">
            </li>
            <li>
                <label for="favcolor">Select your favorite color:</label>
                <input type="color" id="favcolor" name="favcolor" value="#ff0000">
            </li>
            <li>
                <label for="favcolor">Select your favorite color:</label>
                <input type="color" id="favcolor" name="favcolor" value="#ff0000">
            </li>
            <li>
                <label for="favcolor">Select your favorite color:</label>
                <input type="color" id="favcolor" name="favcolor" value="#ff0000">
            </li>
            <li>
                <label for="favcolor">Select your favorite color:</label>
                <input type="color" id="favcolor" name="favcolor" value="#ff0000">
            </li>
        </ul>
    </div>
</div>


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

    .root {
        width: 80%;
        border: 1px solid;
        height: 100%;
    }

    ul { 
        list-style: none;
    }

    li { 
        display: inline-block;
        margin-left: 20px;
        margin-bottom: 30px;
    }

    label { 
        display: block;
        margin-bottom: 10px;
    }

</style>