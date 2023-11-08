import React from 'react';
import CodeBlockPy from './CodeEditorPy'; // Adjust the import path as necessary

export default function algoCode() {
    const codeString = `# Description: HashMap implementation using quadratic probing with the following methods: put(), empty_buckets(), table_load(),
# clear(), resize_table(), get(), contains_key(), remove(), and get_keys_and_values().

from a6_include import (DynamicArray, DynamicArrayException, HashEntry,
                        hash_function_1, hash_function_2)

class HashMap:
    def __init__(self, capacity: int, function) -> None:
        """
        Initialize new HashMap that uses
        quadratic probing for collision resolution
        DO NOT CHANGE THIS METHOD IN ANY WAY
        """
        self._buckets = DynamicArray()

        # capacity must be a prime number
        self._capacity = self._next_prime(capacity)
        for _ in range(self._capacity):
            self._buckets.append(None)

        self._hash_function = function
        self._size = 0

    def __str__(self) -> str:
        """
        Override string method to provide more readable output
        DO NOT CHANGE THIS METHOD IN ANY WAY
        """
        out = ''
        for i in range(self._buckets.length()):
            out += str(i) + ': ' + str(self._buckets[i]) + '\n'
        return out

    def _next_prime(self, capacity: int) -> int:
        """
        Increment from given number to find the closest prime number
        DO NOT CHANGE THIS METHOD IN ANY WAY
        """
        if capacity % 2 == 0:
            capacity += 1

        while not self._is_prime(capacity):
            capacity += 2

        return capacity

    @staticmethod
    def _is_prime(capacity: int) -> bool:
        """
        Determine if given integer is a prime number and return boolean
        DO NOT CHANGE THIS METHOD IN ANY WAY
        """
        if capacity == 2 or capacity == 3:
            return True

        if capacity == 1 or capacity % 2 == 0:
            return False

        factor = 3
        while factor ** 2 <= capacity:
            if capacity % factor == 0:
                return False
            factor += 2

        return True

    def get_size(self) -> int:
        """
        Return size of map
        DO NOT CHANGE THIS METHOD IN ANY WAY
        """
        return self._size

    def get_capacity(self) -> int:
        """
        Return capacity of map
        DO NOT CHANGE THIS METHOD IN ANY WAY
        """
        return self._capacity

    # ------------------------------------------------------------------ #

    def put(self, key: str, value: object) -> None:
        """
        Add a key-value pair to the hash map. If the key already exists, the value should be replaced.
        If load factor exceeds 0.5, capacity should double.
        """
        index = self._hash_function(key) % self._capacity
        i = 0
        new_entry_added = False

        while i < self._capacity:
            if self._buckets[index] is None or self._buckets[index].key == key:
                if self._buckets[index] is None:
                    self._size += 1
                    new_entry_added = True
                self._buckets[index] = HashEntry(key, value)
                break
            i += 1
            index = (self._hash_function(key) + i * i) % self._capacity

        # Check if load factor exceeds 0.5 and resize if necessary
        if new_entry_added:
            load_factor = self._size / self._capacity
            if load_factor > 0.5:
                self.resize_table(self._capacity * 2)

    def table_load(self) -> float:
        """
        Return the current hash table load factor.
        """
        return self._size / self._capacity

    def empty_buckets(self) -> int:
        """
        Return the number of empty buckets in the hash table.
        """
        empty_buckets = 0
        for i in range(self._capacity):
            if self._buckets[i] is None:
                empty_buckets += 1
        return empty_buckets

    def resize_table(self, new_capacity: int) -> None:
        """
        Resizes the table by creating a new bucket array and rehashing all the key/value pairs.
        """
        if new_capacity < self._size:
            return
        old_capacity = self._capacity
        old_buckets = self._buckets
        self._capacity = self._next_prime(new_capacity)  # Make sure the new capacity is a prime number
        self._buckets = DynamicArray()
        for _ in range(self._capacity):
            self._buckets.append(None)
        self._size = 0
        for i in range(old_capacity):
            if old_buckets[i] is not None:
                key, value = old_buckets[i].key, old_buckets[i].value
                self.put(key, value)

    def get(self, key: str) -> object:
        """
        Return the value associated with the given key,
        or None if the key is not in the hash map.
        """
        index = self._hash_function(key) % self._capacity
        i = 0
        while i < self._capacity:
            if self._buckets[index] is not None and self._buckets[index].key == key:
                return self._buckets[index].value
            i += 1
            index = (index + i * i) % self._capacity
        return None

    def contains_key(self, key: str) -> bool:
        """
        Return True if this map contains the specified key.
        """
        index = self._hash_function(key) % self._capacity
        i = 0
        while i < self._capacity:
            if self._buckets[index] is not None and self._buckets[index].key == key:
                return True
            i += 1
            index = (index + i * i) % self._capacity
        return False

    def remove(self, key: str) -> None:
        """
        Remove the entry for the specified key if present.
        """
        index = self._hash_function(key) % self._capacity
        hash_entry = self._buckets[index]
        i = 0
        while i < self._capacity and hash_entry is not None:
            if hash_entry.key == key:
                self._buckets[index] = None
                self._size -= 1
                j = (index + 1) % self._capacity
                while self._buckets[j] is not None:
                    next_entry = self._buckets[j]
                    self._buckets[j] = None
                    self.put(next_entry.key, next_entry.value)
                    j = (j + 1) % self._capacity
                return
            i += 1
            index = (index + i * i) % self._capacity
            hash_entry = self._buckets[index]

    def clear(self) -> None:
        """
        Remove all of the entries from this map.
        """
        for i in range(self._capacity):
            self._buckets[i] = None
        self._size = 0

    def get_keys_and_values(self) -> DynamicArray:
        """
        Return a DynamicArray of HashEntry objects representing (key, value) pairs
        """
        pairs = []
        for i in range(self._capacity):
            if self._buckets[i] is not None:
                pairs.append((self._buckets[i].key, self._buckets[i].value))
        return DynamicArray(pairs)

    def __iter__(self):
        """
        Return an iterator over the keys of this map.
        """
        self._index = 0
        self._pairs = self.get_keys_and_values()
        return self

    def __next__(self):
        """
        Return the next key in the iteration.
        """
        if self._index >= self._size:
            raise StopIteration
        while self._pairs[self._index] is None:
            self._index += 1
        pair = self._pairs[self._index]
        self._index += 1
        return HashEntry(pair[0], pair[1])
  `;

  return (
    <div>
      <CodeBlockPy code={codeString} />
    </div>
  );
};

