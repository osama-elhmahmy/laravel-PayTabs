PayTabs assignment.

- I prefer to use Nested Set or Closure Table with Categories and hierarchical data but in this case I will use **Adjacency list**.
- Also used VueJs, vueRouter and axios in the frontend.
- Laravel Mix will take care for api security X-CSRF-TOKEN.


Content
------------

- [Requirements](#requirements)
- [How to use this?](#how-to-use-this-assignment)

Requirements
------------

#### Server Requirements

- PHP >= 8.0
- BCMath PHP Extension
- Ctype PHP Extension
- cURL PHP Extension
- DOM PHP Extension
- Fileinfo PHP Extension
- JSON PHP Extension
- Mbstring PHP Extension
- OpenSSL PHP Extension
- PCRE PHP Extension
- PDO PHP Extension
- Tokenizer PHP Extension
- XML PHP Extension


How to use this assignment?
---------------------

#### 1- Clone the project.

#### 2- Install Composer packages.

```
composer update
```

#### 3- Now generate Key.

```
php artisan key:generate
```

#### 4- Time for the Database

- You need to create database in my case I name it payTabs and update the .env variables to connect. 
- After that run the below command line:
```
php artisan migrate --seed
```
- This will create the categories table and seed it with data.
- 
#### 5- Installing Laravel Mix and vue

```
npm install
```

#### 6- Running Mix

```
// Run all Mix tasks and minify output...
npm run prod
```

#### 7- Start local development

```
php artisan serve
```

#### 8- Finally go and open the site 😄
