
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Trello, 
  CheckCircle, 
  Clock, 
  AlertCircle, 
  Users, 
  MessageSquare, 
  FileText,
  ArrowRight 
} from 'lucide-react';

const ClientBoard = () => {
  const boardFeatures = [
    {
      icon: Trello,
      title: 'Project Visualization',
      description: 'Kanban-style boards showing your project progress in real-time'
    },
    {
      icon: CheckCircle,
      title: 'Milestone Tracking',
      description: 'Clear milestones with completion status and upcoming deadlines'
    },
    {
      icon: MessageSquare,
      title: 'Direct Communication',
      description: 'Comment on tasks, request changes, and get instant updates'
    },
    {
      icon: FileText,
      title: 'Document Center',
      description: 'All project files, designs, and deliverables in one place'
    }
  ];

  const sampleTasks = [
    { title: 'UI/UX Design Phase', status: 'completed', type: 'design' },
    { title: 'Backend API Development', status: 'in-progress', type: 'development' },
    { title: 'Frontend Integration', status: 'pending', type: 'development' },
    { title: 'Testing & Deployment', status: 'pending', type: 'testing' }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'in-progress':
        return <Clock className="w-5 h-5 text-blue-500" />;
      default:
        return <AlertCircle className="w-5 h-5 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-50 border-green-200';
      case 'in-progress':
        return 'bg-blue-50 border-blue-200';
      default:
        return 'bg-gray-50 border-gray-200';
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-cyan-100 border border-blue-200 rounded-full text-blue-700 text-sm font-semibold mb-8">
            <Trello className="w-4 h-4 mr-2" />
            Client Project Board
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-cyan-900 bg-clip-text text-transparent">
              Track Your Project
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-700 bg-clip-text text-transparent">
              In Real-Time
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Get full transparency into your project's progress with our custom Trello-style client board. 
            See exactly what we're working on, when it will be done, and communicate directly with our team.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Features */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Board Features</h3>
            <div className="space-y-6">
              {boardFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sample Board */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Sample Project Board</h3>
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-lg font-semibold text-gray-900">E-commerce Platform Project</h4>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-500">3 team members</span>
                </div>
              </div>
              
              <div className="space-y-3">
                {sampleTasks.map((task, index) => (
                  <div key={index} className={`p-4 rounded-lg border ${getStatusColor(task.status)}`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        {getStatusIcon(task.status)}
                        <span className="font-medium text-gray-900">{task.title}</span>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        task.type === 'design' ? 'bg-purple-100 text-purple-700' :
                        task.type === 'development' ? 'bg-blue-100 text-blue-700' :
                        'bg-green-100 text-green-700'
                      }`}>
                        {task.type}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 flex items-center justify-between text-sm text-gray-500">
                <span>Last updated: 2 hours ago</span>
                <span>75% Complete</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl border border-blue-200 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Experience Full Transparency?</h3>
            <p className="text-gray-600 mb-6">
              Every client gets access to their dedicated project board from day one. 
              No more wondering about project status or timeline.
            </p>
            <Link 
              to="/contact?service=Client Project Board"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              Get Your Project Board
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientBoard;
