# Prompt Builder

Prompt Builder is a web application designed to help users create and manage prompts for AI interactions. The application provides a user-friendly interface to build prompts with specific instructions, response formats, attention guidelines, and context.

![Prompt Builder Screenshot](https://raw.githubusercontent.com/Viniciusgalmeida/Prompt-Builder/refs/heads/main/src/assets/Prompt%20Builder.png)

Link: https://simplepromptbuilder.netlify.app/

## Features

- **AI Role (Papel da IA)**: Define the role the AI should take before responding (e.g. "You are an expert in...").
- **Character Counter**: Displays the total number of characters across all prompt fields.
- **Reset**: Resets all prompt fields and textarea heights to their default values.
- **Copy All Prompts**: Copies only the fields that were actually filled in to the clipboard.
- **Keyboard Shortcuts**: `Ctrl+Enter` to copy all, `Ctrl+Delete` to reset.
- **Auto-save**: Content is automatically saved to localStorage — survives page reloads and accidental closures. Content is cleared automatically when the day changes.
- **AI Links**: Quick access buttons to various AI platforms.
- **Dynamic Textarea**: Textareas start collapsed (single-line) and grow automatically as content is added.
- **Auto-focus**: After selecting a dropdown option, the cursor is placed directly in the textarea.
- **Pop-up Help**: Provides detailed explanations for each prompt field.
- **Language Toggle**: Switch between Portuguese (PT-BR) and English (EN).
- **PWA Support**: Can be installed as a Progressive Web App on desktop and mobile.

## Prompt Fields

| Field | Purpose |
|---|---|
| Papel da IA | Define the AI's role or persona |
| Instrução | Give a direct instruction to the AI |
| Contexto | Provide context to improve accuracy |
| Formato da resposta | Define the desired response format |
| Atenção | Set criteria or constraints for the response |

## Keyboard Shortcuts

| Shortcut | Action |
|---|---|
| `Ctrl+Enter` | Copy all filled fields to clipboard |
| `Ctrl+Delete` | Reset all fields |

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Viniciusgalmeida/prompt_manager.git
    ```
2. Navigate to the project directory:
    ```bash
    cd prompt_manager
    ```
3. Open `index.html` in your preferred web browser.

## Usage

1. Fill in the prompt fields with your desired instructions, response formats, attention guidelines, and context.
2. Use the dropdown menus for quick suggestions or type directly in each field.
3. Click **Copia Tudo** (or `Ctrl+Enter`) to copy all filled fields to the clipboard.
4. Click **Reset** (or `Ctrl+Delete`) to reset all fields and collapse all textareas.

## File Structure

- `index.html`: The main HTML file containing the structure of the web application.
- `index.js`: JavaScript file with functions for handling user interactions and dynamic content.
- `styles.css`: CSS file for styling the web application.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## Upgrade Wishlist:

- [ ] Possibility to create texts and save them as predefined texts so that they can be added to the prompt.
- [ ] Enable dark mode.
- [ ] Create a version of the prompt builder specifically for generating images.
- [x] On mobile, place the links to the AIs in a fixed component at the bottom of the page.
- [ ] Create the possibility for the user to log in and have an area with personalized prompts.
- [ ] ~~Change the character count to word count.~~
- [x] Insert a favicon.
- [x] Support for different languages (PT-BR / EN).
- [x] PWA support.
- [x] Auto-save content to localStorage.
- [x] Keyboard shortcuts.

## License

This project is licensed under the MIT License.

## Contact

For any inquiries, please contact Vinicius Almeida at [LinkedIn](https://www.linkedin.com/in/viniciusgalmeida/).

