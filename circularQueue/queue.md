A queue is a FIFO (first in first out)  data structure meaning the first element will be processed first.

Usually Queue data structures support an enqueue and dequeue function. Enqueue adds an element to the end of the queue. Dequeue removes the first element in the queue. A queue can also have an isEmpty function and a front/peek function as well. Front/peek will show you the item in the front of the queue.

Queues have a few drawbacks. The most notable being that with the movement of the start pointer, more nad more spae is wasted. This is unacceptable when we have space limitations.

Solution:

  A circular Queue, This is a queue with two pointers ( head and tail ) which is meant to reuse wasted storage space. Allowing us to add stuff to the queue if and only if we have space for it.


Problem:

  Design your implementation of the circular queue. The circular queue is a linear data structure in which the operations are performed based on FIFO (First In First Out) principle and the last position is connected back to the first position to make a circle. It is also called "Ring Buffer".

  One of the benefits of the circular queue is that we can make use of the spaces in front of the queue. In a normal queue, once the queue becomes full, we cannot insert the next element even if there is a space in front of the queue. But using the circular queue, we can use the space to store new values.

  Your implementation should support following operations:

    - MyCircularQueue(k): Constructor, set the size of the queue to be k.

    - Front: Get the front item from the queue. If the queue is empty, return -1.

    - Rear: Get the last item from the queue. If the queue is empty, return -1.

    - enQueue(value): Insert an element into the circular queue. Return true if the operation is successful.

    - deQueue(): Delete an element from the circular queue. Return true if the operation is successful.

    - isEmpty(): Checks whether the circular queue is empty or not.

    - isFull(): Checks whether the circular queue is full or not.