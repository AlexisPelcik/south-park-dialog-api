South park dialogs API
======================

More than 80 000 dialogs
------------------------

Characters
==========

Return all characters available

get

    /characters

``` 
    {
      "status":"success",
      "data":[
        {"character":"Kenny"},
        {"character":"Stan"},
        {"character":"Cartman"}
        ]
    }
```
Success 200
-----------

|Champ|Type|Description|
|--- |--- |--- |
|character|String|name|


Characters
==========

Return all episodes of one character

get

    /characters/:characterName

```
     {
      "status":"success",
      "data":[
        {"seasonNumber":1,"episodeNumber":1,"episodeName":"Cartman Gets an Anal Probe"},
        {"seasonNumber":1,"episodeNumber":2,"episodeName":"Weight Gain 4000"},
        {"seasonNumber":1,"episodeNumber":3,"episodeName":"Volcano"}
        ],
    }
```
Success 200
-----------

|Champ|Type|Description|
|--- |--- |--- |
|season|Number|Number|
|episode|Number|Number|

Dialogs
=======

Return all dialogs of one character

get

    /dialogs/character/:name

```
    {
      "status":"success",
      "data":[
        {
          "id":1005,
          "seasonNumber":15,
          "episodeNumber":5,
          "episodeName":"Crack Baby Athletic Association",
          "dialogNumber":174,
          "character":"Roger",
          "dialog":"takes the phone back Er he's like love People all over the world dress up like Slash and have different names for Slash The Dutch call him Vunter Slash"
        }
      ]
    }
```

Success 200
-----------

|Champ|Type|Description|
|--- |--- |--- |
|id|Number||
|seasonNumber|Number||
|episodeNumber|Number||
|episodeName|String||
|dialogNumber|Number||
|character|String||
|dialog|String||


Dialogs
=======

Return all dialogs of a character in one season

get

    /dialogs/character/:name/season/:seasonNumber

```
    {
      "status":"success",
      "data":[
        {
          "id":1005,
          "seasonNumber":15,
          "episodeNumber":5,
          "episodeName":"Crack Baby Athletic Association",
          "dialogNumber":174,
          "character":"Roger",
          "dialog":"takes the phone back Er he's like love People all over the world dress up like Slash and have different names for Slash The Dutch call him Vunter Slash"
        }
      ]
    }
```

Success 200
-----------

|Champ|Type|Description|
|--- |--- |--- |
|id|Number||
|seasonNumber|Number||
|episodeNumber|Number||
|episodeName|String||
|dialogNumber|Number||
|character|String||
|dialog|String||


Dialogs
=======

Return all dialogs of a character in one episode

get

    /dialogs/character/:name/season/:seasonNumber/episode/:episodeNumber

```
    {
      "status":"success",
      "data":[
        {
          "id":1005,
          "seasonNumber":15,
          "episodeNumber":5,
          "episodeName":"Crack Baby Athletic Association",
          "dialogNumber":174,
          "character":"Roger",
          "dialog":"takes the phone back Er he's like love People all over the world dress up like Slash and have different names for Slash The Dutch call him Vunter Slash"
        }
      ]
    }
```

Success 200
-----------

|Champ|Type|Description|
|--- |--- |--- |
|id|Number||
|seasonNumber|Number||
|episodeNumber|Number||
|episodeName|String||
|dialogNumber|Number||
|character|String||
|dialog|String||


Dialogs
=======

Return dialog by id

get

    /dialogs/:id

```
    {
      "status":"success",
      "data":[
        {
          "id":1005,
          "seasonNumber":15,
          "episodeNumber":5,
          "episodeName":"Crack Baby Athletic Association",
          "dialogNumber":174,
          "character":"Roger",
          "dialog":"takes the phone back Er he's like love People all over the world dress up like Slash and have different names for Slash The Dutch call him Vunter Slash"
        }
      ]
    }
 ```

Success 200
-----------

|Champ|Type|Description|
|--- |--- |--- |
|id|Number||
|seasonNumber|Number||
|episodeNumber|Number||
|episodeName|String||
|dialogNumber|Number||
|character|String||
|dialog|String||


Dialogs
=======

