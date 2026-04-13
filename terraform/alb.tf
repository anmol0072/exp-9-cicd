# --- ALB Mock Configuration ---
resource "aws_lb" "main" {
  name               = "react-app-alb"
  internal           = false
  load_balancer_type = "application"
  security_groups    = [] # Ensure standard web SG is created/attached
  subnets            = [aws_subnet.public_1.id, aws_subnet.public_2.id]
}

resource "aws_lb_target_group" "react_tg" {
  name        = "react-app-tg"
  port        = 8080
  protocol    = "HTTP"
  vpc_id      = aws_vpc.main.id
  target_type = "ip"
  
  health_check {
    path = "/"
    port = "8080"
  }
}

resource "aws_lb_listener" "http" {
  load_balancer_arn = aws_lb.main.arn
  port              = "80"
  protocol          = "HTTP"

  default_action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.react_tg.arn
  }
}
