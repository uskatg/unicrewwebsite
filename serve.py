#!/usr/bin/env python3
"""Local dev server that mimics Vercel's cleanUrls: true.

/studierende -> studierende.html, / -> index.html, unknown -> 404.html.
Usage: python3 serve.py [port]   (default 8000)
"""
import http.server
import os
import sys


class CleanURLHandler(http.server.SimpleHTTPRequestHandler):
    def send_error(self, code, message=None, explain=None):
        if code == 404 and os.path.exists('404.html'):
            self.error_message_format = open('404.html', encoding='utf-8').read()
        super().send_error(code, message, explain)

    def translate_path(self, path):
        resolved = super().translate_path(path)
        clean = path.split('?')[0].split('#')[0].rstrip('/')
        if clean and not os.path.exists(resolved):
            candidate = resolved.rstrip('/') + '.html'
            if os.path.exists(candidate):
                return candidate
        return resolved


if __name__ == '__main__':
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8000
    http.server.ThreadingHTTPServer(('', port), CleanURLHandler).serve_forever()
