import sys

## Route & Component class defs ##
class Route(object):
    def __init__(self, components, endpoint = None):
        newComp = Component('/')
        self.endpoint = endpoint
        self.head = newComp
        self.tail = newComp

        for comp in components:
            # handle root route case
            if comp == '':
                break
            else:
                newComp = Component(comp)
                newComp.prev = self.tail
                self.tail.next = newComp
                self.tail = newComp

class Component(object):
    def __init__(self, val, endpoint = None):
        self.val = val
        self.prev = None
        self.next = None


## RouteTree & Node class defs ##
class RouteTree(object):
    def __init__(self):
        self.root = None

    def insert(self, endpoint, component, entry = None):
        if entry is None:
            entry = Node(component.val)

        if self.root is None:
            self.root = entry

        if component.next is None:
            entry.endpoint = endpoint
            return self
        else:
            if component.next.val in entry.subroutes.keys():
                return self.insert(endpoint, component.next, entry.subroutes[component.next.val])
            else:
                newNode = Node(component.next.val, {})
                newNode.parent = entry
                entry.subroutes[component.next.val] = newNode

                return self.insert(endpoint, component.next, newNode)

    def get_endpoint(self, component, entry):
        # if at end of route get endpoint
        if component.next is None:
            if entry.endpoint is None:
                return '404'
            else:
                return entry.endpoint

        # else continue to next route component
        else:

            # check first for static match
            if component.next.val in entry.subroutes.keys():
                return self.get_endpoint(component.next, entry.subroutes[component.next.val])

            # check next for wildcard match
            elif 'X' in entry.subroutes.keys():
                newComp = Component('X')
                newComp.prev = component

                if component.next is None:
                    newComp.next = None
                else:
                    newComp.next = component.next.next

                return self.get_endpoint(newComp, entry.subroutes['X'])

            # if no static or wildcard match return to parent component and check for wildcard match
            else:
                if entry.parent is None:
                    return '404'
                elif entry.val is 'X':
                    return '404'
                else:
                    if 'X' in entry.parent.subroutes.keys():
                        newComp = Component('X')
                        newComp.prev = component.prev
                        newComp.next = component.next

                        return self.get_endpoint(newComp, entry.parent)
                    else:
                        return '404'

class Node(object):
    def __init__(self, val, subroutes = {}):
        self.val = val
        self.parent = None
        self.endpoint = None
        self.subroutes = subroutes


### MAIN ###
def main(args):
    routes = parse_config(args[0])
    paths = sys.stdin.readlines()
    routeTree = RouteTree()

    # create template routes and build route tree
    for route in routes:
        route[0] = splitPath(route[0])
        newRoute = Route(route[0], route[1])
        routeTree.insert(newRoute.endpoint, newRoute.head)

    # create test routes and get endpoint mappings
    for path in paths:
      path = splitPath(path)
      newRoute = Route(path)
      print(routeTree.get_endpoint(newRoute.head, routeTree.root))


## utils
def splitPath(path):
    return path.replace('\n', '').split('/')[1:]

def parse_config(path):
    routes = []
    with open(path) as config_file:
        lines  = config_file.readlines()
    for line in lines:
        path, _, endpoint = line.partition(' ')
        routes.append([path, endpoint.replace('\n', '')])
    return routes


if __name__ == '__main__':
  if len(sys.argv) != 2:
    print 'Usage: q2.py CONFIG_FILE < URLS_TO_ROUTE'
  main(sys.argv[1:])
