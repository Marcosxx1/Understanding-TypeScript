/*
 O que POO? Programação orientada a objetos

 Work with (real-life) Entities in your code

        ProdctList                   _>     Product                 _ >   ShoppingCart    
            |                       |          |                   |            |
            v                       |          v                   |            v
    Renders a list of products      |   Rnders detais about a      |    renders cart products
    which were fetched from a-------|   product and allows --------|    and total, allows user
    server (database)                   adtion cart                     to oder them
            |                                  |                                |
            v                                  v                                v
    Object holds rendering +            Object holds rendering +        Object holds rendering
    fetching logic                      cart-adding logic               +ordernig (server 
                                                                        communication) lógic                      */  


 /* Objects
    - The things you work with in code
    - Instances of classes (= based on classes)
    - Class-based creatin is an alternative using object literals

    Classes
    - Blueprints for objects
    - Define how objects look like, which properties and methods they have
    - Classes make creation of multiple, similar objects much easier
    */