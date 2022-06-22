'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">crm documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-cfa9c609ef0caf0c5db864c7fca9a615cbeebc16ffda97165575d4e73a109f132f92c46e692ac93745325591d57726f86d3378c85226bc961e347803200994e6"' : 'data-target="#xs-components-links-module-AppModule-cfa9c609ef0caf0c5db864c7fca9a615cbeebc16ffda97165575d4e73a109f132f92c46e692ac93745325591d57726f86d3378c85226bc961e347803200994e6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-cfa9c609ef0caf0c5db864c7fca9a615cbeebc16ffda97165575d4e73a109f132f92c46e692ac93745325591d57726f86d3378c85226bc961e347803200994e6"' :
                                            'id="xs-components-links-module-AppModule-cfa9c609ef0caf0c5db864c7fca9a615cbeebc16ffda97165575d4e73a109f132f92c46e692ac93745325591d57726f86d3378c85226bc961e347803200994e6"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ClientsModule.html" data-type="entity-link" >ClientsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ClientsModule-18c4bc5b83d31286105364b166b1eebf7067ede18f77941be262873f8dd3869e9103f04d1ca2112fe11b5192f3b7c7f8a3eea443d439fce5d22054ff3e2c632f"' : 'data-target="#xs-components-links-module-ClientsModule-18c4bc5b83d31286105364b166b1eebf7067ede18f77941be262873f8dd3869e9103f04d1ca2112fe11b5192f3b7c7f8a3eea443d439fce5d22054ff3e2c632f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ClientsModule-18c4bc5b83d31286105364b166b1eebf7067ede18f77941be262873f8dd3869e9103f04d1ca2112fe11b5192f3b7c7f8a3eea443d439fce5d22054ff3e2c632f"' :
                                            'id="xs-components-links-module-ClientsModule-18c4bc5b83d31286105364b166b1eebf7067ede18f77941be262873f8dd3869e9103f04d1ca2112fe11b5192f3b7c7f8a3eea443d439fce5d22054ff3e2c632f"' }>
                                            <li class="link">
                                                <a href="components/PageAddClientComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageAddClientComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageEditClientComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageEditClientComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageListOrdersComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageListOrdersComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link" >CoreModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/IconsModule.html" data-type="entity-link" >IconsModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LoginModule.html" data-type="entity-link" >LoginModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LoginModule-67a60bceadbd7314dada91c7eb988ef570e296b78eca01e85f4d83c4bdd28b446786003ccdd868fd9eebe2ac7874e10e106c41dce1c817db84a3af08cb95d0d3"' : 'data-target="#xs-components-links-module-LoginModule-67a60bceadbd7314dada91c7eb988ef570e296b78eca01e85f4d83c4bdd28b446786003ccdd868fd9eebe2ac7874e10e106c41dce1c817db84a3af08cb95d0d3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LoginModule-67a60bceadbd7314dada91c7eb988ef570e296b78eca01e85f4d83c4bdd28b446786003ccdd868fd9eebe2ac7874e10e106c41dce1c817db84a3af08cb95d0d3"' :
                                            'id="xs-components-links-module-LoginModule-67a60bceadbd7314dada91c7eb988ef570e296b78eca01e85f4d83c4bdd28b446786003ccdd868fd9eebe2ac7874e10e106c41dce1c817db84a3af08cb95d0d3"' }>
                                            <li class="link">
                                                <a href="components/PageForgotPasswordComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageForgotPasswordComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageResetPasswordComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageResetPasswordComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageSignInComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageSignInComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageSignUpComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageSignUpComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/OrdersModule.html" data-type="entity-link" >OrdersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-OrdersModule-91da6c2cc5d3b066e6464a41c5a88b32381debdd5e44d310f3ee85defdfd5efa69fbf995b00adad1e8cc0a302f59519fcb8840dbc765a90c2c108abeaa26f751"' : 'data-target="#xs-components-links-module-OrdersModule-91da6c2cc5d3b066e6464a41c5a88b32381debdd5e44d310f3ee85defdfd5efa69fbf995b00adad1e8cc0a302f59519fcb8840dbc765a90c2c108abeaa26f751"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-OrdersModule-91da6c2cc5d3b066e6464a41c5a88b32381debdd5e44d310f3ee85defdfd5efa69fbf995b00adad1e8cc0a302f59519fcb8840dbc765a90c2c108abeaa26f751"' :
                                            'id="xs-components-links-module-OrdersModule-91da6c2cc5d3b066e6464a41c5a88b32381debdd5e44d310f3ee85defdfd5efa69fbf995b00adad1e8cc0a302f59519fcb8840dbc765a90c2c108abeaa26f751"' }>
                                            <li class="link">
                                                <a href="components/PageAddOrderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageAddOrderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageEditOrderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageEditOrderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageListOrdersComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageListOrdersComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PageNotFoundModule.html" data-type="entity-link" >PageNotFoundModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PageNotFoundModule-3c893e191c1ad9a1b359d878927d0ecc6b38b0c732938f694705e0730e3a8a20f4fbeca08f9da5913e958b383576a6bc46c731c36024617fcc17c34eaef864da"' : 'data-target="#xs-components-links-module-PageNotFoundModule-3c893e191c1ad9a1b359d878927d0ecc6b38b0c732938f694705e0730e3a8a20f4fbeca08f9da5913e958b383576a6bc46c731c36024617fcc17c34eaef864da"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PageNotFoundModule-3c893e191c1ad9a1b359d878927d0ecc6b38b0c732938f694705e0730e3a8a20f4fbeca08f9da5913e958b383576a6bc46c731c36024617fcc17c34eaef864da"' :
                                            'id="xs-components-links-module-PageNotFoundModule-3c893e191c1ad9a1b359d878927d0ecc6b38b0c732938f694705e0730e3a8a20f4fbeca08f9da5913e958b383576a6bc46c731c36024617fcc17c34eaef864da"' }>
                                            <li class="link">
                                                <a href="components/PageNotFoundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageNotFoundComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TemplatesModule.html" data-type="entity-link" >TemplatesModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UiModule.html" data-type="entity-link" >UiModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});