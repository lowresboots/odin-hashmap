class HashSet {
    constructor(initialCapacity = 16, loadFactor = 0.75) {
        this.buckets = new Array(initialCapacity).fill(null);
        this.loadFactor = loadFactor;
        this.size = 0;
    }

    hash(key) {
        let hashCode = 0;
        const primeNumber = 31;
    
        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.buckets.length;
        }
    
        return hashCode;
    }

    _validateIndex(index) {
        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bounds");
        }
    }

    add(key) {
        if ((this.size + 1) / this.buckets.length > this.loadFactor) {
            this._grow();
        }

        const index = this.hash(key);
        this._validateIndex(index);

        const newNode = { key, next: null };

        if (!this.buckets[index]) {
            this.buckets[index] = newNode;
            this.size++;
            return true;
        }

        let current = this.buckets[index];
        if (current.key === key) {
            return false;
        }

        while (current.next) {
            if (current.next.key === key) {
                return false;
            }
            current = current.next;
        }

        current.next = newNode;
        this.size++;
        return true;
    }

    has(key) {
        const index = this.hash(key);
        this._validateIndex(index);

        let current = this.buckets[index];
        while (current) {
            if (current.key === key) {
                return true;
            }
            current = current.next;
        }

        return false;
    }

    remove(key) {
        const index = this.hash(key);
        this._validateIndex(index);

        if (!this.buckets[index]) {
            return false;
        }

        if (this.buckets[index].key === key) {
            this.buckets[index] = this.buckets[index].next;
            this.size--;
            return true;
        }

        let current = this.buckets[index];
        while (current.next) {
            if (current.next.key === key) {
                current.next = current.next.next;
                this.size--;
                return true;
            }
            current = current.next;
        }

        return false;
    }

    _grow() {
        const oldBuckets = this.buckets;
        
        this.buckets = new Array(oldBuckets.length * 2).fill(null);
        this.size = 0;
        
        for (let bucket of oldBuckets) {
            let current = bucket;
            while (current) {
                this.add(current.key);
                current = current.next;
            }
        }
    }

    clear() {
        this.buckets = new Array(this.buckets.length).fill(null);
        this.size = 0;
    }

    length() {
        return this.size;
    }

    values() {
        const allValues = [];
        for (let bucket of this.buckets) {
            let current = bucket;
            while (current) {
                allValues.push(current.key);
                current = current.next;
            }
        }
        return allValues;
    }
}

module.exports = HashSet;