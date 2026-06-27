import re
import sys

def format_css(css_content):
    """Format minified CSS to be readable."""
    # Add newlines after each selector and property
    css_content = re.sub(r'\{', ' {\n  ', css_content)
    css_content = re.sub(r'\}', '\n}\n', css_content)
    css_content = re.sub(r';', ';\n  ', css_content)
    
    # Fix the indentation
    lines = css_content.split('\n')
    formatted_lines = []
    indent_level = 0
    
    for line in lines:
        line = line.strip()
        if not line:
            continue
            
        # Decrease indent after closing brace
        if line.startswith('}'):
            indent_level = max(0, indent_level - 1)
            
        # Add current line with proper indentation
        formatted_lines.append('  ' * indent_level + line)
        
        # Increase indent after opening brace
        if line.endswith('{'):
            indent_level += 1
    
    return '\n'.join(formatted_lines)

def format_css_properly(css_content):
    """A more proper CSS formatter that handles common patterns."""
    # First, normalize whitespace
    css_content = css_content.replace('{', ' {\n').replace('}', '\n}\n').replace(';', ';\n')
    
    # Split into rules
    lines = css_content.split('\n')
    formatted = []
    indent = 0
    
    for line in lines:
        line = line.strip()
        if not line:
            continue
            
        # Handle media queries and keyframes
        if line.startswith('@'):
            formatted.append('\n' + line)
            if '{' in line:
                indent = 1
            continue
            
        # Handle closing braces
        if line == '}':
            indent = max(0, indent - 1)
            formatted.append('  ' * indent + line)
            continue
            
        # Handle opening braces
        if line.endswith('{'):
            formatted.append('  ' * indent + line)
            indent += 1
            continue
            
        # Handle properties
        if ':' in line:
            formatted.append('  ' * indent + line)
            continue
            
        # Handle everything else
        formatted.append('  ' * indent + line)
    
    return '\n'.join(formatted)

def main():
    # Read files
    with open('public/css/critical.min.css', 'r', encoding='utf-8') as f:
        critical_css = f.read()
    
    with open('public/css/style.min.css', 'r', encoding='utf-8') as f:
        style_css = f.read()
    
    print(f"Original critical.min.css size: {len(critical_css)} characters")
    print(f"Original style.min.css size: {len(style_css)} characters")
    
    # Format the CSS
    formatted_critical = format_css_properly(critical_css)
    formatted_style = format_css_properly(style_css)
    
    print(f"\nFormatted critical.min.css size: {len(formatted_critical)} characters")
    print(f"Formatted style.min.css size: {len(formatted_style)} characters")
    
    # Write formatted files
    with open('public/css/critical.formatted.css', 'w', encoding='utf-8') as f:
        f.write(formatted_critical)
    
    with open('public/css/style.formatted.css', 'w', encoding='utf-8') as f:
        f.write(formatted_style)
    
    # Also create properly minified versions (clean minification)
    def clean_minify(css):
        # Remove comments
        css = re.sub(r'/\*.*?\*/', '', css, flags=re.DOTALL)
        # Remove whitespace
        css = re.sub(r'\s+', ' ', css)
        # Remove spaces around special characters
        css = re.sub(r'\s*([{},;:])\s*', r'\1', css)
        # Remove trailing semicolons before closing braces
        css = re.sub(r';\}', '}', css)
        return css.strip()
    
    minified_critical = clean_minify(critical_css)
    minified_style = clean_minify(style_css)
    
    with open('public/css/critical.clean.min.css', 'w', encoding='utf-8') as f:
        f.write(minified_critical)
    
    with open('public/css/style.clean.min.css', 'w', encoding='utf-8') as f:
        f.write(minified_style)
    
    print("\nFiles created:")
    print("- public/css/critical.formatted.css (beautified)")
    print("- public/css/style.formatted.css (beautified)")
    print("- public/css/critical.clean.min.css (properly minified)")
    print("- public/css/style.clean.min.css (properly minified)")

if __name__ == '__main__':
    main()