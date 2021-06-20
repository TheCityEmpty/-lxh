function bfs(node) {
    let nodes = [];
    if (node) {
      // 利用队列先进先出的特性，取第一个出来加进nodes里面
      let queue = [];
      queue.push(node);
      while (queue.length) {
        let item = queue.shift();
        nodes.push(item);
        let child = item.children;
        if (!child) continue
        for (let i = 0; i < child.length; i++) {
          // 按顺序从左到右加进队列
          queue.push(child[i]);
        }
      }
    }
    return nodes;
  }

  const nodes1 = {
        name: 'root',
        children: [
            {
                name: '1',
                children: [
                    {
                        name: 3
                    },
                    {
                        name: 4
                    }
                ]
            },
            {
                name: '2',
                children: [
                    {
                        name: 5
                    },
                    {
                        name: 6
                    }
                ]
            }
        ]
      }

console.log(bfs(nodes1))
  