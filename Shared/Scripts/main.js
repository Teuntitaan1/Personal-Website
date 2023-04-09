function ToggleHamburgerMenu() {
    const ToggleHamburgerMenu = document.getElementById("HamburgerMenu");
    const ToggleTo = ToggleHamburgerMenu.className === "HamburgerMenu-NotExpanded" ? "HamburgerMenu-Expanded" : "HamburgerMenu-NotExpanded";
    const SwitchImageTo = ToggleHamburgerMenu.className === "HamburgerMenu-NotExpanded" ? "./Shared/Assets/Expanded.svg" : "./Shared/Assets/NotExpanded.svg";
    ToggleHamburgerMenu.className = ToggleTo;
    document.getElementById("HamburgerMenuButton").src = SwitchImageTo;
}