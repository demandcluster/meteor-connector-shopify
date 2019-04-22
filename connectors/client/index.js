import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlug } from "@fortawesome/free-solid-svg-icons";
import "./templates";

registerOperatorRoute({
  isNavigationLink: true,
  isSetting: true,
  mainComponent: "connectorSettings",
  path: "/connector-settings",
  // eslint-disable-next-line react/display-name
  SidebarIconComponent: (props) => <FontAwesomeIcon icon={faPlug} {...props} />,
  sidebarI18nLabel: "reaction-shipping.admin.dashboard.shippingLabel"
});