Return dialogs by seasonNumber and episodeNumber

get

    /dialogs/season/:seasonNumber/episode/:episodeNumber

```
    {
      "status":"success",
      "data":[
        {
          "id":1005,
          "seasonNumber":15,
          "episodeNumber":5,
          "episodeName":"Crack Baby Athletic Association",
          "dialogNumber":174,
          "character":"Roger",
          "dialog":"takes the phone back Er he's like love People all over the world dress up like Slash and have different names for Slash The Dutch call him Vunter Slash"
        }
      ]
    }
```

Success 200
-----------

|Champ|Type|Description|
|--- |--- |--- |
|id|Number||
|seasonNumber|Number||
|episodeNumber|Number||
|episodeName|String||
|dialogNumber|Number||
|character|String||
|dialog|String||


Episodes
========

Episodes
========

Return all episodes

get

    /episodes

```
    {
      "status":"success",
      "data":[
        {
          "seasonNumber":1,
          "episodeNumber":1,
          "episodeName":"Scott Tenorman Must Die",
        },{
          "seasonNumber":1,
          "episodeNumber":2,
          "episodeName":"It Hits the Fan",
        },{
          "seasonNumber":1,
          "episodeNumber":3,
          "episodeName":"Cripple Fight",
        },{
          "seasonNumber":1,
          "episodeNumber":4,
          "episodeName":"Super Best Friends",
        }
      ]
    }
```

Success 200
-----------

|Champ|Type|Description|
|--- |--- |--- |
|id|Number||
|seasonNumber|Number||
|episodeNumber|Number||
|episodeName|String||


Episodes
========

Return all episodes of one season

get

    /episodes/season/:seasonsNumber

```
    {
      "status":"success",
      "data":[
        {
          "episodeNumber":1,
          "episodeName":"Scott Tenorman Must Die",
        },{
          "episodeNumber":2,
          "episodeName":"It Hits the Fan",
        },{
          "episodeNumber":3,
          "episodeName":"Cripple Fight",
        },{
          "episodeNumber":4,
          "episodeName":"Super Best Friends",
        }
      ]
    }
```

Success 200
-----------

|Champ|Type|Description|
|--- |--- |--- |
|id|Number||
|seasonNumber|Number||
|episodeNumber|Number||
|episodeName|String||

Random
======

Return a random dialog form one character

get

    /random/character/:characterName

```
    {
      "status":"success",
      "data":[
        {
          "id":1005,
          "seasonNumber":15,
          "episodeNumber":5,
          "episodeName":"Crack Baby Athletic Association",
          "dialogNumber":174,
          "character":"Roger",
          "dialog":"takes the phone back Er he's like love People all over the world dress up like Slash and have different names for Slash The Dutch call him Vunter Slash"
        }
      ]
    }
```

Success 200
-----------

|Champ|Type|Description|
|--- |--- |--- |
|id|Number||
|seasonNumber|Number||
|episodeNumber|Number||
|episodeName|String||
|dialogNumber|Number||
|character|String||
|dialog|String||

Seasons
=======

Seasons
=======

Return all season

get

    /seasons

```
    {
      "status":"success",
      "data":[
        {
          "seasonNumber":1
        },{
          "seasonNumber":2
        },{
          "seasonNumber":3
        },{
          "seasonNumber":4
        },{
          "seasonNumber":5
        }
      ]
    }
```

Success 200
-----------

|Champ|Type|Description|
|--- |--- |--- |
|seasonNumber|Number||

random
======

Return a random dialog

get

    /Random

```
    {
      "status":"success",
      "data":[
        {
          "id":1005,
          "seasonNumber":15,
          "episodeNumber":5,
          "episodeName":"Crack Baby Athletic Association",
          "dialogNumber":174,
          "character":"Roger",
          "dialog":"takes the phone back Er he's like love People all over the world dress up like Slash and have different names for Slash The Dutch call him Vunter Slash"
        }
      ]
    }
```

Success 200
-----------

|Champ|Type|Description|
|--- |--- |--- |
|id|Number||
|seasonNumber|Number||
|episodeNumber|Number||
|episodeName|String||
|dialogNumber|Number||
|character|String||
|dialog|String||
