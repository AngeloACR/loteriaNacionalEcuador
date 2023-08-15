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
                    <a href="index.html" data-type="index-link">loteria-nacional-front documentation</a>
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
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AdministracionModule.html" data-type="entity-link" >AdministracionModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AdministracionModule-227b42d1b98ab7854773d078f7703ffcf05c384fcfb306d97219d2d2dfa8aed6b766d58fddd4c6b736151e066e55c4e515963cbd13709888066085a60a46ef0d"' : 'data-bs-target="#xs-components-links-module-AdministracionModule-227b42d1b98ab7854773d078f7703ffcf05c384fcfb306d97219d2d2dfa8aed6b766d58fddd4c6b736151e066e55c4e515963cbd13709888066085a60a46ef0d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AdministracionModule-227b42d1b98ab7854773d078f7703ffcf05c384fcfb306d97219d2d2dfa8aed6b766d58fddd4c6b736151e066e55c4e515963cbd13709888066085a60a46ef0d"' :
                                            'id="xs-components-links-module-AdministracionModule-227b42d1b98ab7854773d078f7703ffcf05c384fcfb306d97219d2d2dfa8aed6b766d58fddd4c6b736151e066e55c4e515963cbd13709888066085a60a46ef0d"' }>
                                            <li class="link">
                                                <a href="components/AdministracionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdministracionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PopupPromoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PopupPromoComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AdministracionRoutingModule.html" data-type="entity-link" >AdministracionRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-6067b6b8031203b2c2a091107e7f6f47e128241668e18e66c9d480835e4990f3a9ee10e210958a83ee87b62b725ad54fdeda87f6d937b457a593228ca2b2eefc"' : 'data-bs-target="#xs-components-links-module-AppModule-6067b6b8031203b2c2a091107e7f6f47e128241668e18e66c9d480835e4990f3a9ee10e210958a83ee87b62b725ad54fdeda87f6d937b457a593228ca2b2eefc"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-6067b6b8031203b2c2a091107e7f6f47e128241668e18e66c9d480835e4990f3a9ee10e210958a83ee87b62b725ad54fdeda87f6d937b457a593228ca2b2eefc"' :
                                            'id="xs-components-links-module-AppModule-6067b6b8031203b2c2a091107e7f6f47e128241668e18e66c9d480835e4990f3a9ee10e210958a83ee87b62b725ad54fdeda87f6d937b457a593228ca2b2eefc"' }>
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
                                <a href="modules/BingazoModule.html" data-type="entity-link" >BingazoModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-BingazoModule-de543c81341f16eb66f038c06c69155ef8c6cc188ede904e3d2ccfea99d4af08c1de34d929071933c0745b667b7e4346f5cbf71dea3ee0f39c03ad7220d10f4f"' : 'data-bs-target="#xs-components-links-module-BingazoModule-de543c81341f16eb66f038c06c69155ef8c6cc188ede904e3d2ccfea99d4af08c1de34d929071933c0745b667b7e4346f5cbf71dea3ee0f39c03ad7220d10f4f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-BingazoModule-de543c81341f16eb66f038c06c69155ef8c6cc188ede904e3d2ccfea99d4af08c1de34d929071933c0745b667b7e4346f5cbf71dea3ee0f39c03ad7220d10f4f"' :
                                            'id="xs-components-links-module-BingazoModule-de543c81341f16eb66f038c06c69155ef8c6cc188ede904e3d2ccfea99d4af08c1de34d929071933c0745b667b7e4346f5cbf71dea3ee0f39c03ad7220d10f4f"' }>
                                            <li class="link">
                                                <a href="components/BoletinComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BoletinComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ConsultaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConsultaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SorteoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SorteoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TicketConsultaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TicketConsultaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TicketVentasComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TicketVentasComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UltimoResultadoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UltimoResultadoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/VentaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VentaComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CodigosPromocionalesModule.html" data-type="entity-link" >CodigosPromocionalesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-CodigosPromocionalesModule-a0392046d9dab0e0891a24ff5b29a5c71f9c1c29c8dd8805448f781d01c8fb1fc14287c4af6bba4314eb65670734fdc84db526562a0252ab4be1e9958f5df9b2"' : 'data-bs-target="#xs-components-links-module-CodigosPromocionalesModule-a0392046d9dab0e0891a24ff5b29a5c71f9c1c29c8dd8805448f781d01c8fb1fc14287c4af6bba4314eb65670734fdc84db526562a0252ab4be1e9958f5df9b2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CodigosPromocionalesModule-a0392046d9dab0e0891a24ff5b29a5c71f9c1c29c8dd8805448f781d01c8fb1fc14287c4af6bba4314eb65670734fdc84db526562a0252ab4be1e9958f5df9b2"' :
                                            'id="xs-components-links-module-CodigosPromocionalesModule-a0392046d9dab0e0891a24ff5b29a5c71f9c1c29c8dd8805448f781d01c8fb1fc14287c4af6bba4314eb65670734fdc84db526562a0252ab4be1e9958f5df9b2"' }>
                                            <li class="link">
                                                <a href="components/CodigosPromocionalesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CodigosPromocionalesComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CodigosPromocionalesRoutingModule.html" data-type="entity-link" >CodigosPromocionalesRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ConsultasModule.html" data-type="entity-link" >ConsultasModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ConsultasModule-d2a29fcf4e548f8fc31ff59fa2cdabb708bc225d8710bedc4b3fc3faf3c02d53f8efa4cf79095c1f7cc635bfe7ba65106ec0a089550b02bbd257bf95ad5f20e9"' : 'data-bs-target="#xs-components-links-module-ConsultasModule-d2a29fcf4e548f8fc31ff59fa2cdabb708bc225d8710bedc4b3fc3faf3c02d53f8efa4cf79095c1f7cc635bfe7ba65106ec0a089550b02bbd257bf95ad5f20e9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ConsultasModule-d2a29fcf4e548f8fc31ff59fa2cdabb708bc225d8710bedc4b3fc3faf3c02d53f8efa4cf79095c1f7cc635bfe7ba65106ec0a089550b02bbd257bf95ad5f20e9"' :
                                            'id="xs-components-links-module-ConsultasModule-d2a29fcf4e548f8fc31ff59fa2cdabb708bc225d8710bedc4b3fc3faf3c02d53f8efa4cf79095c1f7cc635bfe7ba65106ec0a089550b02bbd257bf95ad5f20e9"' }>
                                            <li class="link">
                                                <a href="components/BingazoBoletinComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BingazoBoletinComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BingazoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BingazoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ConsultasComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConsultasComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FacilottoBoletinComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FacilottoBoletinComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FacilottoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FacilottoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoteriaBoletinComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoteriaBoletinComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoteriaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoteriaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LottoBoletinComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LottoBoletinComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LottoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LottoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MenuComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MillonariaBoletinComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MillonariaBoletinComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MillonariaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MillonariaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/Pega3BoletinComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Pega3BoletinComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PozoBoletinComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PozoBoletinComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PozoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PozoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ResultadoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ResultadoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ResultadosComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ResultadosComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RevanchaBoletinComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RevanchaBoletinComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RevanchaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RevanchaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UltimosResultadosComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UltimosResultadosComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ConsultasRoutingModule.html" data-type="entity-link" >ConsultasRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/FacilottoModule.html" data-type="entity-link" >FacilottoModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/JuegosModule.html" data-type="entity-link" >JuegosModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LoteriaModule.html" data-type="entity-link" >LoteriaModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LottoModule.html" data-type="entity-link" >LottoModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MillonariaModule.html" data-type="entity-link" >MillonariaModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/Pega3Module.html" data-type="entity-link" >Pega3Module</a>
                            </li>
                            <li class="link">
                                <a href="modules/PozoModule.html" data-type="entity-link" >PozoModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PozoRevanchaModule.html" data-type="entity-link" >PozoRevanchaModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PublicModule.html" data-type="entity-link" >PublicModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-PublicModule-57526bf33b0390df7c6d4fe2b02a0a1cb425923666e5e72cc02f32aa3e9d3e7ff51ebcc7670bcbd273fe6218fddde510976ee433bc396a21e62b862412d4a2a6"' : 'data-bs-target="#xs-components-links-module-PublicModule-57526bf33b0390df7c6d4fe2b02a0a1cb425923666e5e72cc02f32aa3e9d3e7ff51ebcc7670bcbd273fe6218fddde510976ee433bc396a21e62b862412d4a2a6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PublicModule-57526bf33b0390df7c6d4fe2b02a0a1cb425923666e5e72cc02f32aa3e9d3e7ff51ebcc7670bcbd273fe6218fddde510976ee433bc396a21e62b862412d4a2a6"' :
                                            'id="xs-components-links-module-PublicModule-57526bf33b0390df7c6d4fe2b02a0a1cb425923666e5e72cc02f32aa3e9d3e7ff51ebcc7670bcbd273fe6218fddde510976ee433bc396a21e62b862412d4a2a6"' }>
                                            <li class="link">
                                                <a href="components/PublicComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PublicComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PublicRoutingModule.html" data-type="entity-link" >PublicRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SharedModule-eb094f9cfedd57653e38b95ea167bae2043b87197048d9226d0b00faf788665109a809bdb1cb668c4dd6bbe52c5f1065f48af8c4b5d36858e1523d490c8d7c7f"' : 'data-bs-target="#xs-components-links-module-SharedModule-eb094f9cfedd57653e38b95ea167bae2043b87197048d9226d0b00faf788665109a809bdb1cb668c4dd6bbe52c5f1065f48af8c4b5d36858e1523d490c8d7c7f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-eb094f9cfedd57653e38b95ea167bae2043b87197048d9226d0b00faf788665109a809bdb1cb668c4dd6bbe52c5f1065f48af8c4b5d36858e1523d490c8d7c7f"' :
                                            'id="xs-components-links-module-SharedModule-eb094f9cfedd57653e38b95ea167bae2043b87197048d9226d0b00faf788665109a809bdb1cb668c4dd6bbe52c5f1065f48af8c4b5d36858e1523d490c8d7c7f"' }>
                                            <li class="link">
                                                <a href="components/ErrorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ErrorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MobileHeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MobileHeaderComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#directives-links-module-SharedModule-eb094f9cfedd57653e38b95ea167bae2043b87197048d9226d0b00faf788665109a809bdb1cb668c4dd6bbe52c5f1065f48af8c4b5d36858e1523d490c8d7c7f"' : 'data-bs-target="#xs-directives-links-module-SharedModule-eb094f9cfedd57653e38b95ea167bae2043b87197048d9226d0b00faf788665109a809bdb1cb668c4dd6bbe52c5f1065f48af8c4b5d36858e1523d490c8d7c7f"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-SharedModule-eb094f9cfedd57653e38b95ea167bae2043b87197048d9226d0b00faf788665109a809bdb1cb668c4dd6bbe52c5f1065f48af8c4b5d36858e1523d490c8d7c7f"' :
                                        'id="xs-directives-links-module-SharedModule-eb094f9cfedd57653e38b95ea167bae2043b87197048d9226d0b00faf788665109a809bdb1cb668c4dd6bbe52c5f1065f48af8c4b5d36858e1523d490c8d7c7f"' }>
                                        <li class="link">
                                            <a href="directives/AutoTabDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AutoTabDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/PositioningDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PositioningDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/StylePaginatorDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StylePaginatorDirective</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#pipes-links-module-SharedModule-eb094f9cfedd57653e38b95ea167bae2043b87197048d9226d0b00faf788665109a809bdb1cb668c4dd6bbe52c5f1065f48af8c4b5d36858e1523d490c8d7c7f"' : 'data-bs-target="#xs-pipes-links-module-SharedModule-eb094f9cfedd57653e38b95ea167bae2043b87197048d9226d0b00faf788665109a809bdb1cb668c4dd6bbe52c5f1065f48af8c4b5d36858e1523d490c8d7c7f"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-SharedModule-eb094f9cfedd57653e38b95ea167bae2043b87197048d9226d0b00faf788665109a809bdb1cb668c4dd6bbe52c5f1065f48af8c4b5d36858e1523d490c8d7c7f"' :
                                            'id="xs-pipes-links-module-SharedModule-eb094f9cfedd57653e38b95ea167bae2043b87197048d9226d0b00faf788665109a809bdb1cb668c4dd6bbe52c5f1065f48af8c4b5d36858e1523d490c8d7c7f"' }>
                                            <li class="link">
                                                <a href="pipes/PaginatePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PaginatePipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/VentasModule.html" data-type="entity-link" >VentasModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-VentasModule-d0cdf53161b3581e8a285d2d88828f4614e3b0a5aa5b9cced513fc3614b64e7681280743262e76c0bc39f9dbc2bca2bd50b3fb09379e3bcfecd6a7c722875f8e"' : 'data-bs-target="#xs-components-links-module-VentasModule-d0cdf53161b3581e8a285d2d88828f4614e3b0a5aa5b9cced513fc3614b64e7681280743262e76c0bc39f9dbc2bca2bd50b3fb09379e3bcfecd6a7c722875f8e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-VentasModule-d0cdf53161b3581e8a285d2d88828f4614e3b0a5aa5b9cced513fc3614b64e7681280743262e76c0bc39f9dbc2bca2bd50b3fb09379e3bcfecd6a7c722875f8e"' :
                                            'id="xs-components-links-module-VentasModule-d0cdf53161b3581e8a285d2d88828f4614e3b0a5aa5b9cced513fc3614b64e7681280743262e76c0bc39f9dbc2bca2bd50b3fb09379e3bcfecd6a7c722875f8e"' }>
                                            <li class="link">
                                                <a href="components/BotonDeJuegoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BotonDeJuegoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CarritoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CarritoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ConfirmacionDeVentaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConfirmacionDeVentaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DescripcionDeVentaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DescripcionDeVentaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DetalleDeVentaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DetalleDeVentaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DetalleSorteoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DetalleSorteoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FloatingMenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FloatingMenuComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InstantaneaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InstantaneaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InstantaneasComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InstantaneasComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MenuBoxComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MenuBoxComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MenuHeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MenuHeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SaldoInsuficienteComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SaldoInsuficienteComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/VentaCanceladaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VentaCanceladaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/VentasComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VentasComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#directives-links-module-VentasModule-d0cdf53161b3581e8a285d2d88828f4614e3b0a5aa5b9cced513fc3614b64e7681280743262e76c0bc39f9dbc2bca2bd50b3fb09379e3bcfecd6a7c722875f8e"' : 'data-bs-target="#xs-directives-links-module-VentasModule-d0cdf53161b3581e8a285d2d88828f4614e3b0a5aa5b9cced513fc3614b64e7681280743262e76c0bc39f9dbc2bca2bd50b3fb09379e3bcfecd6a7c722875f8e"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-VentasModule-d0cdf53161b3581e8a285d2d88828f4614e3b0a5aa5b9cced513fc3614b64e7681280743262e76c0bc39f9dbc2bca2bd50b3fb09379e3bcfecd6a7c722875f8e"' :
                                        'id="xs-directives-links-module-VentasModule-d0cdf53161b3581e8a285d2d88828f4614e3b0a5aa5b9cced513fc3614b64e7681280743262e76c0bc39f9dbc2bca2bd50b3fb09379e3bcfecd6a7c722875f8e"' }>
                                        <li class="link">
                                            <a href="directives/AgregarTicketDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AgregarTicketDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/BorrarTicketDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BorrarTicketDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/BuscarNumeroDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BuscarNumeroDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/VentasRoutingModule.html" data-type="entity-link" >VentasRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#components-links"' :
                            'data-bs-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/BingazoComponent-1.html" data-type="entity-link" >BingazoComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/BoletinComponent-1.html" data-type="entity-link" >BoletinComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/BoletinComponent-2.html" data-type="entity-link" >BoletinComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/BoletinComponent-3.html" data-type="entity-link" >BoletinComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/BoletinComponent-4.html" data-type="entity-link" >BoletinComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/BoletinComponent-5.html" data-type="entity-link" >BoletinComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/BoletinComponent-6.html" data-type="entity-link" >BoletinComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/BoletinComponent-7.html" data-type="entity-link" >BoletinComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ConfirmacionDeVentaComponent-1.html" data-type="entity-link" >ConfirmacionDeVentaComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ConsultaComponent-1.html" data-type="entity-link" >ConsultaComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ConsultaComponent-2.html" data-type="entity-link" >ConsultaComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ConsultaComponent-3.html" data-type="entity-link" >ConsultaComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ConsultaComponent-4.html" data-type="entity-link" >ConsultaComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ConsultaComponent-5.html" data-type="entity-link" >ConsultaComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ConsultaComponent-6.html" data-type="entity-link" >ConsultaComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ConsultaComponent-7.html" data-type="entity-link" >ConsultaComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/HomeComponent-1.html" data-type="entity-link" >HomeComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LoteriaComponent-1.html" data-type="entity-link" >LoteriaComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LottoComponent-1.html" data-type="entity-link" >LottoComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MillonariaBoletinComponent-1.html" data-type="entity-link" >MillonariaBoletinComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MillonariaComponent-1.html" data-type="entity-link" >MillonariaComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PopupPromoComponent-1.html" data-type="entity-link" >PopupPromoComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PozoComponent-1.html" data-type="entity-link" >PozoComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SorteoComponent-1.html" data-type="entity-link" >SorteoComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SorteoComponent-2.html" data-type="entity-link" >SorteoComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SorteoComponent-3.html" data-type="entity-link" >SorteoComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SorteoComponent-4.html" data-type="entity-link" >SorteoComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SorteoComponent-5.html" data-type="entity-link" >SorteoComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SorteoComponent-6.html" data-type="entity-link" >SorteoComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SorteoComponent-7.html" data-type="entity-link" >SorteoComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TicketConsultaComponent-1.html" data-type="entity-link" >TicketConsultaComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TicketConsultaComponent-2.html" data-type="entity-link" >TicketConsultaComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TicketConsultaComponent-3.html" data-type="entity-link" >TicketConsultaComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TicketConsultaComponent-4.html" data-type="entity-link" >TicketConsultaComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TicketConsultaComponent-5.html" data-type="entity-link" >TicketConsultaComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TicketConsultaComponent-6.html" data-type="entity-link" >TicketConsultaComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TicketConsultaComponent-7.html" data-type="entity-link" >TicketConsultaComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TicketVentasComponent-1.html" data-type="entity-link" >TicketVentasComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TicketVentasComponent-2.html" data-type="entity-link" >TicketVentasComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TicketVentasComponent-3.html" data-type="entity-link" >TicketVentasComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TicketVentasComponent-4.html" data-type="entity-link" >TicketVentasComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TicketVentasComponent-5.html" data-type="entity-link" >TicketVentasComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TicketVentasComponent-6.html" data-type="entity-link" >TicketVentasComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TicketVentasComponent-7.html" data-type="entity-link" >TicketVentasComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/UltimoResultadoComponent-1.html" data-type="entity-link" >UltimoResultadoComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/UltimoResultadoComponent-2.html" data-type="entity-link" >UltimoResultadoComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/UltimoResultadoComponent-3.html" data-type="entity-link" >UltimoResultadoComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/UltimoResultadoComponent-4.html" data-type="entity-link" >UltimoResultadoComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/UltimoResultadoComponent-5.html" data-type="entity-link" >UltimoResultadoComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/UltimoResultadoComponent-6.html" data-type="entity-link" >UltimoResultadoComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/UltimoResultadoComponent-7.html" data-type="entity-link" >UltimoResultadoComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/VentaComponent-1.html" data-type="entity-link" >VentaComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/VentaComponent-2.html" data-type="entity-link" >VentaComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/VentaComponent-3.html" data-type="entity-link" >VentaComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/VentaComponent-4.html" data-type="entity-link" >VentaComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/VentaComponent-5.html" data-type="entity-link" >VentaComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/VentaComponent-6.html" data-type="entity-link" >VentaComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/VentaComponent-7.html" data-type="entity-link" >VentaComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/VentaFinalizadaComponent.html" data-type="entity-link" >VentaFinalizadaComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/VentaFinalizadaComponent-1.html" data-type="entity-link" >VentaFinalizadaComponent</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AdministracionService.html" data-type="entity-link" >AdministracionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CarritoService.html" data-type="entity-link" >CarritoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CodigosPromocionalesService.html" data-type="entity-link" >CodigosPromocionalesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ConsultaService.html" data-type="entity-link" >ConsultaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ConsultaService-1.html" data-type="entity-link" >ConsultaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ConsultaService-2.html" data-type="entity-link" >ConsultaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ConsultaService-3.html" data-type="entity-link" >ConsultaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ConsultaService-4.html" data-type="entity-link" >ConsultaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ConsultaService-5.html" data-type="entity-link" >ConsultaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ConsultaService-6.html" data-type="entity-link" >ConsultaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ConsultaService-7.html" data-type="entity-link" >ConsultaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ConsultasService.html" data-type="entity-link" >ConsultasService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PagosService.html" data-type="entity-link" >PagosService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/VentaService.html" data-type="entity-link" >VentaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/VentaService-1.html" data-type="entity-link" >VentaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/VentaService-2.html" data-type="entity-link" >VentaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/VentaService-3.html" data-type="entity-link" >VentaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/VentaService-4.html" data-type="entity-link" >VentaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/VentaService-5.html" data-type="entity-link" >VentaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/VentaService-6.html" data-type="entity-link" >VentaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/VentaService-7.html" data-type="entity-link" >VentaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/VentasService.html" data-type="entity-link" >VentasService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/animales.html" data-type="entity-link" >animales</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Carrito.html" data-type="entity-link" >Carrito</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PageObject.html" data-type="entity-link" >PageObject</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/sorteo.html" data-type="entity-link" >sorteo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/sorteo-1.html" data-type="entity-link" >sorteo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/sorteo-2.html" data-type="entity-link" >sorteo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/sorteo-3.html" data-type="entity-link" >sorteo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/sorteo-4.html" data-type="entity-link" >sorteo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/sorteo-5.html" data-type="entity-link" >sorteo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/sorteo-6.html" data-type="entity-link" >sorteo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/sorteo-7.html" data-type="entity-link" >sorteo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/sorteo-8.html" data-type="entity-link" >sorteo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Ticket.html" data-type="entity-link" >Ticket</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Ticket-1.html" data-type="entity-link" >Ticket</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Ticket-2.html" data-type="entity-link" >Ticket</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Ticket-3.html" data-type="entity-link" >Ticket</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Ticket-4.html" data-type="entity-link" >Ticket</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Ticket-5.html" data-type="entity-link" >Ticket</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Ticket-6.html" data-type="entity-link" >Ticket</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Ticket-7.html" data-type="entity-link" >Ticket</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TicketConsulta.html" data-type="entity-link" >TicketConsulta</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TicketConsulta-1.html" data-type="entity-link" >TicketConsulta</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TicketConsulta-2.html" data-type="entity-link" >TicketConsulta</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TicketConsulta-3.html" data-type="entity-link" >TicketConsulta</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TicketConsulta-4.html" data-type="entity-link" >TicketConsulta</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TicketConsulta-5.html" data-type="entity-link" >TicketConsulta</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TicketConsulta-6.html" data-type="entity-link" >TicketConsulta</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TicketConsulta-7.html" data-type="entity-link" >TicketConsulta</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ticketsAnimales.html" data-type="entity-link" >ticketsAnimales</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ticketsLotto.html" data-type="entity-link" >ticketsLotto</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ticketsMillonaria.html" data-type="entity-link" >ticketsMillonaria</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ticketsNacional.html" data-type="entity-link" >ticketsNacional</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ticketsVenta.html" data-type="entity-link" >ticketsVenta</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ticketsVenta-1.html" data-type="entity-link" >ticketsVenta</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ticketsVenta-2.html" data-type="entity-link" >ticketsVenta</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ticketsVenta-3.html" data-type="entity-link" >ticketsVenta</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ticketsVenta-4.html" data-type="entity-link" >ticketsVenta</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ticketsVenta-5.html" data-type="entity-link" >ticketsVenta</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ticketsVenta-6.html" data-type="entity-link" >ticketsVenta</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ticketsVenta-7.html" data-type="entity-link" >ticketsVenta</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UltimoResultado.html" data-type="entity-link" >UltimoResultado</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UltimoResultado-1.html" data-type="entity-link" >UltimoResultado</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UltimoResultado-2.html" data-type="entity-link" >UltimoResultado</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UltimoResultado-3.html" data-type="entity-link" >UltimoResultado</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UltimoResultado-4.html" data-type="entity-link" >UltimoResultado</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UltimoResultado-5.html" data-type="entity-link" >UltimoResultado</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UltimoResultado-6.html" data-type="entity-link" >UltimoResultado</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UltimoResultado-7.html" data-type="entity-link" >UltimoResultado</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
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
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});