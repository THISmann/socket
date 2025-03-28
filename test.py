import datetime

# Optional color codes (works in most terminals)
COLORS = {
    'INFO': '\033[94m',    # Blue
    'WARNING': '\033[93m', # Yellow
    'ERROR': '\033[91m',    # Red
    'RESET': '\033[0m'     # Reset to default
}

def log(level, message):
    timestamp = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    color = COLORS.get(level.upper(), COLORS['RESET'])
    log_level = f"{color}[{level.upper()}]{COLORS['RESET']}"
    print(f"[{timestamp}] {log_level} {message}")

# Example usage
log("info", "Application started")
log("warning", "Low memory condition detected")
log("error", "Failed to connect to database")
log("debug", "User logged in (IP: 192.168.1.1)")  # No color for unregistered levels
