color = [
        "orange",
        "peru",
        "green",
        "magenta",
        "tomato",
        "orangered",
        "crimson",
        "darkred",
      ];
        index = 0;
        reverseIndex = color.length - 1;
        
        function exclaim() {
            if (index === (color.length - 1)) {
                index = 0;
            }
            if (reverseIndex === 0) {
            reverseIndex = color.length - 1;
            }
            let show = document.querySelector('template');

            // the idea is that each box should have adifferent color;
            let clone = document.importNode(show.content, true);
            clone.querySelector('.box').style.borderColor = color[index];
            clone.querySelector('.box').style.backgroundColor = color[reverseIndex];
            // clone.querySelector('.box').textContent = "color[index]";
            ++index;
            document.body.appendChild(clone);
        }

        let ChinyereCommentPrototype = Object.create(HTMLElement.prototype);

        ChinyereCommentPrototype.createdCallback = function () {
            this.innerHTML = "<h2>Chinyere</h2><textarea></textarea><br><button type='submit'>Submit</button>"
        }
        ChinyereComment = document.registerElement('chinyere-comments', {
            prototype: ChinyereCommentPrototype
        });
