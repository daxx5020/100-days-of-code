// LFU Cache

var LFUCache = function(capacity) {
    this.capacity = capacity;
    this.keyMap = new Map();
    this.freqMap = new Map();
    this.minFreq = 0;
};

LFUCache.prototype.get = function(key) {
    if (!this.keyMap.has(key)) return -1;

    let [value, freq] = this.keyMap.get(key);
    this.keyMap.set(key, [value, freq + 1]);

    this.freqMap.get(freq).delete(key);

    if (this.freqMap.get(freq).size === 0) {
        this.freqMap.delete(freq);
        if (freq === this.minFreq) {
            this.minFreq++;
        }
    }

    if (!this.freqMap.has(freq + 1)) {
        this.freqMap.set(freq + 1, new Set());
    }
    this.freqMap.get(freq + 1).add(key);

    return value;
};

LFUCache.prototype.put = function(key, value) {
    if (this.capacity <= 0) return;

    if (this.keyMap.has(key)) {
        this.keyMap.set(key, [value, this.keyMap.get(key)[1]]);
        this.get(key);
    } else {
        if (this.keyMap.size >= this.capacity) {
            let evictKey = this.freqMap.get(this.minFreq).values().next().value;
            this.freqMap.get(this.minFreq).delete(evictKey);
            if (this.freqMap.get(this.minFreq).size === 0) {
                this.freqMap.delete(this.minFreq);
            }
            this.keyMap.delete(evictKey);
        }
        this.keyMap.set(key, [value, 1]);
        if (!this.freqMap.has(1)) {
            this.freqMap.set(1, new Set());
        }
        this.freqMap.get(1).add(key);
        this.minFreq = 1;
    }
};
