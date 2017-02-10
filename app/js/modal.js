window.Modal = class Modal {
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
    this.elem.innerHTML = this.contents;
    this.modalContainer.appendChild(this.elem);

    const closeButton = document.createElement('a');
    closeButton.setAttribute('href', '#');
    closeButton.className = 'close-button';
    closeButton.innerText = '\uf12a';
    this.elem.appendChild(closeButton);

    closeButton.addEventListener('click', this.close);
    this.modalContainer.addEventListener('click', (e) => {
      if (e.target === this.modalContainer) this.close();
    });
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
};
