import pgzrun
from random import randint

apple = Actor("apple")

def draw():
    screen.clear()
    apple.draw()
         
def place_apple():
    apple.x = randint(10,800)
    apple.y = randint(10,600)

def on_mouse_down(pos):
    if apple.collidepoint(pos):
        print("Good shot!")
    else:
        print("You missed.")

clock.schedule_interval(place_apple, 1.0)

pgzrun.go()
