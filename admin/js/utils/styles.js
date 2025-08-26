// Styles utility module
const styles = {
    // Base styles
    body: {
        backgroundColor: '#f8f9fa',
        margin: 0,
        padding: 0,
        fontFamily: 'Arial, sans-serif'
    },

    navbar: {
        backgroundColor: '#343a40',
        padding: '1rem',
        color: 'white',
        marginBottom: '2rem'
    },

    card: {
        backgroundColor: 'white',
        borderRadius: '0.25rem',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        marginBottom: '1rem'
    },

    contentArea: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1rem'
    },

    table: {
        width: '100%',
        borderCollapse: 'collapse',
        backgroundColor: 'white',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
    },

    tableHeader: {
        backgroundColor: '#f8f9fa',
        borderBottom: '2px solid #dee2e6'
    },

    tableCell: {
        padding: '0.75rem',
        borderBottom: '1px solid #dee2e6'
    },

    button: {
        padding: '0.5rem 1rem',
        borderRadius: '0.25rem',
        border: 'none',
        cursor: 'pointer',
        fontSize: '1rem',
        transition: 'background-color 0.2s'
    },

    buttonPrimary: {
        backgroundColor: '#007bff',
        color: 'white'
    },

    buttonSecondary: {
        backgroundColor: '#6c757d',
        color: 'white'
    },

    buttonDanger: {
        backgroundColor: '#dc3545',
        color: 'white'
    },

    formGroup: {
        marginBottom: '1rem'
    },

    label: {
        display: 'block',
        marginBottom: '0.5rem',
        fontWeight: 'bold'
    },

    input: {
        width: '100%',
        padding: '0.5rem',
        borderRadius: '0.25rem',
        border: '1px solid #ced4da',
        fontSize: '1rem'
    },

    textarea: {
        width: '100%',
        padding: '0.5rem',
        borderRadius: '0.25rem',
        border: '1px solid #ced4da',
        fontSize: '1rem',
        minHeight: '100px',
        resize: 'vertical'
    },

    select: {
        width: '100%',
        padding: '0.5rem',
        borderRadius: '0.25rem',
        border: '1px solid #ced4da',
        fontSize: '1rem',
        backgroundColor: 'white'
    },

    tableActions: {
        whiteSpace: 'nowrap'
    },

    tableActionButton: {
        marginRight: '0.5rem'
    },

    tableActionButtonLast: {
        marginRight: '0'
    },

    formSection: {
        marginBottom: '2rem',
        paddingBottom: '2rem',
        borderBottom: '1px solid #dee2e6'
    },

    formSectionLast: {
        borderBottom: 'none'
    },

    languageTabs: {
        marginBottom: '1rem'
    },

    languageTabLink: {
        cursor: 'pointer'
    },

    languageTabLinkActive: {
        fontWeight: 'bold'
    },

    previewImage: {
        maxWidth: '200px',
        maxHeight: '200px',
        marginTop: '1rem'
    },

    alert: {
        marginTop: '1rem'
    },

    spinnerOverlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999
    },

    spinner: {
        width: '3rem',
        height: '3rem'
    }
};

// Function to apply styles to an element
function applyStyles(element, styleObject) {
    Object.assign(element.style, styleObject);
}

// Function to create a styled element
function createStyledElement(tag, styleObject, className = '') {
    const element = document.createElement(tag);
    if (className) {
        element.className = className;
    }
    applyStyles(element, styleObject);
    return element;
}

// Function to create a button with styles
function createButton(text, onClick, variant = 'primary') {
    const button = createStyledElement('button', {
        ...styles.button,
        ...styles[`button${variant.charAt(0).toUpperCase() + variant.slice(1)}`]
    });
    button.textContent = text;
    if (onClick) {
        button.addEventListener('click', onClick);
    }
    return button;
}

// Function to create a form group
function createFormGroup(label, input) {
    const group = createStyledElement('div', styles.formGroup);
    const labelElement = createStyledElement('label', styles.label);
    labelElement.textContent = label;
    group.appendChild(labelElement);
    group.appendChild(input);
    return group;
}

// Function to create an input field
function createInput(type, name, required = false) {
    const input = createStyledElement('input', styles.input);
    input.type = type;
    input.name = name;
    input.required = required;
    return input;
}

// Function to create a textarea
function createTextarea(name, required = false) {
    const textarea = createStyledElement('textarea', styles.textarea);
    textarea.name = name;
    textarea.required = required;
    return textarea;
}

// Function to create a select element
function createSelect(name, required = false) {
    const select = createStyledElement('select', styles.select);
    select.name = name;
    select.required = required;
    return select;
}

// Function to create a table
function createTable(columns) {
    const table = createStyledElement('table', styles.table);
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');
    const headerRow = document.createElement('tr');

    columns.forEach(column => {
        const th = createStyledElement('th', styles.tableHeader);
        th.textContent = column.label;
        headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);
    table.appendChild(tbody);
    return table;
}

// Animation styles
const animations = {
    spin: {
        animation: 'spin 1s linear infinite'
    }
};

// Add keyframes for animations
const styleSheet = document.createElement('style');
styleSheet.textContent = `
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;
document.head.appendChild(styleSheet);

// Export all utility functions and styles
export {
    styles,
    applyStyles,
    createStyledElement,
    createButton,
    createFormGroup,
    createInput,
    createTextarea,
    createSelect,
    createTable,
    animations
}; 