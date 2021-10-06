import pgzrun
from random import randint

TITLE = "Shoot the Fruit"

maxtargets = 10
gameover = False
targets = 1
shots = 0
hits = 0

apple = Actor("apple", (randint(10,780), randint(40,580)))


def draw():
    global targets, shots, hits, gameover
    if not gameover:
        screen.clear()
        apple.draw()
        screen.draw.text("Targets: " + str(targets), (20, 20))
        screen.draw.text("Shots: " + str(shots), (120, 20))
        screen.draw.text("Hits: " + str(hits), (220, 20))
         
def place_apple():
    global targets, maxtargets, gameover
    if targets < maxtargets:
        targets = targets + 1
        apple.x = randint(10,780)
        apple.y = randint(40,580)
    else:
        gameover = True
        screen.draw.text("Game Over", (400,20))

def on_mouse_down(pos):
    global shots, hits, gameover
    if not gameover:
        shots =  shots + 1
        if apple.collidepoint(pos):
            print("Good shot!")
            hits = hits + 1
        else:
            print("You missed.")

clock.schedule_interval(place_apple, 1.0)

pgzrun.go()
