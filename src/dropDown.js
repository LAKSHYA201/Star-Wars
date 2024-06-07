class visible {
  constructor() {
    document.querySelector(".menu-items-holder").innerHTML = "";
    this.visible = false;
  }
  repopulate(menuItemArray) {
    for (const item of menuItemArray) {
      const li = document.createElement("li");
      li.classList.add("menu-item");
      li.textContent = item;
      document.querySelector(".menu-items-holder").appendChild(li);
      this.visible = true;
    }
  }
  hide() {
    document.querySelector(".menu-items-holder").innerHTML = "";
    this.visible = false;
  }
}

export default visible;
