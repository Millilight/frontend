import styles from './WordpressMenu.module.css';

export default function WordpressMenu() {
  return (
    <div className={styles.wp_menu_container}>
      <div
        id="site-header"
        className="site-header dynamic-header menu-dropdown-tablet"
        role="banner"
      >
        <div className="header-inner">
          <div className="site-branding show-logo">
            <div className="site-logo show">
              <a
                href="https://www.amuni.fr/"
                className="custom-logo-link"
                rel="home"
                aria-current="page"
              >
                {/* eslint-disable-next-line @next/next/no-img-element*/}
                <img alt="" width={'250px'} src="/logo-amuni-horizontal.png" />
              </a>
            </div>
          </div>

          <nav className="site-navigation show" role="navigation">
            <div className="menu-main-menu-container">
              <ul id="menu-main-menu" className="menu">
                <li
                  id="menu-item-734"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-734"
                >
                  <a href="https://www.amuni.fr/notre-solution/">
                    Notre solution
                  </a>
                  <ul className="sub-menu">
                    <li
                      id="menu-item-735"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-735"
                    >
                      <a href="https://www.amuni.fr/notre-solution/">
                        Notre solution en quelques étapes
                      </a>
                    </li>
                    <li
                      id="menu-item-679"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-679"
                    >
                      <a href="https://www.amuni.fr/securite-confidentialite/">
                        Sécurité &#038; confidentialité
                      </a>
                    </li>
                  </ul>
                </li>
                <li
                  id="menu-item-1127"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1127"
                >
                  <a href="https://www.amuni.fr/nos-tarifs/">Nos tarifs</a>
                </li>
                <li
                  id="menu-item-589"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-589"
                >
                  <a href="https://www.amuni.fr/qui-sommes-nous/">
                    Qui sommes nous ?
                  </a>
                </li>
                <li
                  id="menu-item-1190"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1190"
                >
                  <a href="https://www.amuni.fr/guide/">Guide</a>
                </li>
                <li
                  id="menu-item-38"
                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-38"
                >
                  <a href="https://app.amuni.fr">Mon espace personnel</a>
                </li>
              </ul>
            </div>{' '}
          </nav>
        </div>
      </div>
    </div>
  );
}
