## Makan Simi Project

### Setting up the environment

1. Get the source code with the following command:

    ```
    $ git clone https://github.com/poopeepop/makansimi.git
    ```

2. Check to see if Python 3.x is installed:

    ```
    $ python --version
    ```

    If should display the following information (or similar) in the terminal, otherwise Python needs to be installed (from [the official site](https://www.python.org/downloads/)) on your machine:

    ```
    Python 3.7.3
    ```

3. Run the local Python server to serve the website by first navigating to the directory with `index.html` in it then run the following command:

    ```
    $ python3 -m http.server 8765
    ```

    This should display the following in the terminal:

    ```
    Serving HTTP on 0.0.0.0 port 8765 (http://0.0.0.0:8765/) ...
    ```

4. Launch the browser and navigate to `http://localhost:8000/`, the webpage should show up as expected. If not, open the developer console of the browser to see what the issue could be.
