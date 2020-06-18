const {repair, succeed, fail} = require('./enhancer.js');

// test away!

describe('enhancer', function(){
        it("should run tests using it()", function() {
            expect(true).toBe(true);
        })
        
        describe('test repair method', function(){
            it('returns new item with durability at 100', function(){
                const item = {
                    name: 'sword',
                    durability: 75,
                    enhancement: 0
                }
                const repairedItem = repair(item);
                expect(repairedItem.durability).toEqual(100);
            })
        })

        describe('test succeed method', function(){
            it('returns new item with +1 enhancement', function() {
                const item = {
                    name: 'sword',
                    durability: 75,
                    enhancement: 0
                }
                const enhanced = succeed(item);
                expect(enhanced.enhancement).toEqual(1);
               
            })
            it("durability remains unchanged if = 20", function() {
                const item = {
                    name: 'sword',
                    durability: 75,
                    enhancement: 20
                }
                const enhanced = succeed(item);
                expect(enhanced.enhancement).toEqual(20);
            })
        })
        describe("test fail method", function() {
            it('if enhancement is less than 15, subtracts 5 ...levels? from durability', function() {
                const item = {
                    name: 'sword',
                    durability: 75,
                    enhancement: 10
                }
                const newItem = fail(item);
                expect(newItem.durability).toEqual(70)
            })
        })
        it('if enhancment is 15+, subtract 10 from durability', function(){
            const item = {
                name: 'sword',
                durability: 75,
                enhancement: 17
            }
            const newItem = fail(item);
            expect(newItem.durability).toEqual(65)
            // expect(newItem.enhancement).toEqual(16)
        })
       
 
})