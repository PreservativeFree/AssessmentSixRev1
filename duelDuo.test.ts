//const message = document.getElementById('#choices')

import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    await driver.get('http://localhost:3000/')
})

afterAll(async () => {
    await driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()

    expect(displayed).toBe(true)
    await driver.sleep(3000)
})

describe('tests for duel duo', () => {
    test('Title shows up when page loads', async () => {
        const title = await driver.findElement(By.id('title'))
        const displayed = await title.isDisplayed()
        expect(displayed).toBe(true)
    })

    test('Clicking Draw displays div with Choices', async () => {
        const divElem = await driver.findElement(By.id('choices'))
        const displayed = await divElem.isDisplayed()
        expect(displayed).toBe(true)
        await driver.sleep(3000)
    })


    test('Clicking the AddtoDuo button displays div with id of player-duo', async () => {
        const divElem = await driver.findElement(By.id('player-duo'))
        await driver.sleep(3000)
        const displayed = await divElem.isDisplayed()
        await driver.sleep(3000)
        expect(displayed).toBe(true)
        await driver.sleep(3000)
    })
/*
    function testEnv() {
        
        setTimeout(() => {
            
        }, 3000)
    }*/
})