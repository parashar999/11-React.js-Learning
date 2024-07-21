## 1. Sytax of Object expected by react for rendering

```
    const anotherElement=(
        'p', // p attribute
        {
            // attributes in object
        },
        // text of html here,
        // variables are injected here
    )
```

## 2. Injection of variables in function

```
    function App() {
         const username = "is a good guy"
         // function and javascript expressions are written here
         return (

                <h1>Tarun Parashar {username} </h1>  // {username} is evaluated expression only final outcome can be written here, core js can be written here
        
        );
    }

export default App;

```
