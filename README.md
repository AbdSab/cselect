# cselect
Customized select tag made easy

Create a select tag with your own still.

### Example usage
Add this your div with exact same classes as in the example below.

It will automatically generate an input with name based on the attribute **data-name** on the div
```html
<form method="get">
    <div class="cselect" data-name="toto">
        <div class="cselect-text">
          Select country
        </div>
        <div class="cselect-icon">
            <img src="https://image.flaticon.com/icons/svg/25/25623.svg" />
        </div>
        <div class="cselect-values">
          <div data-value="1">One</div>
          <div data-value="2">Two</div>
        </div>
      </div>
</form>
```

Include the script at the end of the body.
```html
<script src="https://cdn.jsdelivr.net/gh/AbdSab/cselect@master/lib/index.js"></script>
```

