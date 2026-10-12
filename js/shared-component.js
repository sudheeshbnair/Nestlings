class SharedDiv extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="my-shared-card">
                <h3>Shared Title</h3>
                <p>This content is reused across multiple pages!</p>
            </div>
        `;
    }
}

// Register the custom element
customElements.define('shared-div', SharedDiv);