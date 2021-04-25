<div>
    <ul class="uk-breadcrumb">
        <li class="uk-active"><span>[mod] <?php echo $app("i18n")->get('Assets'); ?></span></li>
    </ul>
</div>

<div riot-view>
    <cp-assets>
        <script>
            this.on('mount', function(a,b,c,d,e,f,g,h) {
                console.info("this mount", this);
            });
        </script>
    </cp-assets>
</div>
