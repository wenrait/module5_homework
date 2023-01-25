let myMap = new Map()
myMap.set('key1', 'prop1')
myMap.set('key2', 'prop2')
myMap.set('key3', 'prop3')

for (let key of myMap.keys()) {
    console.log(`Ключ - ${key}, значение - ${myMap.get(key)}`);
}