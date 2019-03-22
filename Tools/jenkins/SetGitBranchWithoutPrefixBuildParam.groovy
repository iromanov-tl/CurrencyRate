import hudson.model.*

def gitBranch = build.buildVariableResolver.resolve("GitBranch")
def pa = new ParametersAction([
  new StringParameterValue("GitBranchWithoutPrefix", gitBranch.replaceAll('^(release|hotfix)/', ''))
])

// add variable to current job
build.actions.add(pa)