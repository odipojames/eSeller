<script>
    window.__singletons = <?php echo  json_encode($singletons) ; ?>;
</script>

<div>
    <ul class="uk-breadcrumb">
        <li class="uk-active"><span><?php echo $app("i18n")->get('Singletons'); ?></span></li>
    </ul>
</div>

<div riot-view>

    <div if="{ ready }">

        <div class="uk-margin uk-clearfix" if="{ App.Utils.count(singletons) }">

            <div class="uk-form-icon uk-form uk-text-muted">

                <i class="uk-icon-filter"></i>
                <input class="uk-form-large uk-form-blank" type="text" ref="txtfilter" placeholder="<?php echo $app("i18n")->get('Filter singleton...'); ?>" aria-label="<?php echo $app("i18n")->get('Filter singleton...'); ?>" onkeyup="{ updatefilter }">

            </div>

            <?php if ($app->module("cockpit")->hasaccess('singletons', 'create')) { ?>
            <div class="uk-float-right">
                <a class="uk-button uk-button-large uk-button-primary uk-width-1-1" href="<?php $app->route('/singletons/singleton'); ?>"><?php echo $app("i18n")->get('Add Singleton'); ?></a>
            </div>
            <?php } ?>

        </div>

        <div class="uk-margin" if="{groups.length}">

            <ul class="uk-tab uk-flex uk-flex-center uk-noselect">
                <li class="{ !group && 'uk-active'}"><a class="uk-text-capitalize { group && 'uk-text-muted'}" onclick="{ toggleGroup }">{ App.i18n.get('All') }</a></li>
                <li class="{ group==parent.group && 'uk-active'}" each="{group in groups}"><a class="uk-text-capitalize { group!=parent.group && 'uk-text-muted'}" onclick="{ toggleGroup }">{ App.i18n.get(group) }</a></li>
            </ul>
        </div>

        <div class="uk-width-medium-1-1 uk-viewport-height-1-3 uk-container-center uk-text-center uk-flex uk-flex-middle uk-flex-center" if="{ !App.Utils.count(singletons) }">

            <div class="uk-animation-scale">

                <p>
                    <img class="uk-svg-adjust uk-text-muted" src="<?php echo $app->pathToUrl('singletons:icon.svg'); ?>" width="80" height="80" alt="Singleton" data-uk-svg />
                </p>
                <hr>
                <span class="uk-text-large"><strong><?php echo $app("i18n")->get('No singletons'); ?>.</strong>

                <?php if ($app->module("cockpit")->hasaccess('singletons', 'create')) { ?>
                <a href="<?php $app->route('/singletons/singleton'); ?>"><?php echo $app("i18n")->get('Create one'); ?></a></span>
                <?php } ?>

            </div>

        </div>


        <div class="uk-grid uk-grid-match uk-grid-gutter uk-grid-width-1-1 uk-grid-width-medium-1-3 uk-grid-width-large-1-4 uk-grid-width-xlarge-1-5 uk-margin-top">

            <div each="{ singleton,idx in singletons }" show="{ ingroup(singleton.meta) && infilter(singleton.meta) }">

                <div class="uk-panel uk-panel-box uk-panel-card uk-panel-card-hover">

                    <div class="uk-panel-teaser uk-position-relative">
                        <canvas width="600" height="350"></canvas>
                        <a aria-label="{ singleton.label }" href="<?php $app->route('/singletons/form'); ?>/{ singleton.name }" class="uk-position-cover uk-flex uk-flex-middle uk-flex-center">
                            <div class="uk-width-1-4 uk-svg-adjust" style="color:{ (singleton.meta.color) }">
                                <img riot-src="{ singleton.meta.icon ? '<?php echo $app->pathToUrl('assets:app/media/icons/'); ?>'+singleton.meta.icon : '<?php echo $app->pathToUrl('singletons:icon.svg'); ?>'}" alt="icon" data-uk-svg>
                            </div>
                        </a>
                    </div>

                    <div class="uk-grid uk-grid-small">

                        <div data-uk-dropdown="delay:300">

                            <a aria-label="{App.i18n.get('Edit singleton')}" class="uk-icon-cog" style="color: { (singleton.meta.color) }" href="<?php $app->route('/singletons/singleton'); ?>/{ singleton.name }" if="{ singleton.meta.allowed.singleton_edit }"></a>
                            <a class="uk-icon-cog" style="color: { (singleton.meta.color) }" if="{ !singleton.meta.allowed.singleton_edit }"></a>

                            <div class="uk-dropdown">
                                <ul class="uk-nav uk-nav-dropdown">
                                    <li class="uk-nav-header"><?php echo $app("i18n")->get('Actions'); ?></li>
                                    <li><a href="<?php $app->route('/singletons/form'); ?>/{ singleton.name }"><?php echo $app("i18n")->get('Form'); ?></a></li>
                                    <li if="{ singleton.meta.allowed.singleton_edit }" class="uk-nav-divider"></li>
                                    <li if="{ singleton.meta.allowed.singleton_edit }"><a href="<?php $app->route('/singletons/singleton'); ?>/{ singleton.name }"><?php echo $app("i18n")->get('Edit'); ?></a></li>
                                    <?php if ($app->module("cockpit")->hasaccess('singletons', 'delete')) { ?>
                                    <li class="uk-nav-item-danger"><a class="uk-dropdown-close" onclick="{ this.parent.remove }"><?php echo $app("i18n")->get('Delete'); ?></a></li>
                                    <?php } ?>
                                </ul>
                            </div>
                        </div>
                        <div class="uk-flex-item-1 uk-text-center">
                            <a class="uk-text-bold uk-link-muted" href="<?php $app->route('/singletons/form'); ?>/{singleton.name}">{ singleton.label }</a>
                        </div>
                        <div>&nbsp;</div>

                    </div>

                </div>

            </div>

        </div>

    </div>


    <script type="view/script">

        var $this = this;

        this.ready  = true;
        this.singletons = window.__singletons;
        this.groups = [];

        this.singletons.forEach(function(singleton) {

            if (singleton.meta.group) {
                $this.groups.push(singleton.meta.group);
            }
        });

        if (this.groups.length) {
            this.groups = _.uniq(this.groups.sort());
        }

        remove(e, singleton) {

            singleton = e.item.singleton;

            App.ui.confirm("Are you sure?", function() {

                App.request('/singletons/remove_singleton/'+singleton.name, {nc:Math.random()}).then(function(data) {

                    App.ui.notify("Singleton removed", "success");

                    $this.singletons.splice(e.item.idx, 1);

                    $this.groups = [];

                    $this.singletons.forEach(function(singleton) {
                        if (singleton.meta.group) $this.groups.push(singleton.meta.group);
                    });

                    if ($this.groups.length) {
                        $this.groups = _.uniq($this.groups.sort());
                    }

                    $this.update();
                });
            });
        }

        toggleGroup(e) {
            this.group = e.item && e.item.group || false;
        }

        updatefilter(e) {

        }

        ingroup(collection) {
            return this.group ? (this.group == collection.group) : true;
        }

        infilter(singleton, value, name, label) {

            if (!this.refs.txtfilter.value) {
                return true;
            }

            value = this.refs.txtfilter.value.toLowerCase();
            name  = [singleton.name.toLowerCase(), singleton.label.toLowerCase()].join(' ');

            return name.indexOf(value) !== -1;
        }

    </script>

</div>
