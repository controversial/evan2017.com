class Modal {
  constructor(contents) {
    this.contents = contents;
    this.open = false;

    this.modalContainer = document.getElementById('modal-container');
    // Initialize if initialization hasn't taken place
    if (this.modalContainer === null) {
      Modal.init();
      this.modalContainer = document.getElementById('modal-container');
    }

    this.elem = document.createElement('div');
    this.elem.className = 'modal';
    this.modalContainer.appendChild(this.elem);
  }

  static init() {
    if (!document.getElementById('modal-container')) {
      this.modalContainer = document.createElement('div');
      this.modalContainer.setAttribute('id', 'modal-container');
      document.body.appendChild(this.modalContainer);
    }
  }

  present() {
    document.body.className = 'modal-open';
    this.open = true;
  }

  close() {
    document.body.className = '';
    this.open = false;
  }

  static destroy() {
    document.body.removeChild(this.modalContainer);
  }
}
