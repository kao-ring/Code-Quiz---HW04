# 04 Web APIs: Code Quiz

https://kao-ring.github.io/Code-Quiz---HW04/

https://github.com/kao-ring/Code-Quiz---HW04

This is a quiz game. When you finish all questions, remain time will be your score. If you got wrong answer, you will penalized 5 seconds.

## Added function

- When you hit a start button, eventListner take you to a function quizStart.

- When quiz starts, count down timer starts with setInterval.

- Inside of quiz, pick up each question and answers from an array of objects.

- When user answer the question, finding the button's id using eventLisner target buttom(this is a parent element) to compare with correct answer then you will see correct or wrong image.

- After all 10 questions, it will tell user's score and show a form to type in their name.

-When you type your name and hit submit button, you will see CONGRATS gif.

- There is a button on top left side. It shows your highest score. On the right side, it has a time remain counter.

- There's a button says "Play One More?". If you hit this, you can play the same game but this time, you will have only odd number's question. Next time, it will skip more!

## Screen shot of Top screen and Last screen

![Screen Shot 2020-07-08 at 7 29 56 PM](https://user-images.githubusercontent.com/66850293/86984323-4a8b0c00-c15c-11ea-8b44-6d8f7084ac1b.png)
![Screen Shot 2020-07-08 at 7 30 12 PM](https://user-images.githubusercontent.com/66850293/86984325-4b23a280-c15c-11ea-9ff2-d1328f7edc66.png)

## Acceptance Criteria

```
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score
```
