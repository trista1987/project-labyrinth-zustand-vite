# Instructions
This week's project is a text-based adventure build using `Zustand` for state management and our API to post data. Classic games like this usually give the user a description of where the game is about and provide several alternatives about what they can do.

Example:

```text
You find yourself in a room with one door leading East and a small
opening in the wall leading South.

- Go East
- Go South
```

Based on the choice (Go East or Go South), the state of the game (where the player is) will update. Then, a new description and set of actions can be displayed to the player.

## Start the Game

In this project, you will start the game by doing a POST request to `https://labyrinth.technigo.io/start`.

**Request**

In the request **body,** you will need to include a username so the backend can track the state of your game. You are free to change this value to something specific/unique to your frontend.

```json
{
  "username": "TechnigoPlayer"
}
```

**Response**

The response you receive will contain:
**description -** A text description that should be presented to the player

**actions** - An array of actions that should be presented to the player as interactable options (buttons or something clickable)

```json
{
  "coordinates": "0,0",
  "description": "You find yourself in under a large archway opening into a cavern.  A sense of purpose fills you.",
  "actions": [
    {
      "type": "move",
      "direction": "East",
      "description": "A worn sign 'The Temple of *ech*igo'. Some of the letters are missing. An overgrown paved path leads to the East"
    }
  ]
}
```

## Continue the game

When the user clicks/chooses any action, you should send a POST request to

`https://labyrinth.technigo.io/action`
This POST request needs a JSON body (like the /start request) containing the same **username** you started the game with.

In addition, your JSON body will specify what action was done by the player:
**type -** the type of action (currently only move)
**direction** - the direction to move

```json
{
  "username": "TechnigoPlayer",
  "type": "move",
  "direction": "East"
}
```

You will receive a response with a new description and the next set of actions to show to the player.


## Description and Actions UI

How you present the description and the actions are completely up to you. Maybe you want to sort the directions (East, North, West, South) or put them in some graphical order. Perhaps you would like to add an interactable compass.

### Request response time

This project's backend is designed so that there is some delay until the request returns from the server. If you notice that your request takes some time, this is intentional, think about a way of making this waiting time okay for your users. Add a loading state of some sort.

## Planning

### You should discuss these questions before you fork and clone the repo:

- Will you use a planning tool (Jamboard, Figma) to plan your design/app structure?
- How are you going to work together?
- What will the summary screen look like?
- What components do you need?
- How are you dealing with the styling?
- What stretch goals are you aiming for?


### Hints and tips to complete the project 🤓

1. Try starting the game with Postman
2. Get the game started in your code using fetch
3. Display the description and actions from the response
4. Allow the user/player to select an action
5. Perform a POST request based on the action selected
6. Handle the response from the `POST /action` to update the game state

Don't be afraid of storing lots of information in the global state - you can store the username, the current game state, and even a history of past actions that the player has made.

## Requirements
- Your Labyrinth game should guide the user with instructions about the game and moves to make
- Use Zustand to store the current state of the game
- Perform asynchronous operations in the app store
- Focus on making the UX of your app good. Handle the response delay
- Don't forget CSS! Your Labyrinth should be well-styled


## Stretch Goals
- Show the descriptions of the directions in the main description of the current room. Present clear and simple actions. For example, your button would say *"Go East"*.  Instead of *"East -A worn sign 'The Temple of *ech*igo'. Some of the letters are missing. An overgrown paved path leads to the East"*
- Store a history of what the player has done in the global state and display it
- Style each room/state based on the description. For instance, if it contains the word "forest" you may want to change the background to a forest
- Save the global state data to localStorage, so the app data remains when you reload the page
- Create a visual representation (drawing) of the map/labyrinth that the player is navigating. It could update after each action. The coordinates might be helpful here, or you can track the directions yourself.