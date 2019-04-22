import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import "./settings/shopify";

registerOperatorRoute({
  isNavigationLink: true,
  isSetting: true,
  mainComponent: "shopifyConnectSettings",
  path: "/shopify-connect-settings",
  // eslint-disable-next-line react/display-name
  SidebarIconComponent: (props) => <FontAwesomeIcon icon={faShoppingBag} {...props} />,
  sidebarI18nLabel: "reaction-connectors-shopify.admin.dashboard.shopifyConnectLabel"
});
