# Google Search Engine Clone

This project is a simple clone of the Google Search Engine. It's built with HTML, CSS, and JavaScript.

![Project Image](https://raw.githubusercontent.com/saqibbedar/google-search-clone/main/google-search.png)

## Features

- Search functionality that redirects to Google's results
- Responsive design

## How to Use

To use this project, follow these steps:

1. Clone the repository.

    ```bash
    git clone https://github.com/saqibbedar/google-search-clone.git
    ```

2. Open the `index.html` file in your browser.

## Code Snippets

Here's a snippet of the JavaScript code used for the search functionality:

```javascript
let query = document.querySelector(".query");
let searchBtn = document.querySelector(".search-btn");

searchBtn.addEventListener("click", ()=&gt;{
    if(query.value.trim() !== ''){
        let url = `https://www.google.com/search?q=${query.value}`;
        window.open(url, '_self');
    }
});

query.addEventListener("keyup", (e)=&gt;{
    if(query.value.trim() !== ''){
        if(e.key === 'Enter'){
            let url = `https://www.google.com/search?q=${query.value}`;
            window.open(url, '_self');
        }
    }
});
```

## Contributions 😍

Contributions, issues, and feature requests are welcome!
